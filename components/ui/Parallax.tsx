"use client";

import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  offset?: number;
}

export default function Parallax({
  children,
  offset = 80,
}: Props) {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 1200], [0, offset]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
}