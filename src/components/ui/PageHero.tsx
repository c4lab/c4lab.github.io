import { ButtonLink } from "./ButtonLink";
import { Eyebrow } from "./Eyebrow";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  summary: string;
  stats?: Array<{
    label: string;
    value: string;
  }>;
  actions?: Array<{
    label: string;
    href: string;
  }>;
  strapline?: string;
  subtitle?: string;
  highlight?: string;
  heroImage?: string;
  bodyImage?: string;
};

export function PageHero({ eyebrow, title, summary, stats, actions, strapline, subtitle, highlight, heroImage, bodyImage }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-10 sm:pt-14">
      {heroImage ? (
        <div
          className="absolute inset-x-0 top-0 h-[28rem] bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 to-white" />
        </div>
      ) : (
        <div className="absolute inset-x-0 top-0 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),_transparent_58%)]" />
      )}
      <div className="page-grid relative">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div className="rounded-[2rem] border border-white/50 bg-white/80 p-8 shadow-glass backdrop-blur-md sm:p-10">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-4xl leading-tight sm:text-5xl lg:text-6xl">{title}</h1>
            {strapline ? <p className="mt-4 text-lg font-semibold text-slate-700">{strapline}</p> : null}
            {subtitle ? <h3 className="mt-4 text-xl font-semibold text-primary sm:text-2xl">{subtitle}</h3> : null}
            <div className="mt-5 max-w-2xl space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
              {summary.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            {highlight ? (
              <p className="mt-6 max-w-xl border-l-2 border-accent/70 pl-4 text-sm font-medium leading-7 text-slate-700">
                {highlight}
              </p>
            ) : null}
            {actions?.length ? (
              <div className="mt-8 flex flex-wrap gap-3">
                {actions.map((action, index) => (
                  <ButtonLink key={action.href} to={action.href} variant={index === 0 ? "primary" : "secondary"}>
                    {action.label}
                  </ButtonLink>
                ))}
              </div>
            ) : null}
          </div>

          <div className="space-y-4">
            {bodyImage ? (
              <div className="flex justify-center">
                <img src={bodyImage} alt="c4Lab illustration" className="w-full max-w-xs rounded-2xl" />
              </div>
            ) : null}
            {stats?.length ? (
              <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {stats.map((stat) => (
                  <div key={stat.label} className="glass-panel rounded-[1.75rem] p-6">
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{stat.label}</p>
                    <p className="mt-3 font-display text-4xl text-navy">{stat.value}</p>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
