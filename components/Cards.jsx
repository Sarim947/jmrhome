import Link from "next/link";

export function ProductCard({ product, href, onClick }) {
  const title = product.name ?? product.title;
  const image = product.img || null;

  const content = (
    <>
      {image ? <img className="card-img" src={image} alt={product.altText ?? title} loading="lazy" /> : null}
      <div className="card-content">
        <h3>{title}</h3>
        <p>{product.shortDesc}</p>
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="card product-link">
        {content}
      </Link>
    );
  }

  return (
    <button className="card product-modal-trigger as-card-button" onClick={onClick}>
      {content}
    </button>
  );
}

export function DailyCard({ work, onClick }) {
  const image = work.renderImg || work.realImg || null;

  return (
    <button className="daily-item as-card-button" onClick={onClick}>
      {image ? <img src={image} alt={work.altText ?? work.name} loading="lazy" /> : null}
      <div className="daily-info">
        <strong>{work.name}</strong>
        <br />
        <small>{work.date}</small>
        <p>{work.description.slice(0, 82)}...</p>
      </div>
    </button>
  );
}

export function BlogCard({ post }) {
  const content = (
    <>
      <img src={post.img} alt={post.title} loading="lazy" />
      <div className="blog-content">
        <h3>{post.title}</h3>
        <small>{post.date}</small>
        <p>{post.excerpt}</p>
        {post.href ? <span className="read-more">Read full article -&gt;</span> : null}
      </div>
    </>
  );

  if (post.href) {
    return (
      <Link href={post.href} className="blog-card product-link">
        {content}
      </Link>
    );
  }

  return <div className="blog-card">{content}</div>;
}
