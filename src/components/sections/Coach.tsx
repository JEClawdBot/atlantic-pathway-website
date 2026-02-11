import Image from "next/image";

export default function Coach() {
  return (
    <section className="border-t border-white/5 bg-slate-950 py-20 sm:py-24">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60">
          <div className="relative aspect-[4/5]">
            <Image
              src="/images/lewis/lewis-coaching-action.jpg"
              alt="Lewis Collins coaching on the pitch"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>
        </div>
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#A2D729]/80">
            Meet the Coach
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Lewis Collins leads every pathway with UEFA-licensed expertise.
          </h2>
          <p className="text-base text-slate-300">
            As CEO and Head Coach, Lewis brings a relentless focus on elite standards.
            He works directly with athletes and families to build trusted relationships,
            ensuring each player is prepared both on the pitch and in the classroom for
            U.S. college football demands.
          </p>
          <button className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#A2D729] hover:text-[#A2D729]">
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
