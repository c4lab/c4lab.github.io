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
        description="An editorial timeline treatment replaces the old plugin-heavy widget while keeping chronology and link-out context visible."
      />
      <div className="mt-12 space-y-6">
        {timelineEntries.map((entry, index) => (
          <article
            key={entry.id}
            className="grid gap-4 rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-soft md:grid-cols-[140px_1fr]"
          >
            <div className="md:border-r md:border-slate-200 md:pr-6">
              <p className="font-display text-3xl text-primary">{entry.year}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-500">{entry.dateLabel}</p>
            </div>
            <div>
              <h3 className="text-2xl">{entry.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{entry.summary}</p>
              <div className="mt-4">
                <ExternalLink href={entry.href}>
                  {index === 0 ? "Open highlight" : `Read more: ${entry.title}`}
                </ExternalLink>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
