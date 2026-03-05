import { ProjectHighlightGrid } from "../components/sections/ProjectHighlightGrid";
import { HomeHeroSection } from "../components/sections/HomeHeroSection";
import { MigrationNotice } from "../components/sections/MigrationNotice";
import { TimelinePreviewSection } from "../components/sections/TimelinePreviewSection";
import { SeoHead } from "../components/seo/SeoHead";
import { pageSeo } from "../lib/seo";

export function HomePage() {
  return (
    <>
      <SeoHead {...pageSeo.home} />
      <MigrationNotice />
      <HomeHeroSection />
      <ProjectHighlightGrid />
      <TimelinePreviewSection />
    </>
  );
}
