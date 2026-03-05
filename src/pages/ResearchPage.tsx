import { ResearchTrackSection } from "../components/sections/ResearchTrackSection";
import { SeoHead } from "../components/seo/SeoHead";
import { researchTracks } from "../data/mock/research";
import { pageSeo } from "../lib/seo";

export function ResearchPage() {
  return (
    <>
      <SeoHead {...pageSeo.research} />
      {researchTracks.map((track) => (
        <ResearchTrackSection key={track.id} track={track} />
      ))}
    </>
  );
}
