"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "@/components/Cards";
import { productCollections, designSlugFor } from "@/lib/data";
import Modal from "@/components/Modal";
import { ProductDetail } from "@/components/ModalContent";
import SiteShell from "@/components/SiteShell";

export default function ProductCollectionClient({ collection }) {
  const [selected, setSelected] = useState(null);

  return (
    <SiteShell>
      <main>
        <div className="container section">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <Link href="/products">Products</Link>
            <span className="separator">/</span>
            <span className="active">{collection.title}</span>
          </nav>

          <h1 className="page-heading">{collection.h1 ?? collection.title}</h1>
          <div className="grid">
            {collection.items.map((product) => {
              const designSlug = designSlugFor(product);
              return (
                <ProductCard
                  key={product.id}
                  product={product}
                  href={designSlug ? `/door-designs/${designSlug}` : `/products/${collection.slug}`}
                  onClick={() => setSelected(product)}
                />
              );
            })}
          </div>
          <section style={{ marginTop: "3.5rem" }}>
            <h2 className="page-heading" style={{ fontSize: "1.5rem", marginBottom: "1.25rem" }}>
              More Door Collections
            </h2>
            <div className="grid">
              {productCollections
                .filter((item) => item.slug !== collection.slug)
                .map((item) => (
                  <ProductCard key={item.slug} product={item} href={`/products/${item.slug}`} />
                ))}
            </div>
          </section>

          <Link href="/products" className="back-link" style={{ marginTop: "3rem" }}>
            <i className="fas fa-arrow-left" /> Back to Products
          </Link>
        </div>
      </main>

      <Modal onClose={() => setSelected(null)}>{selected ? <ProductDetail product={selected} /> : null}</Modal>
    </SiteShell>
  );
}
