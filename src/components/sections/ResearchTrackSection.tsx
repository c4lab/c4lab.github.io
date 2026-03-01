import type { ResearchTrack } from "../../types/content";
import { MediaFrame } from "../ui/MediaFrame";
import { SectionShell } from "../ui/SectionShell";
import { Tag } from "../ui/Tag";

type ResearchTrackSectionProps = {
  track: ResearchTrack;
};

export function ResearchTrackSection({ track }: ResearchTrackSectionProps) {
  return (
    <SectionShell className="py-10 first:pt-8">
      <div className={`grid gap-8 ${track.image ? "lg:grid-cols-[1fr_0.9fr]" : ""} lg:items-start`}>
        <div>
          <Tag>{track.period}</Tag>
          <h2 className="mt-4 text-3xl sm:text-4xl">{track.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{track.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {track.metrics.map((metric) => (
              <span
                key={metric}
                className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600"
              >
                {metric}
              </span>
            ))}
          </div>
        </div>
        {track.image ? <MediaFrame label={track.mediaLabel} image={track.image} /> : null}
      </div>
      <div className="mt-8 space-y-4">
        {track.details.map((detail) => (
          <div key={detail.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
            <h3 className="text-xl">{detail.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{detail.copy}</p>
          </div>
        ))}
      </div>
    </SectionShell>
  );
}
