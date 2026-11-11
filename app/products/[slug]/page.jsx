import { notFound } from "next/navigation";
import { productCollections } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqPageSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ProcurementSpec from "@/components/ProcurementSpec";
import { collectionSpecMap } from "@/lib/procurementSpecs";
import { faqsFor } from "@/lib/collectionFaqs";
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

  const faqs = faqsFor(collection.slug);
  const faqJsonLd = faqPageSchema(faqs);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: collection.title, path: `/products/${collection.slug}` }
          ]),
          faqJsonLd
        ].filter(Boolean)}
      />
      <ProductCollectionClient
        collection={collection}
        faqs={faqs}
        specSlot={
          collectionSpecMap[collection.slug] ? (
            <ProcurementSpec series={collection.slug} id={collection.slug} />
          ) : null
        }
      />
    </>
  );
}
