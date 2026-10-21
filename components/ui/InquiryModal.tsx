'use client';
import React, { useState, useEffect } from 'react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBranch: string;
}

export default function InquiryModal({ isOpen, onClose, defaultBranch }: InquiryModalProps) {
  const [branch, setBranch] = useState(defaultBranch);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Convert branch IDs to proper names for the select dropdown
    const formattedBranch = defaultBranch === 'malad' ? 'SYRO Malad' : 'SYRO Kandivali';
    setBranch(formattedBranch);
  }, [defaultBranch]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
      <div className="bg-[#0a0a0a] border border-[#2a2a2a] p-10 md:p-14 rounded-[2rem] w-full max-w-2xl relative reveal-up shadow-2xl">
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-8 text-gray-500 hover:text-white text-3xl font-light transition-colors"
        >
          &#10005;
        </button>
        
        <div className="text-center mb-10">
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-white mb-3">
            Drop An Inquiry
          </h3>
          <p className="text-gray-400 text-sm md:text-base">
            Fill the form and the SYRO team will connect with you shortly
          </p>
        </div>
        
        <form 
          className="flex flex-col gap-6" 
          onSubmit={async (e) => { 
            e.preventDefault(); 
            setIsSubmitting(true);
            const form = e.currentTarget as HTMLFormElement;
            const formData = new FormData(form);

            // MAGIC FIX 1: URL Encode the data so Google can read it
            const data = new URLSearchParams();
            formData.forEach((value, key) => {
              data.append(key, value.toString());
            });

            try {
              // PASTE YOUR NEW URL ENDING IN /exec HERE
              await fetch("https://script.google.com/macros/s/AKfycbyvnikYbPFMnsnJ8vi65EMdnuNcqDaWKeAMhY3NIgC4pHSVwU3R3oe0f5oPPAidH1xl5Q/exec", {
                method: "POST",
                headers: {
                  "Content-Type": "application/x-www-form-urlencoded",
                },
                body: data.toString(),
                mode: "no-cors", // MAGIC FIX 2: Bypass browser security blocks
              });
              
              alert("Inquiry submitted successfully!");
              form.reset();
              onClose();
            } catch (error) {
              alert("Something went wrong. Please try again.");
            } finally {
              setIsSubmitting(false);
            }
          }}
        >
          {/* FULL WIDTH: Name */}
          <div>
            <input 
              type="text" 
              name="Name"
              placeholder="Your Name" 
              required 
              className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[rgb(var(--theme-accent))] transition-colors" 
            />
          </div>

          {/* TWO COLUMNS: Phone and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input 
              type="tel" 
              name="Phone"
              placeholder="Phone Number" 
              required 
              className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[rgb(var(--theme-accent))] transition-colors" 
            />
            <input 
              type="email" 
              name="Email"
              placeholder="Email Address" 
              required 
              className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[rgb(var(--theme-accent))] transition-colors" 
            />
          </div>

          {/* FULL WIDTH: Branch Select */}
          <div>
            <select 
              name="Branch"
              value={branch} 
              onChange={(e) => setBranch(e.target.value)}
              className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[rgb(var(--theme-accent))] transition-colors appearance-none cursor-pointer"
            >
              <option value="SYRO Kandivali">SYRO Kandivali</option>
              <option value="SYRO Malad">SYRO Malad</option>
            </select>
          </div>

          {/* FULL WIDTH: Textarea */}
          <div>
            <textarea 
              name="Message"
              placeholder="Your Fitness Goals..." 
              rows={4} 
              className="w-full bg-[#141414] border border-[#2a2a2a] rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-[rgb(var(--theme-accent))] transition-colors resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-[rgb(var(--theme-accent))] text-black font-bold py-5 rounded-full hover:shadow-[0_0_20px_rgba(var(--theme-accent),0.4)] transition-all duration-300 mt-4 text-sm md:text-base uppercase tracking-widest disabled:opacity-50"
          >
            {isSubmitting ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </form>

      </div>
    </div>
  );
}