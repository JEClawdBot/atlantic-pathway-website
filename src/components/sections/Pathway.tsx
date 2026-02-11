import Image from "next/image";

const highlights = [
  {
    title: "Glasgow Training Base",
    description: "Elite sessions on home soil with UEFA-led coaching and performance tracking.",
    image: "/images/players/training-group-glasgow.jpg",
  },
  {
    title: "Credible Competitive Environment",
    description: "A full squad culture that mirrors the standards of top U.S. college programs.",
    image: "/images/players/full-squad-official.jpg",
  },
  {
    title: "U.S. College Success",
    description: "Scholarship outcomes that end with American campus celebrations.",
    image: "/images/players/team-celebration-usa.jpg",
  },
];

export default function Pathway() {
  return (
    <section
      id="pathway"
      className="border-t border-white/5 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900/40 py-20 sm:py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-2xl space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A2D729]/80">
            The Pathway
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            From Glasgow training to U.S. college success.
          </h2>
          <p className="text-base text-slate-300">
            We build a complete journey for footballers, combining elite development, academic
            readiness, and trusted recruiting relationships.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 320px"
                />
              </div>
              <div className="space-y-2 p-5">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm text-slate-300">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
