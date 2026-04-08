import { Shield } from "lucide-react";

export function PowersSection({ befogenheter }: { befogenheter: string[] }) {
  if (befogenheter.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="font-serif text-xl mb-3 flex items-center gap-2 text-foreground">
        <Shield className="w-5 h-5 text-primary/70" />
        Befogenheter
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {befogenheter.map((power) => (
          <div
            key={power}
            className="flex items-start gap-2.5 px-3.5 py-2.5 rounded-lg border border-border bg-card hover:border-primary/20 transition-colors"
          >
            <div className="mt-0.5 w-2 h-2 rounded-full bg-primary/40 shrink-0" />
            <span className="text-sm leading-relaxed">{power}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
