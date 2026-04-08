import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { z } from "zod";
import { getAllEntities } from "@/lib/wiki-data";
import { buildSystemPrompt } from "@/lib/chat-context";

// Fail fast if API key is missing
if (!process.env.OPENAI_API_KEY) {
  throw new Error("OPENAI_API_KEY is not configured");
}

export const maxDuration = 30;

const MAX_MESSAGES = 30;
const MAX_TEXT_LENGTH = 4000;

const PartSchema = z.object({
  type: z.string(),
  text: z.string().max(MAX_TEXT_LENGTH).optional(),
});

const MessageSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "assistant"]),
  parts: z.array(PartSchema).max(20),
});

const PriorMessageSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "assistant"]),
  parts: z.array(z.object({ type: z.string(), text: z.string().optional() })),
});

const RequestSchema = z.object({
  messages: z.array(MessageSchema).min(1).max(MAX_MESSAGES),
  priorMessages: z.array(PriorMessageSchema).max(MAX_MESSAGES).optional(),
});

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400 });
  }

  const parsed = RequestSchema.safeParse(body);
  if (!parsed.success) {
    return new Response("Invalid request format", { status: 400 });
  }

  const { messages, priorMessages } = parsed.data;

  // Merge prior conversation history with current messages for full context
  const allMessages = [
    ...(priorMessages ?? []).map((m) => ({
      ...m,
      parts: m.parts.map((p) => ({ type: p.type, text: p.text ?? "" })),
    })),
    ...messages,
  ];

  // Extract latest user message for relevance filtering
  const lastUserMessage = [...allMessages]
    .reverse()
    .find((m) => m.role === "user");

  const queryText =
    lastUserMessage?.parts
      ?.filter((p): p is { type: "text"; text: string } => p.type === "text")
      .map((p) => p.text)
      .join(" ") ?? "";

  // Build context-aware system prompt
  const entities = getAllEntities();
  const { prompt: systemPrompt, usedEntities } = buildSystemPrompt(
    entities,
    queryText
  );

  const modelName = process.env.OPENAI_MODEL || "gpt-4.1-mini";

  const result = streamText({
    model: openai(modelName),
    system: systemPrompt,
    messages: await convertToModelMessages(allMessages as UIMessage[]),
  });

  return result.toUIMessageStreamResponse({
    headers: {
      "X-Used-Entities": JSON.stringify(usedEntities),
    },
  });
}
