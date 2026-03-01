import { projectHighlights } from "../../data/mock/home";
import { Card } from "../ui/Card";
import { ExternalLink } from "../ui/ExternalLink";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";
import { Tag } from "../ui/Tag";

export function ProjectHighlightGrid() {
  return (
    <SectionShell tone="navy" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_35%)]" />
      <div className="relative">
        <SectionHeading
          eyebrow="Platforms and Tools"
          title="Selected lab outputs"

          titleClassName="text-white"
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {projectHighlights.map((project) => (
            <a
              key={project.id}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-[1.75rem] bg-white/10 p-6 text-slate-100 backdrop-blur-sm transition hover:bg-white/15"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-300">{project.tag}</span>
              <h3 className="mt-3 text-2xl text-white">{project.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-200">{project.blurb}</p>
            </a>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
