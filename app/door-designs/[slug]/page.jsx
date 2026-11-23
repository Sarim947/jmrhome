import ProductDetailStory from "@/components/ProductDetailStory";
import { productStories } from "@/lib/productStories";
import GlassTextureGallery from "@/components/GlassTextureGallery";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import SiteShell from "@/components/SiteShell";
import { doorDesigns, productCategories, productCollections } from "@/lib/data";
import { absoluteUrl, createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, serviceSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";
import ProcurementSpec from "@/components/ProcurementSpec";
import ProductImage from "@/components/ProductImage";
import { resolveSpecSeries } from "@/lib/procurementSpecs";
import { noteForDesign } from "@/lib/designNotes";
import { imageSize } from "@/lib/imageSizes";
import styles from "./page.module.css";

function categoryForSlug(slug) {
  const category = productCategories.find((item) => item.slug === slug && item.href);
  if (category) return category;
  const collection = productCollections.find((item) => item.slug === slug);
  return collection ? { title: collection.title, href: `/products/${collection.slug}` } : null;
}

export function generateStaticParams() {
  return doorDesigns.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const design = doorDesigns.find((item) => item.slug === slug);

  if (!design) return {};

  const hero = productStories[design.slug]?.hero;
  return createPageMetadata({
    title: design.seoTitle ?? design.altText,
    absoluteTitle: true,
    description:
      design.seoDescription ??
      (design.params.leaf
        ? `${design.altText}. ${design.params.leaf} door leaf, ${design.params.frame} frame, sizes confirmed by leaf configuration, stainless steel multi-point lock, fingerprint lock optional.`
        : `${design.altText}. Custom-made to your opening dimensions, with finish, glass and hardware options.`),
    path: `/door-designs/${design.slug}`,
    openGraph: { images: [{ url: absoluteUrl(hero?.src ?? design.img), alt: hero?.alt ?? design.altText }] }
  });
}

export default async function DoorDesignPage({ params }) {
  const { slug } = await params;
  // Retired duplicate: retain inbound links to the user-confirmed model.
  const retiredDesigns = {
    "jdh-01": "j-2008",
    "jdh-02": "j-2215",
    "jmr-3358": "j-2055",
    "jmr-2105": "j-2015",
    "classic-3670": "jmr-3670",
    "moonlight-3610": "jmr-3610",
    "hybrid-2103": "jmr-2103"
  };
  if (Object.hasOwn(retiredDesigns, slug)) {
    permanentRedirect(`/door-designs/${retiredDesigns[slug]}`);
  }
  const design = doorDesigns.find((item) => item.slug === slug);

  if (!design) notFound();

  const primaryCollection = categoryForSlug(design.collections[0]);
  const specSeries = design.specSeries ?? resolveSpecSeries(design.collections);
  const relatedCollections = design.collections.map(categoryForSlug).filter(Boolean);
  const relatedDesigns = [
    ...doorDesigns.filter(
      (item) => item.slug !== design.slug && item.collections.some((c) => design.collections.includes(c))
    ),
    ...doorDesigns.filter(
      (item) => item.slug !== design.slug && !item.collections.some((c) => design.collections.includes(c))
    )
  ].slice(0, 3);
  const details = [
    ["Style", design.params.style],
    ["Material / system", design.params.material],
    ["Configuration", design.params.configuration],
    ["Availability", design.params.availability],
    ["Door leaf thickness", design.params.leaf],
    ["Frame depth", design.params.frame],
    ["Maximum frame sizes by configuration", design.params.size],
    ["Core filling", design.params.core],
    ["Thermal break", design.params.thermalBreak],
    ["Glass", design.params.glass ?? (design.collections.includes("front-doors-with-glass") ? "Integrated glass configuration" : null)],
    ["Locking", design.params.locking],
    ["Smart lock", design.params.smartLock]
  ].filter(([, value]) => value);

  const specLine = design.params.leaf && design.params.frame
    ? `${design.params.leaf} door leaf and ${design.params.frame} frame; final configuration and overall frame dimensions are confirmed on your project drawing. ${design.params.locking}${design.params.smartLock ? ", and a fingerprint lock can be fitted on request" : ""}.`
    : "This custom door is made to project dimensions, finish selections and configuration requirements.";

  const story = productStories[design.slug];
  const heroImage = story?.hero;
  const heroSrc = heroImage?.src ?? design.img;
  const heroAlt = heroImage?.alt ?? design.altText;
  const heroSize = heroImage ? { w: heroImage.width, h: heroImage.height } : imageSize(design.img);
  const note = noteForDesign(design.slug);
  const faqs = design.faqs ?? [];
  const highlights = design.highlights ?? [];
  const paragraphs = String(design.description ?? "").split("\n\n").filter(Boolean);

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
          serviceSchema({
            name: `${design.altText} (${design.name})`,
            description: design.seoDescription ?? design.description,
            image: heroSrc,
            path: `/door-designs/${design.slug}`,
            category: design.params.material
          }),
          ...(story ? [story.hero, story.feature, ...story.details, story.scene].filter(Boolean).map((photo) => ({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            contentUrl: absoluteUrl(photo.src),
            name: photo.alt,
            caption: photo.caption,
            description: photo.description ?? photo.caption,
            width: photo.width,
            height: photo.height,
            encodingFormat: "image/webp",
            isPartOf: { "@id": absoluteUrl(`/door-designs/${design.slug}`) }
          })) : []),
          ...(faqs.length
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "FAQPage",
                  mainEntity: faqs.map((faq) => ({
                    "@type": "Question",
                    name: faq.question,
                    acceptedAnswer: { "@type": "Answer", text: faq.answer }
                  }))
                }
              ]
            : [])
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
                <h1>{design.heading ?? design.altText}</h1>
                <p className={styles.lead}>{paragraphs[0] ?? design.description}</p>
                <p className={styles.customNote}>{design.supplyNote ?? specLine}</p>
                <Link href="/inquiry" className={styles.cta}>Discuss This Design</Link>
              </div>
              <figure className={`${styles.heroImage} ${story ? styles.photographicHero : ""}`}>
                <ProductImage
                  src={heroSrc}
                  alt={heroAlt}
                  width={heroSize?.w}
                  height={heroSize?.h}
                  loading="eager"
                  fetchPriority="high"
                />
                {heroImage ? <figcaption>{heroImage.caption}</figcaption> : null}
              </figure>
            </div>
          </div>
        </section>

        {story ? <ProductDetailStory story={story} /> : null}

        {design.slug === "j-4244" ? <GlassTextureGallery /> : null}

        {highlights.length ? (
          <section className={styles.section}>
            <div className="container">
              <h2>Why this design works</h2>
              <ul className={styles.highlights}>
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {paragraphs.slice(1).map((text) => (
                <p key={text} className={styles.bodyText}>{text}</p>
              ))}
            </div>
          </section>
        ) : null}

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

        {note ? (
          <section className={styles.section}>
            <div className="container">
              <h2>{note.heading}</h2>
              <div className={styles.noteBody}>
                {note.paragraphs.map((text) => (
                  <p key={text}>{text}</p>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <ProcurementSpec
          series={specSeries}
          sizeFamily={design.sizeFamily}
          material={design.params.material}
          glazing={design.params.glass}
          id={design.slug}
          seriesHref={primaryCollection?.href}
        />

        {!story ? (
        <section className={styles.section}>
          <div className="container">
            <h2>Image gallery</h2>
            <div className={styles.gallery}>
              <figure>
                <ProductImage
                  src={design.img}
                  alt={design.altText}
                  width={heroSize?.w}
                  height={heroSize?.h}
                  loading="lazy"
                />
                <figcaption>{design.name}</figcaption>
              </figure>
            </div>
          </div>
        </section>
        ) : null}

        {faqs.length ? (
          <section className={styles.section}>
            <div className="container">
              <h2>Frequently asked questions</h2>
              <div className={styles.faqList}>
                {faqs.map((faq) => (
                  <details key={faq.question} className={styles.faqItem}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

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
                  <img
                    src={item.img}
                    alt={item.altText}
                    width={imageSize(item.img)?.w}
                    height={imageSize(item.img)?.h}
                    loading="lazy"
                  />
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
