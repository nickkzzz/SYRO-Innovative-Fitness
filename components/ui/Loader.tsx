"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoaderProps {
  loading: boolean;
  onComplete?: () => void;
}

export default function Loader({ loading, onComplete }: LoaderProps) {
  // =========================================================
  // RESPONSIVE VIDEO STATE
  // =========================================================
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Check on mount
    checkScreen();

    // Listen for window resizes
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // =========================================================
  // PREVENT SCROLLING DURING INTRO
  // =========================================================
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup just in case the component unmounts unexpectedly
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* =======================================================
              CINEMATIC GREEN GLOW OVERLAY
          ======================================================= */}
          <div className="pointer-events-none absolute inset-0 z-10 bg-lime-400/5 mix-blend-overlay" />

          {/* =======================================================
              FULLSCREEN VIDEO
          ======================================================= */}
          <video
            // The key forces React to re-mount the video if the source changes, 
            // ensuring the browser actually loads the new file.
            key={isMobile ? "mobile-video" : "desktop-video"}
            autoPlay
            muted
            playsInline
            onEnded={onComplete}
            className="relative z-0 h-full w-full object-cover opacity-90"
          >
            <source 
              src={isMobile ? "/videos/intro-mobile.mp4" : "/videos/intro-desktop.mp4"} 
              type="video/mp4" 
            />
          </video>

          {/* =======================================================
              TINY CINEMATIC LOADING TEXT
          ======================================================= */}
          <div className="absolute bottom-8 right-8 z-20 flex flex-col items-end text-right">
            <span className="animate-pulse text-xs font-bold uppercase tracking-[0.4em] text-(--primary)">
              Loading...
            </span>
            <span className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50">
              SYRO INNOVATIVE FITNESS
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}