import Academics from "@/components/sections/Academics";
import Expectations from "@/components/sections/Expectations";
import Hero from "@/components/sections/Hero";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <main className="space-y-0">
        <FadeIn>
          <Hero />
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
