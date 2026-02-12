import FadeIn from "@/components/ui/FadeIn";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const staffMembers = [
  {
    name: "Lewis Collins",
    role: "CEO & Lead Coach",
    initials: "LC",
    region: "Scotland / North England",
    credentials: [
      "B.S. Sports Coach",
      "UEFA Licensed Coach",
      "10+ years Player Development experience",
      "5 years experience as a Student Athlete at LSU-A (NAIA)",
      "Semi-Professional Experience (UK & USA)",
      "Consultant / Coach",
    ],
  },
  {
    name: "Ian Elliott",
    role: "Consultant / Coach",
    initials: "IE",
    region: "Scotland",
    credentials: [
      "UEFA Licensed Coach",
      "First Team Staff @ Burnley Football Club",
      "20+ years Player Development Experience",
      "Consultant / Coach",
    ],
  },
  {
    name: "Dylan Meichan",
    role: "Goalkeeping Coach",
    initials: "DM",
    region: "Scotland",
    credentials: [
      "A.S. Exercise Science",
      "SFA Licensed Coach",
      "2 Years Experience as Student Athlete at Pratt CC, Kansas (NJCAA)",
      "2+ Years Coaching Experience",
      "Goalkeeping Coach",
    ],
  },
  {
    name: "Logan Burton",
    role: "Development Coach",
    initials: "LB",
    region: "Scotland",
    credentials: [
      "HNC Sports Coaching",
      "5+ Years Player Development Experience",
      "First Team GK Coach @ Knightswood FC",
    ],
  },
];

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC]">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(162,215,41,0.14),_transparent_55%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20">
          <FadeIn>
            <section className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#94A3B8]">
                Meet the Team
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-[#F8FAFC] md:text-5xl">
                The Team Behind Your Journey
              </h1>
              <p className="max-w-2xl text-base text-[#94A3B8] md:text-lg">
                Atlantic Pathway is led by experienced coaches and consultants dedicated to
                creating clear, elite routes into U.S. college football programs.
              </p>
            </section>
          </FadeIn>

          <section className="grid gap-8 md:grid-cols-2">
            {staffMembers.map((member) => (
              <FadeIn key={member.name}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0F1116]/80 p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:border-[#A2D729]/40">
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#A2D729]/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <div className="relative z-10 flex h-full flex-col gap-6">
                    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#13131A] p-6">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(162,215,41,0.25),_transparent_60%)]" />
                      <div className="relative flex h-32 w-full items-end justify-between">
                        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94A3B8]">
                          Atlantic Pathway
                        </span>
                        <span className="text-3xl font-semibold text-[#F8FAFC]">
                          {member.initials}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h2 className="text-2xl font-semibold text-[#F8FAFC]">
                        {member.name}
                      </h2>
                      <p className="text-sm uppercase tracking-[0.3em] text-[#94A3B8]">
                        {member.role}
                      </p>
                      <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-[#94A3B8]">
                        {member.region}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {member.credentials.map((credential) => (
                        <span
                          key={credential}
                          className="rounded-full border border-white/10 bg-[#0A0A0F]/70 px-3 py-1 text-xs text-[#94A3B8]"
                        >
                          {credential}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </FadeIn>
            ))}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
