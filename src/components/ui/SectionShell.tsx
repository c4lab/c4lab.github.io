import { cn } from "../../lib/cn";
import type { SectionProps } from "../../types/content";

export function SectionShell({
  children,
  className,
  contentClassName,
  tone = "light",
  id
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn("section-pad", tone === "navy" ? "bg-navy text-slate-100" : "bg-transparent", className)}
    >
      <div className={cn("page-grid", contentClassName)}>{children}</div>
    </section>
  );
}
