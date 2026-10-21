'use client';
import React, { useRef } from 'react';

// 1. Put your actual Instagram reel URL in the 'link' property.
// 2. Put your downloaded MP4 file in the 'videoSrc' property.
const reels = [
  { 
    id: 1, 
    link: "https://www.instagram.com/p/Dd0cgjWN_iP/?hl=en", 
    videoSrc: "/videos/reel1.mp4", 
    
  },
  { 
    id: 2, 
    link: "https://www.instagram.com/p/DdwNNIXNEVv/?hl=en", 
    videoSrc: "/videos/reel2.mp4", 
    
  },
  { 
    id: 3, 
    link: "https://www.instagram.com/p/Ddi1QqrKedm/?hl=en", 
    videoSrc: "/videos/reel3.mp4", 
    
  },
  { 
    id: 4, 
    link: "https://www.instagram.com/p/DcYCgqUNopC/?hl=en", 
    videoSrc: "/videos/reel4.mp4", 
    
  },
  { 
    id: 5, 
    link: "https://www.instagram.com/p/DbUuh7WtDr1/?hl=en", 
    videoSrc: "/videos/reel5.mp4", 
   
  },
  { 
    id: 6, 
    link: "https://www.instagram.com/p/DYyx2UftBFV/?hl=en", 
    videoSrc: "/videos/reel6.mp4", 
   
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
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              <span className="text-sm font-bold tracking-wider uppercase text-white group-hover:text-black transition-colors">Kandivali IG</span>
            </a>
          </div>
        </div>

        {/* ================= REELS CAROUSEL ================= */}
        <div className="relative group reveal-up" style={{ animationDelay: '0.2s' }}>
          
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#141414] border border-[#2a2a2a] rounded-full flex items-center justify-center text-white hover:border-[rgb(var(--theme-accent))] hover:text-[rgb(var(--theme-accent))] transition-all opacity-0 group-hover:opacity-100 shadow-xl hidden md:flex"
            aria-label="Scroll left"
          >
            &#10094;
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {reels.map((reel) => (
              <a
                key={reel.id}
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[240px] md:w-[280px] aspect-[9/16] flex-shrink-0 snap-center rounded-2xl overflow-hidden relative group/card bg-[#141414] border border-white/10 hover:border-[rgb(var(--theme-accent))] transition-all duration-300 cursor-pointer block"
              >
                {/* Fallback gradient if video is loading */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-zinc-800 -z-10" />
                
                {/* Auto-playing muted video background */}
                <video
                  src={reel.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/card:opacity-40 transition-opacity duration-300"
                />
                
                {/* Play Icon Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[rgb(var(--theme-accent))] flex items-center justify-center scale-75 group-hover/card:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(var(--theme-accent),0.4)]">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

                {/* Bottom Title Gradient */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                  <p className="text-white font-bold tracking-wide uppercase text-sm group-hover/card:text-[rgb(var(--theme-accent))] transition-colors">
                    {reel.title}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#141414] border border-[#2a2a2a] rounded-full flex items-center justify-center text-white hover:border-[rgb(var(--theme-accent))] hover:text-[rgb(var(--theme-accent))] transition-all opacity-0 group-hover:opacity-100 shadow-xl hidden md:flex"
            aria-label="Scroll right"
          >
            &#10095;
          </button>
        </div>

      </div>
    </section>
  );
}