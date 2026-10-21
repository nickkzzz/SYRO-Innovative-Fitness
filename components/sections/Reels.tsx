'use client';
import React, { useRef } from 'react';

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
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
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
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7zm4.75-3a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
              </svg>
              <span className="text-sm font-bold tracking-wider uppercase text-white group-hover:text-black transition-colors">Kandivali IG</span>
            </a>
          </div>
        </div>

        {/* ================= REELS CAROUSEL ================= */}
        <div className="relative group reveal-up" style={{ animationDelay: '0.2s' }}>
          
          <button
            onClick={() => scroll('left')}
            className={`absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#141414] border border-[#2a2a2a] rounded-full flex items-center justify-center text-white hover:border-[rgb(var(--theme-accent))] hover:text-[rgb(var(--theme-accent))] transition-all opacity-0 group-hover:opacity-100 shadow-xl hidden md:flex`}
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
                <div className="absolute inset-0 bg-gradient-to-tr from-black to-zinc-800 -z-10" />
                
                <video
                  src={reel.videoSrc}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover/card:opacity-40 transition-opacity duration-300"
                />
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[rgb(var(--theme-accent))] flex items-center justify-center scale-75 group-hover/card:scale-100 transition-transform duration-300 shadow-[0_0_20px_rgba(var(--theme-accent),0.4)]">
                    <svg className="w-6 h-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>

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
            className={`absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#141414] border border-[#2a2a2a] rounded-full flex items-center justify-center text-white hover:border-[rgb(var(--theme-accent))] hover:text-[rgb(var(--theme-accent))] transition-all opacity-0 group-hover:opacity-100 shadow-xl hidden md:flex`}
            aria-label="Scroll right"
          >
            &#10095;
          </button>
        </div>

      </div>
    </section>
  );
}