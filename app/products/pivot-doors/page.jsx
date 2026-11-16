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
  title: "Pivot Doors for Custom Front Entrances",
  description:
    "Custom aluminum pivot doors for modern front entrances. Explore oversized sizes, panel finishes and pivot hardware, with drawings reviewed for your opening.",
  keywords: ["pivot door", "pivot doors", "custom pivot doors", "pivot front door", "oversized pivot doors", "aluminum pivot doors", "aluminium pivot doors", "modern pivot front door"],
  path: "/products/pivot-doors"
});

const configurations = [
  { title: "Single-Leaf Pivot Doors", text: "Our pivot doors have one opening leaf only. Unequal and equal double pivot doors are not offered; fixed glass sidelights can accompany the single leaf." },
  { title: "Modern Pivot Front Door", text: "A pivoting front door turns on an offset floor-and-head axis. Our aluminum exterior pivot doors use a single opening leaf, with the frame, threshold and hardware specified for the project." },
  { title: "Oversized Pivot Doors", text: "Large-format pivot doors available up to 2440 × 3550 mm overall frame size, subject to project review." },
  { title: "Aluminum Pivot Doors", text: "Aluminum pivot doors (aluminium pivot doors for Australian projects) use non-thermally broken profiles with custom panel and finish options.", href: "/products/aluminum-entry-doors" }
];

const specifications = [
  { label: "Minimum Size", text: "48 × 80 in (approximately 1220 × 2030 mm)." },
  { label: "Typical Size", text: "72 × 96 in (approximately 1830 × 2440 mm)." },
  { label: "Maximum Size", text: "2440 × 3550 mm, measured to the outside of the frame, subject to engineering review." },
  { label: "Door Leaf", text: "3-3/4 in (95 mm) thick aluminum door leaf; non-thermally broken construction." },
  { label: "Aluminum Frame", text: "3-3/4 in (95 mm) deep aluminum profile with 0.080 in (2.0 mm) wall thickness; non-thermally broken construction." },
  { label: "Door Weight", text: "Approximately 660–1,100 lb (300–500 kg), depending on door dimensions, construction and selected pivot hardware." },
  { label: "Pivot Hardware", text: "Olang PL-01 offset pivot system; optional FritsJurgens System M+ selected according to door size and weight." },
  { label: "Panel Materials", text: "Aluminum panel or sintered stone panel; a concealed ballistic steel plate can be incorporated when specified." },
  { label: "Glass Options", text: "Tempered, Low-E, frosted, ice-patterned, laminated or insulated glass. Thickness and configuration are engineered for the project." },
  { label: "Pivot Adjustment", text: "The pivot axis can be positioned for the design. The detachable mechanism permits fine vertical and horizontal adjustment after installation." }
];

const designs = doorDesigns
  .filter((design) => design.collections.includes("pivot-doors"))
  .map(({ name, img, altText, shortDesc, slug }) => ({ name, img, alt: altText, desc: shortDesc, slug }));

const faqs = [
  {
    question: "What sizes are available for custom pivot doors?",
    answer: "Our custom pivot doors start at approximately 48 × 80 in, with 72 × 96 in as a typical project size. Oversized doors can reach approximately 2440 × 3550 mm overall frame, subject to engineering review. Metric equivalents are provided in the specification table."
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

const structuredData = [
  breadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Custom Aluminum Pivot Doors", path: "/products/pivot-doors" }
  ]),
  collectionServiceSchema({
    name: "Custom Aluminum Pivot Doors",
    description:
      "Custom pivot entry doors engineered for residential and architectural openings, in custom sizes up to 2440 × 3550 mm overall frame dimensions.",
    path: "/products/pivot-doors"
  }),
  faqPageSchema(faqs)
];

export default function PivotDoorsPage() {
  return (
    <SiteShell>
      <JsonLd data={structuredData} />
      <main>
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Pivot Doors for Custom Front Entrances</h1>
                <p className={shared.lead}>
                  Custom pivot doors for modern front entrances, in custom sizes up to 2440 × 3550 mm overall frame dimensions.
                  Aluminum construction, panel finishes and pivot hardware are reviewed for your opening.
                </p>
                <p className={styles.heroAux}>Custom sizes · Aluminum systems · Olang or FritsJurgens hardware · Custom glass</p>
                <div className={shared.ctaActions}>
                  <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                    Send Your Dimensions
                  </Link>
                </div>
              </div>
              <div className={shared.splitImage}>
                <img width={1600} height={1200} src="/assets/images/products/hires/pivot-prime-5893.webp" alt="Oversized custom aluminum pivot entry door" loading="eager" fetchPriority="high" />
              </div>
            </div>
          </div>
        </section>

        <SeriesEditorial series="pivot-doors" part="anatomy" />
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
            <p className={shared.helper}>
              Still choosing between opening types? Read{" "}
              <Link href="/blog/pivot-vs-traditional" className={shared.inlineLink}>
                pivot doors compared with hinged front doors
              </Link>
              .
            </p>
          </div>
        </section>

        <EntranceDoorGuide topic="pivot-doors" />

        <ProcurementSpec series="pivot-doors" />

        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>Designs</span>
            <h2 className={shared.heading}>Modern Pivot Door Designs</h2>
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

        <SeriesEditorial series="pivot-doors" part="specify" muted />
        <SeriesEditorial series="pivot-doors" part="install" />
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
