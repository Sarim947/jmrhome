import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./about.module.css";

const heroImage = "/assets/images/about/architectural-habitat-entrance.png";
const beliefImage = "/assets/images/daily/Walnut Accent Elite render.jpg";
const visionImage = "/assets/images/inspiration/20260613_10_final.webp";

export const metadata = createPageMetadata({
  title: "About JMR Habitat | Architectural Door & Living Systems",
  metadataTitle: {
    absolute: "About JMR Habitat | Architectural Door & Living Systems"
  },
  description:
    "JMR Habitat develops architectural door, railing, window and outdoor living products for project partners who need design freedom and controlled production.",
  path: "/about"
});

const buildCategories = [
  {
    title: "Architectural Doors",
    image: "/assets/images/products/Pivot Prime door.jpg",
    alt: "Architectural pivot entrance door",
    text: "Entry doors, pivot doors and courtyard doors configured around the facade and opening size."
  },
  {
    title: "Specialty Door Systems",
    image: "/assets/images/blog/pivot-sealing-system.jpg",
    alt: "Performance door sealing system detail",
    text: "Fire-rated doors, passive-house concepts and systems where sealing and hardware matter."
  },
  {
    title: "Windows & Railings",
    image: "/assets/images/inspiration/20260613_4_final.webp",
    alt: "Architectural glazing and railing concept",
    text: "Window systems and aluminum railings designed to sit naturally beside the entrance."
  },
  {
    title: "Outdoor Living",
    image: "/assets/images/inspiration/20260613_8_final.webp",
    alt: "Outdoor architectural living concept",
    text: "Garden and outdoor products where the threshold continues into terraces and landscape."
  }
];

const processSteps = [
  {
    title: "Understand the Project",
    text: "Every project begins with architecture, not products."
  },
  {
    title: "Configure the Right Solution",
    text: "Products are configured instead of selected from a fixed catalog."
  },
  {
    title: "Develop the Design",
    text: "Proportions, finishes and hardware are refined before production."
  },
  {
    title: "Manufacture with Control",
    text: "Production follows the approved configuration, not guesswork."
  },
  {
    title: "Support Global Delivery",
    text: "Export details are coordinated around project timing and destination."
  }
];

const reasons = [
  {
    title: "Design Flexibility",
    text: "We work with non-standard openings, finishes, structures and hardware choices because most good projects do not start from a catalog size."
  },
  {
    title: "Product Thinking",
    text: "A door is judged by how it looks, opens, seals, locks and ages. We consider those decisions together before production starts."
  },
  {
    title: "Engineering Confidence",
    text: "Our China-based production base helps turn custom engineering decisions into controlled sampling, pricing and export coordination."
  }
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main className={styles.aboutPage}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroIntro}>
              <span className={styles.eyebrow}>JMR Habitat</span>
              <h1>We Engineer First Impressions.</h1>
              <p>
                We create architectural entrance and living systems that combine engineering, customization and timeless design—helping architects, designers and builders transform ideas into buildings people remember.
              </p>
            </div>
          </div>

          <figure className={styles.heroImage}>
            <img src={heroImage} alt="Modern architectural villa entrance with glass doors and landscaped outdoor living space" />
          </figure>

          <div className="container">
            <div className={styles.heroFooter}>
              <p>
                We start with the moment a building meets a person: the approach, the threshold, the door, the hardware, the view beyond it.
              </p>
              <div className={styles.actions}>
                <Link href="/inquiry" className={styles.primaryAction}>
                  Start an Inquiry
                </Link>
                <Link href="/products" className={styles.secondaryAction}>
                  Explore Products
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={`${styles.storySection} ${styles.warmSection}`}>
          <div className={`container ${styles.storyGrid}`}>
            <div className={styles.storyImage} aria-hidden="true">
              <img src={beliefImage} alt="" />
            </div>
            <div className={styles.storyText}>
              <span className={styles.eyebrow}>Why We Exist</span>
              <h2>What We Believe</h2>
              <p>We don't believe every project should begin with a catalog.</p>
              <p>Architecture deserves more freedom than standard sizes and repetitive solutions.</p>
              <p>Every entrance should respond to its architecture, environment and the people who live behind it.</p>
              <p>JMR Habitat exists to make that response easier to specify, configure and produce.</p>
            </div>
          </div>
        </section>

        <section className={styles.productSection}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>What We Build</span>
              <h2>From Entrance to Habitat</h2>
            </div>
            <div className={styles.productGrid}>
              {buildCategories.map((item) => (
                <article className={styles.productItem} key={item.title}>
                  <img src={item.image} alt={item.alt} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.processSection} ${styles.warmSection}`}>
          <div className={`container ${styles.processGrid}`}>
            <div className={styles.processText}>
              <span className={styles.eyebrow}>How We Work</span>
              <h2>Configured before it is built.</h2>
              <p>
                Before production, we clarify the opening, structure, finish, hardware, locking method and delivery requirements. The work is quieter this way, and the result is better controlled.
              </p>
            </div>
            <ol className={styles.steps}>
              {processSteps.map((step, index) => (
                <li key={step.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{step.title}</strong>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.trustSection}>
          <div className={`container ${styles.trustGrid}`}>
            <div>
              <span className={styles.eyebrow}>Why Trust Us</span>
              <h2>Why Architects and Distributors Work With Us</h2>
            </div>
            <div className={styles.reasonList}>
              {reasons.map((item) => (
                <article className={styles.reason} key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.visionSection}>
          <figure className={styles.visionImage}>
            <img src={visionImage} alt="Future architectural living concept with facade, outdoor space and landscape" />
          </figure>
          <div className={`container ${styles.visionText}`}>
            <span className={styles.eyebrow}>Where We Are Going</span>
            <h2>Beyond the Entrance</h2>
            <p>
              JMR Habitat begins with doors because the entrance is where architecture becomes personal.
            </p>
            <p>
              From there, the brand is growing toward outdoor living, windows, railings and architectural products that help partners shape the full edge between building, landscape and daily life.
            </p>
          </div>
        </section>

        <section className={styles.finalCta}>
          <div className={`container ${styles.ctaInner}`}>
            <span className={styles.eyebrow}>Next Step</span>
            <h2>Have a project in mind?</h2>
            <p>
              Send the drawings, a reference image, or a rough idea. We will help you turn it into a product direction that can be priced, sampled and built.
            </p>
            <Link href="/inquiry" className={styles.primaryAction}>
              Start an Inquiry
            </Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
