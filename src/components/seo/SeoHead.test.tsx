import { render } from "@testing-library/react";
import { beforeEach, expect, test } from "vitest";
import { SeoHead } from "./SeoHead";

beforeEach(() => {
  document.title = "";
  document.head.querySelector('link[rel="canonical"]')?.remove();
  document.head.querySelectorAll('meta[property^="og:"]').forEach((tag) => tag.remove());
  [
    "description",
    "robots",
    "twitter:card",
    "twitter:title",
    "twitter:description",
    "twitter:image"
  ].forEach((name) => document.head.querySelector(`meta[name=\"${name}\"]`)?.remove());
});

test("sets title, canonical, description, og and twitter tags", () => {
  render(<SeoHead title="Research" description="Research page" path="/research" />);

  expect(document.title).toBe("Research | c4Lab");
  expect(document.head.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe(
    "https://c4lab.github.io/research"
  );
  expect(document.head.querySelector('meta[name="description"]')?.getAttribute("content")).toBe(
    "Research page"
  );
  expect(document.head.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe(
    "https://c4lab.github.io/research"
  );
  expect(document.head.querySelector('meta[name="twitter:card"]')?.getAttribute("content")).toBe(
    "summary_large_image"
  );
});
