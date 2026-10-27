import { notFound } from "next/navigation";
import { productCollections } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ProductCollectionClient from "./ProductCollectionClient";

export function generateStaticParams() {
  return productCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const collection = productCollections.find((item) => item.slug === slug);
  return createPageMetadata({
    title: collection?.seoTitle ?? collection?.title ?? "Products",
    description: collection?.seoDescription ?? "Custom high-end entrance door collection.",
    path: `/products/${slug}`
  });
}

export default async function ProductCollectionPage({ params }) {
  const { slug } = await params;
  const collection = productCollections.find((item) => item.slug === slug);

  if (!collection) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: collection.title, path: `/products/${collection.slug}` }
        ])}
      />
      <ProductCollectionClient collection={collection} />
    </>
  );
}
