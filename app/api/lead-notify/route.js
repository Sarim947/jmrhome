import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

function isEmail(value) {
  return /\S+@\S+\.\S+/.test(value);
}

export async function POST(request) {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      return Response.json(
        {
          success: false,
          error: "Inquiry system is not configured. Please contact us by WhatsApp or email."
        },
        { status: 500 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      return Response.json(
        {
          success: false,
          error: "Inquiry system is not configured. Please contact us by WhatsApp or email."
        },
        { status: 500 }
      );
    }

    const lead = await request.json();

    const allowedSources = ["website_inquiry_form", "website_chatbot", "website_contact_form"];
    const source = allowedSources.includes(lead.source) ? lead.source : "website_inquiry_form";

    const email = lead.email ? String(lead.email).trim() : "";
    const whatsapp = lead.whatsapp ? String(lead.whatsapp).trim() : "";

    if (!isEmail(email) && !whatsapp) {
      return Response.json(
        {
          success: false,
          error: "Please provide a valid email address or WhatsApp number."
        },
        { status: 400 }
      );
    }

    const fileUrls = Array.isArray(lead.files)
      ? lead.files.map((file) => file.url).filter(Boolean)
      : [];

    // 1) Persist the lead to Supabase before sending any email.
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { error: insertError } = await supabase.from("leads").insert({
      country: lead.country || null,
      project_type: lead.project_type || null,
      email: isEmail(email) ? email : null,
      whatsapp: whatsapp || null,
      message: lead.message || null,
      file_urls: fileUrls,
      source,
      lead_score: "unrated"
    });

    if (insertError) {
      console.error("Supabase insert error:", insertError);
      return Response.json(
        {
          success: false,
          error: "Failed to save inquiry. Please try again or contact us by WhatsApp."
        },
        { status: 500 }
      );
    }

    // 2) Send the notification email.
    const resend = new Resend(process.env.RESEND_API_KEY);

    const fileList =
      lead.files && lead.files.length
        ? `
          <ul>
            ${lead.files
              .map(
                (file) =>
                  `<li><a href="${file.url}" target="_blank">${file.name}</a></li>`
              )
              .join("")}
          </ul>
        `
        : "<p>No files uploaded</p>";

    const sourceLabels = {
      website_contact_form: "Website Contact Form",
      website_inquiry_form: "Website Inquiry Form",
      website_chatbot: "Website Chatbot"
    };

    const result = await resend.emails.send({
      from: "JMRHOME Lead <onboarding@resend.dev>",
      to: "740351598liu@gmail.com",

      subject: `New Project Inquiry - ${lead.project_type || "Website Lead"}`,

      html: `
        <h2>New Project Inquiry</h2>

        <p><strong>Project Type:</strong> ${lead.project_type || "-"}</p>

        <p><strong>Country:</strong> ${lead.country || "-"}</p>

        <p><strong>Contact:</strong> ${lead.contact || "-"}</p>

        <p><strong>Message:</strong></p>
        <p>${lead.message || "-"}</p>

        <hr />

        <h3>Uploaded Files</h3>

        ${fileList}

        <hr />

        <p><strong>Source:</strong> ${sourceLabels[source]}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `
    });

    if (result.error) {
      return Response.json(
        {
          success: false,
          error: result.error.message || "Failed to send email."
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      result
    });
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message
      },
      { status: 500 }
    );
  }
}
