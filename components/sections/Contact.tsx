'use client';

import React, { useState } from 'react';
import InquiryModal from '@/components/ui/InquiryModal';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBranch, setSelectedBranch] = useState('kandivali');

  const branches = [
    {
      id: 'kandivali',
      name: '📍SYRO Kandivali',
      address:
       <div className="text-center">
        123 Fitness Avenue, SV Road, Kandivali West, Mumbai, Maharashtra 400067
      </div>,
      phone: '+91 98765 43210',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.614284665001!2d72.86901737525365!3d19.212042182020785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b737718a510d%3A0x7c78cec2d0e660a!2sSYRO%20INNOVATIVE%20FITNESS%20-%20KANDIVALI!5e0!3m2!1sen!2sin!4v1788507049937!5m2!1sen!2sin',
    },
    {
      id: 'malad',
      name: '📍SYRO Malad',
      address:
        <div className="text-center">
        123 Fitness Avenue, SV Road, Kandivali West, Mumbai, Maharashtra 400067
      </div>,
      phone: '+91 98765 43211',
      mapEmbed:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.335673950835!2d72.83347187525295!3d19.180535682045697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b726f97806a5%3A0xac949c20be338cb4!2sSYRO%20INNOVATIVE%20FITNESS%20-%20MALAD!5e0!3m2!1sen!2sin!4v1788508567402!5m2!1sen!2sin',
    },
  ];

  const handleInquireClick = (branchId: string) => {
    setSelectedBranch(branchId);
    setIsModalOpen(true);
  };

  return (
    <>
      <section
        id="contact"
        className="section-spacing relative z-10 bg-black text-white"
      >
        <div className="container mx-auto px-4">

          {/* ================= HEADER ================= */}
          <div className="text-center">

            <span className="mb-4 text-sm font-bold uppercase tracking-[0.35em] text-[rgb(var(--theme-accent))]">
              Find Your Location
            </span>

            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
                CHOOSE YOUR <span className="text-(--primary)"> ARENA</span>
              </h2>
            <p className="mt-6 text-gray-400">
              
              Find your nearest SYRO Innovative Fitness branch.
              <br className="hidden md:block" />
              Select a location and start your transformation.
            </p>
          </div>

          {/* ================= BRANCH CARDS ================= */}
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-stretch justify-items-center gap-10 md:grid-cols-2 lg:gap-12 mt-12">

            {branches.map((branch) => {
              // Create a flag to check if the current branch is Kandivali
              const isGreen = branch.id === 'kandivali';

              return (
                <div
                  key={branch.id}
                  className={`
                    relative flex w-full max-w-[560px] flex-col overflow-hidden
                    rounded-[2rem] border border-white/10
                    bg-gradient-to-br from-[#171717] via-[#101010] to-[#0a0a0a]
                    p-7 shadow-[0_20px_60px_rgba(0,0,0,0.45)]
                    transition-all duration-500 hover:-translate-y-2
                    hover:shadow-[0_25px_70px_rgba(0,0,0,0.65)] md:p-9
                    ${isGreen ? 'hover:border-[#22c55e]' : 'hover:border-[rgb(var(--theme-accent))]'}
                  `}
                >
                  {/* BRANCH NAME */}
                  <h3
                    className={`
                      relative z-10 text-4xl font-black uppercase tracking-tight transition-colors duration-300 md:text-5xl
                      ${isGreen ? 'text-[#22c55e]' : 'text-[rgb(var(--theme-accent))]'}
                    `}
                  >
                    {branch.name}
                  </h3>

                  {/* ADDRESS */}
                  <div className="relative z-10 mt-4 min-h-[4.5rem] max-w-lg text-sm leading-7 text-white/55 md:text-base">
                    {branch.address}
                  </div>

                  {/* DIVIDER */}
                  <div className="my-6 h-px w-full bg-white/10" />

                  {/* MAP */}
                  <div
                    className="
                      group/map relative mb-8 h-64 w-full
                      overflow-hidden rounded-2xl
                      border border-white/10
                      bg-[#0a0a0a]
                      shadow-inner
                    "
                  >
                    <iframe
                      src={branch.mapEmbed}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="
                        grayscale contrast-125 opacity-65
                        transition-all duration-700
                        group-hover/map:grayscale-0
                        group-hover/map:opacity-100
                      "
                    />
                  </div>

                  {/* ================= BUTTONS ================= */}
                  <div className="mt-auto grid grid-cols-1 gap-4 sm:grid-cols-2">

                    {/* CALL BUTTON */}
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      className={`
                        group inline-flex min-h-[54px] items-center justify-center gap-4
                        whitespace-nowrap rounded-full border px-8 py-4
                        text-sm font-bold leading-none tracking-wide transition-all duration-300
                        hover:-translate-y-1 hover:text-black sm:text-base
                        ${isGreen 
                          ? 'border-[#22c55e]/40 bg-[#22c55e]/10 text-[#22c55e] hover:border-[#22c55e] hover:bg-[#22c55e]' 
                          : 'border-[rgba(var(--theme-accent),0.4)] bg-[rgba(var(--theme-accent),0.1)] text-[rgb(var(--theme-accent))] hover:border-[rgb(var(--theme-accent))] hover:bg-[rgb(var(--theme-accent))]'
                        }
                      `}
                    >
                      <span>Call {branch.phone.slice(4)}</span>
                      <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </a>

                    {/* INQUIRE BUTTON */}
                    <button
                      onClick={() => handleInquireClick(branch.id)}
                      className={`
                        group flex min-h-[58px] items-center justify-center rounded-full border-2 bg-transparent
                        px-6 py-4 text-center text-sm font-black uppercase tracking-[0.14em]
                        transition-all duration-300 hover:-translate-y-1 hover:text-black
                        hover:shadow-[0_10px_35px_rgba(0,0,0,0.45)]
                        ${isGreen 
                          ? 'border-[#22c55e] text-[#22c55e] hover:bg-[#22c55e]' 
                          : 'border-[rgb(var(--theme-accent))] text-[rgb(var(--theme-accent))] hover:bg-[rgb(var(--theme-accent))]'
                        }
                      `}
                    >
                      <span className="transition-transform duration-300 group-hover:scale-105">
                        Inquire Now
                      </span>
                    </button>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= INQUIRY MODAL ================= */}
      <InquiryModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultBranch={selectedBranch}
      />
    </>
  );
}