'use client';
import React, { useRef } from 'react';

// 1. Put your actual Instagram reel URL in the 'link' property.
// 2. Put your downloaded MP4 file in the 'videoSrc' property.
const reels = [
  { 
    id: 1, 
    link: "https://www.instagram.com/p/Dd0cgjWN_iP/?hl=en", 
    videoSrc: "/videos/reel1.mp4", 
    title: "Heavy Lifts"
  },
  { 
    id: 2, 
    link: "https://www.instagram.com/p/DdwNNIXNEVv/?hl=en", 
    videoSrc: "/videos/reel2.mp4", 
    title: "Transformations"
  },
  { 
    id: 3, 
    link: "https://www.instagram.com/p/Ddi1QqrKedm/?hl=en", 
    videoSrc: "/videos/reel3.mp4", 
    title: "CrossFit Energy"
  },
  { 
    id: 4, 
    link: "https://www.instagram.com/p/DcYCgqUNopC/?hl=en", 
    videoSrc: "/videos/reel4.mp4", 
    title: "Daily Vibe"
  },
  { 
    id: 5, 
    link: "https://www.instagram.com/p/DbUuh7WtDr1/?hl=en", 
    videoSrc: "/videos/reel5.mp4", 
    title: "Trainer Tips"
  },
  { 
    id: 6, 
    link: "https://www.instagram.com/p/DYyx2UftBFV/?hl=en", 
    videoSrc: "/videos/reel6.mp4", 
    title: "Diet & Nutrition"
  },
];

export default function Reels() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="reels" className="section-spacing bg-[#050505] border-t border-[#1a1a1a]">
      <div className="container relative mx-auto px-4">
        
        {/* ================= HEADER & IG LINKS ================= */}
        <div className="flex flex-col items-center justify-center w-full text-center mb-12 reveal-up">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-white mb-4">
            SYRO <span className="text-[rgb(var(--theme-accent))]">VIBES</span>
          </h2>
          <p className="max-w-2xl mx-auto text-center text-base leading-8 text-gray-400 md:text-lg mb-8">
            Scroll through the energy, heavy lifts, member transformations, and daily fitness motivation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full">
            <a 
              href="https://www.instagram.com/syrofitness_malad?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-[rgb(var(--theme-accent))] hover:border-[rgb(var(--theme-accent))] transition-all duration-300 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="text-sm font-bold tracking-wider uppercase text-white group-hover:text-black transition-colors">Malad IG</span>
            </a>

            <a 
              href="https://www.instagram.com/syrofitness?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 px-6 py-3 rounded-full border border-white/20 bg-white/5 hover:bg-[#22c55e] hover:border-[#22c55e] transition-all duration-300 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691