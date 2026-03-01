import { GalaxyGuideSection } from "../components/sections/GalaxyGuideSection";
import { galaxyHero } from "../data/mock/galaxy";
import { PageHero } from "../components/ui/PageHero";

export function GalaxyPage() {
  return (
    <>
      <PageHero {...galaxyHero} />
      <GalaxyGuideSection />
    </>
  );
}
