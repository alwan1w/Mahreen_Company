import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  // Menggunakan spring agar pergerakan garis terasa kenyal dan smooth, tidak kaku
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary to-accent transform-origin-0 z-[60]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
