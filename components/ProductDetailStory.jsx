import ProductImage from "@/components/ProductImage";
import styles from "./ProductDetailStory.module.css";

function DetailPhoto({ photo, className }) {
  return (
    <figure className={className}>
      <ProductImage src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" />
      <figcaption>{photo.caption}</figcaption>
    </figure>
  );
}

export default function ProductDetailStory({ story }) {
  return (
    <section className={styles.section} aria-labelledby="product-photo-details">
      <div className="container">
        <div className={styles.feature}>
          <DetailPhoto photo={story.feature} className={styles.featurePhoto} />
          <div className={styles.copy}>
            <p className={styles.eyebrow}>J-2008 · Workshop photographs</p>
            <h2 id="product-photo-details">Texture, seen up close</h2>
            <p>A tall vertical pull and a narrow band of fluted detailing give J-2008 its distinctive front face. These workshop photographs show the surface and handle from different angles.</p>
            <div className={styles.rule} />
            <p className={styles.small}>Explore the photographed finish below. Final finish and hardware selections are confirmed for your order.</p>
          </div>
        </div>
        <div className={styles.cards}>
          {story.details.map((photo) => (
            <article key={photo.src}>
              <DetailPhoto photo={photo} className={styles.cardPhoto} />
              <h3>{photo.title}</h3>
              <p>{photo.description}</p>
            </article>
          ))}
        </div>
        {story.scene ? (
          <div className={styles.scene}>
            <div className={styles.copy}>
              <p className={styles.eyebrow}>Design visualization</p>
              <h2>An entrance in context</h2>
              <p>An illustrative setting for the J-2008 design. Refer to the workshop photographs above for the actual photographed door and finish.</p>
            </div>
            <DetailPhoto photo={story.scene} className={styles.scenePhoto} />
          </div>
        ) : null}
      </div>
    </section>
  );
}
