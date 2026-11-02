import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";
import JsonLd from "@/components/JsonLd";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata = createPageMetadata({
  title: "Middle East Showcase: Dubai & Riyadh Exhibitions (2025)",
  description:
    "Two 18 sqm booths, four entrance door systems and 200+ visitors per show: JMR Habitat at HOMELIFE UAE Dubai and SAUDI ARABIA BDEXPO Riyadh in December 2025.",
  keywords: [
    "JMR Habitat Middle East",
    "HOMELIFE UAE",
    "SAUDI ARABIA BDEXPO",
    "Dubai entrance doors",
    "Riyadh door projects",
    "front doors with sidelights"
  ],
  path: "/blog/middle-east-showcase",
  openGraph: {
    type: "article"
  }
});

const headline = "Two 18 sqm Booths in Dubai and Riyadh: Four Door Systems and What Came Out of Them";

export default function MiddleEastShowcaseArticle() {
  return (
    <SiteShell>

      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Journal", path: "/blog" },
            { name: "Middle East Showcase", path: "/blog/middle-east-showcase" }
          ]),
          blogPostingSchema({
            headline,
            description: "JMR Habitat at HOMELIFE UAE (Dubai) and SAUDI ARABIA BDEXPO (Riyadh), December 2025: two 18 sqm booths, four entrance door systems, 200+ visitors per show, and a place on UAE developers' procurement lists.",
            image: "/assets/images/blog/middle-east-showcase/showcase-1.jpg",
            path: "/blog/middle-east-showcase",
            datePublished: "2026-01-12"
          })
        ]}
      />

      <main>
        <div className="container section">
          <article className="blog-article">
            <header className="article-header">
              <h1>{headline}</h1>
              <div className="article-meta">
                <span>January 12, 2026</span>
              </div>
            </header>

            <figure style={{ margin: 0 }}>
              <img
                className="article-hero-img"
                src="/assets/images/blog/middle-east-showcase/showcase-1.jpg"
                alt="The 18 sqm JMR Habitat stand at HOMELIFE UAE, Dubai World Trade Centre, with visitors inspecting entrance door samples"
                loading="eager"
              />
              <figcaption style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.6rem" }}>
                HOMELIFE UAE, Dubai World Trade Centre: the 18 sqm stand during show hours.
              </figcaption>
            </figure>

            <div className="article-content">
              <p>
                In December 2025 JMR Habitat exhibited at two Middle East trade fairs: <strong>HOMELIFE UAE</strong> at
                the Dubai World Trade Centre (17–19 December) and <strong>SAUDI ARABIA BDEXPO</strong> at the Riyadh
                Front Exhibition &amp; Conference Center (22–24 December). Both stands covered <strong>18 sqm</strong>,
                and both were built around the same four entrance door systems rather than a wall of finish samples.
              </p>

              <p>
                More than <strong>200 visitors</strong> came through each booth across the show days. Most arrived with
                something specific in hand: an opening size, an architect&apos;s drawing, or a façade photograph. That
                shaped the stand — each of the four systems was displayed with its maximum size attached, so a visitor
                could tell within a minute whether their opening was feasible.
              </p>

              <h2>Four door systems, and nothing decorative</h2>

              <p>
                The lead design was <Link href="/door-designs/fusion-5843">Fusion #5843</Link>, a thermal break aluminum
                entrance with a glazed sidelite. It is built with a <strong>90 mm door leaf and 90 mm frame</strong>, and
                double-leaf assemblies run to <strong>2280 × 3000 mm</strong>. Locking is a stainless steel multi-point
                lock, with a fingerprint lock available on request. Its sidelite uses{" "}
                <strong>5+25A+5 tempered double glazing</strong>, with clear, fluted and patterned variants for privacy.
              </p>

              <p>
                The other three systems came from the same{" "}
                <Link href="/products/front-doors-with-sidelights">front doors with sidelights</Link> range, which covers
                a single sidelight, double sidelights, and sidelights combined with a top transom.
              </p>

              <h2>The part that does not photograph: procurement conversations</h2>

              <p>
                The measurable outcome of the two shows sits on the buyer side rather than the press side. JMR Habitat is
                now in contact with property developers in the UAE and has been added to their{" "}
                <strong>procurement lists</strong> — for made-to-measure entrances, that is the step that happens before
                drawings are issued, not after a price is agreed.
              </p>

              <p>
                It also changes what a project enquiry looks like. Developer work is quoted per opening: leaf and frame
                sizes fixed per unit, glass build-up and hardware specified per building, and the entrance coordinated
                with the façade package. <Link href="/inquiry">Send the drawings or the measured opening</Link> and the
                team will confirm which of the four systems fits before quoting.
              </p>

              <h2>From the production line to the stand</h2>

              <p>
                Two of the three photographs in this article were not taken at the show. The factory images come from the
                line that built the display doors; the build-up images were taken at the venue while the stand was being
                installed — the part of an exhibition that never makes the brochure.
              </p>

              <ArticleImage
                src="/assets/images/blog/middle-east-showcase/showcase-2.jpg"
                alt="Production line and factory exterior where the JMR Habitat display doors were manufactured"
                caption="Production: the display doors were manufactured in-house before shipping."
              />

              <ArticleImage
                src="/assets/images/blog/middle-east-showcase/showcase-3.jpg"
                alt="Installation of the JMR Habitat stand at the exhibition venue before the show opened"
                caption="Build-up: stand installation at the venue, before the doors opened."
              />

              <h2>What is confirmed for 2026, and what is not</h2>

              <p>
                The <strong>2026 exhibition calendar is still being finalised</strong>, so no dates are listed here. What
                is fixed: the UAE developer contacts move into drawing review, and the four systems shown in Dubai and
                Riyadh stay in the project range with the specifications above — leaf thickness, maximum size, glazing
                and locking included, so a specifier can check them against an opening without an email round trip.
              </p>

              <p>
                For everything behind these four systems — the <Link href="/daily">recent project deliveries</Link>, how
                we <Link href="/about">manufacture</Link> to measured openings, and the{" "}
                <Link href="/door-designs/j-4244">patterned-glass entrance designs</Link> in the same range — those pages
                carry the detail.
              </p>
            </div>

            <Link href="/blog" className="back-link" style={{ marginTop: "2.5rem" }}>
              <i className="fas fa-arrow-left" /> Back to Blog
            </Link>
          </article>
        </div>
      </main>
    </SiteShell>
  );
}

function ArticleImage({ src, alt, caption }) {
  return (
    <figure style={{ margin: "2rem 0" }}>
      <img src={src} alt={alt} loading="lazy" style={{ width: "100%", borderRadius: 20 }} />
      {caption ? (
        <figcaption style={{ fontSize: "0.85rem", color: "#666", marginTop: "0.6rem" }}>{caption}</figcaption>
      ) : null}
    </figure>
  );
}
