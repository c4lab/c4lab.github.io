import { siteContact, utilityNav } from "../../data/mock/site";
import { ExternalLink } from "../ui/ExternalLink";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70" role="contentinfo">
      <div className="page-grid grid gap-10 py-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">c4Lab</p>
          <h2 className="mt-3 text-3xl">Computational biology with translational intent.</h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Research interfaces, datasets, and public communication designed for clarity, continuity, and long-term maintenance.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 text-sm text-slate-600">
            <a href={`tel:${siteContact.phone}`}>{siteContact.phone}</a>
            <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
          </div>
        </div>
        <div className="rounded-[1.75rem] border border-slate-200 bg-paper p-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Utility</p>
          <div className="mt-4 space-y-3">
            {utilityNav.map((item) => (
              <a key={item.to} href={item.to} className="block font-semibold text-navy hover:text-primary">
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-6">
            <ExternalLink href={`mailto:${siteContact.email}`}>Contact Prof. Chen</ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
