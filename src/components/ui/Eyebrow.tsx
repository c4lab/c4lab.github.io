import { cn } from "../../lib/cn";

type EyebrowProps = {
  children: string;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p className={cn("text-xs font-bold uppercase tracking-[0.28em] text-primary", className)}>{children}</p>
  );
}
