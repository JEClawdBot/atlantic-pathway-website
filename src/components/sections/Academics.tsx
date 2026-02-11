const requirements = [
  {
    title: "Minimum GPA",
    detail: "2.0 GPA (C average) or equivalent UK grades.",
  },
  {
    title: "UK Qualifications",
    detail: "Completion of National 5s and Highers documentation.",
  },
  {
    title: "Official Records",
    detail: "Transcripts and test scores submitted for eligibility review.",
  },
  {
    title: "NCAA / NAIA Alignment",
    detail: "Guidance to keep athletes compliant with U.S. eligibility rules.",
  },
];

export default function Academics() {
  return (
    <section
      id="academics"
      className="border-t border-white/5 bg-[#0A0A0F] py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#64748B]">
              Academics
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
              Academic readiness keeps scholarship opportunities open.
            </h2>
            <p className="text-base text-[#94A3B8]">
              We translate UK qualifications into the U.S. system and keep every athlete
              aligned with NCAA and NAIA standards.
            </p>
            <div className="rounded-2xl border border-white/10 bg-[#13131A] p-5 text-sm text-[#94A3B8]">
              We handle documentation reviews and provide ongoing academic check-ins for
              parents and athletes.
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {requirements.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A2D729]">
                  {item.title}
                </p>
                <p className="mt-3 text-sm text-[#94A3B8]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
