"use client";

import Link from "next/link";
import { useState } from "react";
import { BlogCard, DailyCard, ProductCard } from "@/components/Cards";
import Modal from "@/components/Modal";
import { DailyModalContent, ProductSummary } from "@/components/ModalContent";
import SiteShell from "@/components/SiteShell";
import CustomerReviews from "@/components/CustomerReviews";
import { blogPosts, dailyWorks, featuredProducts } from "@/lib/data";

export default function HomePage() {
  const [modal, setModal] = useState(null);

  return (
    <SiteShell>
      <main>
        <section className="section">
          <div className="hero">
            <div className="container">
              <h1>Entrance Architecture</h1>
              <p>Where intelligent design meets security and art. Each door is a bespoke architectural statement.</p>
              <div className="hero-img" style={{ height: 400 }}>
                <img src="/assets/images/hero/hero-main.webp" alt="Signature Door" loading="eager" />
              </div>
            </div>
          </div>

          <div className="container">
            <h2>Featured Collections</h2>
            <div className="grid">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} onClick={() => setModal({ type: "product", item: product })} />
              ))}
            </div>
            <Link href="/products" className="back-link" style={{ marginTop: "1.5rem" }}>
              <i className="fas fa-arrow-right" /> View All Products
            </Link>
          </div>

          <div className="container" style={{ marginTop: "3rem" }}>
            <h2>Latest from Daily Works</h2>
            <div className="daily-grid">
              {dailyWorks.slice(0, 4).map((work) => (
                <DailyCard key={work.id} work={work} onClick={() => setModal({ type: "daily", item: work })} />
              ))}
            </div>
            <Link href="/daily" className="back-link" style={{ marginTop: "1.5rem" }}>
              <i className="fas fa-arrow-right" /> View All Daily Works
            </Link>
          </div>
            <CustomerReviews />
          <div className="container" style={{ marginTop: "3rem" }}>
            <h2>From Our Blog</h2>
            <div className="grid">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            <Link href="/blog" className="back-link" style={{ marginTop: "1.5rem" }}>
              <i className="fas fa-arrow-right" /> View All Blog Posts
            </Link>
          </div>
        </section>
      </main>

      {modal && (
  <Modal onClose={() => setModal(null)}>
    {modal.type === "product" ? (
      <ProductSummary product={modal.item} />
    ) : null}

    {modal.type === "daily" ? (
      <DailyModalContent work={modal.item} />
    ) : null}
  </Modal>
)}
    </SiteShell>
  );
}
