export const siteUrl = "https://jmrhabitat.com";
export const siteName = "JMR Habitat";
export const siteTitleSuffix = ` | ${siteName}`;
export const defaultDescription =
  "JMR Habitat designs and manufactures custom entrance doors for architects and project partners, including pivot, aluminum, steel and glass entry systems.";
export const defaultOgImage = "/assets/images/og/jmr-habitat-share.jpg";
export const defaultOgImageAlt =
  "Custom architectural entrance door manufactured by JMR Habitat";

export const siteKeywords = [
  "custom entrance doors",
  "architectural entrance doors",
  "pivot doors",
  "aluminum entry doors",
  "steel entry doors",
  "modern front doors",
  "JMR Habitat"
];

export function absoluteUrl(path = "/") {
  return `${siteUrl}${path === "/" ? "/" : path}`;
}

/**
 * Builds a page metadata object.
 *
 * `title` is the page title WITHOUT the brand suffix - the root layout
 * template (`%s | JMR Habitat`) appends it. Keep `title` at 46 characters or
 * fewer so the rendered `<title>` stays inside 60.
 *
 * Pass `absoluteTitle: true` only for the home page, which must not receive
 * the template suffix.
 *
 * `title` is reused verbatim for `og:title` and `twitter:title` so the three
 * never disagree.
 */
export function createPageMetadata({
  title,
  absoluteTitle = false,
  description = defaultDescription,
  keywords = siteKeywords,
  path = "/",
  image,
  imageAlt,
  openGraph = {},
  twitter = {}
}) {
  const url = absoluteUrl(path);
  const imageUrl = absoluteUrl(image ?? defaultOgImage);
  const imageAltText = imageAlt ?? defaultOgImageAlt;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName,
      type: "website",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: imageAltText }],
      ...openGraph
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
      ...twitter
    }
  };
}
