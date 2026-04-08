import type { WikiEntity } from "@/lib/types";
import { DepthIndicator } from "./DepthIndicator";

const statusConfig = {
  gallande: { label: "Gällande", className: "bg-green-50 text-green-800 border-green-300" },
  upphavd: { label: "Upphävd", className: "bg-red-50 text-red-800 border-red-300" },
  andrad: { label: "Ändrad", className: "bg-amber-50 text-amber-800 border-amber-300" },
} as const;

export function LawHeader({ entity }: { entity: WikiEntity }) {
  const status = entity.status ? statusConfig[entity.status] : null;

  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-sm text-muted-foreground mb-5">
        <a
          href="/laws"
          className="hover:text-foreground transition-colors duration-150 cursor-pointer"
        >
          Lagar
        </a>
        <span className="text-border">/</span>
        <span className="text-foreground font-medium">
          {entity.short_name || entity.title}
        </span>
      </nav>

      {/* Title block */}
      <div className="flex flex-col gap-3">
        <h1 className="font-serif text-3xl md:text-4xl tracking-tight text-foreground leading-tight">
          {entity.title}
        </h1>

        {/* Meta badges */}
        <div className="flex flex-wrap items-center gap-2">
          {entity.sfs && (
            <span className="inline-flex items-center px-2.5 py-1 text-xs font-mono font-bold bg-primary/8 text-primary border border-primary/20 rounded">
              SFS {entity.sfs}
            </span>
          )}
          {status && (
            <span
              className={`inline-flex items-center px-2.5 py-1 text-xs font-bold rounded border ${status.className}`}
            >
              {status.label}
            </span>
          )}
          <DepthIndicator depth={entity.depth} sfs={entity.sfs} />
        </div>

        {/* Tillämpningsområde */}
        {entity.tillampningsomrade && (
          <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl mt-1">
            {entity.tillampningsomrade}
          </p>
        )}

        {/* Tags */}
        {entity.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-1">
            {entity.tags
              .filter((t) => t !== "lag")
              .map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[11px] font-bold uppercase tracking-wide text-muted-foreground bg-[var(--muted)] rounded"
                >
                  {tag}
                </span>
              ))}
          </div>
        )}
      </div>

      {/* Divider */}
      <div className="mt-6 border-b border-border" />
    </div>
  );
}
