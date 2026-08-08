"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import Lightbox from "@/components/ui/Lightbox";

const galleryImages = [
  { src: "/images/gym-1.jpg", title: "Strength Zone", category: "TRAINING" },
  { src: "/images/gym-2.jpg", title: "Premium Equipment", category: "FACILITY" },
  { src: "/images/gym-3.jpg", title: "Train Hard", category: "WORKOUT" },
  { src: "/images/gym-4.jpg", title: "SYRO Fitness", category: "FACILITY" },
  { src: "/images/cardio-1.jpg", title: "Cardio Zone", category: "CARDIO" },
  { src: "/images/cardio-2.jpg", title: "Push Your Limits", category: "CARDIO" },
  { src: "/images/dumble.jpg", title: "Build Strength", category: "STRENGTH" },
  { src: "/images/yoga.jpg", title: "Yoga & Mobility", category: "WELLNESS" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; } | null>(null);

  return (
    <section id="gallery" className="relative overflow-hidden bg-[#090909] section-spacing">
      <div className="pointer-events-none absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-400/5 blur-[150px]" />

      <div className="container relative z-10">
        
        {/* ================= SECTION HEADER (CENTERED) ================= */}
        <div className="mb-16 flex w-full justify-center md:mb-20">
          <Reveal>
            <div className="flex max-w-4xl flex-col items-center text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-(--primary)">
                Inside SYRO
              </span>
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
                OUR <span className="text-(--primary)">GALLERY</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                Take a look inside SYRO Innovative Fitness and experience the
                energy, equipment, and environment designed to help you become
                stronger every day.
              </p>
            </div>
          </Reveal>
        </div>

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <Reveal key={image.src} delay={index * 100}>
              <div
                onClick={() => setSelectedImage({ src: image.src, title: image.title })}
                className="cursor-pointer group relative h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-black transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/40 hover:shadow-[0_20px_50px_rgba(163,230,53,0.15)]"
              >
                <Image
                  src={image.src}
                  alt={`${image.title} - SYRO Innovative Fitness`}
                  fill
                  priority={index < 4}
                  sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-lime-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-6 pb-16 text-left">
                  <span className="text-xs font-bold uppercase tracking-[0.3em] text-(--primary) opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 translate-y-3">
                    {image.category}
                  </span>
                  <h3 className="mt-2 text-xl font-black uppercase text-white transition-transform duration-500 group-hover:translate-y-0 translate-y-3">
                    {image.title}
                  </h3>
                </div>

                <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 group-hover:border-(--primary) group-hover:bg-(--primary) group-hover:text-black">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <Reveal delay={500}>
          <div className="mt-20 flex justify-center">
            <div className="flex flex-col items-center text-center">
              <div className="h-24 md:h-32 lg:h-7" />
              <p className="text-gray-500">Ready to experience SYRO Innovative Fitness?</p>
              <a href="#membership" className="group/gallery mt-4 inline-flex min-h-[52px] items-center justify-center gap-3 rounded-lg border border-(--primary) bg-(--primary) px-8 py-3.5 text-sm font-bold uppercase tracking-wide !text-black shadow-[0_8px_25px_rgba(163,230,53,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4ff7a] hover:bg-[#d4ff7a] hover:!text-black hover:shadow-[0_12px_30px_rgba(163,230,53,0.2)]">
                <span className="!text-black">Join SYRO Today</span>
                <span className="text-lg leading-none !text-black transition-transform duration-300 group-hover/gallery:translate-x-1">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <Lightbox open={selectedImage !== null} image={selectedImage?.src || ""} title={selectedImage?.title || ""} onClose={() => setSelectedImage(null)} />
    </section>
  );
}