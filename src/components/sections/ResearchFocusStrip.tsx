import { researchTracks } from "../../data/mock/research";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";

export function ResearchFocusStrip() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Research Themes"
        title="Three research arcs connect foundational methods with translational outcomes."
        description="The first pass uses structured mock data so each section can later ingest normalized content without changing the layout."
      />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {researchTracks.map((track) => (
          <div key={track.id} className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-soft">
            <Tag>{track.period}</Tag>
            <h3 className="mt-4 text-2xl">{track.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{track.summary}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {track.metrics.map((metric) => (
                <li key={metric}>• {metric}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
