import { GalaxyGuideSection } from "../components/sections/GalaxyGuideSection";
import { SeoHead } from "../components/seo/SeoHead";
import { PageHero } from "../components/ui/PageHero";
import { galaxyHero } from "../data/mock/galaxy";
import { pageSeo } from "../lib/seo";

export function GalaxyPage() {
  return (
    <>
      <SeoHead {...pageSeo.galaxy} />
      <PageHero {...galaxyHero} />
      <GalaxyGuideSection />
    </>
  );
}
