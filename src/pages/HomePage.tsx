import { HomeHeroSection } from "../components/sections/HomeHeroSection";
import { ProjectHighlightGrid } from "../components/sections/ProjectHighlightGrid";
import { TimelinePreviewSection } from "../components/sections/TimelinePreviewSection";

export function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <ProjectHighlightGrid />
      <TimelinePreviewSection />
    </>
  );
}
