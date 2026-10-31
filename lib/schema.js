import { absoluteUrl, siteName, siteUrl } from "./metadata";

const orgId = `${siteUrl}/#organization`;
const siteId = `${siteUrl}/#website`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: siteName,
    alternateName: "JMR Habitat Architectural Doors",
    url: siteUrl,
    logo: absoluteUrl("/assets/images/og/jmr-habitat-share.jpg"),
    description:
      "JMR Habitat designs and manufactures custom architectural entrance doors, railing, window and outdoor living systems for residential and hospitality projects.",
    makesOffer: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Custom architectural entrance doors",
        serviceType: "Custom entrance door design and manufacturing"
      }
    }
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": siteId,
    name: siteName,
    url: siteUrl,
    publisher: { "@id": orgId },
    inLanguage: "en"
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}

export function productSchema({ name, description, image, path, category }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: absoluteUrl(encodeURI(image)),
    url: absoluteUrl(path),
    category: category ?? "Entrance Doors",
    brand: { "@type": "Brand", name: siteName },
    manufacturer: { "@id": orgId }
  };
}

export function blogPostingSchema({ headline, description, image, path, datePublished, author }) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description,
    image: absoluteUrl(encodeURI(image)),
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    datePublished,
    dateModified: datePublished,
    author: { "@type": "Organization", name: author ?? siteName },
    publisher: { "@id": orgId }
  };
}
