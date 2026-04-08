"use client";

import { Search, RotateCcw } from "lucide-react";
import type { ConnectionType } from "@/lib/types";

const CONNECTION_TYPES: { type: ConnectionType; label: string; color: string }[] = [
  { type: "overlappar", label: "Överlappar", color: "bg-orange-500" },
  { type: "hanvisar-till", label: "Hänvisar", color: "bg-blue-500" },
  { type: "kompletterar", label: "Kompletterar", color: "bg-green-500" },
  { type: "kompletteras-av", label: "Kompletteras av", color: "bg-green-500" },
  { type: "speciallag-till", label: "Speciallag", color: "bg-violet-500" },
];

interface GraphControlsProps {
  activeTypes: ConnectionType[];
  onToggleType: (type: ConnectionType) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onReset: () => void;
}

export function GraphControls({
  activeTypes,
  onToggleType,
  searchQuery,
  onSearchChange,
  onReset,
}: GraphControlsProps) {
  return (
    <div className="flex flex-col gap-3 p-3 rounded-xl bg-card/90 backdrop-blur border border-border shadow-md">
      {/* Search */}
      <div className="relative">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-muted-foreground" />
        <input
          type="text"
          placeholder="Sök lag..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-8 pr-3 py-2 text-sm rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
        />
      </div>

      {/* Connection type toggles */}
      <div className="flex flex-wrap gap-1.5">
        {CONNECTION_TYPES.map(({ type, label, color }) => {
          const active = activeTypes.includes(type);
          return (
            <button
              key={type}
              onClick={() => onToggleType(type)}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 min-h-[32px] text-xs font-medium rounded-md border transition-all cursor-pointer ${
                active
                  ? "border-border bg-card text-foreground shadow-sm"
                  : "border-transparent bg-muted/50 text-muted-foreground"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full ${color} ${
                  active ? "opacity-100" : "opacity-30"
                }`}
              />
              {label}
            </button>
          );
        })}
      </div>

      {/* Reset button */}
      <button
        onClick={onReset}
        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 min-h-[36px] text-xs font-medium rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all cursor-pointer"
      >
        <RotateCcw className="w-3.5 h-3.5" />
        Återställ vy
      </button>
    </div>
  );
}
