import type { Metadata, Viewport } from "next";
import { EB_Garamond, Lato, Geist_Mono } from "next/font/google";
import Link from "next/link";
import {
  Scale,
  MessageSquare,
  Network,
  BookOpen,
} from "lucide-react";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Command Center — Tullverket",
    template: "%s | Command Center",
  },
  description:
    "Kunskapsverktyg för svensk tullrätt. Lagar, befogenheter och kopplingar.",
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Tullverket",
  },
};

export const viewport: Viewport = {
  themeColor: "#1e3a8a",
};

const navItems = [
  { href: "/", label: "Chat", icon: MessageSquare },
  { href: "/laws", label: "Lagar", icon: Scale },
  { href: "/graph", label: "Karta", icon: Network },
  { href: "/about", label: "Om", icon: BookOpen },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sv"
      className={`${ebGaramond.variable} ${lato.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Desktop header */}
        <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="mx-auto max-w-6xl flex items-center justify-between h-14 px-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
                <Scale className="w-4.5 h-4.5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg leading-tight tracking-tight font-medium">
                  Command Center
                </span>
                <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground leading-none font-sans">
                  Tullverket Lagar
                </span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {navItems.map(({ href, label, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1">{children}</main>

        {/* Disclaimer */}
        <footer className="border-t border-border py-3 px-4">
          <p className="text-[11px] text-muted-foreground text-center max-w-3xl mx-auto leading-relaxed">
            Svaren baseras på kunskapsbasen och ersätter inte juridisk bedömning.
            Kontrollera alltid mot aktuell lagtext på{" "}
            <a
              href="https://riksdagen.se"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors cursor-pointer"
            >
              riksdagen.se
            </a>
            .
          </p>
        </footer>

        {/* Mobile bottom nav */}
        <nav className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
          <div className="flex items-center justify-around h-14">
            {navItems.map(({ href, label, icon: Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col items-center justify-center gap-0.5 min-w-[44px] min-h-[44px] text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
              >
                <Icon className="w-5 h-5" />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Spacer for mobile bottom nav */}
        <div className="md:hidden h-14" />
      </body>
    </html>
  );
}
