import Link from "next/link";
import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: "Why Architects Are Choosing Wood-Look Aluminum Entry Doors Instead of Solid Wood",
  description:
    "Why architects prefer wood-look aluminum entry doors for luxury homes, oversized entrances, and modern architectural projects."
};

export default function WoodLookAluminumArticle() {
  return (
    <SiteShell>
      <main>
        <div className="container section">
          <article className="blog-article">

            <h1>
              Why Architects Are Choosing Wood-Look Aluminum Entry Doors Instead of Solid Wood
            </h1>

            <p>
              <div className="article-meta">
  <span>June 1, 2025</span>
</div>

<img
  className="article-hero-img"
  src="https://placehold.co/1200x700/e5e7eb/9ca3af?text=Wood-Look+Aluminum+Entry+Door"
  alt="Wood Look Aluminum Entry Door"
/>

<div className="article-content">
  <p>
    For decades, solid wood entry doors have been a symbol of luxury residential architecture.
    Their natural texture and warm appearance make them a timeless choice for custom homes.
  </p>

  <p>
    However, modern architects and door companies are increasingly turning to wood-look aluminum
    entry doors as a smarter long-term solution.
  </p>

  <p>
    Today's advanced aluminum door systems can achieve the appearance of natural timber while
    providing superior durability, weather resistance, and design flexibility.
  </p>
</div>
            </p>

            <Link href="/blog" className="back-link">
              Back to Blog
            </Link>

          </article>
        </div>
      </main>
    </SiteShell>
  );
}
