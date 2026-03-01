import { useState } from "react";
import { publicationGroups } from "../../data/mock/publications";
import { ExternalLink } from "../ui/ExternalLink";
import { SectionShell } from "../ui/SectionShell";

export function PublicationList() {
  const allYears = publicationGroups.map((g) => g.year);
  const [selectedYears, setSelectedYears] = useState<Set<string>>(new Set(allYears));

  const allSelected = selectedYears.size === allYears.length;

  function toggleYear(year: string) {
    setSelectedYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) {
        next.delete(year);
      } else {
        next.add(year);
      }
      return next;
    });
  }

  function toggleAll() {
    setSelectedYears(allSelected ? new Set() : new Set(allYears));
  }

  const filtered = publicationGroups.filter((g) => selectedYears.has(g.year));

  return (
    <SectionShell className="pt-10">
      <div className="mb-8 flex flex-wrap gap-2">
        <button
          onClick={toggleAll}
          className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
            allSelected
              ? "bg-navy text-white"
              : "border border-slate-200 bg-white text-slate-600 hover:text-navy"
          }`}
        >
          All
        </button>
        {allYears.map((year) => (
          <button
            key={year}
            onClick={() => toggleYear(year)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              selectedYears.has(year)
                ? "bg-navy text-white"
                : "border border-slate-200 bg-white text-slate-600 hover:text-navy"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
      <div className="space-y-12">
        {filtered.map((group) => (
          <section key={group.year} aria-labelledby={`publication-year-${group.year}`}>
            <div className="mb-5 flex items-center gap-4">
              <h2 id={`publication-year-${group.year}`} className="text-3xl">
                {group.year}
              </h2>
              <div className="h-px flex-1 bg-slate-200" />
            </div>
            <div className="space-y-4">
              {group.items.map((item) => (
                <article key={item.id} className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-soft">
                  <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
                    <span>{item.dateLabel}</span>
                    <span>•</span>
                    <span>{item.venue}</span>
                  </div>
                  <h3 className="mt-4 text-2xl">{item.title}</h3>
                  <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-600">{item.authors}</p>
                  <div className="mt-5">
                    <ExternalLink href={item.href}>Link</ExternalLink>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SectionShell>
  );
}
