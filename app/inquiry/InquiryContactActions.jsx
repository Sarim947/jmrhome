"use client";

export default function InquiryContactActions() {
  function openContactForm() {
    window.dispatchEvent(new Event("jmrhome:open-contact"));
  }

  return (
    <div className="inquiry-actions">
      <a
        className="submit-btn inquiry-whatsapp"
        href="https://wa.me/8618767505685?text=Hello%20JMRHOME%20-%20I%20want%20to%20start%20a%20custom%20entrance%20door%20project"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp" /> WhatsApp
      </a>
      <button type="button" className="back-link inquiry-email-btn" onClick={openContactForm}>
        <i className="fas fa-envelope" /> Email us
      </button>
    </div>
  );
}
