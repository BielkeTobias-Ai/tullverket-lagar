"use client";

import { useState, useCallback } from "react";
import type { GraphData, ConnectionType } from "@/lib/types";
import { GraphCanvas } from "./GraphCanvas";
import { GraphControls } from "./GraphControls";
import { GraphLegend } from "./GraphLegend";

const ALL_TYPES: ConnectionType[] = [
  "overlappar",
  "hanvisar-till",
  "kompletterar",
  "kompletteras-av",
  "speciallag-till",
];

export function GraphView({ data }: { data: GraphData }) {
  const [activeTypes, setActiveTypes] = useState<ConnectionType[]>(ALL_TYPES);
  const [searchQuery, setSearchQuery] = useState("");

  const handleToggleType = useCallback((type: ConnectionType) => {
    setActiveTypes((prev) =>
      prev.includes(type)
        ? prev.filter((t) => t !== type)
        : [...prev, type]
    );
  }, []);

  const handleReset = useCallback(() => {
    setActiveTypes(ALL_TYPES);
    setSearchQuery("");
  }, []);

  return (
    <div className="relative w-full h-[calc(100vh-3.5rem-3.5rem)] md:h-[calc(100vh-3.5rem)]">
      {/* Cytoscape canvas — fills container */}
      <GraphCanvas
        data={data}
        activeTypes={activeTypes}
        searchQuery={searchQuery}
      />

      {/* Controls — top right */}
      <div className="absolute top-3 right-3 w-56 z-10">
        <GraphControls
          activeTypes={activeTypes}
          onToggleType={handleToggleType}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onReset={handleReset}
        />
      </div>

      {/* Legend — bottom left */}
      <div className="absolute bottom-3 left-3 z-10 hidden sm:block">
        <GraphLegend />
      </div>

      {/* Node count */}
      <div className="absolute bottom-3 right-3 z-10 px-2.5 py-1.5 rounded-lg bg-card/90 backdrop-blur border border-border text-[11px] text-muted-foreground">
        {data.nodes.length} lagar &middot; {data.edges.length} kopplingar
      </div>
    </div>
  );
}
