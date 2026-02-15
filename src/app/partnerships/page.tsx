import Link from "next/link";

import FadeIn from "@/components/ui/FadeIn";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const deliverables = [
  {
    title: "Satellite Training Sessions",
    description: "We bring our coaching philosophy to your pitch to work with your squads.",
  },
  {
    title: "Pathway Seminars",
    description:
      "Knowledge is power. We host sessions for players and parents on scouting, nutrition, and the 'Atlantic Way' of professional development.",
  },
  {
    title: "Coaching Exchange",
    description:
      "Shared insights to help club volunteers elevate their own team's environment.",
  },
];

export default function PartnershipsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC]">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(162,215,41,0.14),_transparent_55%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20">
          <FadeIn>
            <section className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#94A3B8]">
                Strengthening the local game through elite collaboration.
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-[#F8FAFC] md:text-5xl">
                Club Partnerships
              </h1>
              <p className="max-w-2xl text-base text-[#94A3B8] md:text-lg">
                At Atlantic Pathway, we don&apos;t replace—we reinforce. We partner with
                local clubs to provide an additional layer of elite development, ensuring
                players have every tool necessary to navigate their football journey.
              </p>
            </section>
          </FadeIn>

          <section className="space-y-8">
            <FadeIn>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94A3B8]">
                  What We Deliver
                </p>
                <h2 className="text-3xl font-semibold text-[#F8FAFC]">
                  The Bridge Program
                </h2>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-3">
              {deliverables.map((item) => (
                <FadeIn key={item.title}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0F1116]/80 p-8 transition duration-300 hover:border-[#A2D729]/40">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#A2D729]/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-full flex-col gap-4">
                      <h3 className="text-xl font-semibold text-[#F8FAFC]">
                        {item.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-[#94A3B8]">
                        {item.description}
                      </p>
                    </div>
                  </article>
                </FadeIn>
              ))}
            </div>
          </section>

          <FadeIn>
            <section className="rounded-3xl border border-white/10 bg-[#0F1116]/80 p-8 md:p-10">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="space-y-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94A3B8]">
                    Ready to collaborate?
                  </p>
                  <h2 className="text-3xl font-semibold text-[#F8FAFC]">
                    Request a Partnership Consult
                  </h2>
                  <p className="max-w-xl text-sm text-[#94A3B8]">
                    Ask about a one-off satellite session or a long-term integration plan.
                    We can tailor delivery around your club calendar and athlete needs.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#94A3B8]">
                    <Link
                      href="/enquiry?partnership=one-off"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition duration-150 hover:border-[#A2D729]/50 hover:text-[#F8FAFC]"
                    >
                      One-off Session
                    </Link>
                    <Link
                      href="/enquiry?partnership=long-term"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition duration-150 hover:border-[#A2D729]/50 hover:text-[#F8FAFC]"
                    >
                      Long-term Integration
                    </Link>
                  </div>
                </div>
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center rounded-lg bg-[#A2D729] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#0A0A0F] transition duration-150 hover:bg-[#B8E63E]"
                >
                  Request a Partnership Consult
                </Link>
              </div>
            </section>
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
}
