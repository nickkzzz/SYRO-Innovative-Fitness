'use client';
import React from 'react';

const TeamCard = ({ name, role, info, imageUrl }: { name: string, role: string, info: string, imageUrl: string }) => (
  <div className="flex flex-col items-center text-center max-w-[220px] group">
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-[#2a2a2a] group-hover:border-[rgb(var(--theme-accent))] overflow-hidden transition-all duration-300 mb-4 bg-[#141414] shadow-lg flex items-center justify-center">
      {imageUrl ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      ) : (
        <svg className="w-12 h-12 text-gray-600" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )}
    </div>
    <h3 className="text-xl font-bold text-white">{name}</h3>
    <p className="text-[rgb(var(--theme-accent))] text-sm font-black tracking-wide uppercase mb-2">{role}</p>
    <p className="text-gray-400 text-sm leading-relaxed">{info}</p>
  </div>
);

export default function Team() {
  return (
    <section id="team" className="section-spacing bg-[#0a0a0a] border-t border-[#2a2a2a]">
      <div className="container relative mx-auto px-4">
        
        <div className="flex flex-col items-center justify-center w-full text-center mb-16 reveal-up">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-white mb-4">
            THE SYRO <span className="text-[rgb(var(--theme-accent))]">TEAM</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-center text-base text-gray-400 md:text-lg">
            Meet the leaders and experts dedicated to transforming your fitness journey.
          </p>
        </div>

        <div className="flex flex-col items-center gap-12 md:gap-16 reveal-up" style={{ animationDelay: '0.2s' }}>
          
          {/* Row 1: Owners (2 Items) */}
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 w-full">
            <TeamCard 
              name="Dinesh Jain" 
              role="Owner" 
              info="Visionary founder with over 15 years of experience shaping the modern fitness landscape and building communities." 
              imageUrl="/images/dinesh.png" 
            />
            <TeamCard 
              name="Himanshu Jain" 
              role="Owner" 
              info="Strategic leader driving business growth and elevating the standard of premium fitness facilities." 
              imageUrl="/images/himanshu.png" 
            />
          </div>

          {/* Row 2: Co-owners (2 Items) */}
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 w-full">
            <TeamCard 
              name="Sandesh Mohite" 
              role="Co-Owner" 
              info="Operations specialist ensuring top-tier equipment maintenance and seamless daily gym management." 
              imageUrl="/images/sandesh.png" 
            />
            <TeamCard 
              name="Sandesh Gaikwad" 
              role="Co-Owner" 
              info="Fitness strategy expert dedicated to maximizing member satisfaction and fostering community growth." 
              imageUrl="/images/sandeshG.png" 
            />
          </div>

          {/* Row 3: Trainers (3 Items) */}
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-16 w-full pt-8 border-t border-[#2a2a2a]/50">
            <TeamCard 
              name="Gold Trainer" 
              role="3-5+ Years Exp." 
              info="Certified professionals ready to kickstart your fitness journey with solid fundamentals." 
              imageUrl="/images/Gold.png"
            />
            <TeamCard 
              name="Platinum Trainer" 
              role="5-10+ Years Exp." 
              info="Advanced coaches specializing in targeted body transformation and strength training." 
              imageUrl="/images/Platinum.png" 
            />
            <TeamCard 
              name="Master Trainer" 
              role="12-20+ Years Exp." 
              info="Elite veterans providing unparalleled biomechanics, rehabilitation, and athletic coaching." 
              imageUrl="/images/Master.png" 
            />
          </div>

        </div>
      </div>
    </section>
  );
}