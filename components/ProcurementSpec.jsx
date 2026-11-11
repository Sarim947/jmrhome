import Link from "next/link";
import {
  collectionSpecMap,
  procurementSpecs,
  sharedSupplyTerms,
  specificationNote
} from "@/lib/procurementSpecs";
import styles from "./ProcurementSpec.module.css";

/**
 * Specification and ordering table for product pages.
 *
 * `series` is a key of `procurementSpecs`; collection slugs are mapped through
 * `collectionSpecMap` so a page can pass either. Renders nothing when neither
 * resolves, so a page never ends up with an empty block.
 */
export default function ProcurementSpec({ series, id, seriesHref }) {
  const key = procurementSpecs[series] ? series : collectionSpecMap[series];
  const spec = procurementSpecs[key];

  if (!spec) return null;

  const anchoredKey = key ?? series;

  return (
    <section className={styles.block} aria-labelledby={`spec-${id ?? anchoredKey}`}>
      <div className="container">
        <p className={styles.eyebrow}>Specification &amp; ordering</p>
        <h2 className={styles.heading} id={`spec-${id ?? anchoredKey}`}>
          {spec.heading}
        </h2>
        <p className={styles.lead}>{spec.lead}</p>

        <div className={styles.columns}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Technical specification</h3>
            <dl className={styles.list}>
              {spec.rows.map(([label, value]) => (
                <div className={styles.row} key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Ordering &amp; supply</h3>
            <dl className={styles.list}>
              {sharedSupplyTerms.map(([label, value]) => (
                <div className={styles.row} key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <p className={styles.note}>
          {specificationNote}
          {seriesHref ? (
            <>
              {" "}
              Full series specification:{" "}
              <Link className={styles.noteLink} href={seriesHref}>
                {procurementSpecs[key].heading.replace(
                  / Specifications and Ordering$/,
                  ""
                )}
              </Link>
              .
            </>
          ) : null}
        </p>
      </div>
    </section>
  );
}
