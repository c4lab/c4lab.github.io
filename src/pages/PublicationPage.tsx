import { PublicationList } from "../components/sections/PublicationList";
import { publicationHero } from "../data/mock/publications";
import { PageHero } from "../components/ui/PageHero";

export function PublicationPage() {
  return (
    <>
      <PageHero {...publicationHero} />
      <PublicationList />
    </>
  );
}
