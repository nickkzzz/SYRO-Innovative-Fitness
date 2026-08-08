"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Spotlight() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 20,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{ x, y }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        hidden
        h-[500px]
        w-[500px]
        rounded-full
        opacity-20
        blur-3xl
        lg:block
      "
    >
      <div className="h-full w-full rounded-full bg-lime-400/30" />
    </motion.div>
  );
}