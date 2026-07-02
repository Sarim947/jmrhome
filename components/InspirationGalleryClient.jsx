"use client";

import { useEffect, useState } from "react";

export default function InspirationGalleryClient({ images }) {
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    if (!lightbox) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightbox(null);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox]);

  return (
    <>
      <div className="inspiration-collage">
        {images.map((item, index) => {
          const fullImage = item.src;
          const coverImage = item.thumb || item.src;
          const label = item.hoverText || item.doorType || item.title || "Entrance inspiration";
          const alt = item.altText || item.title || label;

          return (
            <article className="inspiration-piece" key={item.id}>
              <button
                type="button"
                className="inspiration-zoom-trigger"
                onClick={() => setLightbox({ src: fullImage, alt, label })}
                aria-label={`View larger image: ${label}`}
              >
                <img src={coverImage} alt={alt} loading={index < 4 ? "eager" : "lazy"} />
                <span className="inspiration-zoom-hint" aria-hidden="true">
                  <i className="fas fa-search-plus" />
                </span>
                <span className="inspiration-caption">{label}</span>
              </button>
            </article>
          );
        })}
      </div>

      {lightbox ? (
        <div className="image-lightbox" onClick={() => setLightbox(null)}>
          <div className="image-lightbox-inner" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="image-lightbox-close" onClick={() => setLightbox(null)} aria-label="Close large image">
              ×
            </button>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p>{lightbox.label}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}
