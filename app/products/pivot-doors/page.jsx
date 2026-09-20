import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import shared from "../products.module.css";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Pivot Doors | Custom & Oversized Pivot Doors | JMR HABITAT",
  metadataTitle: { absolute: "Pivot Doors | Custom & Oversized Pivot Doors | JMR HABITAT" },
  description:
    "Custom pivot doors built to project dimensions. Explore modern and oversized pivot entrance doors with aluminum systems, glass options and custom finishes.",
  path: "/products/pivot-doors"
});

const configurations = [
  { title: "Modern Pivot Doors", text: "Clean architectural pivot doors built around project dimensions and contemporary finishes." },
  { title: "Oversized Pivot Doors", text: "Large-format pivot entrance doors designed around wider and taller architectural openings." },
  { title: "Aluminum Pivot Doors", text: "Pivot entrance doors built with aluminum systems and custom finishes.", href: "/products/aluminum-entry-doors" }
];

const customizations = [
  { label: "Size", text: "Custom-built to your opening dimensions." },
  { label: "Pivot Position", text: "Centered or offset pivot configurations." },
  { label: "Material", text: "Aluminum systems." },
  { label: "Finish", text: "Wood-look, powder-coated and custom colors." },
  { label: "Configuration", text: "Single pivot, oversized or project-specific entrance layouts." }
];

const designs = [
  {
    name: "Pivot Prime #5893",
    img: "/assets/images/products/Pivot Prime door.jpg",
    alt: "Custom aluminum pivot door",
    desc: "Offset pivot door with clean horizontal lines for high-end residential entries."
  },
  {
    name: "J-5496",
    img: "/assets/images/products/fusion-5843/j-5496-mqqec8xv.webp",
    alt: "Modern pivot door with faux-oxidized metal finish",
    desc: "Modern pivot entry door with a faux-oxidized metal finish."
  }
];

const faqs = [
  {
    question: "Can pivot doors be custom sized?",
    answer: "Yes. Each pivot door is built to your opening dimensions."
  },
  {
    question: "Can pivot doors be made for oversized openings?",
    answer: "Yes. Pivot doors can be configured for larger and taller architectural openings."
  },
  {
    question: "What materials are available for pivot doors?",
    answer: "Pivot doors are available with aluminum systems and custom finishes."
  },
  {
    question: "Can pivot doors include glass?",
    answer: "Glass can be integrated into a pivot door depending on the project design and requirements."
  },
  {
    question: "Can the pivot position be customized?",
    answer: "Yes. The pivot can be positioned in the center or offset depending on the door proportions and design."
  }
];

export default function PivotDoorsPage() {
  return (
    <SiteShell>
      <main>
        {/* SECTION 1 — Hero */}
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Pivot Doors</h1>
                <p className={shared.lead}>
                  Custom pivot doors built to project dimensions, from modern residential entrances to oversized
                  architectural openings.
                </p>
                <p className={styles.heroAux}>Custom sizes · Aluminum systems · Oversized options · Custom finishes</p>
                <div className={shared.ctaActions}>
                  <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                    Send Your Dimensions
                  </Link>
                </div>
              </div>
              <div className={shared.splitImage}>
                <img
                  src="/assets/images/products/Pivot Prime door.jpg"
                  alt="Modern pivot door"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Configurations */}
        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>Configurations</span>
            <h2 className={shared.heading}>Pivot Door Configurations</h2>
            <div className={styles.trioGrid}>
              {configurations.map((item) => (
                <div className={styles.trioItem} key={item.title}>
                  <h3>{item.href ? <Link href={item.href} className={shared.inlineLink}>{item.title}</Link> : item.title}</h3>
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
            <h2 className={shared.heading}>Custom Pivot Doors</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              Send us your opening dimensions, drawings or reference images. We manufacture pivot entrance doors around
              the dimensions, proportions and design requirements of your project.
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
        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>Designs</span>
            <h2 className={shared.heading}>Pivot Door Designs</h2>
            <div className={styles.designGrid}>
              {designs.map((item) => (
                <div key={item.name}>
                  <img className={styles.designImage} src={item.img} alt={item.alt} loading="lazy" />
                  <h3 className={styles.designName}>{item.name}</h3>
                  <p className={styles.designDesc}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — FAQ */}
        <section className={shared.sectionBlock}>
          <div className="container">
            <h2 className={shared.heading}>Pivot Doors FAQ</h2>
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
            <h2 className={shared.heading}>Have a Pivot Door Project?</h2>
            <p className={shared.lead}>
              Send us your dimensions, drawing or reference image. We&apos;ll review the opening and recommend a suitable
              pivot door configuration.
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
