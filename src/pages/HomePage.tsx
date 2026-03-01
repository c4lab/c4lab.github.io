import { ContactSection } from "../components/sections/ContactSection";
import { HomeHeroSection } from "../components/sections/HomeHeroSection";
import { ProjectHighlightGrid } from "../components/sections/ProjectHighlightGrid";
import { ResearchFocusStrip } from "../components/sections/ResearchFocusStrip";
import { TimelinePreviewSection } from "../components/sections/TimelinePreviewSection";

export function HomePage() {
  return (
    <>
      <HomeHeroSection />
      <ResearchFocusStrip />
      <ProjectHighlightGrid />
      <TimelinePreviewSection />
      <ContactSection />
    </>
  );
}
