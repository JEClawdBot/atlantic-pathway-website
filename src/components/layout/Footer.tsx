export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-white">Atlantic Pathway</p>
          <p className="mt-2">Glasgow, Scotland</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-white">Contact</p>
          <p>hello@atlanticpathway.com</p>
          <p>+44 (0) 0000 000000</p>
        </div>
        <p className="text-xs text-slate-500">
          © 2026 Atlantic Pathway. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
