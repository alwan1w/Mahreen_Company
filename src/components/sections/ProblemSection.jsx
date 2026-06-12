import { motion } from "framer-motion";
import ScrollFloat from "../ui/ScrollFloat";

const problems = [
  {
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />{" "}
      </svg>
    ),
    title: "Keterbatasan Wadah",
    desc: "Banyak ide cemerlang dari daerah yang menguap karena tidak adanya platform eksekusi dan inkubasi yang tepat.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />{" "}
      </svg>
    ),
    title: "Kesenjangan Akses",
    desc: "Distribusi teknologi dan mentor ahli yang masih berpusat di kota besar, meninggalkan talenta di pelosok.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7 text-primary"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
      >
        {" "}
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />{" "}
      </svg>
    ),
    title: "Minim Kolaborasi",
    desc: "Kurangnya sinergi lintas disiplin ilmu di kalangan mahasiswa, membuat pergerakan inovasi berjalan sendiri-sendiri.",
  },
];

const ProblemSection = () => {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#0A0A0A] overflow-hidden">
      {/* Glow */}{" "}
      <div className="absolute inset-0 pointer-events-none">
        {" "}
        <div className="absolute left-1/2 top-1/2 w-[800px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-primary/10 rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>
      <div className="relative z-10 mx-auto text-center max-w-7xl">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="inline-block mb-4 text-sm font-bold tracking-[0.3em] uppercase text-primary"
        >
          // Menghadapi Realita
        </motion.span>

        <div className="overflow-hidden whitespace-nowrap">
          <ScrollFloat
            animationDuration={1}
            stagger={0.03}
            textClassName="!text-4xl md:!text-6xl font-black text-white"
          >
            Masalah Kita Bersama
          </ScrollFloat>
        </div>

        <div className="mt-2 overflow-hidden whitespace-nowrap">
          <ScrollFloat
            animationDuration={1}
            stagger={0.03}
            textClassName="font-serif !text-xl md:!text-3xl italic text-primary"
          >
            Tantangan Generasi Muda
          </ScrollFloat>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mt-8 mb-20 text-gray-400 md:text-lg"
        >
          Potensi pemuda Indonesia sangat besar, namun masih ada berbagai
          hambatan yang membuat inovasi sulit berkembang secara maksimal.
        </motion.p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-8 text-left hover:border-primary/40 hover:-translate-y-2 transition-all duration-500"
            >
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <div className="absolute top-0 w-40 h-40 -translate-x-1/2 left-1/2 bg-primary/20 blur-3xl" />
              </div>

              <div className="absolute top-0 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 flex items-center justify-center w-16 h-16 mb-6 border rounded-2xl bg-primary/10 border-primary/20">
                {item.icon}
              </div>

              <div className="relative z-10 mb-3 text-xs font-bold tracking-widest uppercase text-primary">
                0{index + 1}
              </div>

              <h3 className="relative z-10 mb-4 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="relative z-10 leading-relaxed text-gray-400">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <p className="font-serif text-2xl italic text-white md:text-4xl">
            "Masalah bukan untuk dihindari, tetapi untuk diselesaikan bersama."
          </p>

          <div className="w-20 h-px mx-auto mt-6 bg-primary" />

          <p className="mt-4 text-xs tracking-[0.3em] uppercase text-gray-500">
            Inisiatif Pemuda 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
