import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import InspirationGalleryClient from "@/components/InspirationGalleryClient";
import { inspirationImages } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Inspiration",
  description: "Curated entrance door inspiration in an editorial Bento gallery.",
  path: "/inspiration"
});

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
          </div>

          <InspirationGalleryClient images={inspirationImages} />
        </div>
      </main>
    </SiteShell>
  );
}
