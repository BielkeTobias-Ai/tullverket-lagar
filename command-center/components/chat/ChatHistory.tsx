"use client";

import { MessageSquare, Trash2, Plus } from "lucide-react";
import type { Conversation } from "@/lib/chat-history";

interface ChatHistoryProps {
  conversations: Conversation[];
  activeId: string | null;
  onSelect: (id: string) => void;
  onDelete: (id: string) => void;
  onNew: () => void;
}

export function ChatHistory({
  conversations,
  activeId,
  onSelect,
  onDelete,
  onNew,
}: ChatHistoryProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-3 border-b border-border">
        <button
          onClick={onNew}
          className="w-full flex items-center justify-center gap-2 px-3 py-2.5 min-h-[44px] rounded-lg border border-border bg-card text-sm font-medium text-foreground hover:bg-accent transition-colors cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          Ny konversation
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-2 space-y-1">
        {conversations.length === 0 ? (
          <p className="text-xs text-muted-foreground text-center py-8">
            Ingen historik ännu
          </p>
        ) : (
          conversations.map((conv) => (
            <div
              key={conv.id}
              className={`group flex items-start gap-2 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${
                activeId === conv.id
                  ? "bg-primary/10 text-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
              onClick={() => onSelect(conv.id)}
            >
              <MessageSquare className="w-4 h-4 mt-0.5 shrink-0" />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium truncate">{conv.title}</p>
                <p className="text-[11px] text-muted-foreground">
                  {new Date(conv.updatedAt).toLocaleDateString("sv-SE")}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(conv.id);
                }}
                className="opacity-0 group-hover:opacity-100 shrink-0 p-1 rounded hover:bg-destructive/10 hover:text-destructive transition-all cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
