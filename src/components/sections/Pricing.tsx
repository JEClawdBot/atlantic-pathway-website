const phases = [
  {
    title: "Preparation Phase",
    summary: "Initial pathway setup and athlete profiling.",
    price: "£1,500 total",
    details: ["£450 registration", "7 monthly payments of £150", "Includes early evaluation"],
  },
  {
    title: "Commitment Phase",
    summary: "Full recruitment drive and scholarship negotiations.",
    price: "£1,500 total",
    details: [
      "£450 secondary registration",
      "7 monthly payments of £150",
      "Recruitment + placement support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-white/5 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
            Payment Structure
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Transparent investment for families planning the scholarship journey.
          </h2>
          <p className="text-base text-slate-300">
            Clear phases with predictable monthly payments to build trust and clarity.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-white/5 to-transparent p-6 shadow-lg shadow-emerald-500/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_60%)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{phases[0].title}</h3>
                <span className="text-sm font-semibold text-emerald-300">
                  {phases[0].price}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{phases[0].summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {phases[0].details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative flex flex-col items-center gap-3 rounded-2xl border border-emerald-300/40 bg-emerald-500/10 px-6 py-5 text-center text-sm text-emerald-100 shadow-lg shadow-emerald-500/20">
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-200/80">
                The Review
              </span>
              <p className="text-sm font-semibold">Formal review at age 17</p>
              <p className="text-xs text-emerald-100/70">5th year High School milestone</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-white/5 to-transparent p-6 shadow-lg shadow-emerald-500/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.12),_transparent_60%)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{phases[1].title}</h3>
                <span className="text-sm font-semibold text-emerald-300">
                  {phases[1].price}
                </span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{phases[1].summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {phases[1].details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
