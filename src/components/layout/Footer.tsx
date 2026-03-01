import { siteContact, utilityNav } from "../../data/mock/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70" role="contentinfo">
      <div className="page-grid grid gap-10 py-10 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">Contact Us</p>
          <dl className="mt-6 space-y-4 text-sm text-slate-600">
            <div>
              <dt className="font-semibold text-slate-800">Tel</dt>
              <dd><a href={`tel:${siteContact.phone}`}>{siteContact.phone}</a></dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">E-mail</dt>
              <dd>
                <a href={`mailto:${siteContact.email}`}>{siteContact.email}</a>
                <span className="ml-1 text-slate-500">({siteContact.contactPerson})</span>
              </dd>
            </div>
            <div>
              <dt className="font-semibold text-slate-800">Address</dt>
              <dd>{siteContact.addressLines.join(", ")}</dd>
            </div>
          </dl>
        </div>
        {utilityNav.length > 0 && (
          <div className="rounded-[1.75rem] border border-slate-200 bg-paper p-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Utility</p>
            <div className="mt-4 space-y-3">
              {utilityNav.map((item) => (
                <a key={item.to} href={item.to} className="block font-semibold text-navy hover:text-primary">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </footer>
  );
}
