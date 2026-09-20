import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import shared from "../products.module.css";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Front Doors with Glass | Custom Glass Entry Doors | JMR HABITAT",
  metadataTitle: { absolute: "Front Doors with Glass | Custom Glass Entry Doors | JMR HABITAT" },
  description:
    "Custom front doors with glass built to project dimensions. Choose custom glass layouts, aluminum or steel systems, sidelights and architectural finishes.",
  path: "/products/front-doors-with-glass"
});

const configurations = [
  { title: "Vertical Glass", text: "Front doors with vertical glass panels integrated into the door design." },
  { title: "Large Glass Panels", text: "Entry doors with larger glass areas for natural light and modern architectural entrances." },
  { title: "Door + Sidelight Glass", text: "Front entry doors with integrated glass combined with single or double sidelights.", href: "/products/front-doors-with-sidelights" }
];

const customizations = [
  { label: "Size", text: "Custom-built to your opening dimensions." },
  { label: "Glass Layout", text: "Custom glass size, position and proportions." },
  { label: "Glass", text: "Clear, Low-E, frosted or laminated options." },
  { label: "Door System", text: "Pivot or hinged configurations." },
  { label: "Frame", text: "Aluminum or steel systems." },
  { label: "Finish", text: "Wood-look, powder-coated and custom colors." }
];

const designs = [
  {
    name: "Fusion #5843",
    img: "/assets/images/products/Luminous Fusion door.jpg",
    alt: "Aluminum entry door with glass",
    desc: "Thermal break aluminum entrance door with integrated glass."
  },
  {
    name: "J-0226",
    img: "/assets/images/products/fusion-5843/j-0226-mqqdplxd.webp",
    alt: "Front door with vertical glass panel",
    desc: "Modern entry door with a vertical glass cutout."
  },
  {
    name: "J-4244",
    img: "/assets/images/products/fusion-5843/j-4244-mqqco64v.webp",
    alt: "Custom entry door with integrated glass",
    desc: "Entrance door with a matte black frame and patterned glass."
  }
];

const faqs = [
  {
    question: "Can front doors with glass be custom sized?",
    answer: "Yes. Door dimensions and glass proportions can be built around the project opening."
  },
  {
    question: "What glass can be used in a front door?",
    answer: "Clear, Low-E, frosted and laminated glass are available, depending on the project requirements."
  },
  {
    question: "Can the size and position of the glass be customized?",
    answer: "Yes. Glass dimensions, position and proportions can be coordinated with the door design."
  },
  {
    question: "Can entry doors with glass include sidelights?",
    answer: "Yes. Integrated door glass can be combined with single or double sidelights."
  },
  {
    question: "Can you make modern front doors with glass?",
    answer: "Yes. Modern glass front doors can be produced in aluminum or steel systems with custom finishes."
  }
];

export default function GlassFrontDoorsPage() {
  return (
    <SiteShell>
      <main>
        {/* SECTION 1 — Hero */}
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Front Doors with Glass</h1>
                <p className={shared.lead}>
                  Custom front doors with glass built to your opening dimensions, with integrated glass configurations
                  for natural light, privacy and architectural design.
                </p>
                <p className={styles.heroAux}>Custom sizes · Custom glass · Aluminum and steel systems · Custom finishes</p>
                <div className={shared.ctaActions}>
                  <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                    Send Your Dimensions
                  </Link>
                </div>
              </div>
              <div className={shared.splitImage}>
                <img
                  src="/assets/images/products/Luminous Fusion door.jpg"
                  alt="Modern front door with glass"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Configurations */}
        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>Configurations</span>
            <h2 className={shared.heading}>Front Door Glass Configurations</h2>
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
            <h2 className={shared.heading}>Custom Entry Doors with Glass</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              Send us your opening dimensions, drawings or reference images. We manufacture the complete entrance
              system around your project requirements, including the door, glass and frame configuration.
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
            <h2 className={shared.heading}>Front Door with Glass Designs</h2>
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
            <h2 className={shared.heading}>Front Doors with Glass FAQ</h2>
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
            <h2 className={shared.heading}>Have a Glass Entrance Door Project?</h2>
            <p className={shared.lead}>
              Send us your dimensions, drawing or reference image. We&apos;ll review the opening and recommend a suitable
              door and glass configuration.
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
