import Link from "next/link";
import { ProductCard } from "@/components/Cards";
import SiteShell from "@/components/SiteShell";
import { productCategories } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./products.module.css";

export const metadata = createPageMetadata({
  title: "Products",
  description: "Explore our collection of custom high-end entrance doors.",
  path: "/products"
});

const customFeatures = [
  { label: "Custom Sizes", text: "Built to your project dimensions." },
  { label: "Custom Finishes", text: "Aluminum, steel, wood-look and custom colors." },
  { label: "Custom Configurations", text: "Pivot, hinged, double doors, sidelights and glass." },
  { label: "Project Support", text: "Drawings, quotations and production support." }
];

const capabilities = [
  { number: "01", title: "Residential", text: "Custom entrance doors for private homes, villas and residential projects." },
  { number: "02", title: "Commercial", text: "Entrance systems for commercial and multi-family projects." },
  { number: "03", title: "Oversized", text: "Large-format entrance doors engineered around project dimensions." }
];

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
          <h2>Architectural Entrance Doors</h2>
          <p style={{ marginTop: "-1.25rem", marginBottom: "2rem", color: "#4b5563", fontSize: "1.0625rem", maxWidth: "40rem" }}>
            Custom-built entrance doors for residential and commercial projects.
          </p>
          <div className="grid">
            {productCategories.map((category) => (
              <ProductCard key={category.slug} product={category} href={category.href} />
            ))}
          </div>
        </div>

        <section className={`${styles.sectionBlock} ${styles.sectionBlockFirst}`}>
          <div className="container">
            <div className={styles.split}>
              <div className={styles.splitImage}>
                <img
                  src="/assets/images/products/pivot-prime-5893/oversized-pivot-cover-mqqb8sao.webp"
                  alt="Oversized custom pivot entrance door"
                  loading="lazy"
                />
              </div>
              <div>
                <span className={styles.eyebrow}>Custom Built</span>
                <h2 className={styles.heading}>Custom Entrance Doors</h2>
                <p className={styles.lead}>
                  Send us your dimensions, drawings or reference images. We manufacture entrance doors to your
                  project requirements — from standard residential openings to oversized architectural entrances.
                </p>
                <ul className={styles.featureList}>
                  {customFeatures.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong>
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <span className={`${styles.button} ${styles.buttonOutline}`}>Explore Custom Doors</span>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className="container">
            <span className={styles.eyebrow}>Project Capabilities</span>
            <h2 className={styles.heading}>Built for Architectural Projects</h2>
            <p className={styles.lead}>
              From single custom entrances to multi-door projects, JMR HABITAT manufactures entrance systems for
              residential and commercial applications.
            </p>
            <div className={styles.capabilityGrid}>
              {capabilities.map((item) => (
                <div className={styles.capability} key={item.number}>
                  <span className={styles.capabilityNumber}>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionBlock}>
          <div className="container">
            <span className={styles.eyebrow}>Start Your Project</span>
            <h2 className={styles.heading}>Need a Custom Size?</h2>
            <p className={styles.lead}>
              Send us your dimensions, drawing or reference image. We&apos;ll review your requirements and recommend a
              suitable entrance door configuration.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/inquiry" className={`${styles.button} ${styles.buttonPrimary}`}>
                Send Your Project
              </Link>
              <p className={styles.helper}>Drawings, dimensions or reference images are welcome.</p>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
