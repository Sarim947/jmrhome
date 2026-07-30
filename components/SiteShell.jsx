"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import LeadChatBot from "@/components/LeadChatBot";
import { trackEvent } from "@/lib/analytics";
import { productCollections } from "@/lib/data";
const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/inspiration", label: "Inspiration" },
  { href: "/inquiry", label: "Inquiry" },
  { href: "/daily", label: "Daily Works" },
  { href: "/blog", label: "Blog" }
];

export default function SiteShell({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const closeNavigation = () => {
    setMenuOpen(false);
    setProductsOpen(false);
  };

  useEffect(() => {
    const openContact = () => setContactOpen(true);

    window.addEventListener("jmrhome:open-contact", openContact);
    return () => window.removeEventListener("jmrhome:open-contact", openContact);
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setProductsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setProductsOpen(false);
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  return (
    <>
      <nav className="navbar">
        <div className="container nav-container">
          <Link href="/" className="logo">
            JMRHOME<span style={{ fontWeight: 300 }}>.LIFE</span>
          </Link>
          <button
            className="menu-btn"
            onClick={() => {
              setMenuOpen((value) => !value);
              setProductsOpen(false);
            }}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <i className="fas fa-bars" />
          </button>
          <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
            {navItems.map((item) => {
              if (item.href === "/products") {
                return (
                  <li className={`nav-dropdown ${productsOpen ? "open" : ""}`} key={item.href}>
                    <button
                      type="button"
                      className={`nav-dropdown-toggle ${isActive(item.href) ? "active" : ""}`}
                      onClick={() => setProductsOpen((value) => !value)}
                      aria-expanded={productsOpen}
                    >
                      {item.label}
                      <i className="fas fa-chevron-down" />
                    </button>
                    <div className="nav-dropdown-menu">
                      <Link href="/products" className={pathname === "/products" ? "active" : ""} onClick={closeNavigation}>
                        All Products
                      </Link>
                      {productCollections.map((collection) => (
                        <Link
                          href={`/products/${collection.slug}`}
                          className={pathname === `/products/${collection.slug}` ? "active" : ""}
                          key={collection.slug}
                          onClick={closeNavigation}
                        >
                          {collection.title}
                        </Link>
                      ))}
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.href}>
                  <Link href={item.href} className={isActive(item.href) ? "active" : ""} onClick={closeNavigation}>
                    {item.label}
                  </Link>
                </li>
              );
            })}
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
            <a href="https://www.facebook.com/profile.php?id=61589389575097" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="https://www.linkedin.com/in/huansteels" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
          <div className="contact-email-area">
            <span>
              <i className="fas fa-envelope" /> huan@jmrhome.life
            </span>
            <button onClick={() => setContactOpen(true)}>Send message</button>
          </div>
          <p>&copy; 2026 Entrance Architecture</p>
        </div>
      </footer>

      <a
        href="https://wa.me/8618767505685?text=Hello%20Jmrhome%20Life%20-%20I%27m%20interested%20in%20your%20custom%20doors"
        target="_blank"
        className="whatsapp-float"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
        onClick={() =>
          trackEvent("whatsapp_click", {
            event_category: "contact",
            event_label: "floating_whatsapp"
          })
        }
      >
        <i className="fab fa-whatsapp" />
      </a>

      <button
        type="button"
        className={`back-to-top ${showBackToTop ? "show" : ""}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="fas fa-arrow-up" />
      </button>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <LeadChatBot />
    </>
  );
}

function ContactModal({ open, onClose }) {
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

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

      const result = await response.json();

      if (response.ok && result.success) {
        trackEvent("generate_lead", {
          event_category: "contact",
          event_label: "contact_form"
        });

        alert("Thank you! Your message has been sent.");
        formElement.reset();
        onClose();
      } else {
        alert(result.error || result.result?.error?.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    } finally {
      setSending(false);
    }
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
