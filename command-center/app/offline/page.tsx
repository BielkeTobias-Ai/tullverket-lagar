import { WifiOff } from "lucide-react";

export default function OfflinePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4">
        <WifiOff className="w-7 h-7 text-muted-foreground" />
      </div>
      <h1 className="font-serif text-2xl mb-2">Ingen anslutning</h1>
      <p className="text-sm text-muted-foreground max-w-md mb-6">
        Du verkar vara offline. Lagindex och lagdetaljer som du besökt tidigare
        finns cachade och kan fortfarande nås.
      </p>
      <a
        href="/laws"
        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
      >
        Visa cachade lagar
      </a>
    </div>
  );
}
