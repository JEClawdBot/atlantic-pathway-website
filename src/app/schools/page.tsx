import Link from "next/link";

import FadeIn from "@/components/ui/FadeIn";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const schoolServices = [
  {
    title: "Curriculum & Enrichment",
    description:
      "Professional coaching delivered during PE hours or as after-school programs.",
  },
  {
    title: "Inspirational Seminars",
    description:
      "Assemblies focused on the 'Student-Athlete' mindset—balancing academics with sporting ambition.",
  },
  {
    title: "Open Day Activations",
    description:
      "We provide the 'wow factor' for your school's open days with technical displays and interactive drills.",
  },
];

export default function SchoolsPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC]">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(162,215,41,0.14),_transparent_55%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20">
          <FadeIn>
            <section className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#94A3B8]">
                Bringing elite standards to the school gates.
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-[#F8FAFC] md:text-5xl">
                Schools &amp; Education
              </h1>
              <p className="max-w-2xl text-base text-[#94A3B8] md:text-lg">
                Beyond the pitch, we believe in character and discipline. Atlantic Pathway
                works with educational institutions to provide high-energy training and
                educational content that keeps students engaged and active.
              </p>
            </section>
          </FadeIn>

          <section className="space-y-8">
            <FadeIn>
              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94A3B8]">
                  Our School Services
                </p>
                <h2 className="text-3xl font-semibold text-[#F8FAFC]">
                  The On-Campus Pathway
                </h2>
              </div>
            </FadeIn>

            <div className="grid gap-8 md:grid-cols-3">
              {schoolServices.map((item) => (
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
                    Let&apos;s partner with your school
                  </p>
                  <h2 className="text-3xl font-semibold text-[#F8FAFC]">
                    Bring Atlantic to Your School
                  </h2>
                  <p className="max-w-xl text-sm text-[#94A3B8]">
                    Share expected student numbers and ideal event dates so we can build a
                    bespoke plan for your calendar and facilities.
                  </p>
                  <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#94A3B8]">
                    <Link
                      href="/enquiry?students=expected-count"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition duration-150 hover:border-[#A2D729]/50 hover:text-[#F8FAFC]"
                    >
                      Expected Number of Students
                    </Link>
                    <Link
                      href="/enquiry?event-date=preferred"
                      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 transition duration-150 hover:border-[#A2D729]/50 hover:text-[#F8FAFC]"
                    >
                      Event Date
                    </Link>
                  </div>
                </div>
                <Link
                  href="/enquiry"
                  className="inline-flex items-center justify-center rounded-lg bg-[#A2D729] px-6 py-3 text-xs font-semibold uppercase tracking-widest text-[#0A0A0F] transition duration-150 hover:bg-[#B8E63E]"
                >
                  Bring Atlantic to Your School
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
