export const siteUrl = "https://www.jmrhabitat.com";

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path === "/" ? "/" : path}`;
}

export function createPageMetadata({ title, metadataTitle, description, path = "/", openGraph = {} }) {
  const url = absoluteUrl(path);

  return {
    title: metadataTitle ?? title,
    description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Entrance Architecture",
      type: "website",
      ...openGraph
    }
  };
}
