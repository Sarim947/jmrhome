import Link from "next/link";
import SiteShell from "@/components/SiteShell";
import InquiryContactActions from "./InquiryContactActions";
import InquiryForm from "./InquiryForm";

export const metadata = {
  title: "Project Inquiry",
  description: "Start a custom entrance door project with JMRHOME.LIFE."
};

const capabilities = [
  {
    icon: "fas fa-ruler-combined",
    title: "Custom Size",
    text: "Made to exact opening dimensions"
  },
  {
    icon: "fas fa-palette",
    title: "Custom Finish",
    text: "Wood grain, metal, glass, and color options"
  },
  {
    icon: "fas fa-drafting-compass",
    title: "OEM / ODM",
    text: "Design development for projects and brands"
  },
  {
    icon: "fas fa-shield-alt",
    title: "Security System",
    text: "Armored structure and smart lock options"
  },
  {
    icon: "fas fa-boxes",
    title: "Bulk Order Support",
    text: "Factory pricing for multi-unit projects"
  }
];

const trustItems = [
  {
    icon: "fas fa-industry",
    title: "Factory Direct Price",
    text: "Competitive pricing from our own supply chain"
  },
  {
    icon: "fas fa-certificate",
    title: "OEM & ODM Support",
    text: "Professional project and brand support"
  },
  {
    icon: "fas fa-stopwatch",
    title: "Fast Production",
    text: "Efficient lead time and stable quality"
  },
  {
    icon: "fas fa-truck",
    title: "On-time Delivery",
    text: "Reliable logistics to your destination"
  }
];

export default function InquiryPage() {
  return (
    <SiteShell>
      <main className="inquiry-page">
        <section className="inquiry-landing">
          <div className="container">
            <div className="inquiry-hero-panel">
              <nav className="breadcrumb">
                <Link href="/">Home</Link>
                <span className="separator">/</span>
                <span className="active">Inquiry</span>
              </nav>
              <div className="inquiry-brand">JMRHOME<span>.LIFE</span></div>
              <div className="inquiry-hero-content">
                <h1>Start Your Custom Entrance Project</h1>
                <p>Custom high-end entrance door solutions with size, finish, security system, smart lock, and bulk project support.</p>
              </div>
            </div>

            <div className="inquiry-capabilities" aria-label="Custom project capabilities">
              {capabilities.map((item) => (
                <div className="inquiry-capability" key={item.title}>
                  <i className={item.icon} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>

            <InquiryForm />

            <div className="inquiry-trust-strip">
              {trustItems.map((item) => (
                <div className="inquiry-trust-item" key={item.title}>
                  <i className={item.icon} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="inquiry-contact-band">
              <div>
                <strong>Need a fast reply?</strong>
                <span>Send drawings, references, or rough dimensions directly to our team.</span>
              </div>
              <InquiryContactActions />
            </div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
