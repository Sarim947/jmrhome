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

export default function InquiryForm() {
const fileInputRef = useRef(null);

const [loading, setLoading] = useState(false);

const [form, setForm] = useState({
project_type: "",
country: "",
name: "",
email: "",
whatsapp: "",
product_interest: "",
message: ""
});

const [files, setFiles] = useState([]);

function handleChange(e) {
setForm({
...form,
[e.target.name]: e.target.value
});
}

async function uploadFiles(selectedFiles) {
if (!selectedFiles?.length) return;

```
const uploadedFiles = [];

for (const file of selectedFiles) {
  if (file.size > 25 * 1024 * 1024) {
    alert(`${file.name} exceeds 25MB.`);
    continue;
  }

  const allowedTypes = [
    "image/jpeg",
    "image/png",
    "image/webp",
    "application/pdf"
  ];

  if (!allowedTypes.includes(file.type)) {
    alert(`${file.name} is not supported.`);
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
    continue;
  }

  const { data } = supabase.storage
    .from("project-uploads")
    .getPublicUrl(filePath);

  uploadedFiles.push({
    name: file.name,
    url: data.publicUrl
  });
}

setFiles((prev) => [...prev, ...uploadedFiles]);
```

}

async function handleSubmit(e) {
e.preventDefault();

```
if (!form.email && !form.whatsapp) {
  alert("Please provide Email or WhatsApp.");
  return;
}

setLoading(true);

const fileUrls = files.map((file) => file.url);

const { error } = await supabase.from("leads").insert({
  country: form.country || null,
  project_type: form.project_type || null,
  email: form.email || null,
  whatsapp: form.whatsapp || null,
  message: form.message || null,
  file_urls: fileUrls,
  source: "website_inquiry_form",
  lead_score: "unrated"
});

if (error) {
  console.error(error);
  alert("Submission failed.");
  setLoading(false);
  return;
}

await fetch("/api/lead-notify", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    country: form.country,
    project_type: form.project_type,
    contact: form.email || form.whatsapp,
    message: form.message,
    files
  })
});

alert("Thank you. We will contact you shortly.");

setForm({
  project_type: "",
  country: "",
  name: "",
  email: "",
  whatsapp: "",
  product_interest: "",
  message: ""
});

setFiles([]);
setLoading(false);
```

}

return (
<section
style={{
maxWidth: "900px",
margin: "80px auto",
padding: "40px"
}}
>
<h1 style={{ marginBottom: "10px" }}>
Project Inquiry </h1>

```
  <p style={{ marginBottom: "40px", color: "#666" }}>
    Share your project details and our team will contact you shortly.
  </p>

  <form
    onSubmit={handleSubmit}
    style={{
      display: "grid",
      gap: "20px"
    }}
  >
    <select
      name="project_type"
      value={form.project_type}
      onChange={handleChange}
      required
    >
      <option value="">
        Select Project Type
      </option>

      {PROJECT_TYPES.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>

    <input
      name="country"
      placeholder="Country"
      value={form.country}
      onChange={handleChange}
      required
    />

    <input
      name="name"
      placeholder="Your Name"
      value={form.name}
      onChange={handleChange}
    />

    <input
      name="email"
      placeholder="Email"
      value={form.email}
      onChange={handleChange}
    />

    <input
      name="whatsapp"
      placeholder="WhatsApp"
      value={form.whatsapp}
      onChange={handleChange}
    />

    <input
      name="product_interest"
      placeholder="Product Interest"
      value={form.product_interest}
      onChange={handleChange}
    />

    <textarea
      name="message"
      rows="6"
      placeholder="Project Details"
      value={form.message}
      onChange={handleChange}
    />

    <div>
      <button
        type="button"
        onClick={() => fileInputRef.current?.click()}
      >
        Upload Files
      </button>

      <input
        ref={fileInputRef}
        type="file"
        multiple
        accept="image/jpeg,image/png,image/webp,application/pdf"
        style={{ display: "none" }}
        onChange={(e) => uploadFiles(e.target.files)}
      />

      {files.length > 0 && (
        <ul style={{ marginTop: "10px" }}>
          {files.map((file, index) => (
            <li key={index}>{file.name}</li>
          ))}
        </ul>
      )}
    </div>

    <button
      type="submit"
      disabled={loading}
      style={{
        padding: "14px",
        background: "#111827",
        color: "#fff",
        border: "none",
        cursor: "pointer"
      }}
    >
      {loading ? "Submitting..." : "Submit Inquiry"}
    </button>
  </form>
</section>
```

);
}
