import Navbar from "./components/ui/Navbar";
import HeroSection from "./components/sections/HeroSection";
import ProblemSection from "./components/sections/ProblemSection";
import FeatureSection from "./components/sections/FeatureSection";
import StatSection from "./components/sections/StatSection";
import PartnerSection from "./components/sections/PartnerSection";
import TestimonialSection from "./components/sections/TestimonialSection";
import AboutSection from "./components/sections/AboutSection";
import FaqSection from "./components/sections/FaqSection";
import CtaSection from "./components/sections/CtaSection";
import Footer from "./components/sections/Footer";

// Import komponen global yang baru dibuat
import ScrollProgress from "./components/ui/ScrollProgress";
import CustomCursor from "./components/ui/CustomCursor";
import ScrollVelocity from "./components/ui/ScrollVelocity";

function App() {
  return (
    <main className="relative w-full min-h-screen pt-20 font-sans text-white bg-[#050505] selection:bg-primary selection:text-white">
      {" "}
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <div id="home">
        <HeroSection />
      </div>
      {/* --- SCROLL VELOCITY SECTION DI SINI --- */}
      <div className="w-full bg-[#0A0A0A] py-16 overflow-hidden flex flex-col gap-4">
        <ScrollVelocity
          texts={[
            "KOLABORASI • TEKNOLOGI • INOVASI •",
            "DAMPAK SOSIAL • KREATIVITAS • MASA DEPAN •",
          ]}
          velocity={40} // Kecepatan dasar
          // Teks dibuat transparan abu-abu, dan berubah jadi agak kemerahan saat kursor lewat
          className="font-black tracking-widest uppercase transition-colors duration-500 text-white/20 hover:text-primary/40"
        />
      </div>
      {/* -------------------------------------- */}
      <ProblemSection />
      <div id="solusi">
        <FeatureSection />
      </div>
      <StatSection />
      <PartnerSection />
      <TestimonialSection />
      <div id="tentang">
        <AboutSection />
      </div>
      <div id="faq">
        <FaqSection />
      </div>
      <CtaSection />
      <Footer />
    </main>
  );
}

export default App;
