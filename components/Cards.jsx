import Link from "next/link";

export function ProductCard({ product, href, onClick }) {
  const content = (
    <>
      <img className="card-img" src={product.img} alt={product.name} loading="lazy" />
      <div className="card-content">
        <h3>{product.name}</h3>
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
  return (
    <button className="daily-item as-card-button" onClick={onClick}>
      <img src={work.renderImg} alt={work.name} loading="lazy" />
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
