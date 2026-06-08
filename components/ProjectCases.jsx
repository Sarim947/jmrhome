"use client";

import { useMemo, useState } from "react";

const categories = ["All", "Villa", "Residential", "Apartment", "Hotel", "Commercial"];

export default function ProjectCases({ cases }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const visibleCases = useMemo(() => {
    if (activeCategory === "All") return cases;
    return cases.filter((projectCase) => projectCase.category === activeCategory);
  }, [activeCategory, cases]);

  return (
    <section className="project-cases-section">
      <div className="container">
        <div className="project-cases-header">
          <div>
            <span>Project Case</span>
            <h2>Installed Entrance Door Projects</h2>
          </div>
          <p>Real residential, hotel, apartment, and commercial entrance scenes delivered for global projects.</p>
        </div>

        <div className="project-case-tabs" aria-label="Project case categories">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={category === activeCategory ? "active" : ""}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="project-case-grid">
          {visibleCases.map((projectCase) => (
            <article className="project-case-card" key={projectCase.id}>
              <img src={projectCase.img} alt={projectCase.title} loading="lazy" />
              <div className="project-case-content">
                <div className="project-case-meta">
                  <span>{projectCase.category}</span>
                  <span>{projectCase.doorType}</span>
                </div>
                <h3>{projectCase.title}</h3>
                <p>{projectCase.description}</p>
                <dl>
                  <div>
                    <dt>Address</dt>
                    <dd>{projectCase.location}</dd>
                  </div>
                  <div>
                    <dt>Time</dt>
                    <dd>{projectCase.date}</dd>
                  </div>
                </dl>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
