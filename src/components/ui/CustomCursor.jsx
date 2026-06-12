import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  // Nilai mentah dari pergerakan mouse
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // 1. Spring untuk Kursor Utama (Lebih cepat/responsif)
  const springConfigMain = { damping: 25, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfigMain);
  const cursorYSpring = useSpring(cursorY, springConfigMain);

  // 2. Spring untuk Trail/Jejak (Lebih lambat/bouncy)
  const springConfigTrail = { damping: 30, stiffness: 150, mass: 0.8 };
  const trailXSpring = useSpring(cursorX, springConfigTrail);
  const trailYSpring = useSpring(cursorY, springConfigTrail);

  useEffect(() => {
    // Hanya aktifkan di device yang punya mouse (bukan HP/Touchscreen)
    const mediaQuery = window.matchMedia("(pointer: fine)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    // Deteksi apakah cursor sedang berada di atas teks atau elemen interaktif
    const handleMouseOver = (e) => {
      const target = e.target;
      // Tag HTML yang memicu kursor membesar
      const hoverTargets = [
        "H1",
        "H2",
        "H3",
        "H4",
        "P",
        "A",
        "BUTTON",
        "SPAN",
        "LI",
      ];

      const isTarget =
        hoverTargets.includes(target.tagName) ||
        target.closest("button") ||
        target.closest("a");

      if (isTarget) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* KURSOR UTAMA (Solid White dengan Mix Blend Mode) */}
      <motion.div
        className="fixed top-0 left-0 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          // Ini adalah nyawa dari efek invert warna seperti di gambarmu
          mixBlendMode: "difference",
        }}
        animate={{
          width: isHovering ? 80 : 12, // Membesar jadi 80px saat kena teks
          height: isHovering ? 80 : 12,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />

      {/* KURSOR TRAIL (Garis Cincin yang mengikuti) */}
      <motion.div
        className="fixed top-0 left-0 border border-white/40 rounded-full pointer-events-none z-[9998]"
        style={{
          x: trailXSpring,
          y: trailYSpring,
          translateX: "-50%",
          translateY: "-50%",
          mixBlendMode: "difference",
        }}
        animate={{
          width: isHovering ? 0 : 36, // Menyembunyikan trail saat kursor membesar agar tidak bertabrakan
          height: isHovering ? 0 : 36,
          opacity: isHovering ? 0 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
    </>
  );
};

export default CustomCursor;
