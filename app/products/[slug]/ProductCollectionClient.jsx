"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "@/components/Cards";
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

          <h2>{collection.title}</h2>
          <div className="grid">
            {collection.items.map((product) => (
              <ProductCard key={product.id} product={product} onClick={() => setSelected(product)} />
            ))}
          </div>
          <Link href="/products" className="back-link" style={{ marginTop: "3rem" }}>
            <i className="fas fa-arrow-left" /> Back to Products
          </Link>
        </div>
      </main>

      <Modal onClose={() => setSelected(null)}>{selected ? <ProductDetail product={selected} /> : null}</Modal>
    </SiteShell>
  );
}
