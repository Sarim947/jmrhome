import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import { createPageMetadata } from "@/lib/metadata";

const imageBase = "/assets/images/blog/historic-front-doors-modern-performance";

const tags = [
  "Historic Front Doors",
  "Custom Front Doors",
  "Door Replacement",
  "Thermal Break",
  "Traditional Doors"
];

export const metadata = createPageMetadata({
  title: "Historic Front Doors: Traditional Style, Modern Performance",
  description:
    "Discover how historic front doors can retain traditional proportions, panels, glass and hardware while adding modern insulation, sealing and security.",
  path: "/blog/historic-front-doors-modern-performance",
  openGraph: {
    type: "article"
  }
});

export default function HistoricFrontDoorsArticlePage() {
  return (
    <SiteShell>
      <main>
        <div className="container section">
          <article className="blog-article">
            <header className="article-header">
              <h1>Historic Front Door Replacement: Keep the Original Look, Add Modern Performance</h1>
              <div className="article-meta">
                <span>October 2, 2026</span>
              </div>
              <div className="article-tags" aria-label="Article tags">
                {tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </header>

            <figure className="article-figure" style={{ marginTop: 0 }}>
              <img
                className="article-hero-img"
                src={`${imageBase}/larimer-square-historic-district.webp`}
                alt="Historic brick buildings in Larimer Square, Denver"
                loading="eager"
                fetchPriority="high"
              />
              <figcaption>
                Larimer Square in Denver. Photo by Jeffrey Beall, adapted to WebP under <a href="https://creativecommons.org/licenses/by/3.0/">CC BY 3.0</a>.
              </figcaption>
            </figure>

            <div className="article-content">
              <p>Replacing a front door in a historic home is rarely a standard project. In a designated historic district, a replacement may need to match the original door&apos;s proportions, panel layout, material, colour, glass and hardware. In some cases, local preservation rules may require the existing door to be repaired rather than replaced.</p>
              <p>When historic front door replacement is permitted, the challenge is to preserve the traditional appearance without preserving the draughts, water leakage, weak seals and outdated locking systems that often come with an older entrance.</p>
              <p>Last month, our team had dinner at a restaurant in Larimer Square, Denver. One line on the bill stood out:</p>
              <p><strong>Historic preservation fee.</strong></p>
              <p>It was a small reminder that preserving older buildings requires ongoing investment. The same tension appears in historic door projects: the visible character may need to remain even when the door no longer performs to modern expectations.</p>
              <h2>Can You Replace a Historic Front Door?</h2>
              <p>The answer depends on the property and local rules. Historic districts and conservation areas may regulate changes to visible building features. Some projects permit a carefully matched replacement; others require the original door to be repaired whenever practical.</p>
              <p>Property owners should confirm whether replacement is permitted and obtain any required approval before manufacturing begins. JMR Habitat manufactures according to the confirmed drawings, dimensions, materials and finishes supplied for the project; we do not replace the role of the local authority, architect or preservation consultant.</p>
              <h2>What Must a Historic Front Door Replacement Match?</h2>
              <p>A replacement should relate to the complete façade rather than look like an isolated new product. Before quotation, we review the available photographs, measurements, drawings, samples and project requirements.</p>
              <h3>Proportions and Non-Standard Openings</h3>
              <p>Historic front doors were rarely made to today&apos;s standard sizes. An opening may be unusually tall, narrow, wide or deep, and an older building may have moved over time. Accurate measurements of the opening, frame depth, threshold and surrounding construction are essential.</p>
              <ArticleFigure
                src={`${imageBase}/arched-custom-front-door-opening.webp`}
                alt="Custom black arched front doors fitted to non-standard masonry openings"
                caption={<>Arched and other non-standard openings require project-specific dimensions, frame geometry and installation planning.</>}
              />
              <h3>Panel Layout and Traditional Details</h3>
              <p>Two-panel, four-panel and six-panel doors create very different proportions. Changing the number, position or depth of the panels can make a replacement look unrelated to the building. Where required, we can reproduce an approved arrangement from drawings, photographs or physical samples.</p>
              <h3>Material, Colour and Finish</h3>
              <p>Some projects require the original material; others may permit an alternative if the visible appearance remains appropriate. Depending on the approved specification, options may include painted timber, marine-grade plywood, aluminium, veneer or a wood-look finish.</p>
              <p>Gloss, satin and matt finishes reflect light differently, while smooth and textured surfaces can alter how the same colour appears. Samples should be approved before production.</p>
              <h3>Glass and Hardware</h3>
              <p>Historic exterior doors may include divided glazing, sidelights or a transom. The required pattern, glass type, safety specification and thermal performance should be confirmed during design.</p>
              <p>Visible hardware matters too. Knobs, knockers, escutcheons, hinges and plates should suit the entrance. Modern locks and reinforced locking areas can be incorporated behind an approved traditional appearance.</p>
              <h2>One Historic Front Door Project in Canada</h2>
              <p>A Canadian homeowner approached us about replacing the front door of a historic property. According to the project requirements provided to us, the new door needed to retain the existing entrance&apos;s traditional proportions, cream colour and glazed section.</p>
              <ArticleFigure
                src={`${imageBase}/original-historic-front-door.webp`}
                alt="Weathered original timber front door before historic replacement"
                caption={<>The original timber entrance before the replacement design was developed.</>}
              />
              <p>The homeowner initially considered an aluminium replacement with a wood-grain appearance. During the design process, he decided that a real timber surface was more appropriate.</p>
              <p>The final design used marine-grade plywood for improved moisture resistance and dimensional stability. It was finished in the required cream colour while retaining the approved glazing and proportions. Marine-grade plywood is not maintenance-free or rot-proof, but its moisture-resistant bonding makes it more suitable for demanding exterior applications than ordinary interior-grade plywood.</p>
              <ArticleFigure
                src={`${imageBase}/historic-front-door-project-drawing.webp`}
                alt="Historic front door replacement drawing with thermally broken frame and dimensions"
                caption={<>Privacy-safe project drawing showing the replacement door&apos;s proportions, materials, dimensions and thermally broken construction.</>}
              />
              <p>Because the project was in a cold Canadian climate, the frame also needed to address heat transfer and air leakage. A thermal break reduced direct conduction through the metal frame, while modern seals and threshold details improved weather resistance behind the traditional appearance.</p>
              <ArticleFigure
                src={`${imageBase}/thermally-broken-door-frame-detail.webp`}
                alt="Thermally broken door frame and sealing detail for a cold climate"
                caption={<>A thermally broken frame and continuous seals help separate the warm interior from cold exterior conditions.</>}
              />
              <h2>Traditional Front Doors with Modern Performance</h2>
              <p>Traditional front doors do not have to perform like doors built a century ago. Modern construction can sit behind an appropriate exterior design.</p>
              <h3>Insulation and Weather Sealing</h3>
              <p>An insulated door leaf and thermally broken frame can help reduce heat transfer. Continuous EPDM seals, suitable threshold geometry and drainage details can help control air and water infiltration, particularly where an entrance is exposed to wind-driven rain.</p>
              <p>Performance depends on the complete system: door, frame, threshold, seals, installation and surrounding construction. Specific U-values, ratings or certifications should only be stated when supported by the relevant tested system.</p>
              <h3>Structure and Security</h3>
              <p>An engineered frame can provide dimensional stability on large doors and in demanding climates. The lock area can be reinforced, and multipoint locking can be incorporated behind traditional visible hardware.</p>
              <h2>Front Doors for Old Houses Are Rarely Standard Sizes</h2>
              <p>Front doors for old houses may sit in openings that are out of square, deeper than modern jambs or connected to uneven floor levels. Width and height alone may not be enough.</p>
              <p>A custom project may also require:</p>
              <ul>
                <li>measurements at several points;</li>
                <li>wall and frame depth;</li>
                <li>diagonal measurements;</li>
                <li>threshold and finished-floor levels;</li>
                <li>opening direction and hinge position;</li>
                <li>photographs of the interior, exterior and complete façade;</li>
                <li>details of sidelights, transoms and adjacent construction.</li>
              </ul>
              <p>Final manufacturing dimensions should be confirmed by the party responsible for site measurement and installation.</p>
              <h2>What to Send Us</h2>
              <p>For an initial review, send:</p>
              <ul>
                <li>photographs of the existing door and façade;</li>
                <li>confirmed opening dimensions;</li>
                <li>close-ups of panels, mouldings, glass and hardware;</li>
                <li>required materials, colours and finishes;</li>
                <li>preservation or architectural requirements;</li>
                <li>project quantity and destination;</li>
                <li>any available drawings or approval documents.</li>
              </ul>
              <p>We will confirm which details can be manufactured and which items still require verification.</p>
              <h2>For Door Dealers and Installers</h2>
              <p>We work with dealers, installers, renovation contractors, architects and project buyers who need historic or traditional exterior doors made to confirmed requirements.</p>
              <p>You manage the local survey, approval and installation relationship. We support manufacturing with project review, shop drawings, finish coordination, custom sizing, production and export packaging.</p>
              <p>Small initial orders may be possible, with a typical minimum order starting from five doors depending on the design, materials and project requirements.</p>
              <h2>Frequently Asked Questions</h2>
              <h3>Does a replacement have to use the original material?</h3>
              <p>Some authorities or project specifications require it. Others may accept an alternative if the appearance remains appropriate. Confirm the approved material before finalizing the design.</p>
              <h3>Can a historic-looking door have modern insulation and locks?</h3>
              <p>Yes. Insulation, thermal breaks, seals, reinforced lock areas and multipoint locking can often be incorporated behind a traditional exterior design.</p>
              <h3>What is needed to reproduce a traditional front door?</h3>
              <p>Useful information includes façade and door photographs, confirmed dimensions, panel and moulding details, colour and finish requirements, glass specifications, hardware details and approved project documents.</p>
              <h2>Same Look. Better Door.</h2>
              <p>Historic preservation does not mean a door must perform as it did 100 years ago. Where replacement is permitted, the visible proportions, panels, colour, glass and hardware can respect the original entrance while modern construction improves insulation, sealing, drainage and security.</p>
              <div className="article-footer-cta">
                <h3>Planning a Historic or Traditional Entrance Project?</h3>
                <p>Send us the existing door photographs, confirmed dimensions, design requirements, quantity and destination. We will review manufacturing feasibility before preparing a quotation.</p>
                <p style={{ marginTop: "0.75rem" }}><Link href="/inquiry">Discuss your historic door project with JMR Habitat.</Link></p>
              </div>
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

function ArticleFigure({ src, alt, caption }) {
  return (
    <figure className="article-figure">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
