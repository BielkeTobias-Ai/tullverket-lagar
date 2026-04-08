import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getEntity, getEntitySlugs } from "@/lib/wiki-data";
import { LawHeader } from "@/components/law/LawHeader";
import { PowersSection } from "@/components/law/PowersSection";
import { PenaltyTable } from "@/components/law/PenaltyTable";
import { ConnectionsPanel } from "@/components/law/ConnectionsPanel";
import { SituationsSection } from "@/components/law/SituationsSection";

export async function generateStaticParams() {
  return getEntitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entity = getEntity(slug);
  if (!entity) return { title: "Lag ej hittad" };

  return {
    title: `${entity.short_name || entity.title}${entity.sfs ? ` (SFS ${entity.sfs})` : ""}`,
    description: entity.tillampningsomrade || `Information om ${entity.title}`,
  };
}

export default async function LawDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entity = getEntity(slug);

  if (!entity) notFound();

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <LawHeader entity={entity} />

      {/* Structured sections — only shown for standard/full depth */}
      {entity.depth !== "grund" && (
        <>
          <PowersSection befogenheter={entity.befogenheter} />
          <PenaltyTable straffskala={entity.straffskala} />
          <SituationsSection situationer={entity.situationer} />
          <ConnectionsPanel connections={entity.connections} />
        </>
      )}

      {/* Grund-entiteter: minimal info + riksdagen link */}
      {entity.depth === "grund" && (
        <div className="rounded-lg border border-amber-200 bg-amber-50/50 p-4 mb-8">
          <p className="text-sm text-amber-800">
            Denna lag har grundnivå-information i kunskapsbasen. Detaljerad
            analys med befogenheter, straffskalor och kopplingar finns ännu inte.
          </p>
          {entity.sfs && (
            <a
              href={`https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/sfs-${entity.sfs.replace(":", "-")}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 mt-2 text-sm font-medium text-amber-900 underline underline-offset-2 hover:text-amber-700 transition-colors"
            >
              Läs fullständig lagtext på riksdagen.se →
            </a>
          )}
        </div>
      )}

      {/* Wiki body content — full parsed HTML */}
      {entity.bodyHtml && (
        <section className="mb-8">
          <div
            className="wiki-body"
            dangerouslySetInnerHTML={{ __html: entity.bodyHtml }}
          />
        </section>
      )}

      {/* Sources */}
      {entity.sources.length > 0 && (
        <section className="mt-10 pt-6 border-t border-border">
          <h3 className="text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
            Källor
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {entity.sources.map((src) => {
              const slug = src.replace(/\[\[|\]\]/g, "");
              return (
                <a
                  key={slug}
                  href={`/sources/${slug}`}
                  className="text-xs text-muted-foreground hover:text-primary transition-colors underline underline-offset-2"
                >
                  {slug}
                </a>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
