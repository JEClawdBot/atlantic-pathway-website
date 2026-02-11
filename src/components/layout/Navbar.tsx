"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Pathway", href: "#pathway" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Academics", href: "#academics" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleToggle = () => setIsOpen((prev) => !prev);
  const handleClose = () => setIsOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#0A0A0F]/80 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg border border-white/10 bg-[#13131A]">
            <Image
              src="/images/brand/logo.jpg"
              alt="Atlantic Pathway logo"
              fill
              className="object-contain"
              sizes="40px"
              priority
            />
          </div>
          <div className="leading-tight">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94A3B8]">
              Atlantic Pathway
            </p>
            <p className="text-xs text-[#64748B]">Glasgow • U.S. Scholarships</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-[#94A3B8] md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition duration-150 hover:text-[#F8FAFC]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#contact"
            className="rounded-lg border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#94A3B8] transition duration-150 hover:border-[#A2D729]/50 hover:text-[#F8FAFC]"
          >
            Get in touch
          </a>
          <a
            href="#pathway"
            className="rounded-lg bg-[#A2D729] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#0A0A0F] transition duration-150 hover:bg-[#B8E63E]"
          >
            Start your journey
          </a>
        </div>
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex items-center justify-center rounded-lg border border-white/10 p-2 text-white transition duration-150 hover:border-[#A2D729]/60 md:hidden"
          onClick={handleToggle}
        >
          <span className="flex h-5 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full rounded-full bg-white transition ${
                isOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full rounded-full bg-white transition ${
                isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>
      <div
        className={`border-t border-white/10 bg-[#0A0A0F]/95 px-6 py-4 text-sm text-[#94A3B8] transition-all duration-300 md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition duration-150 hover:text-[#F8FAFC]"
              onClick={handleClose}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#pathway"
            className="rounded-lg bg-[#A2D729] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#0A0A0F]"
            onClick={handleClose}
          >
            Start your journey
          </a>
        </div>
      </div>
    </header>
  );
}
