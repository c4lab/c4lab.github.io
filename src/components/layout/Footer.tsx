import { siteContact } from "../../data/mock/site";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/70" role="contentinfo">
      <div className="page-grid py-10">
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
    </footer>
  );
}
