import LogoLoop from "../ui/LogoLoop";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiVercel,
  SiFramer,
  SiLaravel,
  SiPhp,
} from "react-icons/si";

const techLogos = [
  {
    node: <SiReact className="text-[#61DAFB]" />,
    title: "React",
    href: "https://react.dev",
  },
  {
    node: <SiNextdotjs className="text-white" />,
    title: "Next.js",
    href: "https://nextjs.org",
  },
  {
    node: <SiTypescript className="text-[#3178C6]" />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss className="text-[#06B6D4]" />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiVercel className="text-white" />,
    title: "Vercel",
    href: "https://vercel.com",
  },
  {
    node: <SiFramer className="text-white" />,
    title: "Framer Motion",
    href: "https://framer.com",
  },
  {
    node: <SiLaravel className="text-[#FF2D20]" />,
    title: "Laravel",
    href: "https://laravel.com",
  },
  {
    node: <SiPhp className="text-[#777BB4]" />,
    title: "PHP",
    href: "https://php.net",
  },
];

const PartnerSection = () => {
  return (
    <section className="w-full py-16 bg-[#0A0A0A] border-y border-white/5 overflow-hidden">
      <div className="text-center mb-8">
        <p className="text-gray-500 uppercase tracking-widest text-sm font-semibold">
          Didukung oleh ekosistem teknologi modern
        </p>
      </div>

      <div className="relative h-[80px]">
        <LogoLoop
          logos={techLogos}
          speed={80}
          direction="left"
          logoHeight={50}
          gap={80}
          pauseOnHover={true}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#0A0A0A"
        />
      </div>
    </section>
  );
};

export default PartnerSection;
