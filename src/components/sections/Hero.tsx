export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.2),_transparent_55%)]" />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-2xl space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
            Aims & Vision
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
            Building a direct pathway from Glasgow football to U.S. college scholarships.
          </h1>
          <p className="text-base leading-7 text-slate-300 sm:text-lg">
            Atlantic Pathway guides ambitious players through elite football development,
            academic preparation, and scholarship placement in American colleges.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <button className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
              Start the Journey
            </button>
            <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-emerald-300 hover:text-emerald-200">
              Meet the Coaching Team
            </button>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          {[
            "UEFA-licensed coaching leadership",
            "Performance tracking & showcases",
            "Academic + athletic scholarship focus",
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
