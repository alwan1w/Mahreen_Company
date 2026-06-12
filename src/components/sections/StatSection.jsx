import { motion } from "framer-motion";
import CountUp from "../ui/CountUp";
import ScrollFloat from "../ui/ScrollFloat";

const stats = [
  { label: "Provinsi", value: 34, suffix: "+" },
  { label: "Ide Kreatif", value: 1000, suffix: "+" },
  { label: "Kolaborasi", value: 500, suffix: "+" },
  { label: "Komunitas", value: 100, suffix: "+" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const StatSection = () => {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] bg-primary/10 rounded-full blur-[140px]" />

        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:60px_60px] opacity-20" />
      </div>

      <div className="relative z-10 flex flex-col items-center mx-auto max-w-7xl">
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-primary font-bold uppercase tracking-[0.3em] text-sm mb-4"
        >
          // Dampak & Pencapaian
        </motion.span>

        {/* ScrollFloat Title */}
        <div className="flex flex-col items-center mb-6">
          <div className="overflow-hidden whitespace-nowrap">
            <ScrollFloat
              animationDuration={1}
              stagger={0.03}
              textClassName="!text-4xl md:!text-6xl font-black text-white"
            >
              Dampak Nyata
            </ScrollFloat>
          </div>

          <div className="mt-2 overflow-hidden whitespace-nowrap">
            <ScrollFloat
              animationDuration={1}
              stagger={0.03}
              textClassName="font-serif !text-xl md:!text-3xl italic text-primary"
            >
              Untuk Indonesia
            </ScrollFloat>
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mb-16 text-center text-gray-400"
        >
          Setiap langkah kecil menghasilkan dampak besar. Bersama pemuda
          Indonesia, kami membangun ekosistem kolaborasi yang terus tumbuh dan
          memberikan manfaat nyata bagi masyarakat.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid w-full grid-cols-2 gap-6 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.03]
                backdrop-blur-sm
                p-8
                flex
                flex-col
                items-center
                justify-center
                text-center
                hover:border-primary/40
                hover:-translate-y-2
                transition-all
                duration-500
              "
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100">
                <div className="absolute top-0 w-32 h-32 -translate-x-1/2 left-1/2 bg-primary/20 blur-3xl" />
              </div>

              {/* Top Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Number */}
              <div className="relative z-10 flex items-center mb-3 text-primary">
                <div className="text-5xl font-black tracking-tighter md:text-6xl">
                  <CountUp
                    from={0}
                    to={stat.value}
                    duration={2.5}
                    separator=","
                  />
                </div>

                <span className="ml-1 text-4xl font-black">{stat.suffix}</span>
              </div>

              {/* Label */}
              <p className="relative z-10 text-sm font-semibold tracking-wide text-gray-300 md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <p className="font-serif text-xl italic text-white md:text-3xl">
            "Dampak besar selalu dimulai dari langkah kecil yang dilakukan
            bersama."
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

export default StatSection;
