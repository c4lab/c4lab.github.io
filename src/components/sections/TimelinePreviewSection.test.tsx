import { render } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { TimelinePreviewSection } from "./TimelinePreviewSection";

describe("TimelinePreviewSection", () => {
  test("renders only a compact set of recent timeline entries on the home page", () => {
    const { container } = render(<TimelinePreviewSection />);

    const timelineArticles = container.querySelectorAll("article");
    expect(timelineArticles).toHaveLength(8);
  });

  test("uses lazy async decoding for preview thumbnails", () => {
    const { container } = render(<TimelinePreviewSection />);

    const previewImages = Array.from(container.querySelectorAll("img"));
    expect(previewImages.length).toBeGreaterThan(0);

    previewImages.forEach((image) => {
      expect(image.getAttribute("loading")).toBe("lazy");
      expect(image.getAttribute("decoding")).toBe("async");
    });
  });
});
