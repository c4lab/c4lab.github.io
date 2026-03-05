import { render } from "@testing-library/react";
import { beforeEach, expect, test } from "vitest";
import { SiteStructuredData } from "./SiteStructuredData";

beforeEach(() => {
  document.head.querySelector("script#site-structured-data")?.remove();
});

test("injects JSON-LD graph for organization and website", () => {
  render(<SiteStructuredData />);
  const script = document.head.querySelector("script#site-structured-data");

  expect(script).toBeTruthy();

  const payload = JSON.parse(script?.textContent ?? "{}");
  expect(payload["@graph"]?.[0]?.["@type"]).toBe("ResearchOrganization");
  expect(payload["@graph"]?.[1]?.["@type"]).toBe("WebSite");
  expect(payload["@graph"]?.[1]?.url).toBe("https://c4lab.github.io");
});
