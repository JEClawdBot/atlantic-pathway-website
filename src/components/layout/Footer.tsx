import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "#home", type: "anchor" },
  { label: "Pathway", href: "#pathway", type: "anchor" },
  { label: "Services", href: "#services", type: "anchor" },
  { label: "Pricing", href: "#pricing", type: "anchor" },
  { label: "Academics", href: "#academics", type: "anchor" },
  { label: "Staff", href: "/staff", type: "route" },
  { label: "Enquire", href: "/enquiry", type: "route" },
  { label: "FAQ", href: "/faq", type: "route" },
] as const;

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-[#0A0A0F] py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 text-sm text-[#94A3B8] lg:flex-row lg:items-start lg:justify-between">
        <div className="space-y-4 lg:max-w-sm">
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-[#13131A]">
              <Image
                src="/images/brand/logo.jpg"
                alt="Atlantic Pathway logo"
                fill
                className="object-contain"
                sizes="40px"
              />
            </div>
            <div>
              <p className="text-base font-semibold text-[#F8FAFC]">Atlantic Pathway</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#64748B]">
                Glasgow, Scotland
              </p>
            </div>
          </div>
          <p className="text-sm text-[#94A3B8]">
            A premium football scholarship pathway connecting Scottish talent with U.S.
            college programs.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#64748B]">
            Quick Links
          </p>
          <div className="flex flex-col gap-2">
            {footerLinks.map((link) =>
              link.type === "route" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#94A3B8] transition duration-150 hover:text-[#F8FAFC]"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#94A3B8] transition duration-150 hover:text-[#F8FAFC]"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#64748B]">
            Contact
          </p>
          <p className="text-sm text-[#F8FAFC]">hello@atlanticpathway.com</p>
          <p className="text-sm text-[#94A3B8]">+44 (0) 0000 000000</p>
          <p className="text-sm text-[#64748B]">Glasgow, Scotland</p>
        </div>
        <div className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#64748B]">
            Social
          </p>
          <div className="flex flex-col gap-2">
            {["Instagram", "TikTok", "LinkedIn", "YouTube"].map((item) => (
              <a
                key={item}
                className="text-sm text-[#94A3B8] transition duration-150 hover:text-[#F8FAFC]"
                href="#"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 w-full max-w-6xl px-6 text-xs text-[#64748B]">
        © 2026 Atlantic Pathway. All rights reserved.
      </div>
    </footer>
  );
}
