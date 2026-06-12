import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Budi Santoso",
    role: "Mahasiswa IT, Jawa Tengah",
    quote:
      "Program ini benar-benar membuka mata saya. Ide aplikasi desa pintar saya akhirnya bisa tereksekusi dengan bimbingan mentor yang tepat.",
  },
  {
    name: "Siti Aminah",
    role: "Kreator Digital, Jakarta",
    quote:
      "Networking-nya luar biasa! Saya bertemu banyak pemuda hebat lintas provinsi yang punya semangat sama untuk membangun Indonesia.",
  },
  {
    name: "Ahmad Reza",
    role: "Founder Startup Lokal",
    quote:
      "Platform terbaik untuk belajar kolaborasi dan melihat langsung bagaimana teknologi bisa menciptakan dampak sosial yang nyata.",
  },
];

// --- LOGIC ANIMASI PENGGANTI SCROLLFLOAT (Aman 100%) ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }, // Stagger antar kata
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, rotateX: -20 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", damping: 12, stiffness: 150 }, // Efek memantul estetik
  },
};
// --------------------------------------------------------

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    hiddenRight: { x: 50, opacity: 0 },
    hiddenLeft: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  // Pecah teks jadi kata-kata agar bisa melayang satu per satu
  const title1 = "Apa Kata Mereka".split(" ");
  const title2 = "Tentang Inisiatif Ini?".split(" ");

  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#050505] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center gap-16 mx-auto max-w-7xl lg:flex-row">
        {/* KOLOM KIRI: Teks & Judul */}
        <div className="flex flex-col items-start w-full text-left lg:w-5/12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 px-4 py-1.5 bg-[#111] border border-white/10 rounded-full flex items-center gap-2 shadow-lg"
          >
            <span className="text-xs font-bold tracking-widest text-gray-400 uppercase">
              Testimonial
            </span>
          </motion.div>

          {/* TEXT MELAYANG KATA PER KATA (CUSTOM AMAN) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-col w-full gap-2 mb-6"
          >
            {/* Baris Pertama (Sans-serif tebal) */}
            <h2 className="flex flex-wrap gap-x-3 text-4xl md:text-5xl font-black text-white leading-[1.1] pb-1">
              {title1.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block origin-bottom"
                >
                  {word}
                </motion.span>
              ))}
            </h2>

            {/* Baris Kedua (Serif Italic abu-abu) */}
            <h2 className="flex flex-wrap gap-x-3 text-4xl md:text-5xl font-serif italic text-gray-500 font-medium leading-[1.1] mt-2">
              {title2.map((word, i) => (
                <motion.span
                  key={i}
                  variants={wordVariants}
                  className="inline-block origin-bottom"
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="max-w-md mt-2 leading-relaxed text-gray-400 md:text-lg"
          >
            Kami berkomitmen memberikan ekosistem kolaborasi terbaik. Dengarkan
            langsung cerita dari mereka yang telah mengambil langkah nyata
            bersama kami.
          </motion.p>
        </div>

        {/* KOLOM KANAN: Card Slider Testimonial */}
        <div className="relative w-full lg:w-7/12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-[2rem] shadow-2xl relative min-h-[400px] flex flex-col"
          >
            <div className="mb-8">
              <svg
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-primary opacity-20"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            <div className="relative flex-grow">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  variants={slideVariants}
                  initial={direction === 1 ? "hiddenRight" : "hiddenLeft"}
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0 flex flex-col justify-between"
                >
                  <p className="mb-12 text-xl font-medium leading-relaxed text-gray-200 md:text-2xl">
                    "{testimonials[currentIndex].quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-[#1A1A1A] border border-white/10 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {testimonials[currentIndex].role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute flex items-center gap-3 bottom-8 right-8">
              <button
                onClick={handlePrev}
                className="z-10 flex items-center justify-center w-12 h-12 text-white transition-all border rounded-full border-white/20 hover:bg-white/10 hover:border-white/40"
                aria-label="Previous Testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                className="z-10 flex items-center justify-center w-12 h-12 text-white transition-all border rounded-full border-white/20 hover:bg-white/10 hover:border-white/40"
                aria-label="Next Testimonial"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
