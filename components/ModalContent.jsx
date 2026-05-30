export function ProductDetail({ product }) {
  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.img} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p className="product-description">{product.description}</p>
        <h2>Technical Specifications</h2>
        <ParamsTable params={product.params} />
      </div>
    </div>
  );
}

export function ProductSummary({ product }) {
  return (
    <>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <img
        src={product.img}
        alt={product.name}
        style={{ width: "100%", maxWidth: 400, borderRadius: 16, margin: "0 auto 1.5rem", display: "block" }}
      />
      <ParamsTable params={product.params} />
    </>
  );
}

export function DailyModalContent({ work }) {
  return (
    <>
      <h2>{work.name}</h2>
      <p>
        <strong>Finished:</strong> {work.date}
      </p>
      <div className="image-comparison">
        <div className="image-column">
          <img src={work.realImg} alt={`${work.name} real photo`} />
          <p className="image-label">Real Photo - Actual Craftsmanship</p>
        </div>
        <div className="image-column">
          <img src={work.renderImg} alt={`${work.name} render`} />
          <p className="image-label">Render - Design Technology</p>
        </div>
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
    </>
  );
}

function ParamsTable({ params }) {
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
