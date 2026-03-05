import { describe, expect, test } from "vitest";
import { buildAbsoluteUrl, buildPageTitle, pageSeo, SEO_BASE_URL } from "./seo";

describe("seo config", () => {
  test("uses github.io as canonical base", () => {
    expect(SEO_BASE_URL).toBe("https://c4lab.github.io");
    expect(buildAbsoluteUrl("/research")).toBe("https://c4lab.github.io/research");
  });

  test("builds page title with site suffix", () => {
    expect(buildPageTitle("Research")).toBe("Research | c4Lab");
  });

  test("contains route SEO entries", () => {
    expect(pageSeo.home.path).toBe("/");
    expect(pageSeo.blog.path).toBe("/blog");
    expect(pageSeo.galaxy.path).toBe("/galaxy");
  });
});
