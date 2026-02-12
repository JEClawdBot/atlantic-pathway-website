import { CalendarCheck, FileText, Users } from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const enquiryPaths = [
  {
    title: "Join the Team",
    description:
      "Interested in shaping the future with us? Request a meeting with our recruitment lead to discuss career opportunities and how you can contribute to the Atlantic Pathway mission.",
    cta: "Request a Meeting",
    href: "mailto:hello@atlanticpathway.com?subject=Career%20Enquiry%20%E2%80%93%20Join%20the%20Atlantic%20Pathway%20Team",
    icon: Users,
  },
  {
    title: "Find a Local Event",
    description:
      "See our impact in person. Book your spot at one of our upcoming regional showcase events to meet the team and network with our community.",
    cta: "Book Your Spot",
    href: "mailto:hello@atlanticpathway.com?subject=Event%20Booking%20%E2%80%93%20Showcase%20Registration",
    icon: CalendarCheck,
  },
  {
    title: "Get the Full Picture",
    description:
      "Not ready for a meeting yet? Request our latest PDF infographic for a visual deep dive into our process, results, and long-term vision.",
    cta: "Request PDF",
    href: "mailto:hello@atlanticpathway.com?subject=PDF%20Request%20%E2%80%93%20Atlantic%20Pathway%20Infographic",
    icon: FileText,
  },
];

export default function EnquiryPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC]">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(162,215,41,0.18),_transparent_55%)]" />
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-6 py-20">
          <FadeIn>
            <section className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#94A3B8]">
                Enquire
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-[#F8FAFC] md:text-5xl">
                Get In Touch
              </h1>
              <p className="max-w-2xl text-base text-[#94A3B8] md:text-lg">
                Choose the enquiry path that fits your goals. We will direct you to the
                right person and provide the information you need to move forward.
              </p>
            </section>
          </FadeIn>

          <section className="grid gap-8 lg:grid-cols-3">
            {enquiryPaths.map((path) => {
              const Icon = path.icon;
              return (
                <FadeIn key={path.title}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-[#0F1116]/80 p-8 transition duration-300 hover:border-[#A2D729]/40">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#A2D729]/10 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                    <div className="relative z-10 flex h-full flex-col gap-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#141421]">
                        <Icon className="h-6 w-6 text-[#A2D729]" />
                      </div>
                      <div className="space-y-3">
                        <h2 className="text-2xl font-semibold text-[#F8FAFC]">
                          {path.title}
                        </h2>
                        <p className="text-sm leading-relaxed text-[#94A3B8]">
                          {path.description}
                        </p>
                      </div>
                      <div className="mt-auto">
                        <a
                          href={path.href}
                          className="inline-flex items-center justify-center rounded-lg bg-[#A2D729] px-5 py-3 text-xs font-semibold uppercase tracking-widest text-[#0A0A0F] transition duration-150 hover:bg-[#B8E63E]"
                        >
                          {path.cta}
                        </a>
                      </div>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
