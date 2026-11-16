import { productStandards, formatFrameSize } from "@/lib/productStandards";
import styles from "./DoorSizeLimits.module.css";

export default function DoorSizeLimits({ families = [] }) {
  if (!families.length) return null;
  return (
    <div className={styles.block}>
      <h3>Maximum Frame Sizes by Door Construction</h3>
      <p>Width × height in millimetres, measured to the outside of the frame. Arched heights include the arch. Confirm the selected model, clear passage and any additional sidelights on the project drawing.</p>
      <div className={styles.scroll} tabIndex={0} role="region" aria-label="Maximum door frame dimensions">
        <table>
          <thead><tr><th scope="col">Door construction</th><th scope="col">Single leaf</th><th scope="col">Unequal double leaf</th><th scope="col">Equal double leaf</th></tr></thead>
          <tbody>{families.map((family) => {
            const spec = productStandards[family];
            return spec ? <tr key={family}><th scope="row">{spec.name}</th><td>{formatFrameSize(spec.single)}</td><td>{spec.singleOnly ? "Not offered" : formatFrameSize(spec.unequal)}</td><td>{spec.singleOnly ? "Not offered" : formatFrameSize(spec.double)}</td></tr> : null;
          })}</tbody>
        </table>
      </div>
      <p>These are construction-family limits, not confirmation that every pictured design is available in every arrangement. Pivot doors are supplied as a single leaf only; unequal and equal double pivot doors are not offered. Fixed sidelights are separate from the opening leaf.</p>
    </div>
  );
}
