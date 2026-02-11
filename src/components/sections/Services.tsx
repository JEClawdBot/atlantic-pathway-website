const services = [
  {
    title: "Elite Training",
    description: "Intensive sessions, performance testing, and match exposure led by UEFA coaches.",
  },
  {
    title: "SAT Assistance",
    description: "Structured SAT prep with NCAA and NAIA academic eligibility guidance.",
  },
  {
    title: "College Matching",
    description: "Targeted outreach to programs that fit athletic level and academics.",
  },
  {
    title: "Scholarship Negotiation",
    description: "Strategic advocacy to secure the strongest possible scholarship package.",
  },
  {
    title: "Content Creation",
    description: "Highlight reels, athlete profiles, and recruiting assets built for coaches.",
  },
  {
    title: "Showcase Events",
    description: "Curated showcases and showcases scheduling to earn scholarship offers.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/5 bg-[#0A0A0F] py-20 sm:py-28"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#64748B]">
            Services
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            A complete scholarship support system built around elite football.
          </h2>
          <p className="text-base text-[#94A3B8]">
            Each service is designed to move athletes closer to the right U.S. college offer.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-150 hover:border-white/20 hover:bg-[#13131A]"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#64748B]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 text-lg font-semibold text-[#F8FAFC]">
                {service.title}
              </h3>
              <p className="mt-3 text-sm text-[#94A3B8]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
