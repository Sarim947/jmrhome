/**
 * 生成 sitemap 用的 lastmod 映射表。
 *
 * 背景：lib/data.js 的 productCollections / doorDesigns / productCategories 都没有日期字段，
 * 文件名级 git 时间会把同文件下所有条目压成同一个日期（等于假信号），
 * 所以这里按「条目」取时间：用 git blame 定位每个条目自己的行区间，取区间内最新的提交日期。
 *
 * 输出：lib/generated/lastmod.json  ->  { "/products/essentials": "2026-10-27", ... }
 *
 * 失败时（无 git、浅克隆拉不深）不阻断构建：保留仓库里已提交的 json。
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DATA_FILE = "lib/data.js";
const OUT_FILE = "lib/generated/lastmod.json";

function git(args) {
  return execFileSync("git", args, {
    cwd: root,
    encoding: "utf8",
    stdio: ["ignore", "pipe", "ignore"],
    maxBuffer: 64 * 1024 * 1024
  });
}

function today() {
  return new Date().toISOString().slice(0, 10);
}

function tsToDate(ts) {
  return new Date(Number(ts) * 1000).toISOString().slice(0, 10);
}

/** 把 "2026-04-1" / "2025-5-27" / "2026.05" 这类脏值归一成 ISO 日期，失败返回 null */
function toIso(value) {
  if (!value) return null;
  const raw = String(value).trim().replace(/\./g, "-");
  const m = raw.match(/^(\d{4})-(\d{1,2})-(\d{1,2})$/);
  if (m) {
    const d = new Date(`${m[1]}-${m[2].padStart(2, "0")}-${m[3].padStart(2, "0")}T00:00:00Z`);
    return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
  }
  const ym = raw.match(/^(\d{4})-(\d{1,2})$/);
  if (ym) {
    return `${ym[1]}-${ym[2].padStart(2, "0")}-01`;
  }
  const d = new Date(raw);
  return Number.isNaN(d.getTime()) ? null : d.toISOString().slice(0, 10);
}

function ensureFullHistory() {
  if (!fs.existsSync(path.join(root, ".git", "shallow"))) return true;
  // Cloudflare Pages 默认浅克隆：浅克隆下 blame 会全部指向最新提交，lastmod 失去意义
  const attempts = [
    ["fetch", "--unshallow", "--filter=blob:none"],
    ["fetch", "--unshallow"]
  ];
  for (const args of attempts) {
    try {
      git(args);
      return true;
    } catch {
      /* 继续尝试下一种 */
    }
  }
  return false;
}

/** 返回 [lineNo -> ISO 日期]（1-based），未提交的行按今天算 */
function blameDates(relFile) {
  const out = git(["blame", "--line-porcelain", "--", relFile]);
  const lines = out.split("\n");
  const map = new Map();
  let sha = null;
  let ts = null;
  let finalLine = null;

  for (const line of lines) {
    const head = line.match(/^([0-9a-f]{40}) \d+ (\d+)(?: \d+)?$/);
    if (head) {
      sha = head[1];
      finalLine = Number(head[2]);
      ts = null;
      continue;
    }
    if (line.startsWith("committer-time ")) {
      ts = line.slice("committer-time ".length).trim();
      continue;
    }
    if (line.startsWith("\t")) {
      const uncommitted = /^0+$/.test(sha || "");
      map.set(finalLine, uncommitted || !ts ? today() : tsToDate(ts));
      sha = null;
      ts = null;
      finalLine = null;
    }
  }
  return map;
}

function fileDate(relFile) {
  try {
    const out = git(["log", "-1", "--format=%cs", "--", relFile]).trim();
    return out || null;
  } catch {
    return null;
  }
}

/** 找出 `export const <name> = [` 到行首 `];` 的区间（0-based 行号） */
function arrayRange(lines, name) {
  const startRe = new RegExp(`^export const ${name} = \\[`);
  const start = lines.findIndex((l) => startRe.test(l));
  if (start === -1) return null;
  for (let i = start + 1; i < lines.length; i++) {
    if (/^\];/.test(lines[i])) return { start, end: i };
  }
  return null;
}

/** 数组内的条目按 `  {` 切块 */
function entries(lines, range) {
  const starts = [];
  for (let i = range.start + 1; i < range.end; i++) {
    if (/^\s{2}\{\s*$/.test(lines[i])) starts.push(i);
  }
  return starts.map((s, idx) => ({
    start: s,
    end: idx + 1 < starts.length ? starts[idx + 1] - 1 : range.end - 1
  }));
}

function maxDate(dates, from, to) {
  let max = null;
  for (let i = from; i <= to; i++) {
    const d = dates.get(i + 1);
    if (d && (!max || d > max)) max = d;
  }
  return max;
}

function main() {
  const dataPath = path.join(root, DATA_FILE);
  if (!fs.existsSync(dataPath)) {
    console.warn(`[lastmod] 跳过：找不到 ${DATA_FILE}`);
    return;
  }

  ensureFullHistory();

  const lines = fs.readFileSync(dataPath, "utf8").split(/\r?\n/);
  const dates = blameDates(DATA_FILE);
  const map = {
    "/": fileDate("app/page.jsx"),
    "/about": fileDate("app/about/page.jsx"),
    "/products": fileDate("app/products/page.jsx"),
    "/inquiry": fileDate("app/inquiry/page.jsx"),
    "/blog": fileDate("app/blog/page.jsx"),
    "/daily": fileDate("app/daily/page.jsx"),
    "/inspiration": fileDate("app/inspiration/page.jsx")
  };

  const groups = [
    { name: "doorDesigns", prefix: "/door-designs/" },
    { name: "productCollections", prefix: "/products/" }
  ];

  for (const group of groups) {
    const range = arrayRange(lines, group.name);
    if (!range) continue;
    for (const entry of entries(lines, range)) {
      let slug = null;
      for (let i = entry.start; i <= entry.end; i++) {
        const m = lines[i].match(/^\s*slug:\s*"([^"]+)"/);
        if (m) {
          slug = m[1];
          break;
        }
      }
      if (!slug) continue;
      const d = maxDate(dates, entry.start, entry.end);
      if (d) map[`${group.prefix}${slug}`] = d;
    }
  }

  // productCategories 用的是 href，条目里 slug 与 href 尾部一致
  const catRange = arrayRange(lines, "productCategories");
  if (catRange) {
    for (const entry of entries(lines, catRange)) {
      let href = null;
      for (let i = entry.start; i <= entry.end; i++) {
        const m = lines[i].match(/^\s*href:\s*"([^"]+)"/);
        if (m) {
          href = m[1];
          break;
        }
      }
      if (!href) continue;
      const d = maxDate(dates, entry.start, entry.end);
      if (d) map[href] = d;
    }
  }

  // blogPosts 自带 date 字段，归一后取 max(手写日期, git 日期)
  const blogRange = arrayRange(lines, "blogPosts");
  if (blogRange) {
    for (const entry of entries(lines, blogRange)) {
      let href = null;
      let declared = null;
      for (let i = entry.start; i <= entry.end; i++) {
        const h = lines[i].match(/^\s*href:\s*"([^"]+)"/);
        const t = lines[i].match(/^\s*date:\s*"([^"]+)"/);
        if (h) href = h[1];
        if (t) declared = toIso(t[1]);
      }
      if (!href) continue;
      const gitDate = maxDate(dates, entry.start, entry.end);
      const best = [declared, gitDate].filter(Boolean).sort().pop();
      if (best) map[href] = best;
    }
  }

  // 路由自身的 page.jsx 改过，也要反映到 lastmod 上（静态路由页不经过 data.js 条目）
  for (const key of Object.keys(map)) {
    const relFile = key === "/" ? "app/page.jsx" : `app${key}/page.jsx`;
    const pageDate = fileDate(relFile);
    if (pageDate && (!map[key] || pageDate > map[key])) map[key] = pageDate;
  }

  // 兜底：任何数据文件被改动，都至少反映在 lastmod 上
  const dataDate = fileDate(DATA_FILE);
  const cleaned = {};
  for (const [key, value] of Object.entries(map)) {
    if (key && typeof value === "string" && /^\d{4}-\d{2}-\d{2}$/.test(value)) {
      cleaned[key] = value;
    }
  }
  if (dataDate) cleaned.__fallback = dataDate;

  const distinct = new Set(Object.entries(cleaned).filter(([k]) => k !== "__fallback").map(([, v]) => v));
  fs.mkdirSync(path.dirname(path.join(root, OUT_FILE)), { recursive: true });
  fs.writeFileSync(path.join(root, OUT_FILE), `${JSON.stringify(cleaned, null, 2)}\n`, "utf8");
  console.log(`[lastmod] 写入 ${OUT_FILE}：${Object.keys(cleaned).length} 条，${distinct.size} 个不同日期`);
}

try {
  main();
} catch (error) {
  console.warn(`[lastmod] 生成失败，沿用已提交的 ${OUT_FILE}：${error.message}`);
}
