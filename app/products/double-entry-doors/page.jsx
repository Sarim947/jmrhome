import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import shared from "../products.module.css";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Double Front Doors | Custom Double Entry Doors | JMR HABITAT",
  metadataTitle: { absolute: "Double Front Doors | Custom Double Entry Doors | JMR HABITAT" },
  description:
    "Custom double front doors and double entry doors built to project dimensions. Choose aluminum or steel systems, custom finishes, glass and door configurations.",
  path: "/products/double-entry-doors"
});

const configurations = [
  { title: "Equal Double Doors", text: "Two coordinated door leaves with equal proportions for wide entrance openings." },
  { title: "Unequal Double Doors", text: "A primary entrance door combined with a narrower secondary leaf for project-specific openings." },
  { title: "Double Front Doors with Glass", text: "Double entry doors incorporating glass panels, sidelights or project-specific glazing.", href: "/products/front-doors-with-glass" }
];

const customizations = [
  { label: "Size", text: "Custom-built to your opening dimensions." },
  { label: "Door Leaves", text: "Equal or project-specific leaf proportions." },
  { label: "Door System", text: "Hinged entrance configurations." },
  { label: "Material", text: "Aluminum or steel systems." },
  { label: "Glass", text: "Integrated glass and sidelight options." },
  { label: "Finish", text: "Wood-look, powder-coated and custom colors." }
];

const designs = [
  {
    name: "Jmr-3670",
    img: "/assets/images/products/armored/jmr3670.jpg",
    alt: "Black double front entry doors",
    desc: "Classic double entry doors in a deep matte black finish."
  },
  {
    name: "Jmr-3672",
    img: "/assets/images/products/armored/jmr3672.jpg",
    alt: "Double front entry doors with sage green finish",
    desc: "Classic double entry doors in a soft sage green finish."
  },
  {
    name: "Celestial Bronze",
    img: "/assets/images/daily/Bronze Relic render.jpg",
    alt: "Bronze double front entry doors",
    desc: "Double entry doors with radiant bronze textures."
  }
];

const faqs = [
  {
    question: "Can double front doors be custom sized?",
    answer: "Yes. The complete double-door system can be manufactured around the project opening dimensions."
  },
  {
    question: "Do both doors need to be the same width?",
    answer: "No. Double entry doors can use equal leaves, or a wider primary leaf with a narrower secondary leaf."
  },
  {
    question: "Can double front doors include glass?",
    answer: "Yes. Glass can be integrated into the door leaves or coordinated with sidelights depending on the entrance design."
  },
  {
    question: "What materials are available for double entry doors?",
    answer: "Aluminum and steel systems are available with project-specific finishes and configurations."
  },
  {
    question: "Can you make modern double front doors?",
    answer: "Yes. Modern double front doors can be produced with clean architectural detailing, custom finishes and glass options."
  }
];

export default function DoubleEntryDoorsPage() {
  return (
    <SiteShell>
      <main>
        {/* SECTION 1 — Hero */}
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Double Front Doors</h1>
                <p className={shared.lead}>
                  Custom double front doors built for wider entrance openings, with project-specific dimensions,
                  materials, finishes and configurations.
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
                  src="/assets/images/products/armored/jmr3670.jpg"
                  alt="Black double front entry doors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2 — Configurations */}
        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>Configurations</span>
            <h2 className={shared.heading}>Double Entry Door Configurations</h2>
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
            <h2 className={shared.heading}>Custom Double Entry Doors</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              Send us your opening dimensions, drawings or reference images. We manufacture double entry doors around
              the size, proportions and design requirements of your project.
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
            <h2 className={shared.heading}>Double Front Door Designs</h2>
            {designs.length > 0 ? (
              <div className={styles.designGrid}>
                {designs.map((item) => (
                  <div key={item.name}>
                    <img className={styles.designImage} src={item.img} alt={item.alt} loading="lazy" />
                    <h3 className={styles.designName}>{item.name}</h3>
                    <p className={styles.designDesc}>{item.desc}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {/* SECTION 5 — FAQ */}
        <section className={shared.sectionBlock}>
          <div className="container">
            <h2 className={shared.heading}>Double Front Doors FAQ</h2>
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
            <h2 className={shared.heading}>Have a Double Door Project?</h2>
            <p className={shared.lead}>
              Send us your opening dimensions, drawing or reference image. We&apos;ll review the entrance and recommend a
              suitable double-door configuration.
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
