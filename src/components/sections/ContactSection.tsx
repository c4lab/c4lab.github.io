import { siteContact } from "../../data/mock/site";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

export function ContactSection() {
  return (
    <SectionShell className="pt-0">
      <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-soft lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="Contact"
          title="Talk to the lab"

        />
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Email</p>
            <a href={`mailto:${siteContact.email}`} className="mt-3 block text-lg font-semibold text-navy">
              {siteContact.email}
            </a>
            <p className="mt-2 text-sm text-slate-600">{siteContact.contactPerson}</p>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Phone</p>
            <a href={`tel:${siteContact.phone}`} className="mt-3 block text-lg font-semibold text-navy">
              {siteContact.phone}
            </a>
          </div>
          <div className="rounded-[1.5rem] bg-slate-50 p-5 sm:col-span-2">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">Address</p>
            <div className="mt-3 space-y-1 text-slate-700">
              {siteContact.addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
