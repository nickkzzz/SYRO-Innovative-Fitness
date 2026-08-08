import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* =========================================================
          BACKGROUND VIDEO
      ========================================================= */}

      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* =========================================================
          DARK OVERLAY
      ========================================================= */}

      <div className="absolute inset-0 z-[1] bg-black/75" />

      {/* =========================================================
          CINEMATIC LEFT GRADIENT
      ========================================================= */}

      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-black via-black/70 to-transparent" />

      {/* =========================================================
          MOBILE DARK OVERLAY
      ========================================================= */}

      <div className="absolute inset-0 z-[3] bg-black/20 md:hidden" />

      {/* =========================================================
          BOTTOM FADE
      ========================================================= */}

      <div className="absolute bottom-0 left-0 z-[4] h-52 w-full bg-gradient-to-t from-[#090909] to-transparent" />

      {/* =========================================================
          GREEN GLOW
      ========================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-200px]
          top-1/2
          z-[2]
          h-[500px]
          w-[500px]
          -translate-y-1/2
          rounded-full
          bg-lime-400/10
          blur-[170px]
          sm:left-[-100px]
          md:left-20
          lg:left-40
        "
      />

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative z-20 flex min-h-screen items-center pb-24 pt-32 sm:pb-28 md:pt-32 lg:pb-20">
        <div className="container">
          <div className="max-w-3xl">

            {/* ===================================================
                WELCOME TEXT
            =================================================== */}

            <span className="mb-5 inline-block max-w-full text-xs font-semibold uppercase tracking-[0.2em] text-lime-300 sm:text-sm sm:tracking-[0.25em]">
              Welcome To SYRO Innovative Fitness
            </span>

            {/* ===================================================
                MAIN HEADING
            =================================================== */}

            <h1 className="font-black leading-[0.9] text-white">
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                TRAIN
              </span>

              <span className="block text-5xl text-(--primary) sm:text-6xl md:text-7xl lg:text-8xl">
                HARDER
              </span>

              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
                LIVE STRONGER
              </span>
            </h1>

            {/* ===================================================
                DESCRIPTION
            =================================================== */}

            <p className="mt-7 max-w-2xl text-base leading-7 text-gray-300 sm:mt-8 sm:text-lg sm:leading-8">
              Experience premium fitness with cutting-edge equipment,
              certified trainers, CrossFit training, strength programs,
              and a motivating environment designed to transform your body.
            </p>

            {/* ===================================================
                CTA BUTTONS
            =================================================== */}

            <div className="mt-9 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-5">

              <Button href="#membership">
                Start Your Journey
              </Button>

              <a
                href="#about"
                className="
                  inline-flex
                  min-h-[52px]
                  items-center
                  justify-center
                  rounded-lg
                  border
                  border-white/20
                  bg-white/5
                  px-7
                  py-3.5
                  text-sm
                  font-bold
                  uppercase
                  tracking-wide
                  text-white
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-(--primary)
                  hover:bg-(--primary)
                  hover:text-black
                "
              >
                Explore Gym
              </a>

            </div>

            {/* ===================================================
                STATS
            =================================================== */}

            <div className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:mt-16 sm:grid-cols-3 sm:gap-5">

              {/* Members */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:border-lime-400/30 hover:bg-white/10">
                <h3 className="text-3xl font-black text-(--primary) sm:text-4xl">
                  1000+
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  Happy Members
                </p>
              </div>

              {/* Trainers */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:border-lime-400/30 hover:bg-white/10">
                <h3 className="text-3xl font-black text-(--primary) sm:text-4xl">
                  15+
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  Expert Trainers
                </p>
              </div>

              {/* Machines */}

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md transition duration-300 hover:border-lime-400/30 hover:bg-white/10">
                <h3 className="text-3xl font-black text-(--primary) sm:text-4xl">
                  40+
                </h3>

                <p className="mt-2 text-sm text-gray-300">
                  Modern Machines
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* =========================================================
          SCROLL INDICATOR
      ========================================================= */}

      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 sm:bottom-8 md:bottom-10">
        <a
          href="#about"
          className="flex flex-col items-center text-white/70 transition hover:text-(--primary)"
        >
          <span className="mb-3 text-[10px] uppercase tracking-[0.3em] sm:text-xs">
            Scroll
          </span>

          <div className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1 sm:h-12 sm:w-7">
            <div className="h-2 w-2 animate-bounce rounded-full bg-(--primary)" />
          </div>
        </a>
      </div>

    </section>
  );
}