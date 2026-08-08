"use client";

import Reveal from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Rahul Patil",
    role: "Member",
    review: "The trainers are extremely supportive and the equipment is top-notch. I've seen amazing progress in just a few months.",
  },
  {
    name: "Sneha More",
    role: "Fitness Enthusiast",
    review: "Clean gym, motivating environment, and great guidance. SYRO has completely changed my fitness journey.",
  },
  {
    name: "Akash Jadhav",
    role: "CrossFit Member",
    review: "One of the best gyms around. Friendly staff, excellent atmosphere, and challenging workouts every day.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative overflow-hidden bg-[#090909] section-spacing">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[170px]" />

      <div className="container relative z-10">

        {/* ================= SECTION HEADER (CENTERED) ================= */}
        <div className="mb-16 flex w-full justify-center md:mb-20">
          <Reveal>
            <div className="flex max-w-4xl flex-col items-center text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-(--primary)">
                Testimonials
              </span>
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
                WHAT OUR <span className="text-(--primary)"> MEMBERS SAY</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                Hear from members who have transformed their fitness journey with
                SYRO Innovative Fitness.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= TESTIMONIALS GRID ================= */}
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 120}>
              <div className="group flex h-full flex-col items-start justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left transition-all duration-300 hover:-translate-y-2 hover:border-lime-400/40 hover:bg-white/[0.05] hover:shadow-[0_20px_50px_rgba(163,230,53,0.12)]">
                
                <div className="w-full">
                  <div className="flex gap-1 text-(--primary) mb-6">
                    ⭐⭐⭐⭐⭐
                  </div>
                  <p className="text-base leading-8 text-gray-300">
                    "{item.review}"
                  </p>
                </div>

                <div className="mt-10 w-full border-t border-white/10 pt-6">
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    {item.role}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}