"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917208072193"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-[0_10px_30px_rgba(37,211,102,0.4)]
        transition-all
        duration-300
        hover:scale-110
        hover:shadow-[0_15px_40px_rgba(37,211,102,0.6)]
      "
    >
      <MessageCircle size={32} />
    </a>
  );
}