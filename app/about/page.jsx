import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import styles from "./about.module.css";

const heroImage = "/assets/images/about/architectural-habitat-entrance.png";

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
    text: "Entry doors, pivot doors and courtyard doors configured around the facade, opening size and daily use of the project."
  },
  {
    title: "Specialty Door Systems",
    text: "Fire-rated doors, passive-house concepts and other door systems where structure, sealing and hardware matter."
  },
  {
    title: "Windows & Railings",
    text: "Window systems and aluminum railings developed to sit naturally beside the entrance, not as unrelated add-ons."
  },
  {
    title: "Outdoor Living",
    text: "Garden and outdoor products for projects where the threshold continues into courtyards, terraces and landscape."
  }
];

const processSteps = [
  "Understand the Project",
  "Configure the Right Solution",
  "Develop the Design",
  "Manufacture with Control",
  "Support Global Delivery"
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
    title: "Manufacturing Base in China",
    text: "Our production base in China gives partners room to customize while keeping pricing, sampling and export coordination under control."
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
                JMR Habitat works with architects, designers, builders and distributors on architectural entrances and the products that shape the spaces around them.
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
              <img src={heroImage} alt="" />
            </div>
            <div className={styles.storyText}>
              <span className={styles.eyebrow}>Why We Exist</span>
              <h2>What We Believe</h2>
              <p>A door should not be treated as a panel with a handle attached.</p>
              <p>It has to answer the architecture: the height of the facade, the light at the entry, the way people arrive, and the level of protection the project needs.</p>
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
                <li key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
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
            <img src={heroImage} alt="Architectural habitat concept with entrance, glazing and outdoor landscape" />
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
