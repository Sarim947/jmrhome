const OPENAI_API_URL = "https://api.openai.com/v1/responses";

const SYSTEM_PROMPT = `
You are JMRHOME.LIFE's website project assistant for custom entrance doors.
Help visitors describe their project and collect useful lead details in a warm, concise way.

Business context:
- JMRHOME provides custom entrance doors, including pivot doors, armored doors, steel doors,
  glass/sidelite doors, apartment doors, and project/B2B entrance solutions.
- Useful details include customer identity, country or market, door type, size/opening,
  material or finish, quantity, project timeline, budget range, drawings/photos, email, and WhatsApp.
- Email, WhatsApp, name, and country are the most important contact details.

Conversation rules:
- Ask one focused follow-up question at a time.
- If the visitor already gave contact details, do not repeatedly ask for them.
- If they mention files or drawings, tell them they can upload JPG, PNG, WEBP, or PDF in the chat.
- Do not invent prices, warranties, certifications, or delivery promises.
- Keep replies under 90 words unless the user asks for detail.
`;

function normalizeMessages(messages = []) {
  return messages
    .filter((message) => message?.text)
    .slice(-12)
    .map((message) => ({
      role: message.role === "user" ? "user" : "assistant",
      content: String(message.text).slice(0, 1200)
    }));
}

function getResponseText(data) {
  if (typeof data?.output_text === "string") {
    return data.output_text;
  }

  const text = data?.output
    ?.flatMap((item) => item?.content || [])
    ?.map((content) => content?.text)
    ?.filter(Boolean)
    ?.join("\n");

  return text || "";
}

export async function POST(request) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return Response.json(
      {
        error: "OpenAI is not configured yet. Please add OPENAI_API_KEY in Vercel Environment Variables."
      },
      { status: 503 }
    );
  }

  const body = await request.json().catch(() => ({}));
  const messages = normalizeMessages(body.messages);
  const files = Array.isArray(body.files) ? body.files.slice(0, 8) : [];
  const model = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  const fileContext = files.length
    ? `\nUploaded files in this chat:\n${files.map((file) => `- ${file.name}: ${file.url}`).join("\n")}`
    : "";

  const response = await fetch(OPENAI_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model,
      instructions: `${SYSTEM_PROMPT}${fileContext}`,
      input: messages,
      max_output_tokens: 350
    })
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    return Response.json(
      {
        error: data?.error?.message || "OpenAI request failed. Please try again later."
      },
      { status: response.status }
    );
  }

  return Response.json({
    reply: getResponseText(data) || "Thanks. Could you share a little more about your entrance door project?"
  });
}
