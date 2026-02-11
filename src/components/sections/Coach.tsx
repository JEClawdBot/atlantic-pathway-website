import Image from "next/image";

export default function Coach() {
  return (
    <section className="border-t border-white/5 bg-[#0A0A0F] py-20 sm:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#13131A]">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 via-transparent to-transparent" />
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/lewis/lewis-pitch-smiling.jpg"
              alt="Lewis Collins on the pitch in Glasgow"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-[#A2D729]" />
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#64748B]">
              Meet the Coach
            </p>
          </div>
          <h2 className="text-3xl font-semibold tracking-tight text-[#F8FAFC] sm:text-4xl">
            Lewis Collins leads the pathway with UEFA-licensed expertise.
          </h2>
          <p className="text-base text-[#94A3B8]">
            Lewis is the founder and hands-on head coach, guiding every athlete through
            elite training, academic planning, and recruitment preparation. Parents and
            players work directly with him from the first assessment to the final U.S.
            college decision.
          </p>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-[#94A3B8]">
            UEFA Licensed • Founder • Glasgow based program director
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg border border-white/10 px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#F8FAFC] transition duration-150 hover:border-[#A2D729]/50 hover:text-[#A2D729]"
          >
            Schedule a call
          </a>
        </div>
      </div>
    </section>
  );
}
