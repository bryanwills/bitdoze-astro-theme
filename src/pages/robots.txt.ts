import type { APIContext } from "astro";

export function GET({ site }: APIContext) {
  const origin = site ?? new URL("https://www.bitdoze.com");
  const sitemap = new URL("sitemap-index.xml", origin).toString();

  return new Response(
    ["User-agent: *", "Allow: /", "", "Sitemap: " + sitemap, ""].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
}
