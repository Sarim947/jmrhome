import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
try {
const { name, email, message } = await request.json();

const result = await resend.emails.send({
  from: "Website <onboarding@resend.dev>",
  to: "740351598liu@gmail.com",
  subject: "New Inquiry from JMRHOME.LIFE",
  html: `
    <h2>New Website Inquiry</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong></p>
    <p>${message}</p>
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
