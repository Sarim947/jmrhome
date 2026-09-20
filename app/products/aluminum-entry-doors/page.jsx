import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import shared from "../products.module.css";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Aluminum Entry Doors | Custom Aluminum Front Doors | JMR HABITAT",
  metadataTitle: { absolute: "Aluminum Entry Doors | Custom Aluminum Front Doors | JMR HABITAT" },
  description:
    "Custom aluminum entry doors built to project dimensions. Explore aluminum front doors with custom sizes, glass options, wood-look finishes and architectural configurations.",
  path: "/products/aluminum-entry-doors"
});

const configurations = [
  { title: "Modern Aluminum Front Doors", text: "Clean aluminum entrance systems for modern residential and architectural projects." },
  { title: "Aluminum Doors with Glass", text: "Aluminum entrance doors incorporating glass or coordinated glazing configurations.", href: "/products/front-doors-with-glass" },
  { title: "Custom Aluminum Doors", text: "Project-specific aluminum entrance systems built around size, finish and configuration requirements." }
];

const customizations = [
  { label: "Size", text: "Custom-built to your opening dimensions." },
  { label: "Door System", text: "Single, double or pivot configurations." },
  { label: "Material", text: "Aluminum systems." },
  { label: "Glass", text: "Clear, Low-E, frosted or laminated options." },
  { label: "Finish", text: "Wood-look, powder-coated and custom colors." },
  { label: "Configuration", text: "Single, double, sidelight or project-specific layouts." }
];

const designs = [
  {
    name: "Classic #3670",
    img: "/assets/images/products/Classic Grid door.jpg",
    alt: "Aluminum entry door with three-grid design",
    desc: "Aluminum entry door with a classic three-grid design."
  },
  {
    name: "Moonlight #3610",
    img: "/assets/images/products/Modern Grey door.jpg",
    alt: "Modern aluminum entry door",
    desc: "Modern aluminum entry door with a satin metallic finish."
  },
  {
    name: "Fusion #5843",
    img: "/assets/images/products/Luminous Fusion door.jpg",
    alt: "Aluminum front door with glass",
    desc: "Thermal break aluminum entry door with integrated glass."
  },
  {
    name: "JT-02",
    img: "/assets/images/products/essentials/jt-02-mqqerx58.webp",
    alt: "Wood-look aluminum front door",
    desc: "Aluminum entry door with sidelight and wood grain finish."
  }
];

const faqs = [
  {
    question: "Can aluminum entry doors be custom sized?",
    answer: "Yes. Each aluminum entry door is built to your opening dimensions."
  },
  {
    question: "Can aluminum front doors include glass?",
    answer: "Yes. Glass can be integrated into an aluminum front door for natural light and architectural design."
  },
  {
    question: "What finishes are available for aluminum entry doors?",
    answer: "Aluminum entry doors are available with wood-look, powder-coated and custom finishes."
  },
  {
    question: "Can aluminum entry doors have a wood-look finish?",
    answer: "Yes. Aluminum entry doors can be produced with a wood-look finish."
  },
  {
    question: "Can aluminum entry doors be made for large openings?",
    answer: "Yes. Aluminum entry doors can be configured for wider openings, including double-door layouts."
  }
];

export default function AluminumEntryDoorsPage() {
  return (
    <SiteShell>
      <main>
        {/* SECTION 1 — Hero */}
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Aluminum Entry Doors</h1>
                <p className={shared.lead}>
                  Custom aluminum entry doors built to project dimensions, with modern profiles, custom finishes and
                  architectural configurations.
                </p>
                <p className={styles.heroAux}>Custom sizes · Aluminum systems · Glass options · Custom finishes</p>
                <div className={shared.ctaActions}>
                  <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                    Send Your Dimensions
                  </Link>
                </div>
              </div>
              <div className={shared.splitImage}>
                <img
                  src="/assets/images/products/Classic Grid door.jpg"
                  alt="Aluminum entry door"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Configurations */}
        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>Configurations</span>
            <h2 className={shared.heading}>Aluminum Entry Door Configurations</h2>
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
            <h2 className={shared.heading}>Custom Aluminum Entry Doors</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              Send us your opening dimensions, drawings or reference images. We manufacture aluminum entry doors around
              the dimensions, finish and design requirements of your project.
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
            <h2 className={shared.heading}>Aluminum Entry Door Designs</h2>
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
            <h2 className={shared.heading}>Aluminum Entry Doors FAQ</h2>
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
            <h2 className={shared.heading}>Have an Aluminum Entry Door Project?</h2>
            <p className={shared.lead}>
              Send us your dimensions, drawing or reference image. We&apos;ll review the opening and recommend a suitable
              aluminum entrance door configuration.
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
