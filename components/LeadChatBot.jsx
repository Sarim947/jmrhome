"use client";

import { useState, useRef } from "react";
import { createClient } from "@supabase/supabase-js";

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  return createClient(url, key);
}

const PROJECT_TYPES = [
  "For my personal home",
  "I am a real estate developer",
  "I am a dealer / agent",
  "I am an architect / designer",
  "I am a contractor / builder",
  "I am a company / B2B buyer"
];

export default function LeadChatBot() {
  const fileInputRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [confirmingSubmit, setConfirmingSubmit] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi! I can help with your entrance door project. Are you a homeowner, designer, dealer, developer, contractor, or B2B buyer?"
    }
  ]);
  const [done, setDone] = useState(false);

  function addMessage(role, text) {
    setMessages((prev) => [...prev, { role, text }]);
  }

  function getTranscript(chatMessages = messages) {
    return chatMessages
      .map((message) => `${message.role === "user" ? "Customer" : "Assistant"}: ${message.text}`)
      .join("\n");
  }

  function getContactFromTranscript(transcript) {
    const email = transcript.match(/\S+@\S+\.\S+/)?.[0] || "";
    const phone = transcript.match(/(?:\+\d{1,4}[\s-]?)?(?:\d[\s-]?){7,15}/)?.[0]?.trim() || "";

    return { email, phone };
  }

  async function askAssistant(userText, options = {}) {
    if (!userText || thinking || done) return;

    const visibleText = options.visibleText || userText;
    const nextMessages = [...messages, { role: "user", text: visibleText }];
    const aiMessages = options.aiText
      ? [...nextMessages, { role: "user", text: options.aiText }]
      : nextMessages;

    setMessages(nextMessages);
    setThinking(true);
    setConfirmingSubmit(false);

    try {
      const response = await fetch("/api/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          messages: aiMessages,
          files: options.filesOverride || files
        })
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        addMessage("bot", data?.error || "The AI assistant is not available yet. You can still send your inquiry with the Submit button.");
        return;
      }

      addMessage("bot", data.reply);
    } catch (error) {
      console.error(error);
      addMessage("bot", "The AI assistant is temporarily unavailable. You can still upload files and submit your inquiry.");
    } finally {
      setThinking(false);
    }
  }

  async function uploadFiles(selectedFiles) {
    if (!selectedFiles?.length) return;

    const supabase = getSupabase();

    if (!supabase) {
      addMessage("bot", "File upload is not configured yet. Please describe your project or contact us by WhatsApp.");
      return;
    }

    setUploading(true);
    const uploadedFiles = [];

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

      const safeName = file.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9._-]/g, "_");

      const filePath = `${Date.now()}-${safeName}`;

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

      uploadedFiles.push(uploadedFile);
    }

    if (uploadedFiles.length) {
      const nextFiles = [...files, ...uploadedFiles];
      const fileNames = uploadedFiles.map((file) => file.name).join(", ");

      setFiles(nextFiles);
      await askAssistant(`I uploaded reference file(s): ${fileNames}`, {
        visibleText: `📎 ${fileNames}`,
        aiText: [
          `The customer uploaded reference file(s): ${fileNames}.`,
          "DeepSeek chat cannot directly inspect image contents.",
          "Acknowledge the upload, then ask the customer to describe the key visual details you need, such as door style, color, material, size/opening, quantity, location, or what they want to copy from the image.",
          "Continue the sales conversation instead of ending the lead."
        ].join(" "),
        filesOverride: nextFiles
      });
    }

    setUploading(false);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (done) return;

    const currentInput = input.trim();
    if (!currentInput) return;
    setInput("");
    setConfirmingSubmit(false);
    await askAssistant(currentInput);
  }

  async function submitLead() {
    if (!confirmingSubmit) {
      setConfirmingSubmit(true);
      addMessage("bot", "Please click Confirm Submit when you are ready for our sales team to contact you.");
      return;
    }

    const supabase = getSupabase();
    const transcript = getTranscript();
    const contact = getContactFromTranscript(transcript);
    const fileUrls = files.map((file) => file.url);

    if (supabase) {
      const { error } = await supabase.from("leads").insert({
        country: null,
        project_type: "AI chatbot inquiry",
        email: contact.email || null,
        whatsapp: contact.email ? contact.phone || null : contact.phone || null,
        message: transcript || null,
        file_urls: fileUrls,
        source: "website_chatbot",
        lead_score: "unrated"
      });

      if (error) {
        console.error(error);
        addMessage("bot", "Sorry, something went wrong. Please contact us by WhatsApp or email.");
        return;
      }
    }

    await fetch("/api/lead-notify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        country: "",
        project_type: "AI chatbot inquiry",
        contact: contact.email || contact.phone || "",
        message: transcript || "",
        files
      })
    });

    setDone(true);
    setConfirmingSubmit(false);
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
                AI project assistant
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

            {!done && messages.length === 1 && (
              <div style={{ display: "grid", gap: "8px", marginTop: "8px" }}>
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type}
                    onClick={() => askAssistant(type)}
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

            {thinking && (
              <div style={{ color: "#6b7280", fontSize: "13px", marginTop: "4px" }}>
                Assistant is typing...
              </div>
            )}
          </div>

          {!done && (
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
                disabled={uploading || thinking}
                style={{
                  border: "1px solid #d1d5db",
                  borderRadius: "999px",
                  width: "40px",
                  height: "40px",
                  background: "white",
                  color: "#111827",
                  cursor: uploading || thinking ? "not-allowed" : "pointer",
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
                placeholder="Type your project details..."
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
                disabled={thinking}
                style={{
                  border: "none",
                  borderRadius: "999px",
                  padding: "10px 14px",
                  background: "#111827",
                  color: "white",
                  cursor: thinking ? "not-allowed" : "pointer"
                }}
              >
                Send
              </button>

              <button
                type="button"
                onClick={submitLead}
                disabled={thinking || messages.length === 1}
                style={{
                  border: "1px solid #111827",
                  borderRadius: "999px",
                  padding: "10px 12px",
                  background: "white",
                  color: "#111827",
                  cursor: thinking || messages.length === 1 ? "not-allowed" : "pointer"
                }}
              >
                {confirmingSubmit ? "Confirm" : "Submit"}
              </button>
            </form>
          )}
        </div>
      )}
    </>
  );
}
