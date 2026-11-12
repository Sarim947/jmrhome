import type { MetadataRoute } from "next";
import { blogPosts, doorDesigns, inspirationImages, productCategories, productCollections } from "../lib/data";
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

/**
 * 图片条目（image sitemap）让 Google 图片搜索直接发现素材，
 * 不必等它自己从页面里爬到。没有图片时返回 undefined，避免输出空数组。
 */
function imageEntries(paths: Array<string | undefined>): string[] | undefined {
  const urls = paths.filter((value): value is string => Boolean(value)).map(absoluteUrl);
  const unique = Array.from(new Set(urls));
  return unique.length ? unique : undefined;
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
    priority: [1, 0.5, 0.9, 0.7, 0.8, 0.7, 0.8][index],
    images: path === "/inspiration" ? imageEntries(inspirationImages.map((item) => item.src)) : undefined
  }));

  const productCategoryRoutes: MetadataRoute.Sitemap = productCategories
    .filter((category) => category.href)
    .map((category) => ({
      url: absoluteUrl(category.href),
      lastModified: lastModifiedFor(category.href),
      changeFrequency: "monthly",
      priority: 0.7,
      images: imageEntries([category.img])
    }));

  const productRoutes: MetadataRoute.Sitemap = productCollections.map((collection) => ({
    url: absoluteUrl(`/products/${collection.slug}`),
    lastModified: lastModifiedFor(`/products/${collection.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
    images: imageEntries([collection.img, ...(collection.items ?? []).map((item: { img?: string }) => item.img)])
  }));

  // The all-designs index: one entry for the grid, carrying every design image
  // so image search sees the whole range from a single URL.
  const doorIndexRoute: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/door-designs"),
      lastModified: lastModifiedFor("/door-designs"),
      changeFrequency: "weekly",
      priority: 0.8,
      images: imageEntries(doorDesigns.map((design) => design.img))
    }
  ];

  const doorDesignRoutes: MetadataRoute.Sitemap = doorDesigns.map((design) => ({
    url: absoluteUrl(`/door-designs/${design.slug}`),
    lastModified: lastModifiedFor(`/door-designs/${design.slug}`),
    changeFrequency: "monthly",
    priority: 0.7,
    images: imageEntries([design.img])
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.href)
    .map((post) => ({
      url: absoluteUrl(post.href),
      lastModified: lastModifiedFor(post.href),
      changeFrequency: "monthly",
      priority: 0.6
    }));

  return [
    ...staticRoutes,
    ...productCategoryRoutes,
    ...productRoutes,
    ...doorIndexRoute,
    ...doorDesignRoutes,
    ...blogRoutes
  ];
}
