import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { describe, expect, test } from "vitest";
import { buildAbsoluteUrl, buildPageTitle, pageSeo } from "../src/lib/seo";

const projectRoot = process.cwd();

function readProjectFile(path: string) {
  return readFileSync(resolve(projectRoot, path), "utf8");
}

describe("static SEO artifacts", () => {
  test("index.html default SEO metadata matches home route config", () => {
    const indexHtml = readProjectFile("index.html");
    const homeTitle = buildPageTitle(pageSeo.home.title);

    expect(indexHtml).toContain(`<title>${homeTitle}</title>`);
    expect(indexHtml).toContain(`content=\"${pageSeo.home.description}\"`);
    expect(indexHtml).toContain('<link rel="canonical" href="https://c4lab.github.io/" />');
  });

  test("robots.txt points to canonical sitemap", () => {
    const robots = readProjectFile("public/robots.txt");

    expect(robots).toContain("User-agent: *");
    expect(robots).toContain("Allow: /");
    expect(robots).toContain("Sitemap: https://c4lab.github.io/sitemap.xml");
  });

  test("sitemap.xml includes all configured route paths", () => {
    const sitemap = readProjectFile("public/sitemap.xml");

    Object.values(pageSeo).forEach(({ path }) => {
      expect(sitemap).toContain(`<loc>${buildAbsoluteUrl(path)}</loc>`);
    });
  });
});
