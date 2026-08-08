"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 300,
    damping: 25,
  });

  const y = useSpring(mouseY, {
    stiffness: 300,
    damping: 25,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 12);
      mouseY.set(e.clientY - 12);
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
        z-[9999]
        hidden
        h-6
        w-6
        rounded-full
        border
        border-lime-300/70
        bg-lime-400/20
        backdrop-blur-sm
        shadow-[0_0_30px_rgba(163,230,53,0.6)]
        lg:block
      "
    />
  );
}