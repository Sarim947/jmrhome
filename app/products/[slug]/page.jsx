import { notFound } from "next/navigation";
import { productCollections } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import ProductCollectionClient from "./ProductCollectionClient";

export function generateStaticParams() {
  return productCollections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const collection = productCollections.find((item) => item.slug === slug);
  return createPageMetadata({
    title: collection?.title ?? "Products",
    description: collection?.shortDesc ?? "Custom high-end entrance door collection.",
    path: `/products/${slug}`
  });
}

export default async function ProductCollectionPage({ params }) {
  const { slug } = await params;
  const collection = productCollections.find((item) => item.slug === slug);

  if (!collection) notFound();

  return <ProductCollectionClient collection={collection} />;
}
