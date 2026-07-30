import type { MetadataRoute } from "next";
import { blogPosts, productCollections } from "../lib/data";

const siteUrl = "https://jmrhabitat.com";

const lastModified = new Date();

function absoluteUrl(path: string) {
  return `${siteUrl}${path === "/" ? "" : path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: absoluteUrl("/products"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: absoluteUrl("/inquiry"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: absoluteUrl("/daily"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7
    },
    {
      url: absoluteUrl("/inspiration"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8
    }
  ];

  const productRoutes: MetadataRoute.Sitemap = productCollections.map((collection) => ({
    url: absoluteUrl(`/products/${collection.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts
    .filter((post) => post.href)
    .map((post) => ({
      url: absoluteUrl(post.href),
      lastModified: post.date ? new Date(post.date) : lastModified,
      changeFrequency: "monthly",
      priority: 0.6
    }));

  return [...staticRoutes, ...productRoutes, ...blogRoutes];
}
