import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return <article className={cn("rounded-3xl border border-slate-200/80 bg-white shadow-soft", className)}>{children}</article>;
}
