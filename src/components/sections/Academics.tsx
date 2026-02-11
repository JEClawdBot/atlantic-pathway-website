const requirements = [
  "Minimum 2.0 GPA (C average) benchmark",
  "National 5s & Highers progression planning",
  "Transcript and test score documentation",
  "Guidance on NCAA/NAIA eligibility standards",
];

export default function Academics() {
  return (
    <section id="academics" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
              Academic Requirements
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Academic readiness keeps scholarship opportunities open.
            </h2>
            <p className="text-base text-slate-300">
              We help players translate UK qualifications into the U.S. eligibility system.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <ul className="space-y-3 text-sm text-slate-200">
              {requirements.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
