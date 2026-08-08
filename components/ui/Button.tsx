import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href: string;
}

export default function Button({
  children,
  href,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className="
        group
        inline-flex
        w-fit
        items-center
        justify-center
        gap-2
        rounded-md
        bg-(--primary)
        px-6
        py-3
        text-xs
        font-bold
        uppercase
        tracking-wide
        !text-black
        shadow-[0_6px_20px_rgba(163,230,53,0.12)]
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:bg-[#d4ff7a]
        hover:!text-black
        hover:shadow-[0_8px_25px_rgba(163,230,53,0.2)]
        active:translate-y-0
      "
    >
      <span className="!text-black">
        {children}
      </span>

      <span
        className="
          text-sm
          leading-none
          !text-black
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        →
      </span>
    </Link>
  );
}