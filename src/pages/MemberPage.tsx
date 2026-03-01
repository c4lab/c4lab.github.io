import { FeaturedPISection } from "../components/sections/FeaturedPISection";
import { MemberDirectorySection } from "../components/sections/MemberDirectorySection";
import { memberHero } from "../data/mock/members";
import { PageHero } from "../components/ui/PageHero";

export function MemberPage() {
  return (
    <>
      <PageHero {...memberHero} />
      <FeaturedPISection />
      <MemberDirectorySection />
    </>
  );
}
