import { FeaturedPISection } from "../components/sections/FeaturedPISection";
import { MemberDirectorySection } from "../components/sections/MemberDirectorySection";
import { SeoHead } from "../components/seo/SeoHead";
import { pageSeo } from "../lib/seo";

export function MemberPage() {
  return (
    <>
      <SeoHead {...pageSeo.member} />
      <FeaturedPISection />
      <MemberDirectorySection />
    </>
  );
}
