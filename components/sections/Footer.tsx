import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "Experience", href: "#about" },
  { name: "Training", href: "#programs" },
  { name: "Membership", href: "#membership" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const trainingLinks = [
  { name: "Strength Training", href: "#programs" },
  { name: "Cardio Training", href: "#programs" },
  { name: "Functional Training", href: "#programs" },
  { name: "Yoga & Mobility", href: "#programs" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#050505]">

      {/* =========================================================
          BACKGROUND GLOW
      ========================================================= */}

      <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-lime-400/5 blur-[140px]" />

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div className="container relative z-10 py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* =====================================================
              BRAND
          ===================================================== */}

          <div className="lg:col-span-1">

            <Link href="/" className="inline-block">

              <Image
                src="/logos/logo.png"
                alt="SYRO Innovative Fitness"
                width={180}
                height={60}
                className="h-auto w-[180px] object-contain"
              />

            </Link>

            <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
              Train harder. Live stronger. Experience premium fitness,
              powerful training, and a motivating environment at SYRO
              Innovative Fitness.
            </p>

            {/* Social Links */}

            <div className="mt-7 flex items-center gap-3">

              <a
                href="https://www.instagram.com/syrofitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white transition duration-300 hover:border-(--primary) hover:bg-(--primary) hover:text-black"
              >
                IG
              </a>

              <a
                href="https://maps.app.goo.gl/p7x3HtPiX592zeCs5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Google Maps"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-bold text-white transition duration-300 hover:border-(--primary) hover:bg-(--primary) hover:text-black"
              >
                MAP
              </a>

            </div>

          </div>

          {/* =====================================================
              QUICK LINKS
          ===================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {quickLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition duration-300 hover:text-(--primary)"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =====================================================
              TRAINING
          ===================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-white">
              Training
            </h3>

            <ul className="mt-6 space-y-4">

              {trainingLinks.map((link) => (

                <li key={link.name}>

                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition duration-300 hover:text-(--primary)"
                  >
                    {link.name}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =====================================================
              CONTACT
          ===================================================== */}

          <div>

            <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-white">
              Visit SYRO
            </h3>

            <p className="mt-6 text-sm leading-7 text-gray-400">
              Come train with us and become a stronger version of yourself.
            </p>

            <a
              href="https://maps.app.goo.gl/p7x3HtPiX592zeCs5"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-(--primary) transition hover:text-white"
            >
              View Location
              <span>→</span>
            </a>

            {/* CTA */}

            <div className="mt-7">

        <a
  href="#membership"
  className="
    group/footer
    inline-flex
    min-h-[48px]
    items-center
    justify-center
    gap-3
    rounded-lg
    border
    border-(--primary)
    bg-(--primary)
    px-6
    py-3
    text-sm
    font-bold
    uppercase
    tracking-wide
    !text-black
    shadow-[0_8px_25px_rgba(163,230,53,0.12)]
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-[#d4ff7a]
    hover:bg-[#d4ff7a]
    hover:!text-black
    hover:shadow-[0_12px_30px_rgba(163,230,53,0.2)]
  "
>
  <span className="!text-black">
    Join SYRO
  </span>

  <span
    className="
      text-lg
      leading-none
      !text-black
      transition-transform
      duration-300
      group-hover/footer:translate-x-1
    "
  >
    →
  </span>
</a>
            </div>

          </div>

        </div>

      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}

      <div className="border-t border-white/10">

        <div className="container flex flex-col gap-4 py-6 text-sm text-gray-500 md:flex-row md:items-center md:justify-between">

          <p>
            © {new Date().getFullYear()} SYRO Innovative Fitness. All rights
            reserved.
          </p>

          <p>
            Designed with{" "}
            <span className="text-(--primary)">strength</span> & passion.
          </p>

        </div>

      </div>

    </footer>
  );
}