import { openai } from "@ai-sdk/openai";
import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { getAllEntities } from "@/lib/wiki-data";
import { buildSystemPrompt } from "@/lib/chat-context";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  // Extract latest user message for relevance filtering
  const lastUserMessage = [...messages]
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
    messages: await convertToModelMessages(messages),
  });

  // Include used entities as custom header for client-side citation display
  return result.toUIMessageStreamResponse({
    headers: {
      "X-Used-Entities": JSON.stringify(usedEntities),
    },
  });
}
