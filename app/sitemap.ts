import type { MetadataRoute } from "next";
import { blogPosts, doorDesigns, productCategories, productCollections } from "../lib/data";
import lastmodData from "../lib/generated/lastmod.json";

const siteUrl = "https://jmrhabitat.com";

/**
 * lastModified 来自构建期脚本 scripts/gen-lastmod.mjs：
 * 它用 git blame 取每个条目最后一次被改动的提交日期，写到 lib/generated/lastmod.json。
 * 取不到时回落到 __fallback，避免输出无效日期。
 */
const lastmodMap = lastmodData as Record<string, string>;
const fallbackDate = lastmodMap.__fallback ?? "2026-10-27";

function absoluteUrl(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

function lastModifiedFor(path: string): Date {
  const value = lastmodMap[path] ?? fallbackDate;
  const parsed = new Date(`${value}T00:00:00Z`);
  return Number.isNaN(parsed.getTime()) ? new Date(`${fallbackDate}T00:00:00Z`) : parsed;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    "/",
    "/about",
    "/products",
    "/inquiry",
    "/blog",
    "/daily",
    "/inspiration"
  ].map((path, index) => ({
    url: absoluteUrl(path),
    lastModified: lastModifiedFor(path),
    changeFrequency: (["weekly", "yearly", "weekly", "monthly", "weekly", "weekly", "weekly"] as const)[index],
    priority: [1, 0.5, 0.9, 0.7, 0.8, 0.7, 0.8][index]
  }));

  const productCategoryRoutes: MetadataRoute.Sitemap = productCategories
    .filter((category) => category.href)
    .map((category) => ({
      url: absoluteUrl(category.href),
      lastModified: lastModifiedFor(category.href),
      changeFrequency: "monthly",
      priority: 0.7
    }));

  const productRoutes: MetadataRoute.Sitemap = productCollections.map((collection) => ({
    url: absoluteUrl(`/products/${collection.slug}`),
    lastModified: lastModifiedFor(`/products/${collection.slug}`),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const doorDesignRoutes: MetadataRoute.Sitemap = doorDesigns.map((design) => ({
    url: absoluteUrl(`/door-designs/${design.slug}`),
    lastModified: lastModifiedFor(`/door-designs/${design.slug}`),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.href)
    .map((post) => ({
      url: absoluteUrl(post.href),
      lastModified: lastModifiedFor(post.href),
      changeFrequency: "monthly",
      priority: 0.6
    }));

  return [...staticRoutes, ...productCategoryRoutes, ...productRoutes, ...doorDesignRoutes, ...blogRoutes];
}
