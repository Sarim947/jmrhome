/**
 * Renders one or more schema.org JSON-LD blocks.
 *
 * `<` is escaped to \u003c so a closing script tag can never be injected
 * through content data.
 */
export default function JsonLd({ data }) {
  const blocks = Array.isArray(data) ? data : [data];

  return (
    <>
      {blocks.filter(Boolean).map((block, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(block).replace(/</g, "\\u003c")
          }}
        />
      ))}
    </>
  );
}
