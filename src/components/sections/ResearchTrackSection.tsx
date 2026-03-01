import { useId, useState } from "react";
import type { ResearchTrack } from "../../types/content";
import { ButtonLink } from "../ui/ButtonLink";
import { MediaFrame } from "../ui/MediaFrame";
import { SectionShell } from "../ui/SectionShell";
import { Tag } from "../ui/Tag";

type ResearchTrackSectionProps = {
  track: ResearchTrack;
};

export function ResearchTrackSection({ track }: ResearchTrackSectionProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <SectionShell className="py-10 first:pt-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-start">
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
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls={panelId}
            className="mt-8 rounded-full border border-primary/20 bg-primary/5 px-5 py-3 text-sm font-semibold text-primary"
          >
            {open ? `Close research content for ${track.title}` : `Open research content for ${track.title}`}
          </button>
          {open ? (
            <div id={panelId} className="mt-6 space-y-4">
              {track.details.map((detail) => (
                <div key={detail.id} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
                  <h3 className="text-xl">{detail.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{detail.copy}</p>
                </div>
              ))}
              <div className="pt-2">
                <ButtonLink to="/publication" variant="secondary">
                  Browse related publications
                </ButtonLink>
              </div>
            </div>
          ) : null}
        </div>
        <MediaFrame label={track.mediaLabel} />
      </div>
    </SectionShell>
  );
}
