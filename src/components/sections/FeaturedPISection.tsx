import { featuredMember } from "../../data/mock/members";
import { ExternalLink } from "../ui/ExternalLink";
import { SectionShell } from "../ui/SectionShell";

export function FeaturedPISection() {
  return (
    <SectionShell className="pt-10 pb-6 sm:pb-6 lg:pb-6">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-primary to-secondary p-8 text-white lg:p-10">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-sky-100">Featured Investigator</p>

        <div className="mt-6 flex items-center gap-5">
          <img
            src="/images/prof-chen.png"
            alt="陳倩瑜 Prof. Chen, Chien-Yu"
            className="h-20 w-20 rounded-full border-2 border-white/30 object-cover"
          />
          <div>
            <h2 className="text-3xl text-white">{featuredMember.name}</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-sky-100">{featuredMember.role}</p>
            <p className="mt-1 text-sm text-sky-100">{featuredMember.bio}</p>
          </div>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-2">
          <dl className="space-y-3 text-sm text-sky-50">
            <div>
              <dt className="font-semibold text-white">E-mail</dt>
              <dd><a href="mailto:chienyuchen@ntu.edu.tw" className="hover:text-white/80">chienyuchen@ntu.edu.tw</a></dd>
            </div>
            <div>
              <dt className="font-semibold text-white">Tel</dt>
              <dd>02-3366-5335 (系主任辦公室)</dd>
              <dd>02-3366-5334</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">研究主題</dt>
              <dd>生物資訊、資料探勘、機器學習</dd>
            </div>
            <div>
              <dt className="font-semibold text-white">授課領域</dt>
              <dd>人工智慧概論、資料結構與演算法、生物資訊基石、生醫資料探勘</dd>
            </div>
          </dl>

          <div className="flex flex-wrap content-start gap-3">
            {featuredMember.links.map((link) => (
              <ExternalLink key={link.href} href={link.href} className="text-sky-100 hover:text-white">
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>
      </div>
    </SectionShell>
  );
}
