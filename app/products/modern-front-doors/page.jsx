import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import shared from "../products.module.css";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Modern Front Doors | Custom Modern Entry Doors | JMR HABITAT",
  metadataTitle: { absolute: "Modern Front Doors | Custom Modern Entry Doors | JMR HABITAT" },
  description:
    "Custom modern front doors and modern entry doors built to project dimensions. Aluminum and steel entrance systems with glass, custom finishes and configurations.",
  path: "/products/modern-front-doors"
});

const configurations = [
  { title: "Modern Entry Doors", text: "Clean architectural entrance doors built around project dimensions." },
  { title: "Modern Front Doors with Glass", text: "Integrated glass configurations for natural light and contemporary entrances.", href: "/products/front-doors-with-glass" },
  { title: "Modern Double Front Doors", text: "Double-door configurations for wider modern entrance openings.", href: "/products/double-entry-doors" }
];

const customizations = [
  { label: "Size", text: "Custom-built to your opening dimensions." },
  { label: "Door System", text: "Pivot or hinged configurations." },
  { label: "Material", text: "Aluminum or steel systems." },
  { label: "Glass", text: "Clear, Low-E, frosted or laminated options." },
  { label: "Finish", text: "Wood-look, powder-coated and custom colors." },
  { label: "Configuration", text: "Single, double, glass and sidelight layouts." }
];

const designs = [
  {
    name: "Moonlight #3610",
    img: "/assets/images/products/Modern Grey door.jpg",
    alt: "Modern front door with satin metallic finish",
    desc: "Modern minimalist entrance door with satin metallic finish."
  },
  {
    name: "Hybrid #2103",
    img: "/assets/images/products/Hybrid material mixed door.jpg",
    alt: "Modern front door with mixed steel and aluminum finish",
    desc: "Multi-material modern entrance door with carved aluminum and steel."
  },
  {
    name: "Fusion #5843",
    img: "/assets/images/products/Luminous Fusion door.jpg",
    alt: "Modern front door with glass",
    desc: "Thermal break aluminum entrance door with integrated glass."
  },
  {
    name: "J-0226",
    img: "/assets/images/products/fusion-5843/j-0226-mqqdplxd.webp",
    alt: "Modern entry door with vertical glass cutout",
    desc: "Modern entrance door with a vertical glass cutout."
  },
  {
    name: "J-0555",
    img: "/assets/images/products/fusion-5843/j-0555-mqqcu0ru.webp",
    alt: "Modern front door with matte anthracite finish",
    desc: "Minimalist modern entrance door with matte anthracite finish."
  }
];

const faqs = [
  {
    question: "Can modern front doors be custom sized?",
    answer: "Yes. Each modern entrance door is built to your opening dimensions."
  },
  {
    question: "What materials are available for modern entry doors?",
    answer: "Modern entry doors are available in aluminum and steel systems, with wood-look, powder-coated and custom finishes."
  },
  {
    question: "Can modern front doors include glass?",
    answer: "Yes. Glass configurations can be integrated into modern front doors for natural light and a contemporary look."
  },
  {
    question: "Can you make modern double front doors?",
    answer: "Yes. Modern double front doors are available for wider entrance openings."
  },
  {
    question: "Can modern entrance doors include sidelights?",
    answer: "Yes. Sidelights can be combined with a modern entrance door in single or double layouts."
  }
];

export default function ModernFrontDoorsPage() {
  return (
    <SiteShell>
      <main>
        {/* SECTION 1 — Hero */}
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Modern Front Doors</h1>
                <p className={shared.lead}>
                  Custom modern front doors built to project dimensions, with clean architectural lines, custom
                  finishes and aluminum or steel entrance systems.
                </p>
                <p className={styles.heroAux}>Custom sizes · Aluminum and steel systems · Glass options · Custom finishes</p>
                <div className={shared.ctaActions}>
                  <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                    Send Your Dimensions
                  </Link>
                </div>
              </div>
              <div className={shared.splitImage}>
                <img
                  src="/assets/images/products/Modern Grey door.jpg"
                  alt="Modern front door with satin metallic finish"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Configurations */}
        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>Configurations</span>
            <h2 className={shared.heading}>Modern Front Door Designs</h2>
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
            <h2 className={shared.heading}>Custom Modern Entry Doors</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              Send us your opening dimensions, drawings or reference images. We manufacture modern entrance doors
              around the dimensions, materials and design requirements of your project.
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
            <h2 className={shared.heading}>Modern Entrance Door Designs</h2>
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
            <h2 className={shared.heading}>Modern Front Doors FAQ</h2>
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
            <h2 className={shared.heading}>Have a Modern Entrance Door Project?</h2>
            <p className={shared.lead}>
              Send us your dimensions, drawing or reference image. We&apos;ll review your requirements and recommend a
              suitable entrance door configuration.
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
