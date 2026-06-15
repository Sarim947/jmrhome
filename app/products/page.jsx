import Link from "next/link";
import { ProductCard } from "@/components/Cards";
import SiteShell from "@/components/SiteShell";
import { productCollections } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Products",
  description: "Explore our collection of custom high-end entrance doors.",
  path: "/products"
});

export default function ProductsPage() {
  return (
    <SiteShell>
      <main>
        <div className="container section">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span className="active">Products</span>
          </nav>
          <h2>Our Products</h2>
          <div className="grid">
            {productCollections.map((collection) => (
              <ProductCard key={collection.slug} product={collection} href={`/products/${collection.slug}`} />
            ))}
          </div>
          <Link href="/" className="back-link" style={{ marginTop: "1.5rem" }}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
