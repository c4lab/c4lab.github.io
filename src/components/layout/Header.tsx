import { useState } from "react";
import { Link } from "react-router-dom";
import { primaryNav, utilityNav } from "../../data/mock/site";
import { NavLinks } from "./NavLinks";
import { MobileDrawer } from "./MobileDrawer";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/40 bg-paper/75 backdrop-blur-md">
        <div className="page-grid flex items-center justify-between gap-4 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="rounded-full px-2 py-1">
              <span className="font-display text-2xl text-navy">c4Lab</span>
            </Link>
            <p className="hidden text-sm text-slate-500 lg:block">Machine learning and bioinformatics lab</p>
          </div>

          <div className="hidden items-center gap-4 lg:flex">
            <nav aria-label="Primary" className="glass-panel rounded-full px-2 py-1">
              <NavLinks items={primaryNav} />
            </nav>
            <nav aria-label="Utility">
              <NavLinks items={utilityNav} />
            </nav>
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-navy lg:hidden"
          >
            Menu
          </button>
        </div>
      </header>

      <MobileDrawer items={primaryNav} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
