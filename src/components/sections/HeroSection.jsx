import { motion } from "framer-motion";
import BlurText from "../ui/BlurText";
import DotGrid from "../ui/DotGrid";
import RotatingText from "../ui/RotatingText"; // Pastikan ini di-import!

const scrollToCta = () => {
  const element = document.getElementById("cta");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
      {/* CSS Khusus untuk memotong gambar (Hanya aktif di Desktop) */}
      <style>{`
        @media (min-width: 768px) {
          .clip-wave {
            clip-path: url(#wave-clip);
            -webkit-clip-path: url(#wave-clip);
          }
        }
      `}</style>

      {/* Definisi Pisau Pemotong (Clip Path) bentuk Gelombang */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="wave-clip" clipPathUnits="objectBoundingBox">
            <path d="M 0.15 0 C 0.6 0.3 -0.1 0.7 0.15 1 L 1 1 L 1 0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* 1. LAYER BAWAH (KIRI): DotGrid yang dilebarkan sampai 65% layar */}
      <div className="absolute top-0 left-0 w-full md:w-[65%] h-full z-0">
        <div className="absolute inset-0 opacity-40">
          <DotGrid
            dotSize={4}
            gap={24}
            baseColor="#1A1A1A"
            activeColor="#ffffff"
            proximity={120}
            shockRadius={250}
            shockStrength={5}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      </div>

      {/* 2. LAYER ATAS (KANAN): Gambar yang pinggir kirinya dipotong gelombang */}
      <div className="absolute top-0 right-0 w-full md:w-[50%] h-full z-10 clip-wave pointer-events-none">
        <img
          src="/anak.jpg"
          alt="Anak Indonesia"
          className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale-[20%]"
        />

        {/* Gradien gelap */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A]/60 via-transparent to-transparent"></div>
      </div>

      {/* 3. KONTEN UTAMA TEKS */}
      <div className="relative z-20 flex items-center w-full px-6 mx-auto pointer-events-none max-w-7xl md:px-12">
        <div className="flex flex-col items-start text-left w-full md:w-[50%] mt-16 md:mt-0 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 px-4 py-1.5 bg-[#111] border border-white/10 rounded-full flex items-center gap-2 shadow-lg"
          >
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span className="text-xs font-bold text-[#DC2626] tracking-widest uppercase">
              Panggilan Untuk Kreator
            </span>
          </motion.div>

          {/* --- BAGIAN YANG DIUBAH: Menggabungkan BlurText & RotatingText --- */}
          <div className="w-full mb-6">
            <div className="flex flex-col flex-wrap leading-[1.1] md:flex-row md:items-end gap-x-3">
              <BlurText
                text="Berkarya Untuk"
                delay={100}
                animateBy="words"
                direction="bottom"
                className="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white drop-shadow-lg pb-2 [&>span:first-child]:text-red-600"
              />

              <div className="h-[5.0em] relative overflow-visible flex items-center">
                <RotatingText
                  texts={["Indonesia.", "Inovasi.", "Masa Depan.", "Dampak."]}
                  mainClassName="text-5xl md:text-6xl lg:text-[4.5rem] font-black text-white drop-shadow-lg pb-2"
                  staggerDuration={0.05}
                  staggerFrom="last"
                  rotationInterval={3000}
                  animatePresenceMode="wait"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </div>
            </div>
          </div>
          {/* ----------------------------------------------------------------- */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="max-w-md mb-10 font-medium leading-relaxed text-gray-300 md:text-lg"
          >
            Memanfaatkan kreativitas dan teknologi digital untuk menciptakan
            dampak positif nyata bagi masa depan Nusantara.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <button
              onClick={scrollToCta}
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold tracking-wide transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] flex items-center gap-3"
            >
              Mulai Berdampak
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
