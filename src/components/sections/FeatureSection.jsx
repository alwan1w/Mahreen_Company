import { motion } from "framer-motion";
import ScrollFloat from "../ui/ScrollFloat";

// Menambahkan icon SVG elegan untuk setiap keunggulan
const features = [
  {
    title: "Kreativitas",
    desc: "Wadah eksperimen ide tanpa batas untuk solusi inovatif.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13 10V3L4 14h7v7l9-11h-7z"
        />
      </svg>
    ),
  },
  {
    title: "Teknologi",
    desc: "Akses ke ekosistem digital dan modern stack terkini.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Kolaborasi",
    desc: "Jejaring talenta muda lintas daerah se-Nusantara.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: "Dampak Sosial",
    desc: "Berorientasi pada solusi nyata bagi masyarakat sekitar.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    title: "Inspirasi",
    desc: "Membentuk karakter pemimpin masa depan Indonesia.",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const FeatureSection = () => {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#050505] overflow-hidden border-t border-white/5">
      {/* Background Glow Elegan */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        {/* Teks Sub-heading */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-sm font-bold tracking-widest uppercase text-primary"
        >
          // Value Program
        </motion.span>

        {/* Judul Utama (Konsisten dengan Problem Section) */}
        <div className="w-full mb-20 overflow-hidden text-center">
          <ScrollFloat
            animationDuration={1}
            stagger={0.03}
            textClassName="
      !text-4xl
      md:!text-5xl
      lg:!text-6xl
      font-black
      leading-tight
      text-center
      text-white
    "
          >
            Keunggulan Program
          </ScrollFloat>
        </div>
        {/* Layout Kartu Flex Wrap Presisi */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center w-full gap-6"
        >
          {features.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              // Width dihitung agar pas 3 kolom di Desktop, 2 di Tablet, 1 di Mobile.
              // Flex-grow membantu 2 kartu sisa di bawah mengisi ruang tengah dengan estetik.
              className="group relative w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] max-w-[400px] bg-[#111] p-8 rounded-3xl border border-white/5 hover:border-primary/40 hover:-translate-y-2 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-[0_15px_30px_rgba(220,38,38,0.1)]"
            >
              {/* Efek Garis Menyala saat di Hover */}
              <div className="absolute top-0 left-0 w-full h-1 transition-opacity duration-500 opacity-0 bg-gradient-to-r from-transparent via-primary/80 to-transparent group-hover:opacity-100"></div>

              {/* Watermark Angka Raksasa di Background Kartu */}
              <div className="absolute -bottom-8 -right-4 text-[8rem] font-black text-white/[0.03] group-hover:text-primary/10 transition-colors duration-500 pointer-events-none select-none">
                0{index + 1}
              </div>

              {/* Header Kartu: Icon & Angka Kecil */}
              <div className="relative z-10 flex items-start justify-between mb-8">
                <div className="flex items-center justify-center w-12 h-12 text-white transition-colors duration-500 bg-white/5 group-hover:bg-primary/20 rounded-xl group-hover:text-primary">
                  {item.icon}
                </div>
                <span className="text-sm font-bold tracking-wider text-gray-600 transition-colors group-hover:text-primary/50">
                  0{index + 1}
                </span>
              </div>

              <h3 className="relative z-10 mb-3 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </h3>
              <p className="relative z-10 leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureSection;
