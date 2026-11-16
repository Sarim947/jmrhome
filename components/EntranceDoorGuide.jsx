import Link from "next/link";
import { entranceDoorGuides } from "@/lib/entranceDoorGuides";
import styles from "@/app/products/products.module.css";
import guideStyles from "./EntranceDoorGuide.module.css";

export default function EntranceDoorGuide({ topic }) {
  const guide = entranceDoorGuides[topic];
  if (!guide) return null;
  const headingId = `entrance-guide-${topic}`;
  return (
    <section className={styles.sectionBlock} aria-labelledby={headingId}>
      <div className="container">
        <span className={styles.eyebrow}>Choosing Your Entrance</span>
        <h2 className={styles.heading} id={headingId}>{guide.heading}</h2>
        <p className={styles.lead}>{guide.intro}</p>
        <div className={guideStyles.grid}>
          {guide.items.map((item) => (
            <article className={styles.capability} key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <ul className={guideStyles.links}>
          {guide.links.map(([href, label]) => (
            <li key={href}><Link href={href} className={styles.inlineLink}>{label}</Link></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
