import Image from "next/image";

const trustItems = ["UEFA Licensed", "Glasgow Based", "US College Network"];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5 bg-[#0A0A0F]"
    >
      <div className="absolute -left-32 top-0 h-64 w-64 rounded-full bg-[rgba(162,215,41,0.15)] blur-[120px]" />
      <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[rgba(162,215,41,0.12)] blur-[140px]" />
      <div className="relative mx-auto flex min-h-[90vh] w-full max-w-6xl flex-col items-start gap-12 px-6 py-20 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#64748B]">
            Atlantic Pathway
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[#F8FAFC] sm:text-5xl lg:text-6xl">
            Your pathway from Glasgow to a U.S. college scholarship.
          </h1>
          <p className="max-w-xl text-base leading-7 text-[#94A3B8] sm:text-lg">
            We guide elite footballers through a full scholarship journey — from evaluation
            and training to academic prep, recruiting, and placement with U.S. colleges.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#pathway"
              className="inline-flex items-center justify-center rounded-lg bg-[#A2D729] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#0A0A0F] transition duration-150 hover:bg-[#B8E63E]"
            >
              Start your journey
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-lg border border-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#F8FAFC] transition duration-150 hover:border-[#A2D729]/50 hover:text-[#A2D729]"
            >
              Learn more
            </a>
          </div>
          <div className="flex flex-wrap gap-3 pt-4 text-xs uppercase tracking-[0.3em] text-[#64748B]">
            {trustItems.map((item, index) => (
              <span key={item} className="flex items-center gap-3">
                <span>{item}</span>
                {index < trustItems.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-[#64748B]" />
                )}
              </span>
            ))}
          </div>
        </div>
        <div className="relative w-full">
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-2xl border border-white/10 bg-[#13131A]/80 lg:block" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#13131A]">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/70 via-transparent to-transparent" />
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/lewis/lewis-portrait-dark.jpg"
                alt="Lewis Collins, CEO and UEFA-licensed head coach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 420px"
                priority
              />
            </div>
            <div className="relative border-t border-white/10 bg-[#0A0A0F]/80 p-4">
              <p className="text-sm font-semibold text-[#F8FAFC]">Lewis Collins</p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#64748B]">
                CEO • UEFA Licensed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
