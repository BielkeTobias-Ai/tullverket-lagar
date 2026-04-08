// ---------------------------------------------------------------------------
// Wikilink parser & resolver
// Handles [[slug]] and [[slug|display text]] patterns from Obsidian markdown
// ---------------------------------------------------------------------------

export interface WikiLink {
  raw: string; // full match including brackets
  slug: string; // target page slug
  display: string; // display text (slug if no alias)
}

const WIKILINK_RE = /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g;

/**
 * Extract all wikilinks from a string.
 */
export function parseWikilinks(text: string): WikiLink[] {
  const links: WikiLink[] = [];
  let match: RegExpExecArray | null;

  // Reset regex state
  WIKILINK_RE.lastIndex = 0;
  while ((match = WIKILINK_RE.exec(text)) !== null) {
    links.push({
      raw: match[0],
      slug: match[1].trim(),
      display: (match[2] || match[1]).trim(),
    });
  }

  return links;
}

/**
 * Extract the slug from a single wikilink string like "[[smugglingslagen]]".
 */
export function extractSlug(wikilink: string): string {
  const match = wikilink.match(/\[\[([^\]|]+?)(?:\|[^\]]+?)?\]\]/);
  return match ? match[1].trim() : wikilink;
}

/**
 * Map a page slug + type to its app URL.
 */
export function slugToUrl(slug: string, type?: string): string {
  switch (type) {
    case "entity":
      return `/laws/${slug}`;
    case "concept":
      return `/concepts/${slug}`;
    case "source":
      return `/sources/${slug}`;
    case "query":
      return `/queries/${slug}`;
    case "comparison":
      return `/comparisons/${slug}`;
    default:
      // Fallback: check common prefixes or default to laws
      return `/laws/${slug}`;
  }
}

/**
 * Replace all [[wikilinks]] in HTML/text with <a> tags.
 * Needs a slug→type lookup map to generate correct URLs.
 */
export function resolveWikilinks(
  html: string,
  slugTypeMap: Record<string, string>
): string {
  return html.replace(WIKILINK_RE, (_match, slug: string, alias?: string) => {
    const trimmedSlug = slug.trim();
    const display = (alias || slug).trim();
    const type = slugTypeMap[trimmedSlug];
    const url = slugToUrl(trimmedSlug, type);
    return `<a href="${url}" class="wikilink" data-slug="${trimmedSlug}">${display}</a>`;
  });
}
