const expectations = [
  {
    title: "Academic Dedication",
    detail: "Maintain strong attendance and commitment to National 5s and Highers.",
  },
  {
    title: "Performance Monitoring",
    detail: "Monthly testing for fitness, strength, speed, and agility benchmarks.",
  },
  {
    title: "Professional Communication",
    detail: "Respond quickly to consultant tasks and report all U.S. coach outreach.",
  },
  {
    title: "Character Standards",
    detail: "Positive social media presence and a disciplined lifestyle off the pitch.",
  },
];

export default function Expectations() {
  return (
    <section id="expectations" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
              Athlete Expectations
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Commitment is the difference between interest and opportunity.
            </h2>
            <p className="text-base text-slate-300">
              We set professional standards to ensure every athlete is ready for the demands
              of U.S. college football.
            </p>
          </div>
          <div className="space-y-4">
            {expectations.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <h3 className="text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
