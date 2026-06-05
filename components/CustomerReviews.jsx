export default function CustomerReviews() {
  const reviews = [
    {
      initials: "MR",
      name: "Michael R.",
      project: "California Villa Project",
      text: "The pivot door became the focal point of the entrance. Excellent finish and smooth operation."
    },
    {
      initials: "SW",
      name: "Sarah W.",
      project: "Melbourne Custom Home",
      text: "Great communication throughout the project. The door looks stunning and feels premium."
    },
    {
      initials: "DK",
      name: "David K.",
      project: "Texas Luxury Residence",
      text: "Exactly what we needed for a custom entrance. The size, color and hardware matched perfectly."
    },
    {
      initials: "ET",
      name: "Emma T.",
      project: "Sydney Residential Project",
      text: "The wood-look aluminum finish looks incredibly realistic and requires much less maintenance."
    },
    {
      initials: "JH",
      name: "James H.",
      project: "Florida Coastal Home",
      text: "Strong packaging, easy installation and impressive quality. A reliable supplier for custom doors."
    },
    {
      initials: "DP",
      name: "Daniel P.",
      project: "Auckland Private House",
      text: "Our architect was satisfied with the proportions, details and overall entrance appearance."
    }
  ];

  const loopReviews = [...reviews, ...reviews];

  return (
    <section className="customer-reviews-section">
      <div className="container">
        <div className="reviews-heading">
          <span>Customer Voices</span>
          <h2>Trusted by Homeowners, Builders & Architects</h2>
          <p>Custom entrance doors crafted for unique residential projects worldwide.</p>
        </div>
      </div>

      <div className="reviews-marquee">
        <div className="reviews-track">
          {loopReviews.map((review, index) => (
            <div className="review-card" key={index}>
              <div className="review-top">
                <div className="review-avatar">{review.initials}</div>
                <div>
                  <h3>{review.name}</h3>
                  <p>{review.project}</p>
                </div>
              </div>

              <div className="review-stars">★★★★★</div>

              <p className="review-text">“{review.text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}