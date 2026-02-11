const phases = [
  {
    title: "Preparation Phase",
    summary: "Initial registration, evaluation, and early athlete profiling.",
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
    <section id="pricing" className="border-t border-white/5 bg-[#0A0A0F] py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#64748B]">
            Pricing
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Transparent phases that keep families informed and confident.
          </h2>
          <p className="text-base text-[#94A3B8]">
            Structured payments support a long-term pathway while maintaining accountability
            for both parties.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(162,215,41,0.12),_transparent_60%)]" />
            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#F8FAFC]">{phases[0].title}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A2D729]">
                  {phases[0].price}
                </span>
              </div>
              <p className="mt-3 text-sm text-[#94A3B8]">{phases[0].summary}</p>
              <ul className="mt-5 space-y-3 text-sm text-[#94A3B8]">
                {phases[0].details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A2D729]" />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center justify-center lg:order-none">
            <div className="rounded-2xl border border-[#A2D729]/40 bg-[#13131A] px-6 py-5 text-center text-sm text-[#94A3B8]">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#A2D729]">
                The Review
              </p>
              <p className="mt-3 text-sm font-semibold text-[#F8FAFC]">
                Formal review at age 17
              </p>
              <p className="mt-2 text-xs text-[#64748B]">
                5th year High School milestone
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="relative">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#F8FAFC]">{phases[1].title}</h3>
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A2D729]">
                  {phases[1].price}
                </span>
              </div>
              <p className="mt-3 text-sm text-[#94A3B8]">{phases[1].summary}</p>
              <ul className="mt-5 space-y-3 text-sm text-[#94A3B8]">
                {phases[1].details.map((detail) => (
                  <li key={detail} className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#A2D729]" />
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
