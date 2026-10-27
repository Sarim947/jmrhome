import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { createPageMetadata } from "@/lib/metadata";
import shared from "../products.module.css";
import styles from "../modern-front-doors/page.module.css";

export const metadata = createPageMetadata({
  title: "Fire Rated Entrance Doors for Projects",
  description:
    "Custom fire rated entrance doors for hotel and apartment projects. Steel or aluminum, single or double leaf, built to the rating named in your specification.",
  keywords: [
    "fire rated entrance doors",
    "fire rated doors for projects",
    "fire rated steel entrance doors",
    "custom fire rated doors",
    "fire rated double doors",
    "fire rated doors with glass",
    "fire rated entrance door supplier",
    "fire rated doors for hotels",
    "fire rated apartment entrance doors",
    "fire door system supplier"
  ],
  path: "/products/fire-rated-doors"
});

const assemblyParts = [
  {
    label: "Door leaf",
    text: "Fabricated to your opening size, with the core build-up agreed against the rating your project specifies."
  },
  {
    label: "Frame",
    text: "Steel or aluminum frame produced to suit the wall construction, fixing detail and architrave on the drawing."
  },
  {
    label: "Seals",
    text: "Perimeter and rebate intumescent seals selected for the leaf and frame combination in the specification."
  },
  {
    label: "Self-closing hardware",
    text: "Closer, coordinator for double leaves and latch set, matched to the door schedule rather than added afterwards."
  },
  {
    label: "Glazing",
    text: "Vision panels or glazed apertures where the rating and the project specification permit them."
  },
  {
    label: "Ironmongery",
    text: "Handles, locks and exit devices coordinated with the schedule so the assembly arrives as one set."
  }
];

const projectInputs = [
  { label: "Rating", text: "The fire resistance period required by the project." },
  { label: "Standard", text: "The test standard your specification cites for that rating." },
  { label: "Opening", text: "Measured width and height, single or double leaf." },
  { label: "Hardware", text: "Closer, exit device and locking requirements from the door schedule." },
  { label: "Destination", text: "The country the doors ship to, because acceptance requirements differ." },
  { label: "Documentation", text: "What the project needs on paper before the order can be released." }
];

const configurations = [
  {
    title: "Fire Rated Double Doors",
    text: "Two-leaf assemblies for wide openings, with a coordinator where both leaves must close in sequence.",
    href: "/products/double-entry-doors"
  },
  {
    title: "Fire Rated Doors with Glass",
    text: "Vision panels or glazed apertures, sized and set within what the rating and the specification allow.",
    href: "/products/front-doors-with-glass"
  },
  {
    title: "Fire Rated Steel Entrance Doors",
    text: "Steel leaf and frame systems for entrances that form part of a fire compartment or protected route.",
    href: "/products/steel-entry-doors"
  }
];

const projectTypes = [
  "Hotels and serviced apartments",
  "Apartment buildings and communal entrances",
  "Offices and mixed-use developments",
  "Plant rooms and back-of-house doors"
];

const faqs = [
  {
    question: "What fire rating can you supply?",
    answer:
      "The rating comes from your project documents, not from a fixed catalogue. Send the required period and the test standard your specification cites, and we confirm what we can build and document before the order is released."
  },
  {
    question: "Are your fire rated doors certified?",
    answer:
      "Certification is project-specific. Some projects require a tested assembly listed by an accredited laboratory; others accept a manufacturer declaration with the build-up documented. Tell us which applies to your project and we will confirm before quotation whether we can meet it."
  },
  {
    question: "Can fire rated entrance doors include glass?",
    answer:
      "Where the specification allows it, yes. Glazed areas are sized and positioned within the limits of the rated assembly, and the glass type is agreed together with the rating rather than chosen afterwards."
  },
  {
    question: "Do fire rated doors need a self-closer?",
    answer:
      "In most codes a fire door has to be self-closing and positively latched. Closers, coordinators for double leaves and the seals are part of the hardware schedule we work to, not accessories added on site."
  },
  {
    question: "What do you need to quote a fire rated entrance door?",
    answer:
      "The required rating and standard, opening dimensions or drawings, single or double leaf, the hardware schedule, the quantity and the destination country. With those we can confirm feasibility and documentation before pricing."
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

export default function FireRatedDoorsPage() {
  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Fire Rated Doors", path: "/products/fire-rated-doors" }
          ]),
          faqJsonLd
        ]}
      />
      <main>
        <section className={`${shared.sectionBlock} ${shared.sectionBlockFirst}`}>
          <div className="container">
            <div className={shared.split}>
              <div>
                <h1 className={styles.heroTitle}>Fire Rated Entrance Doors</h1>
                <p className={shared.lead}>
                  Fire rated entrance door assemblies built to the rating and standard named in your project
                  documents, in steel or aluminum systems, single or double leaf, with glazed apertures where the
                  specification allows them.
                </p>
                <p className={styles.heroAux}>
                  Project-document driven · Steel and aluminum systems · Single or double leaf · Glazed apertures
                </p>
                <div className={shared.ctaActions}>
                  <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                    Send Your Specification
                  </Link>
                </div>
              </div>
              <div className={shared.splitImage}>
                <img
                  src="/assets/images/products/steel/Steel2015.jpg"
                  alt="Matte black steel entrance door with recessed vertical grooves and integrated smart lock"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>The Assembly</span>
            <h2 className={shared.heading}>What a Fire Rated Entrance Door Includes</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              A rated entrance is a set, not a leaf on its own. Each part is specified together, because the
              performance belongs to the assembly rather than to the door slab.
            </p>
            <ul className={styles.compactFeatureList}>
              {assemblyParts.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.sectionCompact}>
          <div className="container">
            <span className={shared.eyebrow}>Built to Your Project</span>
            <h2 className={shared.heading}>Made to the Rating in Your Documents</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              We do not sell one catalogue rating for every market. The rating, the standard, the hardware and the
              destination country are read from the project documents first, and the door is built around them.
            </p>
            <ul className={styles.compactFeatureList}>
              {projectInputs.map((item) => (
                <li key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={styles.sectionTight}>
          <div className="container">
            <span className={shared.eyebrow}>Configurations</span>
            <h2 className={shared.heading}>Fire Rated Entrance Configurations</h2>
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

        <section className={shared.sectionBlock}>
          <div className="container">
            <span className={shared.eyebrow}>Where They Are Used</span>
            <h2 className={shared.heading}>Project Types</h2>
            <p className={shared.lead} style={{ marginTop: "0.75rem" }}>
              Rated entrance doors usually sit on a protected route, so the drawing set decides the configuration
              more than the style does.
            </p>
            <ul className={styles.compactFeatureList}>
              {projectTypes.map((item) => (
                <li key={item}>
                  <strong>{item}</strong>
                  <span>Supplied as a complete set to the project door schedule.</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className={shared.sectionBlock}>
          <div className="container">
            <h2 className={shared.heading}>Fire Rated Entrance Doors FAQ</h2>
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
            <h2 className={shared.heading}>Have a Fire Rated Entrance Requirement?</h2>
            <p className={shared.lead}>
              Send the required rating, the standard your specification cites and the opening drawings. We will
              confirm feasibility and the documentation we can provide before any quotation.
            </p>
            <div className={shared.ctaActions}>
              <Link href="/inquiry" className={`${shared.button} ${shared.buttonPrimary}`}>
                Send Rating and Drawings
              </Link>
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
