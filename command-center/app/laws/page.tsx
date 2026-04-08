import Link from "next/link";
import type { Metadata } from "next";
import { getAllEntities } from "@/lib/wiki-data";
import { DepthIndicator } from "@/components/law/DepthIndicator";

export const metadata: Metadata = {
  title: "Alla lagar",
  description: "Alla lagar och förordningar i kunskapsbasen",
};

export default function LawsIndexPage() {
  const entities = getAllEntities();

  // Sort: full first, then standard, then grund. Alphabetical within each group.
  const sorted = [...entities].sort((a, b) => {
    const depthOrder = { full: 0, standard: 1, grund: 2 };
    const d = depthOrder[a.depth] - depthOrder[b.depth];
    if (d !== 0) return d;
    return a.title.localeCompare(b.title, "sv");
  });

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="font-serif text-3xl md:text-4xl tracking-tight mb-2">
        Lagar & förordningar
      </h1>
      <p className="text-sm text-muted-foreground mb-6">
        {entities.length} lagar i kunskapsbasen
      </p>

      <div className="space-y-2">
        {sorted.map((entity) => (
          <Link
            key={entity.slug}
            href={`/laws/${entity.slug}`}
            className="flex items-start justify-between gap-4 px-4 py-3 rounded-lg border border-border bg-card hover:border-primary/25 hover:shadow-sm transition-all group"
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                  {entity.short_name || entity.title}
                </span>
                {entity.sfs && (
                  <span className="text-xs font-mono text-muted-foreground">
                    SFS {entity.sfs}
                  </span>
                )}
              </div>
              {entity.tillampningsomrade && (
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {entity.tillampningsomrade}
                </p>
              )}
            </div>
            <div className="shrink-0 mt-0.5">
              <DepthIndicator depth={entity.depth} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
