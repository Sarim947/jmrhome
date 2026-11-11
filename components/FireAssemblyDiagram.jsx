import styles from "./FireAssemblyDiagram.module.css";

/**
 * Illustrative section of a rated entrance head.
 *
 * Deliberately drawn, not photographed or scanned: it explains which parts make
 * up the tested set without reproducing a certificate, a label or a test report
 * number. The caption says so, because an illustration standing in for a
 * certificate is the kind of thing a buyer should be told about rather than
 * left to assume.
 */
export default function FireAssemblyDiagram() {
  return (
    <figure className={styles.figure}>
      <svg
        className={styles.svg}
        viewBox="0 0 820 400"
        role="img"
        aria-labelledby="fire-section-title fire-section-desc"
      >
        <title id="fire-section-title">Section through the head of a rated entrance door</title>
        <desc id="fire-section-desc">
          A vertical section showing the rated wall above, the steel frame head, the intumescent
          seal at the leaf perimeter, and the leaf made of a steel skin over a non-combustible core.
        </desc>

        <rect x="0" y="0" width="820" height="400" fill="#ffffff" />

        {/* rated wall above */}
        <g>
          <rect x="60" y="34" width="700" height="44" fill="#eef1f4" stroke="#c3cbd4" />
          <rect x="60" y="78" width="700" height="44" fill="#eef1f4" stroke="#c3cbd4" />
          <text x="410" y="103" textAnchor="middle" className={styles.labelMuted}>
            RATED WALL — to the tested detail
          </text>
        </g>

        {/* frame head */}
        <rect x="60" y="122" width="700" height="42" fill="#dfe4ea" stroke="#111827" strokeWidth="1.5" />
        <text x="410" y="149" textAnchor="middle" className={styles.label}>
          2.0 mm steel frame
        </text>

        {/* intumescent seal */}
        <rect x="92" y="164" width="636" height="24" fill="#d9a441" />
        <text x="410" y="181" textAnchor="middle" className={styles.labelSeal}>
          INTUMESCENT SEAL — leaf perimeter
        </text>

        {/* leaf */}
        <rect x="92" y="188" width="636" height="152" fill="#ffffff" stroke="#111827" strokeWidth="1.5" />
        <text x="410" y="222" textAnchor="middle" className={styles.labelMuted}>
          1.0 mm galvanized steel skin
        </text>
        <text x="410" y="256" textAnchor="middle" className={styles.labelStrong}>
          MGO core · non-combustible
        </text>
        <text x="410" y="292" textAnchor="middle" className={styles.labelMuted}>
          Non-rated core options: aluminum honeycomb or water-based PU foam
        </text>
        <text x="410" y="318" textAnchor="middle" className={styles.labelMuted}>
          Closer · hinges · lock · glazing are named in the test report
        </text>

        {/* finished floor line */}
        <line x1="40" y1="340" x2="780" y2="340" stroke="#111827" strokeWidth="1" strokeDasharray="6 5" />
        <text x="60" y="362" className={styles.labelMuted}>
          finished floor
        </text>

        {/* section marker */}
        <g stroke="#9aa3ad" strokeWidth="1">
          <line x1="784" y1="34" x2="784" y2="340" strokeDasharray="3 4" />
        </g>
      </svg>
      <figcaption className={styles.caption}>
        Illustrative section, drawn to explain the assembly rather than to document it. It is not a
        certificate and it does not name the hardware schedule. The rating applies to the exact
        assembly in the test report issued for your project.
      </figcaption>
    </figure>
  );
}
