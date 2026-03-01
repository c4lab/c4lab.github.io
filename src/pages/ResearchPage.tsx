import { researchTracks } from "../data/mock/research";
import { ResearchTrackSection } from "../components/sections/ResearchTrackSection";

export function ResearchPage() {
  return (
    <>
      {researchTracks.map((track) => (
        <ResearchTrackSection key={track.id} track={track} />
      ))}
    </>
  );
}
