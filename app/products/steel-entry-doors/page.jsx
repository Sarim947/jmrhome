import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import shared from "../products.module.css";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Steel Entry Doors | Custom Steel Front Doors | JMR HABITAT",
  metadataTitle: { absolute: "Steel Entry Doors | Custom Steel Front Doors | JMR HABITAT" },
  description:
    "Custom steel entry doors built to project dimensions. Explore steel front doors with custom sizes, finishes, glass options and architectural configurations.",
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

const designs = [
  {
    name: "J-2009",
    img: "/assets/images/products/steel/Steel2009.jpg",
    alt: "Steel entry door with vertical fluted panel",
    desc: "Modern steel entry door with vertical fluted aluminum accents."
  },
  {
    name: "J-2002",
    img: "/assets/images/products/steel/Steel2002.jpg",
    alt: "Steel front door with wood grain finish",
    desc: "Steel entry door with heat transfer wood grain finish."
  },
  {
    name: "J-2006",
    img: "/assets/images/products/steel/Steel2006.jpg",
    alt: "Steel entry door with fluted texture and brushed gold handle",
    desc: "Steel entry door with full-surface fluted texture and brushed gold handle."
  },
  {
    name: "J-2007",
    img: "/assets/images/products/steel/Steel2007.jpg",
    alt: "Custom steel entry door with sandalwood wood grain finish",
    desc: "Steel entry door with sandalwood wood grain finish."
  },
  {
    name: "J-2015",
    img: "/assets/images/products/steel/Steel2015.jpg",
    alt: "Steel front door with pressed pattern design",
    desc: "Steel entry door with a subtle pressed pattern."
  }
];

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

export default function SteelEntryDoorsPage() {
  return (
    <SiteShell>
      <main>
        {/* SECTION 1 — Hero */}
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Steel Entry Doors</h1>
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
                  src="/assets/images/products/steel/Steel2009.jpg"
                  alt="Modern steel entry door"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Configurations */}
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
        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>Designs</span>
            <h2 className={shared.heading}>Steel Entry Door Designs</h2>
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
