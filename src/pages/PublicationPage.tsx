import { PublicationList } from "../components/sections/PublicationList";
import { SeoHead } from "../components/seo/SeoHead";
import { pageSeo } from "../lib/seo";

export function PublicationPage() {
  return (
    <>
      <SeoHead {...pageSeo.publication} />
      <PublicationList />
    </>
  );
}
