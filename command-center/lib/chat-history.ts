/**
 * Chat history — localStorage persistence for conversations.
 * Each conversation has an ID, title (first user message), and messages.
 */

const STORAGE_KEY = "tullverket-chat-history";
const MAX_CONVERSATIONS = 20;

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  parts: Array<{ type: string; text?: string }>;
}

export interface Conversation {
  id: string;
  title: string;
  messages: ChatMessage[];
  createdAt: string;
  updatedAt: string;
}

function readAll(): Conversation[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Conversation[]) : [];
  } catch {
    return [];
  }
}

function writeAll(conversations: Conversation[]) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(conversations));
}

/** Get all conversations, newest first. */
export function getConversations(): Conversation[] {
  return readAll().sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );
}

/** Get a single conversation by ID. */
export function getConversation(id: string): Conversation | undefined {
  return readAll().find((c) => c.id === id);
}

/** Save or update a conversation. */
export function saveConversation(conv: Conversation) {
  const all = readAll();
  const idx = all.findIndex((c) => c.id === conv.id);

  if (idx >= 0) {
    all[idx] = { ...conv, updatedAt: new Date().toISOString() };
  } else {
    all.unshift({ ...conv, updatedAt: new Date().toISOString() });
  }

  // Trim to max
  writeAll(all.slice(0, MAX_CONVERSATIONS));
}

/** Delete a conversation. */
export function deleteConversation(id: string) {
  writeAll(readAll().filter((c) => c.id !== id));
}

/** Extract title from first user message. */
export function titleFromMessages(messages: ChatMessage[]): string {
  const firstUser = messages.find((m) => m.role === "user");
  if (!firstUser) return "Ny konversation";
  const text = firstUser.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text" && !!p.text)
    .map((p) => p.text)
    .join(" ");
  return text.length > 60 ? `${text.slice(0, 57)}...` : text || "Ny konversation";
}

/** Generate a conversation ID. */
export function newConversationId(): string {
  return `conv-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}
