import { ProjectHighlightGrid } from "../components/sections/ProjectHighlightGrid";
import { HomeHeroSection } from "../components/sections/HomeHeroSection";
import { TimelinePreviewSection } from "../components/sections/TimelinePreviewSection";
import { SeoHead } from "../components/seo/SeoHead";
import { pageSeo } from "../lib/seo";

export function HomePage() {
  return (
    <>
      <SeoHead {...pageSeo.home} />
      <HomeHeroSection />
      <ProjectHighlightGrid />
      <TimelinePreviewSection />
    </>
  );
}
