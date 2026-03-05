import { useState } from "react";
import { featuredMember } from "../../data/mock/members";
import { ExternalLink } from "../ui/ExternalLink";
import { SectionShell } from "../ui/SectionShell";

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <dd className="flex items-center gap-2">
      <a href={`mailto:${email}`} className="hover:text-white/80">{email}</a>
      <button
        onClick={handleCopy}
        className="rounded px-1.5 py-0.5 text-xs text-white transition hover:bg-white/10 hover:text-white"
        title="Copy email"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </dd>
  );
}

export function FeaturedPISection() {
  return (
    <SectionShell className="pt-10 pb-6 sm:pb-6 lg:pb-6">
      <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy via-primary to-secondary p-8 text-white lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-12">
          {/* Left column */}
          <div className="flex-1">
            {/* Name & role */}
            <h2 className="text-3xl text-white">{featuredMember.name}</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-white">{featuredMember.role}</p>
            {featuredMember.bio && <p className="mt-2 text-sm text-white/90">{featuredMember.bio}</p>}

            {/* Contact info */}
            <dl className="mt-6 space-y-3 text-sm text-white">
              <div>
                <dt className="font-semibold text-white">E-mail</dt>
                <CopyEmail email="chienyuchen@ntu.edu.tw" />
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

            {/* Photo — mobile only, between info and links */}
            <img
              src="/images/prof-chen.webp"
              alt="陳倩瑜 Prof. Chen, Chien-Yu"
              className="mx-auto my-6 w-52 rounded-full object-cover lg:hidden"
              loading="lazy"
              decoding="async"
            />

            {/* Links */}
            <div className="flex flex-wrap gap-3 lg:mt-6">
              {featuredMember.links.map((link) => (
                <ExternalLink key={link.href} href={link.href} className="text-white hover:text-white/80">
                  {link.label}
                </ExternalLink>
              ))}
            </div>
          </div>

          {/* Right: photo — desktop only */}
          <img
            src="/images/prof-chen.webp"
            alt="陳倩瑜 Prof. Chen, Chien-Yu"
            className="hidden w-72 shrink-0 rounded-full object-cover lg:block"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </SectionShell>
  );
}
