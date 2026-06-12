import { motion } from "framer-motion";

const CtaSection = () => {
  return (
    <section
      id="cta"
      className="relative w-full px-6 py-32 overflow-hidden border-t md:px-12 bg-background border-white/5"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-primary/10 rounded-[100%] blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Container CTA berbentuk Kartu Glassmorphism Mewah */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative bg-[#111] border border-white/10 rounded-[2.5rem] p-12 md:p-20 overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
        >
          {/* Overlay gradien merah samar di dalam kartu */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-primary/5"></div>

          <div className="relative z-10 flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mb-4 text-sm font-bold tracking-widest uppercase text-primary"
            >
              // Jangan Ragu
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-6 drop-shadow-lg"
            >
              Saatnya Ambil Bagian <br />
              <span className="text-gray-400">Untuk Nusantara.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="max-w-2xl mb-12 font-medium leading-relaxed text-gray-400 md:text-xl"
            >
              Kreativitasmu ditunggu oleh bangsa. Bergabunglah dengan ribuan
              pemuda inovatif lainnya untuk menciptakan solusi nyata bagi masa
              depan Indonesia yang lebih cerah.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-white hover:bg-gray-200 text-black px-10 py-5 rounded-full font-bold text-lg tracking-wide transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center gap-3">
                  Mulai Berdampak Sekarang
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
