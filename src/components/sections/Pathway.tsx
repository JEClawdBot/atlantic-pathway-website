import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Glasgow Intake",
    description:
      "Evaluation, baseline metrics, and a clear roadmap for the scholarship journey.",
  },
  {
    number: "02",
    title: "Elite Training",
    description:
      "Weekly sessions with UEFA coaching, strength monitoring, and match exposure.",
  },
  {
    number: "03",
    title: "Placement Strategy",
    description:
      "Academic planning, recruiting outreach, highlight reels, and college matching.",
  },
  {
    number: "04",
    title: "U.S. College Arrival",
    description:
      "Commitment, scholarship negotiation, and transition to campus football.",
  },
];

const images = [
  {
    src: "/images/players/training-group-glasgow.jpg",
    alt: "Atlantic Pathway training group in Glasgow",
  },
  {
    src: "/images/players/team-celebration-usa.jpg",
    alt: "Atlantic Pathway players celebrating in the U.S.",
  },
];

export default function Pathway() {
  return (
    <section
      id="pathway"
      className="relative border-t border-white/5 bg-[#0A0A0F] py-20 sm:py-28"
    >
      <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[rgba(162,215,41,0.12)] blur-[140px]" />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#64748B]">
            The Pathway
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            A clear journey from Glasgow training to U.S. college placement.
          </h2>
          <p className="text-base text-[#94A3B8]">
            We design a step-by-step pathway that balances elite football development,
            academic readiness, and trusted recruitment relationships.
          </p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#A2D729]">
                    {step.number}
                  </span>
                  <h3 className="text-lg font-semibold text-[#F8FAFC]">
                    {step.title}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-[#94A3B8]">{step.description}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-6">
            {images.map((image) => (
              <div
                key={image.src}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#13131A]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/70 via-transparent to-transparent" />
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 420px"
                    placeholder="blur"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFAABAAAAAAAAAAAAAAAAAAAABv/EAB8QAAICAgIDAQAAAAAAAAAAAAECAwQABREhBhIxQf/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AsuufLK9eijV6UNd2CSCWRWZ8cAkDj6z/2Q=="
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
