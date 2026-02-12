"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import FadeIn from "@/components/ui/FadeIn";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const faqs = [
  {
    question: "What exactly does a \"Full Ride\" scholarship cover?",
    answer: (
      <div className="space-y-4">
        <p>
          A 100% full-ride scholarship typically covers:
        </p>
        <ul className="space-y-2 pl-5">
          <li className="list-disc">Tuition and mandatory university fees</li>
          <li className="list-disc">
            Room and board (on-campus accommodation and a meal plan)
          </li>
          <li className="list-disc">Textbooks required for your courses</li>
          <li className="list-disc">
            Athletic costs (kit, travel to games, and medical support)
          </li>
        </ul>
        <p>
          Note: Even on a full ride, you are usually responsible for your flights to/from
          the US, health insurance (if not included), and personal spending money.
        </p>
      </div>
    ),
  },
  {
    question: "How common are full scholarships for soccer?",
    answer: (
      <p>
        Full scholarships for men's soccer are rare. In NCAA Division I, a coach has
        only 9.9 scholarships to split among a roster of 25–30 players. Most players
        receive partial scholarships (e.g., 50–80%). Women's soccer is slightly better
        funded, with 14 scholarships available per team in Division I.
      </p>
    ),
  },
  {
    question: "Do I need to have played for a Pro Academy?",
    answer: (
      <p>
        No. While academy experience is highly valued, coaches also recruit players
        from County, District, and high-level Semi-Pro youth setups. What matters most
        is your current playing level, physical attributes, and—crucially—your highlight
        video.
      </p>
    ),
  },
  {
    question: "What UK grades do I need?",
    answer: (
      <div className="space-y-4">
        <p>
          The minimum requirement for the NCAA and NAIA is generally a 2.0 GPA (roughly
          a "C" average in your GCSEs). You must have passed core subjects like English,
          Maths, and Science.
        </p>
        <p>
          Pro Tip: Higher grades (A-Levels/BTECs) often unlock Academic Scholarships,
          which can be added to your athletic scholarship to lower your costs further.
        </p>
      </div>
    ),
  },
  {
    question: "Do I still need to take the SAT or ACT?",
    answer: (
      <p>
        It depends on the school. While many US colleges have become "test-optional"
        for general admission, some still require the SAT or ACT for international
        student-athletes or to qualify for certain academic merit scholarships. It is
        highly recommended to take it to maximize your options.
      </p>
    ),
  },
  {
    question: "When is the best time to start the application?",
    answer: (
      <div className="space-y-4">
        <p>
          Ideally, 2 years before you intend to leave (typically Year 12). This gives
          you time to:
        </p>
        <ul className="space-y-2 pl-5">
          <li className="list-disc">Build a highlight reel</li>
          <li className="list-disc">Sit the SAT/ACT</li>
          <li className="list-disc">Register with the NCAA Eligibility Center</li>
          <li className="list-disc">
            Communicate with coaches before their rosters for the next year are full
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "What happens if I get injured?",
    answer: (
      <p>
        In most cases, you do not lose your scholarship for a "sports-related" injury.
        Your scholarship is a legal agreement that is typically renewed annually. As
        long as you remain a member of the team and maintain your grades, the
        university will continue to fund your education while you rehab.
      </p>
    ),
  },
  {
    question: "Can I work in the US while on a scholarship?",
    answer: (
      <p>
        On an F-1 Student Visa, you are permitted to work up to 20 hours per week, but
        only on-campus (e.g., in the library or cafeteria). You cannot legally work
        off-campus jobs (like in a bar or shop) during your studies.
      </p>
    ),
  },
  {
    question: "What is the difference between NCAA, NAIA, and NJCAA?",
    answer: (
      <div className="space-y-4">
        <ul className="space-y-2 pl-5">
          <li className="list-disc">
            NCAA (Div I, II, III): The most famous and competitive. Div III does not
            offer athletic scholarships (only academic/need-based).
          </li>
          <li className="list-disc">
            NAIA: Often smaller colleges with high athletic standards; they have more
            flexibility in recruiting and can offer great scholarship packages.
          </li>
          <li className="list-disc">
            NJCAA (Junior College): Two-year "community" colleges. A great "stepping
            stone" if you need to improve your grades or playing exposure before
            transferring to a 4-year university.
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "How much should my family expect to pay?",
    answer: (
      <p>
        Unless you are an elite prospect on a full ride, the average "out-of-pocket"
        cost for a UK student is often between £8,000 and £11,000 per year. While this
        sounds high, it is frequently cheaper than the combined cost of UK tuition and
        living expenses (accommodation, food, etc.).
      </p>
    ),
  },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC]">
      <Navbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(162,215,41,0.12),_transparent_55%)]" />
        <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-20">
          <FadeIn>
            <section className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#94A3B8]">
                Knowledge Base
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-[#F8FAFC] md:text-5xl">
                Frequently Asked Questions
              </h1>
              <p className="max-w-2xl text-base text-[#94A3B8] md:text-lg">
                Straight answers to the most common questions families ask when planning
                their U.S. football scholarship journey.
              </p>
            </section>
          </FadeIn>

          <section className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <FadeIn key={faq.question}>
                  <article className="rounded-2xl border border-white/10 bg-[#0F1116]/80">
                    <button
                      type="button"
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-4">
                        <span className="text-sm font-semibold text-[#A2D729]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-lg font-semibold text-[#F8FAFC]">
                          {faq.question}
                        </span>
                      </div>
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border border-white/10 transition duration-200 ${
                          isOpen ? "bg-[#A2D729]/15" : "bg-transparent"
                        }`}
                      >
                        <ChevronDown
                          className={`h-5 w-5 text-[#94A3B8] transition duration-200 ${
                            isOpen ? "rotate-180 text-[#A2D729]" : ""
                          }`}
                        />
                      </span>
                    </button>
                    <div
                      className={`overflow-hidden px-6 transition-all duration-300 ${
                        isOpen ? "max-h-[600px] pb-6 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="text-sm leading-relaxed text-[#94A3B8]">
                        {faq.answer}
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
