import { utilityNav } from "../../data/mock/site";
import type { NavItem } from "../../types/content";
import { NavLinks } from "./NavLinks";

type MobileDrawerProps = {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
};

export function MobileDrawer({ items, open, onClose }: MobileDrawerProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 bg-navy/35 px-4 py-6 sm:px-6" role="dialog" aria-modal="true" aria-label="Site navigation">
      <div className="mx-auto max-w-xl rounded-[2rem] bg-paper p-6 shadow-soft">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary">c4Lab</p>
            <p className="mt-2 font-display text-2xl text-navy">Navigate the site</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Close menu
          </button>
        </div>
        <NavLinks items={items} className="mt-8 flex-col items-start" onNavigate={onClose} />
        <div className="mt-8 border-t border-slate-200 pt-6">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Utility</p>
          <NavLinks items={utilityNav} className="mt-4 flex-col items-start" onNavigate={onClose} />
        </div>
      </div>
    </div>
  );
}
