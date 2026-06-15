import Link from "next/link";
import { BlogCard } from "@/components/Cards";
import SiteShell from "@/components/SiteShell";
import { blogPosts } from "@/lib/data";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Blog",
  description: "Read articles about entrance design, security innovations, and custom door craftsmanship.",
  path: "/blog"
});

export default function BlogPage() {
  return (
    <SiteShell>
      <main>
        <div className="container section">
          <h2>Journal</h2>
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
