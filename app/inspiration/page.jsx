import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import InspirationGalleryClient from "@/components/InspirationGalleryClient";
import { inspirationImages } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import JsonLd from "@/components/JsonLd";

export const metadata = createPageMetadata({
  title: "Front Door Inspiration & Entrance Design Ideas",
  description:
    "Explore front door inspiration in pivot, glass, wood-look and sculptural entrance designs. Follow design ideas through to related JMR Habitat door collections.",
  keywords: ["front door inspiration", "entrance door inspiration", "pivot door ideas", "modern entrance design"],
  path: "/inspiration"
});

export default function InspirationPage() {
  return (
    <SiteShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Inspiration", path: "/inspiration" }
        ])}
      />
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
              <h1>Entrance Door Inspiration Gallery</h1>
            </div>
            <p>
              A composed visual archive of entrance designs, arranged by editorial rhythm instead of random masonry.
            </p>
          </div>

          <InspirationGalleryClient images={inspirationImages} />
        </div>
      </main>
    </SiteShell>
  );
}
