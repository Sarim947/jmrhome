"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const questions = [
  { key: "country", text: "Hi! Which country is your project located in?" },
  { key: "product", text: "What product are you interested in? Entry door, pivot door, copper door, or SPC wall panel?" },
  { key: "project_type", text: "Is this for a villa, residential project, dealer order, or construction project?" },
  { key: "quantity", text: "What is the estimated quantity?" },
  { key: "contact", text: "How can we contact you? Please leave your email or WhatsApp." }
];

export default function LeadChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [lead, setLead] = useState({});
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", text: questions[0].text }
  ]);
  const [done, setDone] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!input.trim() || done) return;

    const current = questions[step];
    const updatedLead = { ...lead, [current.key]: input.trim() };

    setMessages((prev) => [...prev, { role: "user", text: input.trim() }]);
    setLead(updatedLead);
    setInput("");

    const nextStep = step + 1;

    if (nextStep < questions.length) {
      setStep(nextStep);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: questions[nextStep].text }
      ]);
      return;
    }

    const contact = updatedLead.contact || "";

    const { error } = await supabase.from("leads").insert({
      country: updatedLead.country,
      product: updatedLead.product,
      project_type: updatedLead.project_type,
      quantity: updatedLead.quantity,
      email: contact.includes("@") ? contact : null,
      whatsapp: contact.includes("@") ? null : contact,
      message: `Contact: ${contact}`,
      source: "website_chatbot",
      lead_score: "unrated"
    });

    if (error) {
      console.error(error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Sorry, something went wrong. Please contact us by WhatsApp or email." }
      ]);
      return;
    }

    setDone(true);
    setMessages((prev) => [
      ...prev,
      { role: "bot", text: "Thank you! Our sales manager will review your project and contact you soon." }
    ]);
  }

  return (
    <>
      <button
        onClick={() => setOpen((value) => !value)}
        style={{
          position: "fixed",
          right: "24px",
          bottom: "92px",
          zIndex: 9999,
          border: "none",
          borderRadius: "999px",
          padding: "14px 18px",
          background: "#111827",
          color: "white",
          cursor: "pointer",
          boxShadow: "0 10px 30px rgba(0,0,0,0.25)"
        }}
      >
        Get Quote
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            right: "24px",
            bottom: "150px",
            width: "340px",
            maxWidth: "calc(100vw - 32px)",
            height: "460px",
            zIndex: 9999,
            background: "white",
            borderRadius: "18px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div style={{ padding: "16px", background: "#111827", color: "white" }}>
            <strong>Project Assistant</strong>
            <div style={{ fontSize: "12px", opacity: 0.8 }}>
              Tell us about your project
            </div>
          </div>

          <div style={{ flex: 1, padding: "14px", overflowY: "auto" }}>
            {messages.map((m, index) => (
              <div
                key={index}
                style={{
                  textAlign: m.role === "user" ? "right" : "left",
                  marginBottom: "10px"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "9px 12px",
                    borderRadius: "14px",
                    background: m.role === "user" ? "#111827" : "#f3f4f6",
                    color: m.role === "user" ? "white" : "#111827",
                    fontSize: "14px",
                    lineHeight: 1.4,
                    maxWidth: "85%"
                  }}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          {!done && (
            <form onSubmit={handleSubmit} style={{ display: "flex", gap: "8px", padding: "12px", borderTop: "1px solid #e5e7eb" }}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
                style={{
                  flex: 1,
                  border: "1px solid #d1d5db",
                  borderRadius: "999px",
                  padding: "10px 12px",
                  fontSize: "14px"
                }}
              />
              <button
                type="submit"
                style={{
                  border: "none",
                  borderRadius: "999px",
                  padding: "10px 14px",
                  background: "#111827",
                  color: "white",
                  cursor: "pointer"
                }}
              >
                Send
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}