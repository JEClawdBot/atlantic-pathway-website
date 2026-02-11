const navItems = [
  { label: "Aims & Vision", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Expectations", href: "#expectations" },
  { label: "Payment", href: "#pricing" },
  { label: "Academics", href: "#academics" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
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
        <nav className="flex flex-wrap gap-4 text-sm text-slate-200">
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
      </div>
    </header>
  );
}
