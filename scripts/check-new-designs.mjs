#!/usr/bin/env node
/**
 * Reports anything in the door-design data or the product image folder that the
 * all-designs index did not know about at the last check.
 *
 * The index page itself is derived from `doorDesigns`, so any design already in
 * the data appears on the next build with no edit. What this script catches is
 * the two cases the page cannot resolve on its own:
 *
 *   1. A design added to `doorDesigns` since the baseline. It will render, but
 *      it needs a decision: is it a real product, and is its copy complete?
 *   2. An image dropped into public/assets/images/products that no entry in
 *      the data refers to. That is usually a new product that has not been
 *      written up yet.
 *
 * Usage:
 *   node scripts/check-new-designs.mjs          # report only
 *   node scripts/check-new-designs.mjs --update # accept current state as baseline
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");
const BASELINE = path.join(ROOT, "lib/generated/door-index-baseline.json");
const IMAGE_ROOT = path.join(ROOT, "public/assets/images/products");
const IMAGE_EXT = new Set([".webp", ".jpg", ".jpeg", ".png", ".avif"]);

const { doorDesigns } = await import(path.join(ROOT, "lib/data.js"));

const update = process.argv.includes("--update");

const previous = fs.existsSync(BASELINE)
  ? JSON.parse(fs.readFileSync(BASELINE, "utf8"))
  : { slugs: [], images: [] };

const currentSlugs = doorDesigns.map((design) => design.slug);

// Every image path the data refers to, so an unreferenced file stands out.
const dataSource = fs.readFileSync(path.join(ROOT, "lib/data.js"), "utf8");
const referencedImages = new Set(
  [...dataSource.matchAll(/["'](\/assets\/images\/[^"']+)["']/g)].map((match) => match[1])
);

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return IMAGE_EXT.has(path.extname(entry.name).toLowerCase()) ? [full] : [];
  });
}

function publicPath(absolute) {
  return absolute.slice(path.join(ROOT, "public").length).split(path.sep).join("/");
}

const currentImages = walk(IMAGE_ROOT).map(publicPath);

const newSlugs = currentSlugs.filter((slug) => !previous.slugs.includes(slug));
const removedSlugs = previous.slugs.filter((slug) => !currentSlugs.includes(slug));
const newImages = currentImages.filter((image) => !previous.images?.includes(image));
const unreferenced = newImages.filter((image) => !referencedImages.has(image));

const incomplete = doorDesigns
  .map((design) => {
    const missing = [];
    if (!design.img) missing.push("img");
    if (!design.altText) missing.push("altText");
    if (!design.shortDesc) missing.push("shortDesc");
    if (!design.seoTitle) missing.push("seoTitle");
    if (!design.seoDescription) missing.push("seoDescription");
    if (!Array.isArray(design.collections) || !design.collections.length) missing.push("collections");
    if (design.img && !fs.existsSync(path.join(ROOT, "public", design.img))) missing.push("img file");
    return missing.length ? { slug: design.slug, missing } : null;
  })
  .filter(Boolean);

function section(title, lines, hint) {
  if (!lines.length) return;
  console.log(`\n${title} (${lines.length})`);
  for (const line of lines) console.log(`  ${line}`);
  if (hint) console.log(`  -> ${hint}`);
}

console.log(`door designs in data: ${currentSlugs.length}`);
console.log(`images under products/: ${currentImages.length}`);

section("NEW design in data since baseline", newSlugs, "confirm it is a real product, then complete its copy");
section("REMOVED from data since baseline", removedSlugs, "its page is gone; check for inbound links or redirects");
section("NEW image not referenced by data", unreferenced, "likely a new product - ask whether to write it up and add it");
section(
  "INCOMPLETE design entry",
  incomplete.map((item) => `${item.slug}: missing ${item.missing.join(", ")}`),
  "the page will render with gaps"
);

const nothingFound =
  !newSlugs.length && !removedSlugs.length && !unreferenced.length && !incomplete.length;
if (nothingFound) console.log("\nNo changes since the last check.");

if (update) {
  fs.mkdirSync(path.dirname(BASELINE), { recursive: true });
  fs.writeFileSync(
    BASELINE,
    `${JSON.stringify({ checkedAt: new Date().toISOString().slice(0, 10), slugs: currentSlugs.sort(), images: currentImages.sort() }, null, 2)}\n`
  );
  console.log(`\nBaseline written to ${path.relative(ROOT, BASELINE)}`);
}

process.exitCode = nothingFound || update ? 0 : 1;
