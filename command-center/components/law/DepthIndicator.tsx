import type { DepthLevel } from "@/lib/types";

const config: Record<DepthLevel, { label: string; color: string; bg: string }> = {
  full: {
    label: "Full analys",
    color: "text-green-800",
    bg: "bg-green-50 border-green-200",
  },
  standard: {
    label: "Standardnivå",
    color: "text-amber-800",
    bg: "bg-amber-50 border-amber-200",
  },
  grund: {
    label: "Grundnivå",
    color: "text-gray-600",
    bg: "bg-gray-50 border-gray-200",
  },
};

export function DepthIndicator({
  depth,
  sfs,
}: {
  depth: DepthLevel;
  sfs?: string;
}) {
  const { label, color, bg } = config[depth];

  if (depth === "full") {
    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded border ${bg} ${color}`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-600" />
        {label}
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded border ${bg} ${color}`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${depth === "standard" ? "bg-amber-500" : "bg-gray-400"}`}
      />
      {label}
      {depth === "grund" && sfs && (
        <>
          {" · "}
          <a
            href={`https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sfs-${sfs.replace(":", "-")}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            Läs på riksdagen.se →
          </a>
        </>
      )}
    </span>
  );
}
