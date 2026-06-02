import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const lead = await request.json();

    const result = await resend.emails.send({
      from: "JMRHOME Lead <onboarding@resend.dev>",
      to: "740351598liu@gmail.com",
      subject: `New Chatbot Lead: ${lead.product || "Unknown Product"}`,
      html: `
        <h2>New Chatbot Lead</h2>

        <p><strong>Country:</strong> ${lead.country || "-"}</p>
        <p><strong>Product:</strong> ${lead.product || "-"}</p>
        <p><strong>Project Type:</strong> ${lead.project_type || "-"}</p>
        <p><strong>Quantity:</strong> ${lead.quantity || "-"}</p>
        <p><strong>Contact:</strong> ${lead.contact || "-"}</p>

        <hr />

        <p><strong>Source:</strong> Website Chatbot</p>
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
      {
        status: 500
      }
    );
  }
}