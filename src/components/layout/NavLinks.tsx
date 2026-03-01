import { NavLink } from "react-router-dom";
import { cn } from "../../lib/cn";
import type { NavItem } from "../../types/content";

type NavLinksProps = {
  items: NavItem[];
  className?: string;
  onNavigate?: () => void;
};

export function NavLinks({ items, className, onNavigate }: NavLinksProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          onClick={onNavigate}
          className={({ isActive }) =>
            cn(
              "rounded-full px-4 py-2 text-sm font-semibold text-slate-600 hover:text-navy",
              isActive && "bg-navy text-white hover:text-white"
            )
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}
