import { researchHero, researchTracks } from "../data/mock/research";
import { ResearchTrackSection } from "../components/sections/ResearchTrackSection";
import { PageHero } from "../components/ui/PageHero";

export function ResearchPage() {
  return (
    <>
      <PageHero {...researchHero} />
      {researchTracks.map((track) => (
        <ResearchTrackSection key={track.id} track={track} />
      ))}
    </>
  );
}
