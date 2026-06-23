import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "JMR's Dual-City Showcase in the Middle East",
  description:
    "JMR's December 2025 event review from Dubai and Riyadh, highlighting bespoke project solutions, smart manufacturing, and Middle East project support.",
  path: "/blog/middle-east-showcase",
  openGraph: {
    type: "article"
  }
});

export default function MiddleEastShowcaseArticle() {
  return (
    <SiteShell>
      <main>
        <div className="container section">
          <article className="blog-article">
            <header className="article-header">
              <h1>JMR&apos;s Dual-City Showcase in Middle East: Defining 2026 Bespoke Projects from Dubai to Riyadh</h1>
              <div className="article-meta">
                <span>January 12, 2026</span>
              </div>
            </header>

            <img
              className="article-hero-img"
              src="/assets/images/blog/middle-east-showcase/showcase-1.jpg"
              alt="JMR experts presenting bespoke project solutions to Middle Eastern developers and contractors"
              loading="eager"
            />

            <div className="article-content">
              <p>
                <strong>[Event Review · December 2025]</strong> In December 2025, <strong>JMR</strong> made a strategic impact at the Middle East&apos;s two major trade hubs. We proudly participated in <strong>HOMELIFE UAE</strong> at the Dubai World Trade Centre from Dec 17 to 19 and <strong>SAUDI ARABIA BDEXPO</strong> at the Riyadh Front Exhibition & Conference Center from Dec 22 to 24.
              </p>

              <p>
                As a premier brand in high-end customization and engineering projects, JMR demonstrated its full-chain capabilities, from <strong>Smart Manufacturing</strong> to <strong>Systematic Project Execution</strong>.
              </p>

              <h2>Deepening Roots in KSA & UAE: Meeting Large-Scale Project Demands</h2>

              <p>
                At <strong>BDEXPO 2025</strong> in Riyadh, JMR highlighted customized solutions specifically engineered for infrastructure projects under <strong>Saudi Vision 2030</strong>. Our products earned high acclaim from local developers and contractors for their structural integrity and design flexibility.
              </p>

              <p>
                Meanwhile, at <strong>HOMELIFE UAE</strong> in Dubai, we focused on showcasing <strong>systematic interior solutions</strong> for luxury residential and commercial spaces, perfectly aligning with the UAE market&apos;s demand for premium quality and modern aesthetics.
              </p>

              <ArticleImage
                src="/assets/images/blog/middle-east-showcase/showcase-2.jpg"
                alt="JMR high-end customization showcase at premium Middle East trade exhibitions 2025"
              />

              <h2>Smart Manufacturing Powering Global Project Success</h2>

              <p>
                JMR&apos;s core competitiveness lies in our integrated ecosystem. Leveraging our advanced <strong>smart manufacturing facilities</strong>, JMR provides Middle Eastern clients with significantly shorter lead times while maintaining rigorous quality control.
              </p>

              <p>
                This <strong>one-stop support</strong>, spanning design refinement, precision production, and seamless logistics, is the cornerstone of our successful cooperation on multiple large-scale projects in the region.
              </p>

              <ArticleImage
                src="/assets/images/blog/middle-east-showcase/showcase-3.jpg"
                alt="JMR high-performance custom products and smart manufacturing for UAE and Saudi Arabian projects"
              />

              <h2>Future Outlook: JMR&apos;s Commitment to the Middle East</h2>

              <p>
                The success of these exhibitions marks a significant milestone in JMR&apos;s expansion within the Middle Eastern premium market. Moving forward, JMR will remain <strong>project-oriented</strong>, providing our partners in Saudi Arabia, the UAE, and neighboring regions with highly competitive systematic services and high-end customized products.
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

function ArticleImage({ src, alt }) {
  return <img src={src} alt={alt} style={{ width: "100%", borderRadius: 20, margin: "2rem 0" }} />;
}
