import { motion } from "framer-motion";
import GlareHover from "../ui/GlareHover";
import ScrollFloat from "../ui/ScrollFloat";

const AboutSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-screen px-6 py-24 overflow-hidden md:px-12 bg-background">
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-primary/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[150px]" />
      </div>

      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center mb-20 text-center">
        <span className="mb-4 text-sm font-bold tracking-[0.3em] uppercase text-primary">
          // Tentang Kami
        </span>

        <div className="overflow-hidden whitespace-nowrap">
          <ScrollFloat
            animationDuration={1}
            stagger={0.03}
            textClassName="!text-4xl md:!text-7xl font-black text-white"
          >
            Siapa Kami
          </ScrollFloat>
        </div>

        <div className="mt-2 overflow-hidden whitespace-nowrap">
          <ScrollFloat
            animationDuration={1}
            stagger={0.03}
            textClassName="font-serif !text-xl md:!text-3xl italic text-primary"
          >
            Membangun Masa Depan Indonesia
          </ScrollFloat>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
        {/* Card 1 */}
        <div className="w-full h-full md:col-span-2">
          <GlareHover
            width="100%"
            height="100%"
            background="#111"
            borderColor="rgba(255,255,255,0.08)"
            glareColor="#DC2626"
            borderRadius="24px"
          >
            <div className="relative flex flex-col items-start justify-center w-full h-full p-8 text-left">
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 text-xs font-bold border rounded-full bg-primary/10 text-primary border-primary/20">
                  2026
                </span>
              </div>

              <span className="mb-3 text-xs font-bold tracking-widest uppercase text-primary">
                // Penggerak Inovasi
              </span>

              <h3 className="mb-4 text-2xl font-extrabold text-white md:text-4xl">
                Membangun Fondasi Digital Masa Depan
              </h3>

              <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
                Kami adalah kolektif pemuda inovatif, kreator digital, dan
                pegiat teknologi yang berkomitmen membawa perubahan nyata. Lewat
                sinergi kreativitas dan teknologi, kami meretas batasan untuk
                menciptakan solusi berdampak bagi Nusantara.
              </p>
            </div>
          </GlareHover>
        </div>

        {/* Card 2 */}
        <div className="w-full h-full">
          <GlareHover
            width="100%"
            height="100%"
            background="#111"
            borderColor="rgba(255,255,255,0.08)"
            glareColor="#F97316"
            borderRadius="24px"
          >
            <div className="relative w-full h-full overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Kolaborasi Tim"
                className="object-cover w-full h-full transition-all duration-700 opacity-60 group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-lg font-bold text-white">
                  Kolaborasi Aktif
                </h4>
                <p className="text-xs text-gray-300">
                  Lintas disiplin untuk hasil maksimal.
                </p>
              </div>
            </div>
          </GlareHover>
        </div>

        {/* Card 3 */}
        <div className="w-full h-full">
          <GlareHover
            width="100%"
            height="100%"
            background="#111"
            borderColor="rgba(255,255,255,0.08)"
            glareColor="#ffffff"
            borderRadius="24px"
          >
            <div className="relative w-full h-full overflow-hidden group">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80"
                alt="Workshop Teknologi"
                className="object-cover w-full h-full transition-all duration-700 opacity-50 group-hover:scale-110 group-hover:rotate-1 group-hover:opacity-80"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 left-0 p-6">
                <h4 className="text-lg font-bold text-white">
                  Ekosistem Progresif
                </h4>
                <p className="text-xs text-gray-300">
                  Memanfaatkan teknologi skala global.
                </p>
              </div>
            </div>
          </GlareHover>
        </div>

        {/* Card 4 */}
        <div className="w-full h-full md:col-span-2">
          <GlareHover
            width="100%"
            height="100%"
            background="#111"
            borderColor="rgba(255,255,255,0.08)"
            glareColor="#DC2626"
            borderRadius="24px"
          >
            <div className="flex flex-col items-start justify-center w-full h-full p-8 text-left">
              <span className="mb-3 text-xs font-bold tracking-widest uppercase text-primary">
                // Nilai Utama
              </span>

              <h3 className="mb-4 text-2xl font-extrabold text-white md:text-4xl">
                Dampak Sosial Adalah Prioritas
              </h3>

              <p className="max-w-2xl text-sm leading-relaxed text-gray-400 md:text-base">
                Setiap baris kode yang ditulis dan setiap aset visual yang
                dirancang diarahkan untuk menyelesaikan masalah nyata di
                masyarakat. Kami bergerak bersama komunitas lokal agar inovasi
                yang dibangun tepat sasaran dan berkelanjutan.
              </p>
            </div>
          </GlareHover>
        </div>
      </div>

      {/* Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mt-24 text-center"
      >
        <p className="font-serif text-2xl italic leading-relaxed text-white md:text-5xl">
          "Kami percaya bahwa teknologi bukan sekadar alat, melainkan jembatan
          menuju Indonesia yang lebih maju."
        </p>

        <div className="w-24 h-px mx-auto mt-8 bg-primary" />

        <p className="mt-4 text-sm tracking-[0.3em] uppercase text-gray-500">
          Inisiatif Pemuda 2026
        </p>
      </motion.div>
    </section>
  );
};

export default AboutSection;
