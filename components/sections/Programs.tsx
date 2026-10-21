import Image from "next/image";
import Reveal from "@/components/ui/Reveal";

const programs = [
  {
    title: "Strength Training",
    subtitle: "BUILD POWER",
    description: "Build strength, muscle, and confidence with structured workouts, expert guidance, and premium equipment.",
    image: "/images/dumble.jpg",
  },
  {
    title: "Cardio Training",
    subtitle: "PUSH YOUR LIMITS",
    description: "Improve your endurance, stamina, and cardiovascular fitness with dedicated cardio equipment and high-energy workouts.",
    image: "/images/cardio-1.jpg",
  },
  {
    title: "Functional Training",
    subtitle: "MOVE STRONGER",
    description: "Train your body to move better with dynamic functional exercises and modern training equipment designed for real-world strength.",
    image: "/images/gym-1.jpg",
  },
  {
    title: "Yoga & Mobility",
    subtitle: "FIND YOUR BALANCE",
    description: "Improve flexibility, mobility, balance, and mental focus in a calm and motivating environment.",
    image: "/images/yoga.jpg",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative overflow-hidden bg-[#090909] section-spacing">
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[160px]" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-[450px] w-[450px] rounded-full bg-lime-400/5 blur-[150px]" />

      <div className="container relative z-10">

        {/* ================= SECTION HEADER (CENTERED) ================= */}
        <div className="mb-16 flex w-full justify-center md:mb-20">
          <Reveal>
            <div className="flex max-w-4xl flex-col items-center text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-(--primary)">
                Training Programs
              </span>
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
                TRAIN <span className="text-(--primary)">YOUR WAY</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                Whether your goal is to build strength, improve endurance,
                transform your body, or find your balance, SYRO has the right
                training environment to help you become stronger every day.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= PROGRAMS GRID ================= */}
        <div className="grid gap-6 md:grid-cols-2">
          {programs.map((program, index) => (
            <article
              key={program.title}
              className="group relative h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-black shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/30"
            >
              <Image
                src={program.image}
                alt={`${program.title} at SYRO Innovative Fitness`}
                fill
                priority={index === 0}
                sizes="(max-width:768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/50 text-sm font-bold text-white backdrop-blur-md transition-all duration-300 group-hover:border-(--primary) group-hover:bg-(--primary) group-hover:text-black">
                0{index + 1}
              </div>

              {/* CARD CONTENT (LEFT ALIGNED) */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col items-start p-7 text-left md:p-10">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-(--primary)">
                  {program.subtitle}
                </span>
                <h3 className="mt-3 text-3xl font-black uppercase leading-tight text-white md:text-4xl">
                  {program.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-7 text-gray-300 md:text-base">
                  {program.description}
                </p>
                <div className="mt-6">
                  <a href="#contact" className="group/program inline-flex min-h-[50px] items-center justify-center gap-3 rounded-lg border border-(--primary) bg-(--primary) px-6 py-3 text-sm font-bold uppercase tracking-wide !text-black shadow-[0_8px_25px_rgba(163,230,53,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d4ff7a] hover:bg-[#d4ff7a] hover:!text-black hover:shadow-[0_12px_30px_rgba(163,230,53,0.2)]">
                    <span className="!text-black">Explore Program</span>
                    <span className="text-lg leading-none !text-black transition-transform duration-300 group-hover/program:translate-x-1">→</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
<div className="h-24 md:h-32 lg:h-7" />
        {/* BOTTOM CTA */}
        <div className="mt-20 flex justify-center">
          <a href="#contact" className="group inline-flex min-h-[54px] items-center justify-center gap-4 whitespace-nowrap rounded-full border border-(--primary)/40 bg-(--primary)/10 px-8 py-4 text-sm font-bold leading-none tracking-wide text-(--primary) transition-all duration-300 hover:-translate-y-1 hover:border-(--primary) hover:bg-(--primary) hover:text-black sm:text-base">
            <span>Start Your Fitness Journey</span>
            <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </div>

      </div>
    </section>
  );
}