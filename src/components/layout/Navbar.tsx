"use client";

import { useState } from "react";

const navItems = [
  { label: "Aims & Vision", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Expectations", href: "#expectations" },
  { label: "Payment", href: "#pricing" },
  { label: "Academics", href: "#academics" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-lg font-semibold">
            AP
          </span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300/80">
              Atlantic Pathway
            </p>
            <p className="text-xs text-slate-400">Glasgow • Football Scholarships</p>
          </div>
        </div>
        <nav className="hidden flex-wrap gap-4 text-sm text-slate-200 sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-emerald-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex items-center justify-center rounded-full border border-white/10 p-2 text-white transition hover:border-emerald-300/60 sm:hidden"
          onClick={handleToggle}
        >
          <span className="flex h-5 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-white transition ${
                isOpen ? "translate-y-2 rotate-45" : ""}
              `}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition ${
                isOpen ? "opacity-0" : ""}
              `}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""}
              `}
            />
          </span>
        </button>
      </div>
      <div
        className={`border-t border-white/10 bg-slate-950/95 px-6 py-3 text-sm text-slate-200 transition-all duration-300 sm:hidden ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-emerald-300"
              onClick={handleClose}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
