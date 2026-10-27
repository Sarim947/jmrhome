import Link from "next/link";
import { notFound } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { doorDesigns, productCategories } from "@/lib/data";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, productSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import styles from "./page.module.css";

function categoryForSlug(slug) {
  return productCategories.find((category) => category.slug === slug && category.href);
}

export function generateStaticParams() {
  return doorDesigns.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const design = doorDesigns.find((item) => item.slug === slug);

  if (!design) return {};

  return createPageMetadata({
    title: `${design.altText}`,
    absoluteTitle: true,
    description: `${design.altText}. Custom-made to your opening dimensions, with finish, glass and hardware options.`,
    path: `/door-designs/${design.slug}`,
    openGraph: { images: [{ url: absoluteUrl(design.img), alt: design.altText }] }
  });
}

export default async function DoorDesignPage({ params }) {
  const { slug } = await params;
  const design = doorDesigns.find((item) => item.slug === slug);

  if (!design) notFound();

  const primaryCollection = categoryForSlug(design.collections[0]);
  const relatedCollections = design.collections.map(categoryForSlug).filter(Boolean);
  const relatedDesigns = doorDesigns.filter((item) => item.slug !== design.slug);
  const details = [
    ["Style", design.params.style],
    ["Material / system", design.params.material],
    ["Glass", design.collections.includes("front-doors-with-glass") ? "Integrated glass configuration" : null],
    ["Configuration", design.params.configuration],
    ["Smart lock", design.params.smartLock]
  ].filter(([, value]) => value);

  const breadcrumbItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    ...(primaryCollection ? [{ name: primaryCollection.title, path: primaryCollection.href }] : []),
    { name: design.name, path: `/door-designs/${design.slug}` }
  ];

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema(breadcrumbItems),
          productSchema({
            name: `${design.altText} (${design.name})`,
            description: design.description,
            image: design.img,
            path: `/door-designs/${design.slug}`,
            category: design.params.material
          })
        ]}
      />
      <main>
        <section className={styles.hero}>
          <div className="container">
            <nav className="breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className="separator">/</span>
              <Link href="/products">Products</Link>
              <span className="separator">/</span>
              {primaryCollection ? <Link href={primaryCollection.href}>{primaryCollection.title}</Link> : null}
              <span className="separator">/</span>
              <span className="active">{design.name}</span>
            </nav>

            <div className={styles.heroGrid}>
              <div>
                <p className={styles.eyebrow}>Door Design · {design.name}</p>
                <h1>{design.altText}</h1>
                <p className={styles.lead}>{design.description}</p>
                <p className={styles.customNote}>
                  This custom door is made to project dimensions, finish selections and configuration requirements.
                </p>
                <Link href="/inquiry" className={styles.cta}>Discuss This Design</Link>
              </div>
              <figure className={styles.heroImage}>
                <img src={design.img} alt={design.altText} loading="eager" fetchPriority="high" />
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2>Design details</h2>
            <dl className={styles.details}>
              {details.map(([label, value]) => (
                <div key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2>Image gallery</h2>
            <div className={styles.gallery}>
              <figure>
                <img src={design.img} alt={design.altText} loading="lazy" />
                <figcaption>{design.name}</figcaption>
              </figure>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2>Related collections</h2>
            <div className={styles.linkGrid}>
              {relatedCollections.map((collection) => (
                <Link key={collection.slug} href={collection.href} className={styles.linkCard}>
                  <strong>{collection.title}</strong>
                  <span>{collection.shortDesc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className="container">
            <h2>Related designs</h2>
            <div className={styles.designGrid}>
              {relatedDesigns.map((item) => (
                <Link key={item.slug} href={`/door-designs/${item.slug}`} className={styles.designCard}>
                  <img src={item.img} alt={item.altText} loading="lazy" />
                  <strong>{item.name}</strong>
                  <span>{item.shortDesc}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <h2>Planning an entrance around this design?</h2>
            <p>Share your opening dimensions, finish preferences and configuration needs with our team.</p>
            <Link href="/inquiry" className={styles.cta}>Start an inquiry</Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
