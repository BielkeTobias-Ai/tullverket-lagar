"use client";

import Link from "next/link";

export default function GraphError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center min-h-[60vh] px-4">
      <div className="max-w-md w-full p-6 rounded-xl bg-card border border-border shadow-md text-center">
        <h2 className="font-serif text-xl font-semibold text-foreground mb-2">
          Lagkartan kunde inte laddas
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          Ett fel uppstod vid rendering av grafvyn.
        </p>
        <pre className="text-xs text-muted-foreground bg-muted/50 rounded-lg p-3 mb-4 text-left overflow-auto max-h-32 font-mono">
          {error.message}
        </pre>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors cursor-pointer"
          >
            Försök igen
          </button>
          <Link
            href="/"
            className="px-4 py-2 text-sm font-medium rounded-lg border border-border text-muted-foreground hover:text-foreground hover:border-primary/30 transition-colors"
          >
            Till startsidan
          </Link>
        </div>
      </div>
    </div>
  );
}
