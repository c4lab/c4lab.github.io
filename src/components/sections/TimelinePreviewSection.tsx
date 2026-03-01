import { timelineEntries } from "../../data/mock/home";
import { ExternalLink } from "../ui/ExternalLink";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

export function TimelinePreviewSection() {
  return (
    <SectionShell>
      <SectionHeading
        eyebrow="Timeline"
        title="Recent highlights from the lab"
      />
      <div className="mt-12 space-y-6">
        {timelineEntries.map((entry) => (
          <article
            key={entry.id}
            className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-soft md:grid-cols-[140px_1fr]"
          >
            <div className="md:border-r md:border-slate-200 md:pr-6">
              <p className="font-display text-3xl text-primary">{entry.year}</p>
              {entry.dateLabel ? (
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-500">{entry.dateLabel}</p>
              ) : null}
            </div>
            <div className="flex gap-5">
              {entry.image ? (
                <img
                  src={entry.image}
                  alt=""
                  className="hidden h-24 w-36 flex-shrink-0 rounded-lg object-cover sm:block"
                />
              ) : null}
              <div className="min-w-0">
                <h3 className="text-2xl">{entry.title}</h3>
                {entry.summary ? (
                  <p className="mt-3 text-sm leading-7 text-slate-600">{entry.summary}</p>
                ) : null}
                {entry.href ? (
                  <div className="mt-4">
                    <ExternalLink href={entry.href}>
                      Read more
                    </ExternalLink>
                  </div>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
