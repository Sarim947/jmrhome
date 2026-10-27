import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/metadata";
import { doorDesigns, productCategories } from "@/lib/data";
import shared from "../products.module.css";
import styles from "../modern-front-doors/page.module.css";

export const metadata = createPageMetadata({
  title: "Arched Front Doors | Custom Arched Entrances",
  description:
    "Custom arched front doors built to your opening dimensions, with semicircular or segmented profiles, aluminum or steel systems, glass options and sidelights.",
  keywords: [
    "arched front doors",
    "custom arched front doors",
    "arched double front doors",
    "arched entry doors",
    "arched exterior doors",
    "arched front door with sidelights",
    "curved top front door",
    "round top front door",
    "arched steel front door",
    "arched aluminum front door",
    "custom size arched door"
  ],
  path: "/products/arched-front-doors"
});

const configurations = [
  {
    title: "Arched Double Front Doors",
    text: "Two-leaf arched entrances for wide openings, with a shared radius across both leaves.",
    href: "/products/double-entry-doors"
  },
  {
    title: "Arched Doors with Glass",
    text: "Integrated glass set into the curved head, so daylight follows the arch profile.",
    href: "/products/front-doors-with-glass"
  },
  {
    title: "Arched Doors with Sidelights",
    text: "Arched leaves combined with straight or curved sidelights and a matching transom.",
    href: "/products/front-doors-with-sidelights"
  }
];

const customizations = [
  { label: "Opening", text: "Built to your measured width, height and springing line." },
  { label: "Arc profile", text: "Semicircular, segmented, elliptical or bespoke radius." },
  { label: "Frame system", text: "Arched subframe fabricated to suit masonry or timber openings." },
  { label: "Material", text: "Aluminum or steel systems, including thermal break construction." },
  { label: "Glazing", text: "Clear, Low-E, frosted, laminated or patterned glass." },
  { label: "Finish", text: "Powder-coated colours, wood-look and hand-applied patinas." }
];

const references = [
  {
    name: "Arched Neoclassical Entry",
    img: "/assets/images/daily/Arch new classic door real.jpg",
    alt: "Cream lacquered steel arched entrance door with brass detailing",
    desc: "Arched townhouse entrance delivered for a Paris residential project.",
    href: "/daily"
  },
  {
    name: "Arched Aluminum Door with Patterned Glass",
    img: "/assets/images/products/fusion-5843/j-4244-mqqco64v.webp",
    alt: "Custom aluminum arched entrance door with patterned glass",
    desc: "Curved head with patterned glass and a slim aluminum frame.",
    href: "/door-designs/j-4244"
  },
  {
    name: "Steel-Core Arched Collection",
    img: "/assets/images/products/British panel door.jpg",
    alt: "Steel entrance door with tiered moldings in deep blue satin lacquer",
    desc: "Moulded panels and recessed detailing adapted to curved openings.",
    href: "/products/neoclassical-2250"
  }
];

const faqs = [
  {
    question: "Can arched front doors be made to a custom radius?",
    answer:
      "Yes. Each arched door is built from your measured opening, including the arc profile, springing height and radius, rather than from a fixed catalogue size."
  },
  {
    question: "Do arched doors work with pivot hardware?",
    answer:
      "They can. Pivot and hinged configurations are both possible for arched leaves; the frame and threshold are detailed around the hardware you select."
  },
  {
    question: "How is the arch formed in an aluminum or steel door?",
    answer:
      "The leaf and subframe are fabricated with a curved head section produced to the drawing, then finished and glazed as one assembly so the radius reads as a single line."
  },
  {
    question: "Can an arched entrance include glass and sidelights?",
    answer:
      "Yes. Glass can be set into the curved head or the body of the leaf, and sidelights or a transom can be combined in the same opening."
  },
  {
    question: "What do you need to quote an arched door?",
    answer:
      "A measured opening, the arc profile or a site drawing, the preferred material and finish, and any hardware requirements. Photos of the existing entrance also help."
  }
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer }
  }))
};

const hasCategory = productCategories.some((category) => category.href === "/products/arched-front-doors");
const relatedDesign = doorDesigns.find((design) => design.slug === "j-4244");

export default function ArchedFrontDoorsPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Arched Front Doors", path: "/products/arched-front-doors" }
          ]),
          faqJsonLd
        ]}
      />
      <main>
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Arched Front Doors</h1>
                <p className={shared.lead}>
                  Custom arched front doors built to your opening dimensions, with semicircular, segmented or
                  elliptical heads in aluminum or steel systems.
                </p>
                <p className={styles.heroAux}>
                  Custom radius · Aluminum and steel systems · Glass options · Matching sidelights
                </p>
                <div className={shared.ctaActions}>
                  <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                    Send Your Dimensions
                  </Link>
                </div>
              </div>
              <div className={shared.splitImage}>
                <img
                  src="/assets/images/products/fusion-5843/j-4244-mqqco64v.webp"
                  alt="Custom aluminum arched entrance door with patterned glass"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>Configurations</span>
            <h2 className={shared.heading}>Arched Entrance Door Configurations</h2>
            <div className={styles.trioGrid}>
              {configurations.map((item) => (
                <div className={styles.trioItem} key={item.title}>
                  <h3>
                    <Link href={item.href} className={shared.inlineLink}>
                      {item.title}
                    </Link>
                  </h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.sectionCompact}>
          <div className="container">
            <span className={shared.eyebrow}>Built to Your Project</span>
            <h2 className={shared.heading}>Custom Arched Entrance Doors</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              An arched entrance is set out from the opening, not from a stock size. Send the measured opening, the
              arc profile or a site drawing, and the leaf, curved head and subframe are fabricated to suit.
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

        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>References</span>
            <h2 className={shared.heading}>Arched Door Projects and Designs</h2>
            <div className={styles.designGrid}>
              {references.map((item) => (
                <Link key={item.name} href={item.href} className={styles.designCard}>
                  <img className={styles.designImage} src={item.img} alt={item.alt} loading="lazy" />
                  <h3 className={styles.designName}>{item.name}</h3>
                  <p className={styles.designDesc}>{item.desc}</p>
                </Link>
              ))}
            </div>
            {relatedDesign && hasCategory ? (
              <p className={shared.lead} style={{ marginTop: "1.5rem" }}>
                Planning a curved entrance?{" "}
                <Link href={`/door-designs/${relatedDesign.slug}`} className={shared.inlineLink}>
                  See the {relatedDesign.altText}
                </Link>{" "}
                or{" "}
                <Link href="/products/front-doors-with-glass" className={shared.inlineLink}>
                  browse entrance doors with glass
                </Link>
                .
              </p>
            ) : null}
          </div>
        </section>

        <section className={shared.sectionBlock}>
          <div className="container">
            <h2 className={shared.heading}>Arched Front Doors FAQ</h2>
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
            <h2 className={shared.heading}>Have an Arched Entrance Project?</h2>
            <p className={shared.lead}>
              Send us the opening dimensions, the arc profile or a drawing. We will review the geometry and recommend
              a suitable door system.
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
