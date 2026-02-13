import Link from "next/link";

const expectations = [
  {
    title: "Academic Dedication",
    detail: "Consistent attendance and progress through National 5s and Highers.",
  },
  {
    title: "Performance Monitoring",
    detail: "Monthly testing across strength, speed, and agility to track development.",
  },
  {
    title: "Communication",
    detail: "Clear, timely updates with consultants and reporting of coach contact.",
  },
  {
    title: "Character",
    detail: "Professional standards on and off the pitch, including social conduct.",
  },
];

export default function Expectations() {
  return (
    <section
      id="expectations"
      className="border-t border-white/5 bg-[#0A0A0F] py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#64748B]">
              Expectations
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
              Professional standards that turn ambition into opportunity.
            </h2>
            <p className="text-base text-[#94A3B8]">
              Every athlete commits to the behaviors required by U.S. college programs and
              scholarship partners.
            </p>
            <Link
              href="/faq"
              className="inline-flex items-center text-sm font-semibold text-[#A2D729] transition duration-150 hover:text-[#B8E63E]"
            >
              Read our FAQ →
            </Link>
          </div>
          <div className="space-y-4">
            {expectations.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A2D729]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-[#F8FAFC]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#94A3B8]">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
