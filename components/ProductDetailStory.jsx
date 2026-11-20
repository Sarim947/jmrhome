import ProductImage from "@/components/ProductImage";
import styles from "./ProductDetailStory.module.css";

const labels = { visualization: "Design visualization", workshop: "Workshop photograph", photo: "Photographic reference", product: "Product view" };

export default function ProductDetailStory({ story }) {
  const photos = [story.feature, ...story.details, story.scene].filter(Boolean);
  return (
    <section className={styles.section} aria-labelledby="product-photo-details">
      <div className="container">
        <header className={styles.header}>
          <p className={styles.eyebrow}>{story.name} · Design details</p>
          <h2 id="product-photo-details">{story.detailHeading || "A closer look"}</h2>
        </header>
        <div className={styles.stories}>
          {photos.map((photo, index) => (
            <article key={`${photo.src}-${index}`} className={styles.row}>
              <figure className={styles.photo}>
                <ProductImage src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" />
                <figcaption>{photo.caption}</figcaption>
              </figure>
              <div className={styles.copy}>
                <p className={styles.eyebrow}>{String(index + 1).padStart(2, "0")} / {labels[photo.kind] || "Workshop photograph"}</p>
                <h3>{photo.title || story.heading || "Surface and proportion"}</h3>
                <p>{photo.description || story.intro || photo.caption}</p>
              </div>
            </article>
          ))}
        </div>
        {story.systems ? (
          <div className={styles.systems}>
            <div className={styles.systemHeading}>
              <p className={styles.eyebrow}>Construction &amp; hardware</p>
              <h3>{story.systems.heading}</h3>
              <p>{story.systems.intro}</p>
            </div>
            <dl className={styles.systemGrid}>
              {story.systems.items.map((item) => (
                <div key={item.title}>
                  <dt>{item.title}</dt>
                  <dd>{item.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        ) : null}
      </div>
    </section>
  );
}
