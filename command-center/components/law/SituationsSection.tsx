import { MapPin } from "lucide-react";

export function SituationsSection({
  situationer,
}: {
  situationer: string[];
}) {
  if (situationer.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="font-serif text-xl mb-3 flex items-center gap-2 text-foreground">
        <MapPin className="w-5 h-5 text-primary/70" />
        Typiska situationer
      </h2>
      <div className="flex flex-wrap gap-2">
        {situationer.map((sit) => (
          <span
            key={sit}
            className="inline-flex items-center px-3 py-1.5 text-xs font-medium bg-accent border border-border rounded-full text-foreground/80 hover:bg-primary/5 hover:border-primary/20 transition-colors cursor-default"
          >
            {sit.replace(/-/g, " ")}
          </span>
        ))}
      </div>
    </section>
  );
}
