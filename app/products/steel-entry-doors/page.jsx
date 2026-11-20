import EntranceDoorGuide from "@/components/EntranceDoorGuide";
import Link from "next/link";
import { doorDesigns } from "@/lib/data";
import SiteShell from "@/components/SiteShell";
import ProcurementSpec from "@/components/ProcurementSpec";
import SeriesEditorial from "@/components/SeriesEditorial";
import { createPageMetadata } from "@/lib/metadata";
import shared from "../products.module.css";
import styles from "./page.module.css";
import { sizeAttrs } from "@/lib/imageSizes";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, collectionServiceSchema, faqPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Steel Front Doors in Custom Sizes",
  description:
    "Custom steel front doors with black, wood-grain and textured finishes. Compare modern steel entry doors, panel designs and single or double configurations.",
  keywords: ["custom steel front doors", "steel entry doors", "black steel front door", "modern steel front doors", "wood grain steel front door", "armored steel door"],
  path: "/products/steel-entry-doors"
});

const configurations = [
  { title: "Modern Steel Entry Doors", text: "Clean steel entrance doors built around project dimensions and architectural detailing." },
  { title: "Custom Steel Doors", text: "Project-specific steel doors configured around size, finish and hardware requirements." },
  { title: "Steel Front Doors with Wood-Look Finishes", text: "Steel entrance doors with heat-transfer wood grain and custom finishes." }
];

const customizations = [
  { label: "Size", text: "Custom-built to your opening dimensions." },
  { label: "Door System", text: "Single or double configurations." },
  { label: "Material", text: "Steel systems." },
  { label: "Glass", text: "Clear, Low-E, frosted or laminated options." },
  { label: "Finish", text: "Wood-look, powder-coated and custom colors." },
  { label: "Configuration", text: "Custom layouts built around the project opening." }
];

// Generated studio catalog images; retain original product images for other uses.
const catalogImages = {
  "jmr-2662": {
    "src": "/assets/images/products/catalog/jmr-2662-studio-v1.webp",
    "alt": "J-2662 unequal double steel entrance door in a grey studio visualization with floor reflection"
  },
  "jt-27": {
    "src": "/assets/images/products/catalog/jt-27-studio-v1.webp",
    "alt": "JT-27 steel entrance door in a grey studio visualization with floor reflection"
  }
};

const designs = doorDesigns
  .filter((design) => design.collections.includes("steel-entry-doors"))
  .map(({ name, img, altText, shortDesc, slug }) => ({ name, img: catalogImages[slug]?.src ?? img, alt: catalogImages[slug]?.alt ?? altText, desc: shortDesc, slug }));

const faqs = [
  {
    question: "Can steel entry doors be custom sized?",
    answer: "Yes. Each steel entry door is built to your opening dimensions."
  },
  {
    question: "What finishes are available for steel entry doors?",
    answer: "Steel entry doors are available with wood-look, powder-coated and custom finishes."
  },
  {
    question: "Can steel front doors include glass?",
    answer: "Yes. Glass can be integrated into a steel front door for natural light and architectural design."
  },
  {
    question: "Can steel entry doors be made for large openings?",
    answer: "Yes. Steel entry doors can be configured for wider openings, including double-door layouts."
  },
  {
    question: "What is the difference between a steel entry door and an aluminum entry door?",
    answer: "They use different construction systems. Steel entry doors are built around steel panels, while aluminum entry doors use aluminum profiles. Both can be customized with project-specific finishes and configurations."
  }
];

const structuredData = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Steel Entry Doors", path: "/products/steel-entry-doors" }
  ]),
  collectionServiceSchema({
    name: "Steel Entry Doors",
    description:
      "Custom steel entry doors built around project dimensions, architectural requirements and custom finishes.",
    path: "/products/steel-entry-doors"
  }),
  faqPageSchema(faqs)
];

export default function SteelEntryDoorsPage() {
  return (
    <SiteShell>
      <JsonLd data={structuredData} />
      <main>
        {/* SECTION 1 — Hero */}
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Steel Front Doors in Custom Sizes</h1>
                <p className={shared.lead}>
                  Custom steel entry doors built around project dimensions, architectural requirements and custom
                  finishes.
                </p>
                <p className={styles.heroAux}>Custom sizes · Steel systems · Glass options · Custom finishes</p>
                <div className={shared.ctaActions}>
                  <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                    Send Your Dimensions
                  </Link>
                </div>
              </div>
              <div className={shared.splitImage}>
                <img
                  width={1200} height={896} src="/assets/images/products/hires/j-2009.webp"
                  alt="Modern steel entry door" loading="eager" fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Configurations */}
        <SeriesEditorial series="steel-entry-doors" part="anatomy" />
        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>Configurations</span>
            <h2 className={shared.heading}>Steel Entry Door Configurations</h2>
            <div className={styles.trioGrid}>
              {configurations.map((item) => (
                <div className={styles.trioItem} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — Customization */}
        <section className={styles.sectionCompact}>
          <div className="container">
            <span className={shared.eyebrow}>Built to Your Project</span>
            <h2 className={shared.heading}>Custom Steel Entry Doors</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              Send us your opening dimensions, drawings or reference images. We manufacture steel entry doors around
              the size, material and design requirements of your project.
            </p>
            <ul className={styles.compactFeatureList}>
              {customizations.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 4 — Designs */}
        <EntranceDoorGuide topic="steel-entry-doors" />

        <ProcurementSpec series="steel-entry-doors" />

        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>Designs</span>
            <h2 className={shared.heading}>Steel Entry Door Designs</h2>
            <div className={styles.designGrid}>
              {designs.map((item) => (
                <Link key={item.name} href={`/door-designs/${item.slug}`} className={styles.designCard}>
                  <img className={styles.designImage} {...sizeAttrs(item.img)} src={item.img} alt={item.alt} loading="lazy" />
                  <h3 className={styles.designName}>{item.name}</h3>
                  <p className={styles.designDesc}>{item.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — FAQ */}
        <SeriesEditorial series="steel-entry-doors" part="specify" muted />
        <SeriesEditorial series="steel-entry-doors" part="install" />
        <section className={shared.sectionBlock}>
          <div className="container">
            <h2 className={shared.heading}>Steel Entry Doors FAQ</h2>
            <div className={styles.faqList}>
              {faqs.map((item) => (
                <div className={styles.faqItem} key={item.question}>
                  <h3 className={styles.faqQuestion}>{item.question}</h3>
                  <p className={styles.faqAnswer}>{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6 — CTA */}
        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>Start Your Project</span>
            <h2 className={shared.heading}>Have a Steel Entry Door Project?</h2>
            <p className={shared.lead}>
              Send us your dimensions, drawing or reference image. We&apos;ll review the opening and recommend a suitable
              steel entry door configuration.
            </p>
            <div className={shared.ctaActions}>
              <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                Send Your Project
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
