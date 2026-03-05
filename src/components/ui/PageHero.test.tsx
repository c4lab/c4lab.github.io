import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { PageHero } from "./PageHero";

describe("PageHero", () => {
  test("renders subtitle as paragraph content instead of a heading level jump", () => {
    render(
      <PageHero
        eyebrow="Eyebrow"
        title="Hero Title"
        subtitle="Hero Subtitle"
        summary="Summary paragraph"
      />
    );

    expect(screen.getByText("Hero Subtitle")).toBeVisible();
    expect(screen.queryByRole("heading", { name: "Hero Subtitle" })).not.toBeInTheDocument();
  });

  test("renders an eager high-priority hero image for LCP discovery", () => {
    const { container } = render(
      <PageHero
        eyebrow="Eyebrow"
        title="Hero Title"
        summary="Summary paragraph"
        heroImage="/images/hero-bg.webp"
      />
    );

    const heroImage = container.querySelector(`img[src="/images/hero-bg.webp"]`);
    expect(heroImage).not.toBeNull();
    expect(heroImage?.getAttribute("loading")).toBe("eager");
    expect(heroImage?.getAttribute("fetchpriority")).toBe("high");
    expect(heroImage?.getAttribute("decoding")).toBe("async");
  });
});
