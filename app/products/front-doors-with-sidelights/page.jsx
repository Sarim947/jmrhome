import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import shared from "../products.module.css";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Front Doors with Sidelights | Custom Entry Doors | JMR HABITAT",
  metadataTitle: { absolute: "Front Doors with Sidelights | Custom Entry Doors | JMR HABITAT" },
  description:
    "Custom front doors with single or double sidelights, built to project dimensions. Aluminum and steel entrance systems with custom glass, finishes and configurations.",
  path: "/products/front-doors-with-sidelights"
});

const configurations = [
  { title: "Single Sidelight", text: "One sidelight positioned on either side of the entrance door." },
  { title: "Double Sidelights", text: "Glass sidelights on both sides for wider entrance openings." },
  { title: "Sidelights + Transom", text: "Side glass combined with a top transom for larger architectural entrances." }
];

const customizations = [
  { label: "Size", text: "Custom-built to your opening dimensions." },
  { label: "Door System", text: "Pivot or hinged configurations." },
  { label: "Sidelights", text: "Single, double or project-specific layouts." },
  { label: "Glass", text: "Clear, Low-E, frosted or laminated options." },
  { label: "Frame", text: "Aluminum or steel systems." },
  { label: "Finish", text: "Wood-look, powder-coated and custom colors." }
];

const designs = [
  {
    name: "JT-02",
    img: "/assets/images/products/essentials/jt-02-mqqerx58.webp",
    alt: "Modern front door with sidelight",
    desc: "Modern entry door with sidelight and wood grain finish."
  },
  {
    name: "Fusion #5843",
    img: "/assets/images/products/Luminous Fusion door.jpg",
    alt: "Aluminum entry door with glass sidelight",
    desc: "Thermal break aluminum system with glass and sidelite."
  }
];

const faqs = [
  {
    question: "Can front doors with sidelights be custom sized?",
    answer: "Yes. Each entrance is built to your opening dimensions, including the door leaf and the sidelight panels."
  },
  {
    question: "Can I have a sidelight on only one side?",
    answer: "Yes. A single sidelight can be positioned on either side of the door, or on both sides for a wider opening."
  },
  {
    question: "What glass can be used for sidelights?",
    answer: "Sidelights can use clear, Low-E, frosted or laminated glass depending on privacy and performance requirements."
  },
  {
    question: "Can sidelights be combined with a transom?",
    answer: "Yes. Sidelights can be combined with a top transom to fill larger architectural openings."
  }
];

export default function SidelightDoorsPage() {
  return (
    <SiteShell>
      <main>
        {/* SECTION 1 — Hero */}
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Front Doors with Sidelights</h1>
                <p className={shared.lead}>
                  Custom entrance doors with single or double sidelights, built to your opening dimensions.
                </p>
                <p className={styles.heroAux}>Aluminum and steel systems · Custom glass · Custom sizes and finishes</p>
                <div className={shared.ctaActions}>
                  <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                    Send Your Dimensions
                  </Link>
                </div>
              </div>
              <div className={shared.splitImage}>
                <img
                  src="/assets/images/products/essentials/jt-02-mqqerx58.webp"
                  alt="Modern entry door with sidelight and wood grain finish"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Configurations */}
        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>Configurations</span>
            <h2 className={shared.heading}>Sidelight Configurations</h2>
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
            <h2 className={shared.heading}>Custom Front Doors with Sidelights</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              Send us your opening dimensions, drawings or reference images. We build the complete entrance system
              around your project requirements.
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
            <h2 className={shared.heading}>Sidelight Entrance Door Designs</h2>
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

        {/* SECTION 6 — FAQ */}
        <section className={shared.sectionBlock}>
          <div className="container">
            <h2 className={shared.heading}>Front Doors with Sidelights FAQ</h2>
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

        {/* SECTION 7 — CTA */}
        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>Start Your Project</span>
            <h2 className={shared.heading}>Have an Opening Size or Drawing?</h2>
            <p className={shared.lead}>
              Send us your dimensions, drawing or reference image. We&apos;ll review the opening and recommend a suitable
              door and sidelight configuration.
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
