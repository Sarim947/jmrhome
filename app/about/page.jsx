import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: "About Us",
  description:
    "Learn about Entrance Architecture - custom high-end entrance doors blending intelligent design, security, and artistic expression."
};

export default function AboutPage() {
  return (
    <SiteShell>
      <main>
        <div className="container section">
          <h2>About Us</h2>
          <p style={{ fontSize: "1.1rem", maxWidth: 800 }}>
            Founded with a passion for redefining the entrance experience, we merge Italian-inspired craftsmanship with cutting-edge technology. Every door is a unique piece of architecture - not just an entry, but a dialogue between interior and exterior.
          </p>

          <div className="about-features">
            <div>
              <i className="fas fa-pencil-ruler" />
              <h3>Design</h3>
              <p>In-house designers & global collaborations.</p>
            </div>
            <div>
              <i className="fas fa-shield-alt" />
              <h3>Security</h3>
              <p>Multi-point locking, anti-intrusion certified.</p>
            </div>
            <div>
              <i className="fas fa-gem" />
              <h3>Materials</h3>
              <p>Solid wood, metal, glass, ceramic - unlimited.</p>
            </div>
          </div>

          <div className="hero-img about-img">
            <img src="https://placehold.co/1200x500/e5e7eb/9ca3af?text=Workshop+and+Craftsmanship" alt="Craftsmanship" loading="eager" />
          </div>
        </div>
      </main>
    </SiteShell>
  );
}
