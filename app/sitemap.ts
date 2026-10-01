import type { MetadataRoute } from "next";
import { blogPosts, productCategories, productCollections } from "../lib/data";

const siteUrl = "https://jmrhabitat.com";

function absoluteUrl(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: absoluteUrl("/about"),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: absoluteUrl("/products"),
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/inquiry"),
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/blog"),
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: absoluteUrl("/daily"),
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/inspiration"),
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];

  const productCategoryRoutes: MetadataRoute.Sitemap = productCategories
    .filter((category) => category.href)
    .map((category) => ({
      url: absoluteUrl(category.href),
      changeFrequency: "monthly",
      priority: 0.7
    }));

  const productRoutes: MetadataRoute.Sitemap = productCollections.map((collection) => ({
    url: absoluteUrl(`/products/${collection.slug}`),
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.href)
    .map((post) => ({
      url: absoluteUrl(post.href),
      ...(post.date ? { lastModified: new Date(post.date) } : {}),
      changeFrequency: "monthly",
      priority: 0.6
    }));

  return [...staticRoutes, ...productCategoryRoutes, ...productRoutes, ...blogRoutes];
}
