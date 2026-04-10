"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import cytoscape, { type Core, type EventObject } from "cytoscape";
import coseBilkent from "cytoscape-cose-bilkent";
import { useRouter } from "next/navigation";
import type { GraphData, ConnectionType } from "@/lib/types";

// Register layout once
cytoscape.use(coseBilkent);

// ---------------------------------------------------------------------------
// Edge color per connection type — matches ConnectionsPanel + globals.css
// ---------------------------------------------------------------------------
const EDGE_COLORS: Record<ConnectionType, string> = {
  overlappar: "#c2410c",
  "hanvisar-till": "#1d4ed8",
  kompletterar: "#15803d",
  "kompletteras-av": "#15803d",
  "speciallag-till": "#6d28d9",
};

const EDGE_STYLES: Record<ConnectionType, "solid" | "dashed"> = {
  overlappar: "solid",
  "hanvisar-till": "dashed",
  kompletterar: "solid",
  "kompletteras-av": "dashed",
  "speciallag-till": "solid",
};

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------
interface GraphCanvasProps {
  data: GraphData;
  activeTypes: ConnectionType[];
  searchQuery: string;
}

export function GraphCanvas({ data, activeTypes, searchQuery }: GraphCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cyRef = useRef<Core | null>(null);
  const router = useRouter();
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Build filtered elements
  const elements = useCallback(() => {
    // Guard: skip edges referencing nodes not in the dataset
    const nodeIds = new Set(data.nodes.map((n) => n.id));
    const filteredEdges = data.edges.filter(
      (e) => activeTypes.includes(e.type) && nodeIds.has(e.source) && nodeIds.has(e.target)
    );
    const connectedNodeIds = new Set<string>();
    for (const e of filteredEdges) {
      connectedNodeIds.add(e.source);
      connectedNodeIds.add(e.target);
    }

    // Show all nodes, but dim unconnected ones when filters are active
    const nodes = data.nodes.map((n) => ({
      data: {
        id: n.id,
        label: n.label,
        sfs: n.sfs || "",
        depth: n.depth,
        connectionCount: n.connectionCount,
        dimmed:
          activeTypes.length < 5 && !connectedNodeIds.has(n.id) ? "true" : "false",
        searched:
          searchQuery &&
          (n.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (n.sfs && n.sfs.includes(searchQuery)))
            ? "true"
            : "false",
      },
    }));

    const edges = filteredEdges.map((e) => ({
      data: {
        id: e.id,
        source: e.source,
        target: e.target,
        type: e.type,
        context: e.context,
      },
    }));

    return [...nodes, ...edges];
  }, [data, activeTypes, searchQuery]);

  // Init Cytoscape
  useEffect(() => {
    if (!containerRef.current) return;

    const cy = cytoscape({
      container: containerRef.current,
      elements: elements(),
      minZoom: 0.3,
      maxZoom: 3,
      wheelSensitivity: 0.3,

      style: [
        // --- Nodes ---
        {
          selector: "node",
          style: {
            label: "data(label)",
            "text-valign": "center",
            "text-halign": "center",
            "font-family": "var(--font-lato), Lato, sans-serif",
            "font-size": "11px",
            "font-weight": 700,
            color: "#ffffff",
            "text-outline-color": "#1e3a8a",
            "text-outline-width": 2,
            "background-color": "#1e3a8a",
            "border-width": 2,
            "border-color": "#1e3a8a",
            width: "mapData(connectionCount, 1, 12, 50, 90)",
            height: "mapData(connectionCount, 1, 12, 50, 90)",
            "text-wrap": "wrap",
            "text-max-width": "80px",
            "overlay-padding": "6px",
            "transition-property":
              "background-color, border-color, border-width, opacity",
            "transition-duration": 200,
          } as cytoscape.Css.Node,
        },
        // Dimmed nodes (not connected to any active edge type)
        {
          selector: 'node[dimmed = "true"]',
          style: {
            opacity: 0.35,
          } as cytoscape.Css.Node,
        },
        // Search highlight
        {
          selector: 'node[searched = "true"]',
          style: {
            "border-color": "#b45309",
            "border-width": 4,
            "background-color": "#1e3a8a",
            opacity: 1,
          } as cytoscape.Css.Node,
        },
        // Hover
        {
          selector: "node:active, node.hover",
          style: {
            "border-color": "#b45309",
            "border-width": 3,
          } as cytoscape.Css.Node,
        },

        // --- Edges ---
        {
          selector: "edge",
          style: {
            width: 2,
            "curve-style": "bezier",
            "target-arrow-shape": "triangle",
            "target-arrow-color": "#94a3b8",
            "line-color": "#94a3b8",
            "arrow-scale": 0.8,
            opacity: 0.7,
            "transition-property": "line-color, target-arrow-color, width, opacity",
            "transition-duration": 200,
          } as cytoscape.Css.Edge,
        },
        // Per-type edge colors
        {
          selector: 'edge[type = "overlappar"]',
          style: {
            "line-color": EDGE_COLORS.overlappar,
            "target-arrow-color": EDGE_COLORS.overlappar,
            "line-style": EDGE_STYLES.overlappar,
            "target-arrow-shape": "diamond",
          } as cytoscape.Css.Edge,
        },
        {
          selector: 'edge[type = "hanvisar-till"]',
          style: {
            "line-color": EDGE_COLORS["hanvisar-till"],
            "target-arrow-color": EDGE_COLORS["hanvisar-till"],
            "line-style": EDGE_STYLES["hanvisar-till"],
          } as cytoscape.Css.Edge,
        },
        {
          selector: 'edge[type = "kompletterar"]',
          style: {
            "line-color": EDGE_COLORS.kompletterar,
            "target-arrow-color": EDGE_COLORS.kompletterar,
            "line-style": EDGE_STYLES.kompletterar,
          } as cytoscape.Css.Edge,
        },
        {
          selector: 'edge[type = "kompletteras-av"]',
          style: {
            "line-color": EDGE_COLORS["kompletteras-av"],
            "target-arrow-color": EDGE_COLORS["kompletteras-av"],
            "line-style": EDGE_STYLES["kompletteras-av"],
            "target-arrow-shape": "none",
            "source-arrow-shape": "triangle",
            "source-arrow-color": EDGE_COLORS["kompletteras-av"],
          } as cytoscape.Css.Edge,
        },
        {
          selector: 'edge[type = "speciallag-till"]',
          style: {
            "line-color": EDGE_COLORS["speciallag-till"],
            "target-arrow-color": EDGE_COLORS["speciallag-till"],
            "line-style": EDGE_STYLES["speciallag-till"],
            width: 3,
          } as cytoscape.Css.Edge,
        },

        // Highlighted edges (connected to hovered node)
        {
          selector: "edge.highlighted",
          style: {
            width: 4,
            opacity: 1,
          } as cytoscape.Css.Edge,
        },
        // Faded edges (not connected to hovered node)
        {
          selector: "edge.faded",
          style: {
            opacity: 0.15,
          } as cytoscape.Css.Edge,
        },
        // Faded nodes
        {
          selector: "node.faded",
          style: {
            opacity: 0.25,
          } as cytoscape.Css.Node,
        },
      ],

      layout: {
        name: "cose-bilkent",
        // @ts-expect-error cose-bilkent options not in base types
        quality: "proof",
        animate: false,
        nodeDimensionsIncludeLabels: true,
        idealEdgeLength: 120,
        nodeRepulsion: 6000,
        edgeElasticity: 0.2,
        nestingFactor: 0.1,
        gravity: 0.3,
        gravityRange: 3.8,
        padding: 40,
      },
    });

    // --- Event handlers ---

    // Hover: highlight connected edges and neighbors
    cy.on("mouseover", "node", (evt: EventObject) => {
      const node = evt.target;
      const nodeId = node.id();
      setHoveredNode(nodeId);

      const connectedEdges = node.connectedEdges();
      const neighbors = node.neighborhood("node");

      // Fade everything
      cy.elements().addClass("faded");
      // Highlight the hovered node and its neighborhood
      node.removeClass("faded").addClass("hover");
      connectedEdges.removeClass("faded").addClass("highlighted");
      neighbors.removeClass("faded");
    });

    cy.on("mouseout", "node", () => {
      setHoveredNode(null);
      cy.elements().removeClass("faded highlighted hover");
    });

    // Click: navigate to law page
    cy.on("tap", "node", (evt: EventObject) => {
      const nodeId = evt.target.id();
      router.push(`/laws/${nodeId}`);
    });

    // Fit after layout
    cy.on("layoutstop", () => {
      cy.fit(undefined, 40);
    });

    cyRef.current = cy;

    return () => {
      cy.destroy();
      cyRef.current = null;
    };
    // Only re-init on data change — filter/search handled by update effect
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // Update elements when filters/search change (without re-laying out)
  useEffect(() => {
    const cy = cyRef.current;
    if (!cy) return;

    const newElements = elements();

    // Batch update
    cy.batch(() => {
      // Remove all elements
      cy.elements().remove();
      // Add filtered elements
      cy.add(newElements);
    });

    // Re-run layout
    cy.layout({
      name: "cose-bilkent",
      // @ts-expect-error cose-bilkent options not in base types
      quality: "proof",
      animate: "end",
      animationDuration: 400,
      nodeDimensionsIncludeLabels: true,
      idealEdgeLength: 120,
      nodeRepulsion: 6000,
      edgeElasticity: 0.2,
      nestingFactor: 0.1,
      gravity: 0.3,
      gravityRange: 3.8,
      padding: 40,
    }).run();
  }, [activeTypes, searchQuery, elements]);

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />

      {/* Tooltip for hovered node */}
      {hoveredNode && (
        <div className="absolute top-3 left-3 px-3 py-2 rounded-lg bg-card border border-border shadow-md text-sm pointer-events-none">
          <span className="font-bold text-foreground">
            {data.nodes.find((n) => n.id === hoveredNode)?.label}
          </span>
          {data.nodes.find((n) => n.id === hoveredNode)?.sfs && (
            <span className="ml-2 text-muted-foreground text-xs">
              SFS {data.nodes.find((n) => n.id === hoveredNode)?.sfs}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
