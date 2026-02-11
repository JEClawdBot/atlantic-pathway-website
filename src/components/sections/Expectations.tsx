const expectations = [
  {
    title: "Academic Dedication",
    detail: "Maintain school attendance and stay on track through National 5s and Highers.",
  },
  {
    title: "Performance Monitoring",
    detail: "Monthly fitness testing across strength, cardiovascular, and agility markers.",
  },
  {
    title: "Communication",
    detail: "Respond promptly to consultant tasks and report direct U.S. coach contact.",
  },
  {
    title: "Character & Reputation",
    detail: "Clean social media with zero tolerance for alcohol, drugs, or violence.",
  },
];

export default function Expectations() {
  return (
    <section
      id="expectations"
      className="border-t border-white/5 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-5">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A2D729]/80">
              Athlete Expectations
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Commitment is the difference between interest and opportunity.
            </h2>
            <p className="text-base text-slate-300">
              We set professional standards so every athlete is ready for the demands of
              U.S. college football.
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
