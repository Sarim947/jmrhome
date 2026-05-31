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
              Article under construction...
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
