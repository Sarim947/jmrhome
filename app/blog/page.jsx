import Link from "next/link";
import { BlogCard } from "@/components/Cards";
import SiteShell from "@/components/SiteShell";
import { blogPosts } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Entrance Door Guides: Materials & Design",
  description:
    "Read practical entrance door guides on pivot versus hinged doors, wood-look aluminum, historic replacements and smart entry hardware.",
  keywords: ["entrance door guides", "pivot door vs hinged door", "wood look aluminum doors", "front door design advice"],
  path: "/blog"
});

export default function BlogPage() {
  return (
    <SiteShell>
      <main>
        <div className="container section">
          <h1 className="page-heading">Entrance Door Insights & Project Journal</h1>
          <div className="grid">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          <Link href="/" className="back-link" style={{ marginTop: "1.5rem" }}>
            <i className="fas fa-arrow-left" /> Back to Home
          </Link>
        </div>
      </main>
    </SiteShell>
  );
}
