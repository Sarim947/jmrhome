import GlassTextureGallery from "@/components/GlassTextureGallery";
import EntranceDoorGuide from "@/components/EntranceDoorGuide";
import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import ProcurementSpec from "@/components/ProcurementSpec";
import SeriesEditorial from "@/components/SeriesEditorial";
import { createPageMetadata } from "@/lib/metadata";
import { doorDesigns } from "@/lib/data";
import shared from "../products.module.css";
import styles from "./page.module.css";
import { sizeAttrs } from "@/lib/imageSizes";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema, collectionServiceSchema, faqPageSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Front Doors with Glass in Custom Designs",
  description:
    "Custom modern front doors with glass. Compare frosted, fluted and reeded glass, door-panel glazing and sidelights for light, privacy and project dimensions.",
  keywords: ["modern front doors with glass", "front doors with glass", "frosted glass front door", "fluted glass front door", "reeded glass front door", "aluminum front door with glass"],
  path: "/products/front-doors-with-glass"
});

const configurations = [
  { title: "Front Door with Glass Panels", text: "For a modern glass front door, first locate the glazing: J-4244 uses patterned glass in the opening leaf; Fusion 5843 places fluted glass in a fixed sidelight." },
  { title: "Glass Front Entrance Doors", text: "When selecting a glass front door, distinguish glazing within the opening leaf from a fixed sidelight. Compare panel position and texture, then confirm the glass build-up for the chosen model." },
  { title: "Double Front Doors with Glass", text: "Explore custom glass double-door configurations for wider entrances. Glass build-up, leaf layout and overall frame dimensions are specified for each project.", href: "/products/double-entry-doors" }
];

const customizations = [
  { label: "Size", text: "Custom-built to your opening dimensions." },
  { label: "Glass Layout", text: "Custom glass size, position and proportions." },
  { label: "Glass", text: "Clear, frosted, fluted or reeded textures; glass build-up confirmed for the selected configuration." },
  { label: "Door System", text: "Pivot or hinged configurations." },
  { label: "Frame", text: "Aluminum or steel systems." },
  { label: "Finish", text: "Wood-look, powder-coated and custom colors." }
];

const designs = doorDesigns
  .filter((design) => design.collections.includes("front-doors-with-glass"))
  .map(({ name, img, altText, shortDesc, slug }) => ({ name, img, alt: altText, desc: shortDesc, slug }));

const faqs = [
  {
    question: "Can front doors with glass be custom sized?",
    answer: "Yes. Door dimensions and glass proportions can be built around the project opening."
  },
  {
    question: "What glass can be used in a front door?",
    answer: "Clear, frosted and patterned textures, including fluted or reeded glass, can be discussed for the selected door or sidelight. Confirm the glass build-up and texture on the project drawing."
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

const structuredData = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Front Doors with Glass", path: "/products/front-doors-with-glass" }
  ]),
  collectionServiceSchema({
    name: "Front Doors with Glass",
    description:
      "Custom front doors with glass built to your opening dimensions, with integrated glass configurations for natural light, privacy and architectural design.",
    path: "/products/front-doors-with-glass"
  }),
  faqPageSchema(faqs)
];

export default function GlassFrontDoorsPage() {
  return (
    <SiteShell>
      <JsonLd data={structuredData} />
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
                  width={1600} height={1200} src="/assets/images/products/hires/fusion-5843.webp"
                  alt="Fusion aluminum entrance door with a fixed glass sidelight" loading="eager" fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        <GlassTextureGallery />

        {/* SECTION 2 — Configurations */}
        <SeriesEditorial series="front-doors-with-glass" part="anatomy" />
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
        <EntranceDoorGuide topic="front-doors-with-glass" />

        <ProcurementSpec series="front-doors-with-glass" />

        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>Designs</span>
            <h2 className={shared.heading}>Front Door with Glass Designs</h2>
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
        <SeriesEditorial series="front-doors-with-glass" part="specify" muted />
        <SeriesEditorial series="front-doors-with-glass" part="install" />
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
