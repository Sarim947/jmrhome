import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { inspirationImages } from "@/lib/data";

export const metadata = {
  title: "Inspiration",
  description: "Curated entrance door inspiration in an editorial Bento gallery."
};

export default function InspirationPage() {
  return (
    <SiteShell>
      <main className="inspiration-page">
        <div className="container section inspiration-section">
          <nav className="breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <span className="active">Inspiration</span>
          </nav>

          <div className="inspiration-header">
            <div>
              <span>Curated Gallery</span>
              <h1>Inspiration</h1>
            </div>
            <p>
              A composed visual archive of entrance designs, arranged by editorial rhythm instead of random masonry.
            </p>
          </div>

          <div className="inspiration-collage">
            {inspirationImages.map((item, index) => (
              <article
                className={`inspiration-piece inspiration-piece-${item.layout}`}
                key={item.id}
                style={{ "--piece-span": item.span || 4 }}
              >
                <figure>
                  <img src={item.src} alt={item.altText || item.title} loading={index < 4 ? "eager" : "lazy"} />
                  <figcaption>{item.hoverText || item.doorType}</figcaption>
                </figure>
              </article>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
