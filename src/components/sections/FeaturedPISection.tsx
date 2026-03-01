import { featuredMember } from "../../data/mock/members";
import { ExternalLink } from "../ui/ExternalLink";
import { SectionShell } from "../ui/SectionShell";
import { Tag } from "../ui/Tag";

export function FeaturedPISection() {
  return (
    <SectionShell className="pt-10">
      <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.75rem] bg-gradient-to-br from-navy via-primary to-secondary p-8 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-100">Featured Investigator</p>
          <h2 className="mt-4 text-4xl text-white">{featuredMember.name}</h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-sky-100">{featuredMember.role}</p>
        </div>
        <div>
          <Tag>Research Leadership</Tag>
          <p className="mt-4 text-base leading-8 text-slate-600">{featuredMember.bio}</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-600">
            {featuredMember.highlights.map((highlight) => (
              <li key={highlight}>• {highlight}</li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            {featuredMember.links.map((link) => (
              <ExternalLink key={link.href} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
