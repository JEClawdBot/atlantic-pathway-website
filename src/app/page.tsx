import Academics from "@/components/sections/Academics";
import Coach from "@/components/sections/Coach";
import Expectations from "@/components/sections/Expectations";
import Hero from "@/components/sections/Hero";
import Pathway from "@/components/sections/Pathway";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-[#F8FAFC]">
      <Navbar />
      <main className="space-y-0">
        <FadeIn>
          <Hero />
        </FadeIn>
        <FadeIn>
          <Pathway />
        </FadeIn>
        <FadeIn>
          <Coach />
        </FadeIn>
        <FadeIn>
          <Services />
        </FadeIn>
        <FadeIn>
          <Expectations />
        </FadeIn>
        <FadeIn>
          <Pricing />
        </FadeIn>
        <FadeIn>
          <Academics />
        </FadeIn>
      </main>
      <Footer />
    </div>
  );
}
