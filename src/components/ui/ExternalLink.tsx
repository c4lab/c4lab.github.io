import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("inline-flex items-center gap-2 font-semibold text-primary hover:text-primary-strong", className)}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="text-sm">
        ↗
      </span>
    </a>
  );
}
