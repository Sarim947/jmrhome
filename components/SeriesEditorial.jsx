import { factoryFacts, seriesContent } from "@/lib/seriesContent";
import styles from "./SeriesEditorial.module.css";

/**
 * Long-form editorial block for a product series page.
 *
 * `part` is either "anatomy" (how the system physically works) or "specify"
 * (what a buyer has to decide, and in what order). Both are written per series
 * because the nine systems carry load, seal and fail in different ways.
 *
 * The factory figures render only with the anatomy block so a page never shows
 * the same trust bar twice.
 */
export default function SeriesEditorial({ series, part, id, muted = false }) {
  const content = seriesContent[series]?.[part];

  if (!content) return null;

  const anchoredId = `${part}-${id ?? series}`;

  return (
    <section
      className={`${styles.block} ${muted ? styles.blockMuted : ""}`}
      aria-labelledby={anchoredId}
    >
      <div className="container">
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 className={styles.heading} id={anchoredId}>
          {content.heading}
        </h2>
        <p className={styles.intro}>{content.intro}</p>

        <div className={styles.items}>
          {content.items.map((item, index) => (
            <article className={styles.item} key={item.title}>
              <span className={styles.index}>
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemBody}>{item.body}</p>
            </article>
          ))}
        </div>

        {part === "anatomy" ? (
          <>
            <dl className={styles.facts}>
              {factoryFacts.figures.map((figure) => (
                <div className={styles.fact} key={figure.label}>
                  <dt className={styles.factLabel}>{figure.label}</dt>
                  <dd className={styles.factValue}>{figure.value}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.factsNote}>{factoryFacts.note}</p>
          </>
        ) : null}
      </div>
    </section>
  );
}
