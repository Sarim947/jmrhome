import Link from "next/link";
import { BlogCard } from "@/components/Cards";
import SiteShell from "@/components/SiteShell";
import { blogPosts } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Entrance Door Insights & Project Journal",
  description:
    "Guides and project stories from JMR Habitat on entrance door design, smart locking, pivot hardware, thermal performance and material choices for architects.",
  keywords: [
    "entrance door blog",
    "door design insights",
    "pivot door guide",
    "smart entry door",
    "architectural door articles"
  ],
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
