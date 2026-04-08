import type { Metadata } from "next";
import { getGraphData } from "@/lib/wiki-data";
import { GraphView } from "@/components/graph/GraphView";

export const metadata: Metadata = {
  title: "Lagkarta",
  description: "Interaktiv graf över svenska tullrättsliga lagar och deras kopplingar.",
};

export default function GraphPage() {
  const data = getGraphData();

  return <GraphView data={data} />;
}
