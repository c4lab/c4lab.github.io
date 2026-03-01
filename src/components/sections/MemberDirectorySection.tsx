import { memberRecords } from "../../data/mock/members";
import type { MemberRecord } from "../../types/content";
import { Card } from "../ui/Card";
import { SectionShell } from "../ui/SectionShell";
import { SectionHeading } from "../ui/SectionHeading";

function MemberCard({ member }: { member: MemberRecord }) {
  return (
    <Card className="rounded-[1.5rem] p-5">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">{member.yearLabel}</p>
      <h3 className="mt-3 text-2xl">{member.name}</h3>
      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary">{member.role}</p>
      <p className="mt-4 text-sm leading-7 text-slate-600">{member.focus}</p>
    </Card>
  );
}

export function MemberDirectorySection() {
  const currentMembers = memberRecords.filter((member) => member.status === "current");
  const alumniMembers = memberRecords.filter((member) => member.status === "alumni");

  return (
    <SectionShell>
      <section>
        <SectionHeading
          eyebrow="Directory"
          title="Current Researchers"
          description="The member module separates active researchers from alumni so later content imports can preserve both current and historical structure."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {currentMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <SectionHeading
          eyebrow="History"
          title="Alumni Network"
          description="A separate alumni band keeps the archive visible without flattening the active team presentation."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {alumniMembers.map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </SectionShell>
  );
}
