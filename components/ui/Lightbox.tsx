"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Props {
  open: boolean;
  image: string;
  title: string;
  onClose: () => void;
}

export default function Lightbox({
  open,
  image,
  title,
  onClose,
}: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            exit={{
              scale: 0.9,
              opacity: 0,
            }}
            transition={{
              duration: 0.3,
            }}
            className="relative max-w-6xl"
          >
            <Image
              src={image}
              alt={title}
              width={1400}
              height={900}
              className="rounded-3xl object-contain max-h-[85vh]"
            />

            <button
              onClick={onClose}
              className="
                absolute
                right-4
                top-4
                h-11
                w-11
                rounded-full
                bg-black/70
                text-white
                text-xl
                hover:bg-(--primary)
                hover:text-black
                transition
              "
            >
              ✕
            </button>

            <h3 className="mt-5 text-center text-3xl font-black uppercase text-white">
              {title}
            </h3>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}