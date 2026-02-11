import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 text-sm text-slate-300 sm:flex-row sm:items-start sm:justify-between">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-slate-900">
              <Image
                src="/images/brand/logo.jpg"
                alt="Atlantic Pathway logo"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-white">Atlantic Pathway</p>
              <p className="text-xs text-slate-400">Glasgow, Scotland</p>
            </div>
          </div>
          <p className="text-sm text-slate-300">
            Building elite football pathways from Glasgow to U.S. college scholarships.
          </p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-white">Contact</p>
          <p>hello@atlanticpathway.com</p>
          <p>+44 (0) 0000 000000</p>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-white">Social</p>
          <div className="flex flex-col gap-1">
            <a className="transition hover:text-[#A2D729]" href="#">
              Instagram
            </a>
            <a className="transition hover:text-[#A2D729]" href="#">
              TikTok
            </a>
            <a className="transition hover:text-[#A2D729]" href="#">
              LinkedIn
            </a>
          </div>
        </div>
        <p className="text-xs text-slate-500">
          © 2026 Atlantic Pathway. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
