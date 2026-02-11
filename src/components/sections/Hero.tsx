import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5 py-20 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(162,215,41,0.18),_transparent_60%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A2D729]/80">
            Aims & Vision
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            A direct pathway from Glasgow football to U.S. college scholarships.
          </h1>
          <p className="text-base leading-7 text-slate-300 sm:text-lg">
            Atlantic Pathway specializes in helping student-athletes from the UK secure
            athletic scholarships at American colleges and universities. We guide every
            step from initial evaluation through enrollment, delivered in an elite football
            environment led by UEFA-licensed coaching.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-[#A2D729] px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-[#B8E34A]">
              Start Your Journey
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#A2D729] hover:text-[#A2D729]">
              Apply Now
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-6 -top-6 hidden h-24 w-24 rounded-full border border-[#A2D729]/30 sm:block" />
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl shadow-black/50">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/lewis/lewis-portrait-dark.jpg"
                alt="Lewis Collins, CEO and UEFA-licensed coach"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 420px"
                priority
              />
            </div>
            <div className="border-t border-white/10 bg-slate-950/80 p-4">
              <p className="text-sm font-semibold text-white">Lewis Collins</p>
              <p className="text-xs text-slate-400">CEO • UEFA-licensed Head Coach</p>
            </div>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3 lg:col-span-2">
          {[
            "Elite football environment led by UEFA coaches",
            "Performance tracking, showcases, and recruitment strategy",
            "Academic + athletic scholarship focus from day one",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-slate-200 shadow-lg shadow-black/40"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
