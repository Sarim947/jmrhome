"use client";

import { useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const PROJECT_TYPES = [
  "For my personal home",
  "I have a contractor project",
  "I am a dealer",
  "I am an architect / designer",
  "I am not sure yet, just exploring"
];

const questions = [
  { key: "country", text: "Which country is your project located in?" },
  { key: "contact", text: "Please leave your email or WhatsApp. This is required so we can contact you." },
  { key: "message", text: "Any project details? You may also upload photos, drawings or PDFs using the + button. This step is optional." }
];

export default function LeadChatBot() {
  const fileInputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(-1);
  const [lead, setLead] = useState({});
  const [input, setInput] = useState("");
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! Tell us about your project. What type of project is this?"
    }
  ]);
  const [done, setDone] = useState(false);

  function addMessage(role, text) {
    setMessages((prev) => [...prev, { role, text }]);
  }

  function handleProjectType(type) {
    const updatedLead = { ...lead, project_type: type };
    setLead(updatedLead);
    setStep(0);

    addMessage("user", type);
    addMessage("bot", questions[0].text);
  }

  function isEmail(value) {
    return /\S+@\S+\.\S+/.test(value);
  }

  async function uploadFiles(selectedFiles) {
    if (!selectedFiles?.length) return;

    setUploading(true);

    for (const file of selectedFiles) {
      if (file.size > 25 * 1024 * 1024) {
        addMessage("bot", `${file.name} is larger than 25MB. Please upload a smaller file.`);
        continue;
      }

      const allowedTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

      if (!allowedTypes.includes(file.type)) {
        addMessage("bot", `${file.name} is not supported. Please upload JPG, PNG, WEBP or PDF.`);
        continue;
      }

      const filePath = `${Date.now()}-${file.name}`;

      const { error } = await supabase.storage
        .from("project-uploads")
        .upload(filePath, file);

      if (error) {
        console.error(error);
        addMessage("bot", `Failed to upload ${file.name}. Please try again.`);
        continue;
      }

      const { data } = supabase.storage
        .from("project-uploads")
        .getPublicUrl(filePath);

      const uploadedFile = {
        name: file.name,
        url: data.publicUrl
      };

      setFiles((prev) => [...prev, uploadedFile]);
      addMessage("user", `📎 ${file.name}`);
    }

    setUploading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (done) return;

    const currentInput = input.trim();

    if (step === 2 && !currentInput) {
      await submitLead({ ...lead, message: "" });
      return;
    }

    if (!currentInput) return;

    const current = questions[step];
    const updatedLead = { ...lead, [current.key]: currentInput };

    addMessage("user", currentInput);
    setLead(updatedLead);
    setInput("");

    if (current.key === "contact") {
      if (!currentInput) {
        addMessage("bot", "Please leave your email or WhatsApp so we can contact you.");
        return;
      }
    }

    const nextStep = step + 1;

    if (nextStep < questions.length) {
      setStep(nextStep);
      addMessage("bot", questions[nextStep].text);
      return;
    }

    await submitLead(updatedLead);
  }

  async function submitLead(finalLead) {
    const contact = finalLead.contact || "";
    const fileUrls = files.map((file) => file.url);

    const { error } = await supabase.from("leads").insert({
      country: finalLead.country || null,
      project_type: finalLead.project_type || null,
      email: isEmail(contact) ? contact : null,
      whatsapp: isEmail(contact) ? null : contact,
      message: finalLead.message || null,
      file_urls: fileUrls,
      source: "website_chatbot",
      lead_score: "unrated"
    });

    if (error) {
      console.error(error);
      addMessage("bot", "Sorry, something went wrong. Please contact us by WhatsApp or email.");
      return;
    }

    await fetch("/api/lead-notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        country: finalLead.country || "",
        project_type: finalLead.project_type || "",
        contact,
        message: finalLead.message || "",
        files
      })
    });

    setDone(true);
    addMessage("bot", "Thank you! Our sales manager will review your project and contact you soon.");
  }

  return (
    <>
      <button
        onClick={() => setOpen((value) => !value)}
        style={{
          position: "fixed",
          right: "28px",
          bottom: "100px",
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
        Get Chat
      </button>

      {open && (
        <div
          style={{
            position: "fixed",
            right: "28px",
            bottom: "170px",
            width: "360px",
            maxWidth: "calc(100vw - 32px)",
            height: "500px",
            zIndex: 9999,
            background: "white",
            borderRadius: "18px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }}
        >
          <div
            style={{
              padding: "16px",
              background: "#111827",
              color: "white",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start"
            }}
          >
            <div>
              <strong>Project Assistant</strong>
              <div style={{ fontSize: "12px", opacity: 0.8 }}>
                Tell us about your project
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              style={{
                border: "none",
                background: "transparent",
                color: "white",
                fontSize: "22px",
                cursor: "pointer",
                lineHeight: 1
              }}
              aria-label="Close chat"
            >
              ×
            </button>
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

            {step === -1 && !done && (
              <div style={{ display: "grid", gap: "8px", marginTop: "8px" }}>
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleProjectType(type)}
                    style={{
                      border: "1px solid #d1d5db",
                      borderRadius: "999px",
                      padding: "9px 12px",
                      background: "white",
                      color: "#111827",
                      cursor: "pointer",
                      textAlign: "left",
                      fontSize: "14px"
                    }}
                  >
                    {type}
                  </button>
                ))}
              </div>
            )}
          </div>

          {!done && step >= 0 && (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                gap: "8px",
                padding: "12px",
                borderTop: "1px solid #e5e7eb"
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp,application/pdf"
                onChange={(e) => uploadFiles(e.target.files)}
                style={{ display: "none" }}
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "999px",
                  width: "40px",
                  height: "40px",
                  background: "white",
                  color: "#111827",
                  cursor: uploading ? "not-allowed" : "pointer",
                  fontSize: "22px",
                  lineHeight: 1
                }}
                title="Upload photos, drawings or PDFs"
              >
                +
              </button>

              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={step === 2 ? "Optional project details..." : "Type here..."}
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
                {step === 2 ? "Submit" : "Send"}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}