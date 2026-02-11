const services = [
  {
    title: "Elite Football Training",
    description: "High-performance sessions, camps, and showcases led by UEFA-qualified coaches.",
  },
  {
    title: "College Matching",
    description: "Personalized fit based on athletic level, academics, and long-term goals.",
  },
  {
    title: "SAT & Eligibility Support",
    description: "Guidance through NCAA/NAIA requirements, test prep, and compliance steps.",
  },
  {
    title: "Scholarship Negotiation",
    description: "Advocacy to secure the best possible scholarship packages for families.",
  },
  {
    title: "Player Branding",
    description: "Highlight reels, profiles, and media assets to showcase talent to U.S. coaches.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300/80">
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
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-emerald-300/50"
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
