import { Resend } from "resend";

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error("Missing RESEND_API_KEY");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const lead = await request.json();

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

        <p><strong>Source:</strong> Website Chatbot</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `
    });

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
