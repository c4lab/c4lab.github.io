import { galaxySections, galaxySupport } from "../../data/mock/galaxy";
import { ExternalLink } from "../ui/ExternalLink";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

export function GalaxyGuideSection() {
  return (
    <SectionShell className="pt-10">
      <SectionHeading
        eyebrow="Operations"
        title="Guidance for the NTU Galaxy workflow"
        description="This page is intentionally utility-first: structured information, clear support paths, and no marketing framing."
      />
      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        {galaxySections.map((section) => (
          <section key={section.id} className="rounded-[1.75rem] border border-slate-200 bg-white/80 p-6 shadow-soft">
            <h2 className="text-2xl">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{section.summary}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-600">
              {section.points.map((point) => (
                <li key={point}>• {point}</li>
              ))}
            </ul>
            <div className="mt-5 space-y-3">
              {section.links.map((link) => (
                <ExternalLink key={link.href} href={link.href}>
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="mt-10 rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl">Support contacts</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {galaxySupport.map((contact) => (
            <div key={contact.email} className="rounded-[1.5rem] border border-slate-200 bg-white p-5">
              <p className="font-semibold text-navy">{contact.name}</p>
              <p className="mt-1 text-sm uppercase tracking-[0.18em] text-slate-500">{contact.role}</p>
              <a href={`mailto:${contact.email}`} className="mt-4 block text-sm font-semibold text-primary">
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
