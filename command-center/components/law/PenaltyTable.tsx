import { Gavel } from "lucide-react";
import type { Straffskala } from "@/lib/types";

export function PenaltyTable({ straffskala }: { straffskala: Straffskala[] }) {
  if (straffskala.length === 0) return null;

  return (
    <section className="mb-8">
      <h2 className="font-serif text-xl mb-3 flex items-center gap-2 text-foreground">
        <Gavel className="w-5 h-5 text-primary/70" />
        Straffskala
      </h2>
      {/* overflow-x-auto for mobile table scrolling (UX guideline: table-handling) */}
      <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
        <div className="rounded-lg border border-border overflow-hidden min-w-[400px] sm:min-w-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-[var(--muted)]">
                <th className="text-left px-4 py-2.5 font-bold text-foreground">
                  Brottstyp
                </th>
                <th className="text-left px-4 py-2.5 font-bold text-foreground">
                  Straff
                </th>
              </tr>
            </thead>
            <tbody>
              {straffskala.map((row, i) => (
                <tr
                  key={`${row.brott}-${i}`}
                  className="border-t border-border transition-colors duration-150 hover:bg-[var(--accent)]"
                >
                  <td className="px-4 py-2.5 font-medium text-foreground">
                    {row.brott}
                  </td>
                  <td className="px-4 py-2.5 text-muted-foreground tabular-nums">
                    {row.straff}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
