const services = [
  {
    title: "Elite Training",
    description: "Pitch sessions, summer performance camps, and showcase events led by UEFA coaches.",
  },
  {
    title: "SAT Assistance",
    description: "Integrated SAT modules plus NCAA/NAIA eligibility guidance for compliance.",
  },
  {
    title: "College Matching",
    description: "Identify U.S. colleges that fit athletic level, academics, and personal goals.",
  },
  {
    title: "Scholarship Negotiation",
    description: "Expert advocacy to secure the best possible scholarship value for families.",
  },
  {
    title: "Content Creation",
    description: "Highlight reels filmed on Veo and complete athletic + academic profiles.",
  },
  {
    title: "Recruitment Strategy",
    description: "Outreach planning, coach communications, and showcase scheduling to earn offers.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/5 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A2D729]/80">
            Services
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Everything players need to earn and secure U.S. scholarships.
          </h2>
          <p className="text-base text-slate-300">
            We combine elite coaching, academic strategy, and recruitment expertise to create
            a complete pathway.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:border-[#A2D729]/60 hover:shadow-lg hover:shadow-[#A2D729]/20"
            >
              <h3 className="text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
