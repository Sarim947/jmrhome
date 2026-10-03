import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import shared from "../products.module.css";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "Custom Pivot Doors | Oversized Aluminum Pivot Doors | JMR HABITAT",
  metadataTitle: { absolute: "Custom Pivot Doors | Oversized Aluminum Pivot Doors | JMR HABITAT" },
  description:
    "Custom aluminum pivot doors from 48 × 80 in to 96 × 138 in. Compare Olang PL-01 and optional FritsJurgens hardware, glass and panel options.",
  path: "/products/pivot-doors"
});

const configurations = [
  { title: "Modern Pivot Entry Doors", text: "Custom aluminum pivot entry doors for contemporary homes, villas and architectural entrances." },
  { title: "Oversized Pivot Doors", text: "Large-format pivot doors available up to 96 × 138 in (approximately 2440 × 3505 mm), subject to project review." },
  { title: "Aluminum Pivot Doors", text: "Non-thermally broken aluminum door and frame systems with custom panel and finish options.", href: "/products/aluminum-entry-doors" }
];

const specifications = [
  { label: "Minimum Size", text: "48 × 80 in (approximately 1220 × 2030 mm)." },
  { label: "Typical Size", text: "72 × 96 in (approximately 1830 × 2440 mm)." },
  { label: "Maximum Size", text: "96 × 138 in / 8 ft × 11 ft 6 in (approximately 2440 × 3505 mm), subject to engineering review." },
  { label: "Door Leaf", text: "3-3/4 in (95 mm) thick aluminum door leaf; non-thermally broken construction." },
  { label: "Aluminum Frame", text: "3-3/4 in (95 mm) deep aluminum profile with 0.080 in (2.0 mm) wall thickness; non-thermally broken construction." },
  { label: "Door Weight", text: "Approximately 660–1,100 lb (300–500 kg), depending on door dimensions, construction and selected pivot hardware." },
  { label: "Pivot Hardware", text: "Olang PL-01 offset pivot system; optional FritsJurgens System M+ selected according to door size and weight." },
  { label: "Panel Materials", text: "Aluminum panel or sintered stone panel; a concealed ballistic steel plate can be incorporated when specified." },
  { label: "Glass Options", text: "Tempered, Low-E, frosted, ice-patterned, laminated or insulated glass. Thickness and configuration are engineered for the project." },
  { label: "Pivot Adjustment", text: "The pivot axis can be positioned for the design. The detachable mechanism permits fine vertical and horizontal adjustment after installation." }
];

const designs = [
  {
    name: "Pivot Prime #5893",
    img: "/assets/images/products/Pivot Prime door.jpg",
    alt: "Custom oversized aluminum pivot entry door",
    desc: "Offset aluminum pivot door with clean horizontal lines for high-end residential entrances."
  },
  {
    name: "J-5496",
    img: "/assets/images/products/fusion-5843/j-5496-mqqec8xv.webp",
    alt: "Modern custom pivot door with faux-oxidized metal finish",
    desc: "Modern pivot entry door with a faux-oxidized metal finish."
  }
];

const faqs = [
  {
    question: "What sizes are available for custom pivot doors?",
    answer: "Our custom pivot doors start at approximately 48 × 80 in, with 72 × 96 in as a typical project size. Oversized doors can reach approximately 96 × 138 in, subject to engineering review. Metric equivalents are provided in the specification table."
  },
  {
    question: "How much weight can the pivot hardware support?",
    answer: "The door system can be configured for door leaves of approximately 660–1,100 lb (300–500 kg). The final capacity depends on the door width, height, construction and selected pivot hardware."
  },
  {
    question: "Which pivot hardware systems are available?",
    answer: "Olang PL-01 offset pivot hardware is available as the standard option. FritsJurgens System M+ can be specified as an upgrade and is selected according to the finished door dimensions and weight."
  },
  {
    question: "Can the pivot position be adjusted?",
    answer: "Yes. The pivot axis position can be configured for the door design. After installation, the detachable pivot mechanism allows fine vertical and horizontal adjustment to align the door for smooth opening and closing."
  },
  {
    question: "What panel materials are available for pivot doors?",
    answer: "Available door-panel materials include aluminum and sintered stone. A concealed ballistic steel plate can also be incorporated when required; the protection specification must be confirmed for each project."
  },
  {
    question: "What glass options are available for pivot doors?",
    answer: "Tempered, Low-E, frosted, ice-patterned, laminated and insulated glass options are available. Glass thickness and configuration are engineered according to the door size and project requirements."
  },
  {
    question: "Are these pivot doors thermally broken?",
    answer: "No. The current aluminum door leaf and frame system uses non-thermally broken profiles."
  }
];

export default function PivotDoorsPage() {
  return (
    <SiteShell>
      <main>
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Custom Aluminum Pivot Doors</h1>
                <p className={shared.lead}>
                  Custom pivot entry doors engineered for residential and architectural openings, from 48 × 80 in to
                  oversized 96 × 138 in configurations.
                </p>
                <p className={styles.heroAux}>Custom sizes · Aluminum systems · Olang or FritsJurgens hardware · Custom glass</p>
                <div className={shared.ctaActions}>
                  <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                    Send Your Dimensions
                  </Link>
                </div>
              </div>
              <div className={shared.splitImage}>
                <img src="/assets/images/products/Pivot Prime door.jpg" alt="Oversized custom aluminum pivot entry door" />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>Configurations</span>
            <h2 className={shared.heading}>Pivot Entry Door Configurations</h2>
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

        <section className={styles.sectionCompact}>
          <div className="container">
            <span className={shared.eyebrow}>Technical Specifications</span>
            <h2 className={shared.heading}>Custom Pivot Door Sizes and Specifications</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              The final door construction and hardware selection are reviewed against the opening dimensions, finished
              door weight, panel material and glass configuration.
            </p>
            <ul className={styles.compactFeatureList}>
              {specifications.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>Designs</span>
            <h2 className={shared.heading}>Modern Pivot Door Designs</h2>
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

        <section className={shared.sectionBlock}>
          <div className="container">
            <h2 className={shared.heading}>Custom Pivot Doors FAQ</h2>
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

        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>Start Your Project</span>
            <h2 className={shared.heading}>Planning a Custom Pivot Door Project?</h2>
            <p className={shared.lead}>
              Send us the opening dimensions, drawings, panel preference and estimated quantity. We&apos;ll review the
              project and recommend a suitable pivot door construction and hardware system.
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
