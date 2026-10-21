'use client';
import React, { useState, useEffect, useRef } from 'react';

interface Offer {
  imageUrl: string;
}

export default function Offers() {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await fetch('/api/offers', { cache: 'no-store' });
        const data = await response.json();
        setOffers(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Failed to load offers', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchOffers();
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  if (isLoading) {
    return <div className="py-20 text-center text-white/50 text-sm">Loading offers...</div>;
  }

  if (offers.length === 0) {
    return null; 
  }

  return (
    <section id="offers" className="section-spacing bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="container relative">
        <div className="flex flex-col items-center justify-center w-full text-center mb-12 reveal-up">
  <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-white mb-4 text-center">
    SYRO <span className="text-[rgb(var(--theme-accent))]">OFFERS</span>
  </h2>
  <p className="mt-6 max-w-2xl mx-auto text-center text-base leading-8 text-gray-400 md:text-lg">
    New reasons to walk in, train hard, and celebrate your fitness journey.
  </p>
</div>

        <div className="relative group reveal-up" style={{ animationDelay: '0.2s' }}>
          
          {/* LEFT ARROW */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#141414] border border-[#2a2a2a] rounded-full flex items-center justify-center text-white hover:border-[rgb(var(--theme-accent))] hover:text-[rgb(var(--theme-accent))] transition-all opacity-0 group-hover:opacity-100 shadow-xl"
            aria-label="Scroll left"
          >
            &#10094;
          </button>

          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide py-4 px-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {offers.map((offer, index) => (
              <div
                key={index}
                // UPDATED: aspect-[4/5] applied here
                className="w-[280px] md:w-[320px] aspect-[4/5] flex-shrink-0 snap-center rounded-2xl overflow-hidden border border-[#2a2a2a] relative bg-[#141414] hover:shadow-[0_0_20px_rgba(var(--theme-accent),0.2)] hover:border-[rgb(var(--theme-accent))] transition-all duration-300"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={offer.imageUrl}
                  alt={`SYRO Offer ${index + 1}`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-[#141414] border border-[#2a2a2a] rounded-full flex items-center justify-center text-white hover:border-[rgb(var(--theme-accent))] hover:text-[rgb(var(--theme-accent))] transition-all opacity-0 group-hover:opacity-100 shadow-xl"
            aria-label="Scroll right"
          >
            &#10095;
          </button>
        </div>
      </div>
    </section>
  );
}