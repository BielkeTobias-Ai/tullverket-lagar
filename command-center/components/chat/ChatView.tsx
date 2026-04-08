"use client";

import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport } from "ai";
import { useState, useRef, useEffect, useCallback } from "react";
import { Send, Scale, Loader2, AlertTriangle, History, X } from "lucide-react";
import { ChatHistory } from "./ChatHistory";
import {
  getConversations,
  getConversation,
  saveConversation,
  deleteConversation,
  titleFromMessages,
  newConversationId,
  type Conversation,
  type ChatMessage,
} from "@/lib/chat-history";

const EXAMPLE_QUESTIONS = [
  "Vilka befogenheter har Tullverket vid smugglingsmisstanke?",
  "Vilka lagar gäller vid beslag av narkotika vid gränskontroll?",
  "Vad är skillnaden mellan smugglingslagen och tullagen?",
  "Vilka straffskalor gäller för vapensmuggling?",
];

// ---------------------------------------------------------------------------
// Outer wrapper: handles history state
// ---------------------------------------------------------------------------

export function ChatView() {
  const [convId, setConvId] = useState(() => newConversationId());
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [savedMessages, setSavedMessages] = useState<ChatMessage[]>([]);

  useEffect(() => {
    setConversations(getConversations());
  }, []);

  const handleNewConversation = useCallback(() => {
    setConvId(newConversationId());
    setSavedMessages([]);
    setShowHistory(false);
  }, []);

  const handleSelectConversation = useCallback((id: string) => {
    const conv = getConversation(id);
    if (!conv) return;
    setConvId(id);
    setSavedMessages(conv.messages);
    setShowHistory(false);
  }, []);

  const handleDeleteConversation = useCallback(
    (id: string) => {
      deleteConversation(id);
      setConversations(getConversations());
      if (id === convId) handleNewConversation();
    },
    [convId, handleNewConversation]
  );

  const handleMessagesUpdate = useCallback(
    (convIdForSave: string, msgs: ChatMessage[]) => {
      if (msgs.length === 0) return;
      saveConversation({
        id: convIdForSave,
        title: titleFromMessages(msgs),
        messages: msgs,
        createdAt:
          conversations.find((c) => c.id === convIdForSave)?.createdAt ||
          new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      });
      setConversations(getConversations());
    },
    [conversations]
  );

  return (
    <div className="flex h-[calc(100vh-3.5rem-3.5rem)] md:h-[calc(100vh-3.5rem)]">
      {/* History sidebar — desktop */}
      {showHistory && (
        <div className="hidden md:flex w-72 border-r border-border bg-background shrink-0">
          <ChatHistory
            conversations={conversations}
            activeId={convId}
            onSelect={handleSelectConversation}
            onDelete={handleDeleteConversation}
            onNew={handleNewConversation}
          />
        </div>
      )}

      {/* History overlay — mobile */}
      {showHistory && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/30"
            onClick={() => setShowHistory(false)}
          />
          <div className="relative w-72 bg-background border-r border-border">
            <button
              onClick={() => setShowHistory(false)}
              className="absolute top-3 right-3 p-1.5 rounded-md hover:bg-accent transition-colors cursor-pointer z-10"
            >
              <X className="w-4 h-4" />
            </button>
            <ChatHistory
              conversations={conversations}
              activeId={convId}
              onSelect={handleSelectConversation}
              onDelete={handleDeleteConversation}
              onNew={handleNewConversation}
            />
          </div>
        </div>
      )}

      {/* Main chat — key forces re-mount on conversation switch */}
      <ChatInner
        key={convId}
        convId={convId}
        savedMessages={savedMessages}
        convTitle={conversations.find((c) => c.id === convId)?.title}
        showHistory={showHistory}
        onToggleHistory={() => setShowHistory((p) => !p)}
        onMessagesUpdate={handleMessagesUpdate}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Inner component: owns useChat hook, re-mounts per conversation
// ---------------------------------------------------------------------------

function ChatInner({
  convId,
  savedMessages,
  convTitle,
  showHistory,
  onToggleHistory,
  onMessagesUpdate,
}: {
  convId: string;
  savedMessages: ChatMessage[];
  convTitle?: string;
  showHistory: boolean;
  onToggleHistory: () => void;
  onMessagesUpdate: (id: string, msgs: ChatMessage[]) => void;
}) {
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/chat",
    }),
  });

  const isBusy = status === "submitted" || status === "streaming";

  // Combine saved messages (from history) with live messages (from useChat)
  const allMessages = savedMessages.length > 0 && messages.length === 0
    ? savedMessages
    : messages.length > 0
      ? messages.map((m) => ({
          id: m.id,
          role: m.role as "user" | "assistant",
          parts: m.parts
            .filter((p): p is { type: "text"; text: string } => p.type === "text")
            .map((p) => ({ type: "text" as const, text: p.text })),
        }))
      : [];

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [allMessages]);

  // Save to localStorage when live messages change
  useEffect(() => {
    if (messages.length === 0) return;
    const chatMessages: ChatMessage[] = messages.map((m) => ({
      id: m.id,
      role: m.role as "user" | "assistant",
      parts: m.parts
        .filter((p): p is { type: "text"; text: string } => p.type === "text")
        .map((p) => ({ type: "text" as const, text: p.text })),
    }));
    onMessagesUpdate(convId, chatMessages);
  }, [messages, convId, onMessagesUpdate]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isBusy) return;
    sendMessage({ text: trimmed });
    setInput("");
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Toolbar */}
      <div className="flex items-center gap-2 px-4 py-2 border-b border-border">
        <button
          onClick={onToggleHistory}
          className={`p-2 min-w-[36px] min-h-[36px] rounded-lg hover:bg-accent transition-colors cursor-pointer ${
            showHistory ? "text-primary" : "text-muted-foreground hover:text-foreground"
          }`}
          title="Historik"
        >
          <History className="w-4 h-4" />
        </button>
        <span className="text-sm text-muted-foreground truncate">
          {convTitle || "Ny konversation"}
        </span>
      </div>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        {allMessages.length === 0 ? (
          <EmptyState onExampleClick={(q) => sendMessage({ text: q })} />
        ) : (
          <div className="mx-auto max-w-3xl px-4 py-6 space-y-6">
            {allMessages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {status === "submitted" && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm">Söker i kunskapsbasen...</span>
              </div>
            )}
          </div>
        )}

        {error && (
          <div className="mx-auto max-w-3xl px-4 pb-4">
            <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-200 text-sm text-red-800">
              <AlertTriangle className="w-4 h-4 mt-0.5 shrink-0" />
              <span>
                {error.message.includes("API key")
                  ? "OpenAI API-nyckel saknas. Konfigurera OPENAI_API_KEY i .env.local."
                  : `Fel: ${error.message}`}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="border-t border-border bg-background/95 backdrop-blur px-4 py-3">
        <div className="mx-auto max-w-3xl flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Ställ en fråga om tullrätt..."
            rows={1}
            disabled={isBusy}
            className="flex-1 resize-none rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary disabled:opacity-50"
            style={{ minHeight: "48px", maxHeight: "120px" }}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isBusy}
            className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer"
          >
            {isBusy ? (
              <Loader2 className="w-4.5 h-4.5 animate-spin" />
            ) : (
              <Send className="w-4.5 h-4.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

function EmptyState({ onExampleClick }: { onExampleClick: (q: string) => void }) {
  return (
    <div className="flex flex-col items-center justify-center h-full px-4">
      <div className="mb-8 text-center">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Scale className="w-7 h-7 text-primary" />
        </div>
        <h2 className="font-serif text-2xl mb-2">Fråga om tullrätt</h2>
        <p className="text-sm text-muted-foreground max-w-md">
          Ställ frågor om lagar, befogenheter, straffskalor och kopplingar.
          Svaren baseras på kunskapsbasen.
        </p>
      </div>
      <div className="grid gap-2 w-full max-w-lg">
        {EXAMPLE_QUESTIONS.map((q) => (
          <button
            key={q}
            onClick={() => onExampleClick(q)}
            className="text-left px-4 py-3 min-h-[44px] rounded-xl border border-border bg-card hover:border-primary/25 hover:shadow-sm transition-all text-sm text-foreground/80 cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
}

function MessageBubble({ message }: { message: ChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-primary text-primary-foreground rounded-br-md"
            : "bg-card border border-border rounded-bl-md"
        }`}
      >
        {message.parts.map((part, i) => {
          if (part.type === "text" && part.text) {
            return (
              <div
                key={`${message.id}-${i}`}
                className={`text-sm leading-relaxed whitespace-pre-wrap ${
                  isUser ? "" : "wiki-body"
                }`}
              >
                {part.text}
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}
