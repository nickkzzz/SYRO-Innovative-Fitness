"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Experience", href: "#about" },
  { name: "Training", href: "#programs" },
  { name: "Membership", href: "#membership" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#");

  // =========================================================
  // SCROLL LISTENER FOR ACTIVE SECTION HIGHLIGHT
  // =========================================================
  useEffect(() => {
    const sections = navLinks.map((item) =>
      document.querySelector(item.href === "#" ? "body" : item.href) // Prevent querySelector("#") error
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Fallback to "#" if it's the body/home section
            setActive(entry.target.id ? `#${entry.target.id}` : "#");
          }
        });
      },
      {
        threshold: 0.35,
      }
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // =========================================================
  // SCROLL LISTENER FOR PREMIUM SHRINK EFFECT
  // =========================================================
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <div className="container">

        {/* =========================================================
            DESKTOP + MOBILE NAVBAR
        ========================================================= */}

        <nav
          className={`
            relative 
            flex 
            items-center 
            justify-between 
            rounded-2xl 
            border 
            border-white/10 
            px-6 
            sm:px-8
            transition-all 
            duration-500
            ${
              scrolled
                ? "mt-3 h-[68px] bg-black/60 backdrop-blur-3xl shadow-[0_10px_40px_rgba(0,0,0,.5)]"
                : "mt-6 h-[76px] bg-black/45 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,.35)]"
            }
          `}
        >

          {/* =======================================================
              LOGO
          ======================================================= */}

          <Link
            href="/"
            className="relative z-10 flex items-center py-1 transition duration-300 hover:scale-105"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logos/logo.png"
              alt="SYRO Innovative Fitness"
              width={170}
              height={55}
              priority
              className="
                h-auto 
                w-[145px] 
                sm:w-[155px] 
                lg:w-[165px]
                object-contain
                transition-all
                duration-300
                drop-shadow-[0_0_18px_rgba(182,255,59,0.15)]
              "
            />
          </Link>

          {/* =======================================================
              DESKTOP NAVIGATION (Absolutely Centered)
          ======================================================= */}

          <ul className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-8 lg:flex xl:gap-10">

            {navLinks.map((item) => (

              <li key={item.name}>

                <Link
                  href={item.href}
                  className={`
                    relative
                    font-medium
                    transition-all
                    duration-300
                    ${
                      active === item.href
                        ? "text-(--primary)"
                        : "text-white/80 hover:text-(--primary)"
                    }
                    after:absolute
                    after:-bottom-2
                    after:left-0
                    after:h-[2px]
                    after:bg-(--primary)
                    after:transition-all
                    after:duration-300
                    ${
                      active === item.href
                        ? "after:w-full"
                        : "after:w-0 hover:after:w-full"
                    }
                  `}
                >
                  {item.name}
                </Link>

              </li>

            ))}

          </ul>

          {/* =======================================================
              MOBILE MENU BUTTON
          ======================================================= */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              relative
              z-10
              flex
              h-11
              w-11
              flex-col
              items-center
              justify-center
              gap-1.5
              rounded-lg
              border
              border-white/10
              bg-white/5
              transition-all
              duration-300
              hover:border-(--primary)/50
              hover:bg-white/10
              lg:hidden
            "
          >

            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                menuOpen
                  ? "translate-y-2 rotate-45"
                  : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                menuOpen
                  ? "opacity-0"
                  : ""
              }`}
            />

            <span
              className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                menuOpen
                  ? "-translate-y-2 -rotate-45"
                  : ""
              }`}
            />

          </button>

        </nav>

        {/* =========================================================
            MOBILE MENU
        ========================================================= */}

        <div
          className={`
            mt-3
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-black/80
            backdrop-blur-3xl
            transition-all
            duration-300
            lg:hidden
            ${
              menuOpen
                ? "max-h-[500px] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }
          `}
        >

          <div className="p-5">

            {/* Mobile Links */}

            <ul className="space-y-2">

              {navLinks.map((item) => (

                <li key={item.name}>

                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`
                      block
                      rounded-xl
                      px-4
                      py-3
                      font-medium
                      transition-all
                      duration-300
                      ${
                        active === item.href
                          ? "bg-(--primary)/10 text-(--primary)"
                          : "text-white/80 hover:bg-white/5 hover:text-(--primary)"
                      }
                    `}
                  >
                    {item.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

        </div>

      </div>
    </header>
  );
}