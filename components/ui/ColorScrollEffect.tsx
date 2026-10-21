'use client';
import { useEffect } from 'react';

export default function ColorScrollEffect() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      // Get scroll percentage from 0.0 (top) to 1.0 (bottom)
      const scrollFraction = Math.min(Math.max(scrollY / maxScroll, 0), 1);

      // Start Color (Green): RGB(57, 255, 20)
      // End Color (Orange): RGB(255, 102, 0)
      const r = Math.round(57 + (255 - 57) * scrollFraction);
      const g = Math.round(255 + (102 - 255) * scrollFraction);
      const b = Math.round(20 + (0 - 20) * scrollFraction);

      // Inject the current blended color into the root CSS variables
      document.documentElement.style.setProperty('--theme-accent', `${r}, ${g}, ${b}`);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Trigger once on load to set initial color
    handleScroll(); 

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null;
}