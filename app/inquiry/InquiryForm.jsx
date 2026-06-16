"use client";

import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { trackEvent } from "@/lib/analytics";

const doorTypes = ["Pivot Door", "Armored Door", "Steel Door", "Glass / Sidelite Door", "Apartment Door", "Other"];
const customNeeds = ["Custom Size", "Custom Finish", "Smart Lock", "OEM / ODM", "Logo / Brand", "Full Project Solution"];
const customerTypes = [
  "Homeowner / Own Home",
  "Real Estate Developer",
  "Dealer / Agent",
  "Architect / Designer",
  "Contractor / Builder",
  "Company / B2B Buyer",
  "Other"
];
const materialOptions = ["Steel", "Aluminum", "Steel + Aluminum", "Thermal Break Aluminum", "Glass Combination", "Not Sure Yet"];
const quantityOptions = ["1 Set", "2-10 Sets", "11-50 Sets", "50+ Sets", "Project To Be Confirmed"];
const allowedFileTypes = ["image/jpeg", "image/png", "image/webp", "application/pdf"];

function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  return createClient(url, key);
}

function getCheckedValues(form, name) {
  return form.getAll(name).join(", ") || "Not provided";
}

function isEmail(value) {
  return /\S+@\S+\.\S+/.test(value);
}

function getSafeFileName(fileName) {
  return fileName
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9._-]/g, "_");
}

async function uploadReferenceFiles(selectedFiles) {
  const files = Array.from(selectedFiles || []).filter((file) => file.size > 0);

  if (!files.length) return [];

  const supabase = getSupabase();

  if (!supabase) {
    throw new Error("File upload is not configured yet. Please contact us by WhatsApp or email.");
  }

  const uploadedFiles = [];

  for (const file of files) {
    if (file.size > 25 * 1024 * 1024) {
      throw new Error(`${file.name} is larger than 25MB. Please upload a smaller file.`);
    }

    if (!allowedFileTypes.includes(file.type)) {
      throw new Error(`${file.name} is not supported. Please upload JPG, PNG, WEBP or PDF.`);
    }

    const safeName = getSafeFileName(file.name);
    const filePath = `${Date.now()}-${safeName}`;
    const { error } = await supabase.storage
      .from("project-uploads")
      .upload(filePath, file);

    if (error) {
      console.error(error);
      throw new Error(`Failed to upload ${file.name}. Please try again.`);
    }

    const { data } = supabase.storage
      .from("project-uploads")
      .getPublicUrl(filePath);

    uploadedFiles.push({
      name: file.name,
      url: data.publicUrl
    });
  }

  return uploadedFiles;
}

export default function InquiryForm() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const [messageLength, setMessageLength] = useState(0);
  const [selectedFiles, setSelectedFiles] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    setStatus("sending");
    setFeedback("");

    try {
      const uploadedFiles = await uploadReferenceFiles(form.getAll("referenceFiles"));
      const fileLinks = uploadedFiles.length
        ? uploadedFiles.map((file) => `${file.name}: ${file.url}`).join("\n")
        : "Not uploaded";
      const email = form.get("email") || "";
      const whatsapp = form.get("whatsapp") || "";
      const contact = whatsapp || email;
      const message = [
        `Name: ${form.get("name") || "Not provided"}`,
        `Email: ${email || "Not provided"}`,
        `I am a/an: ${form.get("customerType") || "Not provided"}`,
        `Door type: ${getCheckedValues(form, "doorType")}`,
        `Customization needed: ${getCheckedValues(form, "customNeed")}`,
        `Size requirement: ${form.get("sizeRequirement") || "Not provided"}`,
        `Material preference: ${form.get("materialPreference") || "Not provided"}`,
        `Order quantity: ${form.get("orderQuantity") || "Not provided"}`,
        `Country / market: ${form.get("country") || "Not provided"}`,
        `WhatsApp: ${form.get("whatsapp") || "Not provided"}`,
        `Reference files:\n${fileLinks}`,
        "",
        form.get("message")
      ].join("\n");

      const supabase = getSupabase();

      if (supabase) {
        const { error } = await supabase.from("leads").insert({
          country: form.get("country") || null,
          project_type: getCheckedValues(form, "doorType"),
          email: isEmail(email) ? email : null,
          whatsapp: whatsapp || null,
          message,
          file_urls: uploadedFiles.map((file) => file.url),
          source: "website_inquiry_form",
          lead_score: "unrated"
        });

        if (error) {
          console.error(error);
          throw new Error("Failed to save inquiry. Please try again or contact us by WhatsApp.");
        }
      }

      const response = await fetch("/api/lead-notify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          country: form.get("country") || "",
          project_type: getCheckedValues(form, "doorType"),
          contact,
          message,
          files: uploadedFiles
        })
      });

      const result = await response.json();

      if (response.ok && result.success) {
        trackEvent("generate_lead", {
          event_category: "inquiry",
          event_label: "project_inquiry_form"
        });

        setStatus("sent");
        setFeedback("Thank you. Your inquiry has been sent, and our team will reply shortly.");
        setMessageLength(0);
        setSelectedFiles([]);
        formElement.reset();
      } else {
        setStatus("error");
        setFeedback(result.error || result.result?.error?.message || "Failed to send inquiry.");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
      setFeedback("Failed to send inquiry. Please try again or contact us on WhatsApp.");
    }
  }

  return (
    <form className="contact-form inquiry-form" onSubmit={handleSubmit}>
      <div className="inquiry-form-heading">
        <i className="fas fa-file-signature" />
        <div>
          <h2>Custom Entrance Door Inquiry</h2>
          <p>Please fill in the form below. Our sales team will contact you with the next step.</p>
        </div>
      </div>

      <div className="form-group inquiry-wide">
        <label>Door Type</label>
        <div className="inquiry-check-grid">
          {doorTypes.map((type) => (
            <label className="inquiry-check" key={type}>
              <input name="doorType" type="checkbox" value={type} />
              <span>{type}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="form-group inquiry-wide">
        <label>Customization Needed</label>
        <div className="inquiry-check-grid two-col">
          {customNeeds.map((need) => (
            <label className="inquiry-check" key={need}>
              <input name="customNeed" type="checkbox" value={need} />
              <span>{need}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="inquiry-form-row">
        <div className="form-group">
          <label>Size Requirement</label>
          <input name="sizeRequirement" type="text" placeholder="Width x height, or opening size" />
        </div>
        <div className="form-group">
          <label>Material Preference</label>
          <select name="materialPreference" defaultValue="">
            <option value="" disabled>Select material</option>
            {materialOptions.map((material) => (
              <option key={material} value={material}>{material}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Order Quantity</label>
          <select name="orderQuantity" defaultValue="">
            <option value="" disabled>Select quantity range</option>
            {quantityOptions.map((quantity) => (
              <option key={quantity} value={quantity}>{quantity}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="inquiry-form-row">
        <div className="form-group">
          <label>I am a / an <span>*</span></label>
          <select name="customerType" defaultValue="" required>
            <option value="" disabled>Select your identity</option>
            {customerTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Country / Market <span>*</span></label>
          <input name="country" type="text" placeholder="Country / market" required />
        </div>
        <div className="form-group">
          <label>Name <span>*</span></label>
          <input name="name" type="text" placeholder="Your name" required />
        </div>
      </div>

      <div className="inquiry-form-row">
        <div className="form-group">
          <label>WhatsApp <span>*</span></label>
          <input name="whatsapp" type="text" placeholder="e.g. +86 / +1 / +971 ..." required />
        </div>
        <div className="form-group">
          <label>Email <span>*</span></label>
          <input name="email" type="email" placeholder="name@company.com" required />
        </div>
        <div className="form-group">
          <label>Upload Drawing or Reference Image</label>
          <input
            name="referenceFiles"
            type="file"
            accept="image/jpeg,image/png,image/webp,application/pdf"
            multiple
            onChange={(event) => setSelectedFiles(Array.from(event.target.files || []))}
          />
          {selectedFiles.length ? (
            <small className="inquiry-file-list">
              {selectedFiles.map((file) => file.name).join(", ")}
            </small>
          ) : null}
        </div>
      </div>

      <div className="form-group inquiry-wide">
        <label>Project Details / Message</label>
        <textarea
          name="message"
          maxLength={1000}
          onChange={(event) => setMessageLength(event.target.value.length)}
          placeholder="Please describe your project, design idea, special requirements, target delivery date, or budget range."
        />
        <small className="inquiry-counter">{messageLength} / 1000</small>
      </div>

      <button type="submit" className="submit-btn" disabled={status === "sending"}>
        {status === "sending" ? "Uploading & Sending..." : "Submit Custom Request"}
        <i className="fas fa-arrow-right" />
      </button>

      {feedback ? <p className={`form-feedback ${status === "error" ? "error" : "success"}`}>{feedback}</p> : null}
    </form>
  );
}
