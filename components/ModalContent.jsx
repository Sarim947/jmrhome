"use client";

import { useEffect, useState } from "react";

export function ProductDetail({ product }) {
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
      <div className="product-detail">
        <div className="product-detail-image">
          {product.img ? (
            <button
              type="button"
              className="product-image-zoom-trigger"
              onClick={() => setLightbox({ src: product.img, alt: product.altText ?? product.name, label: product.name })}
              aria-label={`View larger image of ${product.name}`}
            >
              <img src={product.img} alt={product.altText ?? product.name} />
              <span className="zoom-hint">
                <i className="fas fa-search-plus" />
              </span>
            </button>
          ) : null}
        </div>
        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <h2>Technical Specifications</h2>
          <ParamsTable params={product.params} />
        </div>
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

export function ProductSummary({ product }) {
  return (
    <>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {product.img ? (
        <img
          src={product.img}
          alt={product.altText ?? product.name}
          style={{ width: "100%", maxWidth: 400, borderRadius: 16, margin: "0 auto 1.5rem", display: "block" }}
        />
      ) : null}
      <ParamsTable params={product.params} />
    </>
  );
}

export function DailyModalContent({ work }) {
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
      <h2>{work.name}</h2>
      <p>
        <strong>Finished:</strong> {work.date}
      </p>
      <div className="image-comparison">
        {work.realImg ? (
          <div className="image-column">
            <button
              type="button"
              className="image-zoom-trigger"
              onClick={() => setLightbox({ src: work.realImg, alt: `${work.name} real photo`, label: "Real Photo - Actual Craftsmanship" })}
              aria-label={`View larger real photo of ${work.name}`}
            >
              <img src={work.realImg} alt={`${work.name} real photo`} />
            </button>
            <p className="image-label">Real Photo - Actual Craftsmanship</p>
          </div>
        ) : null}
        {work.renderImg ? (
          <div className="image-column">
            <button
              type="button"
              className="image-zoom-trigger"
              onClick={() => setLightbox({ src: work.renderImg, alt: `${work.name} render`, label: "Render - Design Technology" })}
              aria-label={`View larger render of ${work.name}`}
            >
              <img src={work.renderImg} alt={`${work.name} render`} />
            </button>
            <p className="image-label">Render - Design Technology</p>
          </div>
        ) : null}
      </div>
      <p>{work.description}</p>
      <div className="modal-params">
        <h3>Technical Specifications</h3>
        <div className="param-row">
          <span className="param-label">Structure:</span>
          <span className="param-value">{work.structure}</span>
        </div>
        <div className="param-row">
          <span className="param-label">Surface Finish:</span>
          <span className="param-value">{work.surfaceFinish}</span>
        </div>
      </div>
      <div className="modal-philosophy">
        <h3>Design Philosophy</h3>
        <p>{work.designPhilosophy}</p>
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

function ParamsTable({ params }) {
  if (!params) return null;

  return (
    <div className="product-params">
      {Object.entries(params).map(([key, value]) => (
        <div className="param-row" key={key}>
          <span className="param-label">{labelize(key)}</span>
          <span className="param-value">{value}</span>
        </div>
      ))}
    </div>
  );
}

function labelize(value) {
  return value.replace(/([A-Z])/g, " $1").replace(/^./, (letter) => letter.toUpperCase());
}
