import styles from "./GlassTextureGallery.module.css";

const textures = [
  { slug: "fluted", name: "Fluted / Reeded Glass" },
  { slug: "frosted", name: "Frosted Glass" },
  { slug: "rain", name: "Rain Glass" },
  { slug: "water-ripple", name: "Water Ripple Glass" }
];

export default function GlassTextureGallery() {
  return (
    <section className={styles.section} aria-labelledby="glass-texture-options">
      <div className={`container ${styles.layout}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Glass options</p>
          <h2 id="glass-texture-options">Choose Your Glass Texture</h2>
          <p>Choose the look that suits your entrance: the regular vertical lines of fluted or reeded glass, the soft matte finish of frosted glass, or the flowing patterns of rain and water ripple glass.</p>
          <p>Confirm where the glass sits as well as its texture. On J-4244, glazing is set within the door leaf with no sidelight. A fixed glass sidelight beside another entrance design is a separate part of the assembly.</p>
          <p className={styles.note}>Texture references. Final pattern and glazing build-up are confirmed using an approved sample.</p>
        </div>
        <div className={styles.grid}>
          {textures.map((texture) => (
            <figure className={styles.card} key={texture.slug}>
              <div className={styles.imageFrame}>
                <img src={`/assets/images/glass-options/${texture.slug}.webp`} alt={`${texture.name} texture reference sample`} width={800} height={800} loading="lazy" />
              </div>
              <figcaption>{texture.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
