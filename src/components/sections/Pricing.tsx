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
    details: ["£450 secondary registration", "7 monthly payments of £150", "Formal review milestone"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 sm:py-24">
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
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {phases.map((phase) => (
            <div
              key={phase.title}
              className="rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-500/10 via-white/5 to-transparent p-6"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{phase.title}</h3>
                <span className="text-sm font-semibold text-emerald-300">{phase.price}</span>
              </div>
              <p className="mt-3 text-sm text-slate-300">{phase.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-200">
                {phase.details.map((detail) => (
                  <li key={detail} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
