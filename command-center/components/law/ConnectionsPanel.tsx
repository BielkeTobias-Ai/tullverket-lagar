import { ArrowRight, ArrowLeftRight, Plus, Star } from "lucide-react";
import type { Connection, ConnectionType } from "@/lib/types";

const connectionConfig: Record<
  ConnectionType,
  { label: string; color: string; bg: string; dot: string; icon: typeof ArrowRight }
> = {
  overlappar: {
    label: "Överlappar",
    color: "text-orange-800",
    bg: "bg-orange-50 border-orange-200",
    dot: "bg-orange-500",
    icon: ArrowLeftRight,
  },
  "hanvisar-till": {
    label: "Hänvisar till",
    color: "text-blue-800",
    bg: "bg-blue-50 border-blue-200",
    dot: "bg-blue-500",
    icon: ArrowRight,
  },
  kompletterar: {
    label: "Kompletterar",
    color: "text-green-800",
    bg: "bg-green-50 border-green-200",
    dot: "bg-green-500",
    icon: Plus,
  },
  "kompletteras-av": {
    label: "Kompletteras av",
    color: "text-green-800",
    bg: "bg-green-50 border-green-200",
    dot: "bg-green-500",
    icon: Plus,
  },
  "speciallag-till": {
    label: "Speciallag till",
    color: "text-violet-800",
    bg: "bg-violet-50 border-violet-200",
    dot: "bg-violet-500",
    icon: Star,
  },
};

function groupByType(connections: Connection[]) {
  const groups: Partial<Record<ConnectionType, Connection[]>> = {};
  for (const c of connections) {
    if (!groups[c.type]) groups[c.type] = [];
    groups[c.type]!.push(c);
  }
  return groups;
}

function formatSlugAsTitle(slug: string): string {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function ConnectionsPanel({
  connections,
}: {
  connections: Connection[];
}) {
  if (connections.length === 0) return null;

  const groups = groupByType(connections);

  return (
    <section className="mb-8">
      <h2 className="font-serif text-xl mb-3 text-foreground">Kopplingar</h2>
      <div className="space-y-5">
        {(Object.entries(groups) as [ConnectionType, Connection[]][]).map(
          ([type, conns]) => {
            const cfg = connectionConfig[type] || connectionConfig["hanvisar-till"];
            const Icon = cfg.icon;

            return (
              <div key={type}>
                <div
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold rounded border mb-2.5 ${cfg.bg} ${cfg.color}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cfg.label}
                </div>
                <div className="space-y-1.5">
                  {conns.map((conn, i) => (
                    <a
                      key={`${conn.targetSlug}-${i}`}
                      href={`/laws/${conn.targetSlug}`}
                      className="flex items-start gap-3 px-4 py-3 min-h-[44px] rounded-lg border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all duration-150 group cursor-pointer"
                    >
                      <div
                        className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${cfg.dot}`}
                      />
                      <div className="min-w-0">
                        <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-150">
                          {formatSlugAsTitle(conn.targetSlug)}
                        </span>
                        {conn.context && (
                          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                            {conn.context}
                          </p>
                        )}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
