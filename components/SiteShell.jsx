"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/daily", label: "Daily Works" },
  { href: "/blog", label: "Blog" }
];

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo">
            JMRHOME<span style={{ fontWeight: 300 }}>.LIFE</span>
          </Link>
          <button className="menu-btn" onClick={() => setMenuOpen((value) => !value)} aria-label="Open menu">
            <i className="fas fa-bars" />
          </button>
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={isActive(item.href) ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {children}

      <footer className="footer">
        <div className="container">
          <div className="social-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <div className="contact-email-area">
            <span>
              <i className="fas fa-envelope" /> huan@jmrhome.life
            </span>
            <button onClick={() => setContactOpen(true)}>Send message</button>
          </div>
          <p>&copy; 2025 Entrance Architecture</p>
        </div>
      </footer>

      <a
        href="https://wa.me/8618767505685?text=Hello%20Jmrhome%20Life%20-%20I%27m%20interested%20in%20your%20custom%20doors"
        target="_blank"
        className="whatsapp-float"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <i className="fab fa-whatsapp" />
      </a>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}

function ContactModal({ open, onClose }) {
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
console.log("FORM SUBMITTED");
event.preventDefault();

const form = new FormData(event.currentTarget);

setSending(true);

try {
const response = await fetch("/api/contact", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
name: form.get("name"),
email: form.get("email"),
message: form.get("message")
})
});

```
const result = await response.json();

if (result.success) {
  alert("Thank you! Your message has been sent.");
  event.currentTarget.reset();
  onClose();
} else {
  alert("Failed to send message.");
}
```

} catch (error) {
alert("Failed to send message.");
}

setSending(false);
}


  if (!open) return null;

  return (
    <div className="modal" style={{ display: "flex" }} onClick={onClose}>
      <div className="modal-content" onClick={(event) => event.stopPropagation()}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Contact Us</h3>
          <div className="form-group">
            <label>Name</label>
            <input name="name" type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input name="email" type="email" placeholder="your@email.com" required />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea name="message" placeholder="How can we help?" required />
          </div>
          <button type="submit" className="submit-btn" disabled={sending}>
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
        <button className="close-modal close-modal-btn" onClick={onClose} aria-label="Close contact form">
          &times;
        </button>
      </div>
    </div>
  );
}
