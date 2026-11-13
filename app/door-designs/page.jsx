import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import JsonLd from "@/components/JsonLd";
import { doorDesigns, productCategories } from "@/lib/data";
import { cutoutImages } from "@/lib/cutoutImages";
import { metaForDesign } from "@/lib/designIndexMeta";
import { createPageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, itemListSchema } from "@/lib/schema";
import styles from "./page.module.css";

export const metadata = createPageMetadata({
  title: "All Entrance Door Designs",
  description:
    "Every entrance door design JMR Habitat builds, in one place. Open any thumbnail for its leaf and frame build, glazing, hardware and size range.",
  path: "/door-designs"
});

/**
 * The index is derived from `doorDesigns`, not from a hand-kept list: a design
 * added anywhere in the data layer shows up here on the next build, and a
 * design removed from the data disappears with it. Nothing on this page needs
 * editing when the range changes.
 */
export default function DoorDesignsIndexPage() {
  const designs = doorDesigns.map((design) => {
    const candidate = cutoutImages[design.slug];
    // A shared model number or similar silhouette does not establish that two
    // products have the same finish, hardware or material. Use only this
    // design's own cutout; otherwise retain its published source photograph.
    const cutout = candidate?.src === `/assets/images/products/cutouts/${design.slug}.webp`
      ? candidate
      : null;
    const meta = metaForDesign(design.slug);

    return {
      slug: design.slug,
      name: design.name,
      // The cutout is the door on transparency, so the grid shows the leaf itself
      // and not the studio wall. A design added elsewhere in the data but not
      // cut yet falls back to its published photo rather than showing a gap.
      img: cutout?.src ?? design.img,
      imgWidth: cutout?.w,
      imgHeight: cutout?.h,
      // The model is the label a customer would quote back to us; `name` mixes
      // "Jmr-2003" and "Fusion #5843" styles, so the normalised model is used.
      model: meta?.model ?? design.name,
      keywords: meta?.keywords ?? [],
      altText: design.altText,
      href: `/door-designs/${design.slug}`
    };
  });

  const listItems = designs.map((design) => ({ name: design.name, url: design.href }));

  // How many design pages each collection actually holds. Counted from the same
  // data the grid renders, so a chip can never disagree with the number of cards.
  const collectionOf = new Map(doorDesigns.map((design) => [design.slug, design.collections ?? []]));
  const countFor = (slug) =>
    designs.filter((design) => collectionOf.get(design.slug)?.includes(slug)).length;

  // Only collections that actually hold designs are offered as a shortcut. A
  // typology page can exist with no design tagged into it yet — listing it here
  // with a count of 0 would promise a grid that is empty. It appears by itself
  // the moment a design is tagged into it.
  const categories = productCategories
    .filter((category) => category.href)
    .map((category) => ({ ...category, count: countFor(category.slug) }))
    .filter((category) => category.count > 0);

  return (
    <SiteShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Products", path: "/products" },
            { name: "Door Designs", path: "/door-designs" }
          ]),
          itemListSchema({
            name: "JMR Habitat entrance door designs",
            description: "All custom entrance door designs, each linked to its own specification page.",
            items: listItems
          })
        ].filter(Boolean)}
      />
      <main>
        <div className="container section">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="separator">/</span>
            <Link href="/products">Products</Link>
            <span className="separator">/</span>
            <span className="active">Door Designs</span>
          </nav>

          <h1 className="page-heading">All Entrance Door Designs</h1>
          <p className={styles.intro}>
            Every door in the current range on one page. Open a thumbnail to see how that design is
            built, what it is made to, and which collections it belongs to.
          </p>
          <p className={styles.count}>
            {designs.length} designs, all made to project dimensions.
          </p>

          <div className={styles.chips} aria-label="Browse by collection">
            {categories.map((category) => (
              <Link key={category.slug} href={category.href} className={styles.chip}>
                {category.title}
                <span className={styles.chipCount}>{category.count}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="container">
          <div className={styles.designGrid}>
            {designs.map((design) => (
              <Link key={design.slug} href={design.href} className={styles.card}>
                <span className={styles.thumb}>
                  <img
                    src={design.img}
                    alt={design.altText}
                    width={design.imgWidth}
                    height={design.imgHeight}
                    loading="lazy"
                    decoding="async"
                  />
                </span>
                <span className={styles.cardBody}>
                  <span className={styles.model}>{design.model}</span>
                  {design.keywords.length ? (
                    <span className={styles.keywords}>{design.keywords.join(" · ")}</span>
                  ) : null}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
