import { ArrowRight, ArrowLeftRight, Plus, Star } from "lucide-react";

const items = [
  {
    label: "Överlappar",
    color: "bg-orange-500",
    lineColor: "border-orange-500",
    icon: ArrowLeftRight,
    description: "Samma handling kan falla under båda",
  },
  {
    label: "Hänvisar till",
    color: "bg-blue-500",
    lineColor: "border-blue-500 border-dashed",
    icon: ArrowRight,
    description: "Explicit referens i lagtexten",
  },
  {
    label: "Kompletterar",
    color: "bg-green-500",
    lineColor: "border-green-500",
    icon: Plus,
    description: "Ger ytterligare befogenheter",
  },
  {
    label: "Speciallag till",
    color: "bg-violet-500",
    lineColor: "border-violet-500",
    icon: Star,
    description: "Lex specialis-förhållande",
  },
];

export function GraphLegend() {
  return (
    <div className="flex flex-col gap-2 p-3 rounded-xl bg-card/90 backdrop-blur border border-border shadow-md">
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">
        Kopplingstyper
      </span>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.label} className="flex items-center gap-2.5">
            <div className="flex items-center gap-1.5 shrink-0">
              <div className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
              <div
                className={`w-5 h-0 border-t-2 ${item.lineColor}`}
              />
              <Icon className="w-3 h-3 text-muted-foreground" />
            </div>
            <span className="text-xs text-foreground font-medium leading-tight">
              {item.label}
            </span>
          </div>
        );
      })}

      <div className="border-t border-border my-1" />

      <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold mb-0.5">
        Nodstorlek
      </span>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full bg-primary/60" />
        <span className="text-[11px] text-muted-foreground">Få kopplingar</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-primary" />
        <span className="text-[11px] text-muted-foreground">Många kopplingar</span>
      </div>
    </div>
  );
}
