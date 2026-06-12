import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] text-gray-500 py-12 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Branding */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="text-white font-black tracking-wider text-xl mb-2">
            BERKARYA <span className="text-primary">UNTUK</span> INDONESIA
          </span>
          <p className="text-sm text-gray-600 max-w-xs">
            Mengakselerasi inovasi pemuda untuk Indonesia yang lebih maju
            melalui kolaborasi digital.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            className="hover:text-primary transition-colors duration-300"
          >
            <FaGithub />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-600 text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Berkarya Untuk Indonesia.</p>
          <p className="text-xs mt-1">All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
