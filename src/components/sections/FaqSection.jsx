import { motion } from "framer-motion";
import ScrollFloat from "../ui/ScrollFloat"; // <-- Import komponen ScrollFloat

const faqs = [
  {
    q: "Apa itu Inisiatif Pemuda 2026?",
    a: "Sebuah gerakan kolaboratif untuk mewadahi kreativitas pemuda Indonesia dalam menciptakan solusi nyata berbasis teknologi digital bagi Nusantara.",
  },
  {
    q: "Siapa saja yang bisa bergabung?",
    a: "Seluruh pemuda-pemudi Indonesia (mahasiswa, pelajar, profesional muda, hingga kreator konten) yang memiliki semangat kolaborasi dan inovasi.",
  },
  {
    q: "Apakah program ini berbayar?",
    a: "Tidak. Seluruh program utama Inisiatif Pemuda 2026 didukung penuh oleh para mitra dan donatur, sehingga gratis untuk para peserta.",
  },
  {
    q: "Bagaimana cara mendaftar?",
    a: "Pendaftaran dilakukan secara online melalui website ini pada menu 'Gabung'. Ikuti alur pendaftarannya dan lengkapi berkas yang diminta.",
  },
];

const FaqSection = () => {
  return (
    <section className="relative w-full py-32 px-6 md:px-12 bg-[#0A0A0A] border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none z-0"></div>

      <div className="relative z-10 flex flex-col items-center mx-auto text-center max-w-7xl">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-4 text-sm font-bold tracking-widest uppercase text-primary"
        >
          // Q&A
        </motion.span>

        {/* --- JUDUL DENGAN SCROLLFLOAT (AMAN & ELEGANT) --- */}
        {/* JUDUL FAQ: VERSI ANTI-GLITCH */}
        <div className="flex flex-col items-center w-full gap-2 mb-20">
          {/* Judul Utama */}
          <div className="overflow-hidden whitespace-nowrap">
            <ScrollFloat
              animationDuration={1}
              stagger={0.03}
              textClassName="!text-4xl md:!text-6xl font-black text-white"
            >
              Pertanyaan Umum
            </ScrollFloat>
          </div>

          {/* Sub Judul */}
          <div className="overflow-hidden whitespace-nowrap">
            <ScrollFloat
              animationDuration={1}
              stagger={0.03}
              textClassName="font-serif !text-xl md:!text-3xl italic font-medium text-primary"
            >
              Yang Sering Diajukan
            </ScrollFloat>
          </div>
        </div>
        {/* -------------------------------------------------- */}

        {/* Grid FAQ (Bento Style) */}
        <div className="grid w-full grid-cols-1 gap-6 text-left md:grid-cols-2">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-[#111] border border-white/5 p-8 rounded-3xl group hover:border-primary/30 transition-colors duration-500 shadow-lg"
            >
              <h3 className="flex items-start gap-3 mb-4 text-lg font-bold text-white transition-colors group-hover:text-primary">
                <span className="text-primary font-black mt-0.5">Q.</span>
                {item.q}
              </h3>
              <p className="text-sm font-medium leading-relaxed text-gray-400 md:text-base">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
