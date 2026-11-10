// 扫描 lib/data.js 与所有页面/组件里用到的图片，读取真实像素尺寸，生成 lib/imageSizes.js。
// 用途：给 <img> 补 width/height，避免 CLS，并让页面知道源图到底有多大。
//
// 用法：node scripts/gen-image-sizes.mjs
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const dataSource = fs.readFileSync(path.join(ROOT, "lib/data.js"), "utf8");

// data.js 里所有可能出现图片路径的字段（img / renderImg / realImg / src / thumb / image），
// 漏掉任何一种都会让对应的 <img> 拿不到宽高，CLS 就补不上。
const fromData = [...dataSource.matchAll(/\b(?:img|renderImg|realImg|src|thumb|image):\s*"([^"]+)"/g)]
  .map((m) => m[1]);

// 页面里硬编码的图片路径不在 data.js 里（博客正文数组等），也要扫进来，
// 否则这些 <img> 永远查不到尺寸。
const sourceFiles = [];
function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!/^(node_modules|\.next|public|scripts|staging)$/.test(entry.name)) walk(full);
    } else if (/\.(jsx?|tsx?)$/.test(entry.name)) {
      sourceFiles.push(full);
    }
  }
}
["app", "components", "lib"].forEach((dir) => {
  const full = path.join(ROOT, dir);
  if (fs.existsSync(full)) walk(full);
});

const fromSource = sourceFiles.flatMap((file) => {
  const source = fs.readFileSync(file, "utf8");
  return [...source.matchAll(/["'`](\/assets\/images\/[^"'`\s]+)["'`]/g)]
    .map((m) => m[1])
    .filter((src) => !src.includes("${"));
});

const paths = [...new Set([...fromData, ...fromSource])].sort();

const rows = [];
for (const src of paths) {
  const file = path.join(ROOT, "public", src);
  // 目录（例如博客图片的 imageBase）不是图片，直接跳过，别写出 NaN
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) continue;
  const out = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
    encoding: "utf8"
  });
  const w = Number((out.match(/pixelWidth: (\d+)/) || [])[1]);
  const h = Number((out.match(/pixelHeight: (\d+)/) || [])[1]);
  if (!Number.isFinite(w) || !Number.isFinite(h)) continue;
  rows.push([src, { w, h }]);
}

const body = rows
  .map(([src, size]) => (size ? `  "${src}": { w: ${size.w}, h: ${size.h} },` : `  "${src}": null,`))
  .join("\n");

const output = `// 图片固有尺寸表（由 scripts/gen-image-sizes.mjs 生成，勿手改）
// 用于给 <img> 补 width/height，避免布局抖动，并让浏览器按真实像素渲染。
const IMAGE_SIZES = {
${body}
};

export function imageSize(src) {
  return IMAGE_SIZES[src] ?? null;
}

/**
 * 直接展开到 <img> 上的宽高属性，查不到就返回空对象（不影响渲染）。
 * 用法：<img src={item.img} {...sizeAttrs(item.img)} alt="..." />
 */
export function sizeAttrs(src) {
  const size = IMAGE_SIZES[src];
  return size ? { width: size.w, height: size.h } : {};
}

export default IMAGE_SIZES;
`;

fs.writeFileSync(path.join(ROOT, "lib/imageSizes.js"), output);
console.log(
  `wrote lib/imageSizes.js — ${rows.length} images, ${rows.filter(([, s]) => !s).length} missing`
);
