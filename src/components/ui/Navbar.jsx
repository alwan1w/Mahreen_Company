import { motion } from "framer-motion";
import GooeyNav from "./GooeyNav";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Solusi", href: "#solusi" },
  { label: "Tentang", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 border-b bg-background/80 backdrop-blur-md border-white/10"
    >
      {/* Logo Area */}
      <div className="flex items-center gap-3">
        <img
          src="/logo.png"
          alt="Berkarya Untuk Indonesia Logo"
          className="object-contain w-10 h-10"
        />
        <span className="hidden font-bold tracking-wide text-white md:block">
          Berkarya Untuk <span className="text-primary">Indonesia</span>
        </span>
      </div>

      {/* Center Navigation (GooeyNav) */}
      <div className="hidden lg:block">
        <GooeyNav items={navItems} particleCount={10} animationTime={400} />
      </div>

      {/* CTA Button */}
      <div>
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-full font-semibold text-sm transition-colors shadow-[0_0_15px_rgba(220,38,38,0.4)]">
            Gabung Sekarang
          </button>
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar;
