import { useState, useMemo } from "react";
import { memberRecords } from "../../data/mock/members";
import type { MemberRecord } from "../../types/content";
import { Card } from "../ui/Card";
import { SectionShell } from "../ui/SectionShell";

const CURRENT_YEAR = new Date().getFullYear();

const DEGREE_CATEGORIES = ["教授", "博士", "碩士", "學士", "研究助理"] as const;
type DegreeCategory = (typeof DEGREE_CATEGORIES)[number];

function parseYearRange(yearLabel: string): [number, number] | null {
  if (!yearLabel) return null;
  const ongoingMatch = yearLabel.match(/^(\d{4})\s*~/);
  if (ongoingMatch) return [Number(ongoingMatch[1]), CURRENT_YEAR];
  const rangeMatch = yearLabel.match(/^(\d{4})\s*-\s*(\d{4})/);
  if (rangeMatch) return [Number(rangeMatch[1]), Number(rangeMatch[2])];
  return null;
}

function getDegreeCategories(role: string): DegreeCategory[] {
  const cats: DegreeCategory[] = [];
  if (role.includes("教授")) cats.push("教授");
  if (role.includes("博士")) cats.push("博士");
  if (role.includes("碩士")) cats.push("碩士");
  if (role.includes("學士")) cats.push("學士");
  if (role.includes("RA")) cats.push("研究助理");
  return cats;
}

function MemberCard({ member }: { member: MemberRecord }) {
  return (
    <Card className="rounded-[1.5rem] p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{member.yearLabel}</p>
      <h3 className="mt-3 text-2xl">{member.name}</h3>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{member.role}</p>
      {member.focus && <p className="mt-4 text-sm leading-7 text-slate-600">{member.focus}</p>}
    </Card>
  );
}

function FilterPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
        active
          ? "bg-navy text-white"
          : "border border-slate-200 bg-white text-slate-600 hover:text-navy"
      }`}
    >
      {label}
    </button>
  );
}

export function MemberDirectorySection() {
  // Skip the professor (member-1) from directory listing
  const directoryMembers = memberRecords.filter((m) => m.id !== "member-1");

  // Collect all unique years that members span
  const allYears = useMemo(() => {
    const years = new Set<number>();
    for (const m of directoryMembers) {
      const range = parseYearRange(m.yearLabel);
      if (range) {
        for (let y = range[0]; y <= range[1]; y++) years.add(y);
      }
    }
    return Array.from(years).sort((a, b) => b - a);
  }, []);

  // Collect which degree categories actually exist in data
  const availableCategories = useMemo(() => {
    const cats = new Set<DegreeCategory>();
    for (const m of directoryMembers) {
      for (const c of getDegreeCategories(m.role)) cats.add(c);
    }
    return DEGREE_CATEGORIES.filter((c) => cats.has(c));
  }, []);

  const [selectedYears, setSelectedYears] = useState<Set<number>>(new Set(allYears));
  const [selectedCategories, setSelectedCategories] = useState<Set<DegreeCategory>>(new Set(availableCategories));

  const allYearsSelected = selectedYears.size === allYears.length;
  const allCategoriesSelected = selectedCategories.size === availableCategories.length;

  function toggleYear(year: number) {
    setSelectedYears((prev) => {
      const next = new Set(prev);
      if (next.has(year)) next.delete(year);
      else next.add(year);
      return next;
    });
  }

  function toggleAllYears() {
    setSelectedYears(allYearsSelected ? new Set() : new Set(allYears));
  }

  function toggleCategory(cat: DegreeCategory) {
    setSelectedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }

  function toggleAllCategories() {
    setSelectedCategories(allCategoriesSelected ? new Set() : new Set(availableCategories));
  }

  // Filter members: must match at least one selected year AND at least one selected category
  const filtered = directoryMembers.filter((m) => {
    const range = parseYearRange(m.yearLabel);
    const yearMatch =
      selectedYears.size === 0
        ? false
        : range
          ? Array.from(selectedYears).some((y) => y >= range[0] && y <= range[1])
          : false;

    const cats = getDegreeCategories(m.role);
    const catMatch =
      selectedCategories.size === 0
        ? false
        : cats.length === 0
          ? true // show members with no category if no filtering
          : cats.some((c) => selectedCategories.has(c));

    return yearMatch && catMatch;
  });

  const currentMembers = filtered.filter((m) => m.status === "current");
  const alumniMembers = filtered.filter((m) => m.status === "alumni");

  return (
    <SectionShell className="pt-6 sm:pt-6 lg:pt-6">
      {/* Year filter */}
      <div className="mb-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Year</p>
        <div className="flex flex-wrap gap-2">
          <FilterPill label="All" active={allYearsSelected} onClick={toggleAllYears} />
          {allYears.map((year) => (
            <FilterPill key={year} label={String(year)} active={selectedYears.has(year)} onClick={() => toggleYear(year)} />
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div className="mb-8">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">Category</p>
        <div className="flex flex-wrap gap-2">
          <FilterPill label="All" active={allCategoriesSelected} onClick={toggleAllCategories} />
          {availableCategories.map((cat) => (
            <FilterPill key={cat} label={cat} active={selectedCategories.has(cat)} onClick={() => toggleCategory(cat)} />
          ))}
        </div>
      </div>

      {currentMembers.length > 0 && (
        <section>
          <div className="mb-5 flex items-center gap-4">
            <h2 className="text-3xl">Current Researchers</h2>
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-sm text-slate-500">{currentMembers.length}</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {currentMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {alumniMembers.length > 0 && (
        <section className="mt-16">
          <div className="mb-5 flex items-center gap-4">
            <h2 className="text-3xl">Alumni</h2>
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-sm text-slate-500">{alumniMembers.length}</span>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {alumniMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </section>
      )}

      {filtered.length === 0 && (
        <p className="py-16 text-center text-slate-400">No members match the selected filters.</p>
      )}
    </SectionShell>
  );
}
