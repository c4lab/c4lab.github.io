import { Link } from "react-router-dom";
import { cn } from "../../lib/cn";

type ButtonLinkProps = {
  to: string;
  children: string;
  variant?: "primary" | "secondary";
};

export function ButtonLink({ to, children, variant = "primary" }: ButtonLinkProps) {
  return (
    <Link
      to={to}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-transform duration-200 hover:-translate-y-0.5",
        variant === "primary"
          ? "bg-accent text-white shadow-soft hover:bg-accent/90"
          : "border border-primary/20 bg-white/80 text-navy hover:border-primary/40 hover:bg-white"
      )}
    >
      {children}
    </Link>
  );
}
