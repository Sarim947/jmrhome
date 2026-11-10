// 扫描 lib/data.js 里用到的所有图片，读取真实像素尺寸，生成 lib/imageSizes.js。
// 用途：给 <img> 补 width/height，避免 CLS，并让页面知道源图到底有多大。
//
// 用法：node scripts/gen-image-sizes.mjs
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const dataSource = fs.readFileSync(path.join(ROOT, "lib/data.js"), "utf8");

const paths = [...new Set([...dataSource.matchAll(/img: "([^"]+)"/g)].map((m) => m[1]))].sort();

const rows = [];
for (const src of paths) {
  const file = path.join(ROOT, "public", src);
  if (!fs.existsSync(file)) {
    rows.push([src, null]);
    continue;
  }
  const out = execFileSync("sips", ["-g", "pixelWidth", "-g", "pixelHeight", file], {
    encoding: "utf8"
  });
  const w = Number((out.match(/pixelWidth: (\d+)/) || [])[1]);
  const h = Number((out.match(/pixelHeight: (\d+)/) || [])[1]);
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

export default IMAGE_SIZES;
`;

fs.writeFileSync(path.join(ROOT, "lib/imageSizes.js"), output);
console.log(
  `wrote lib/imageSizes.js — ${rows.length} images, ${rows.filter(([, s]) => !s).length} missing`
);
