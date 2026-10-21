import Image from "next/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Counter from "@/components/ui/Counter";
import Parallax from "@/components/ui/Parallax";

export default function About() {
  const features = [
    "Certified Trainers",
    "Premium Equipment",
    "CrossFit Programs",
    "Strength Training",
    "Nutrition Guidance",
    "Personal Coaching",
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#050505] section-spacing">
      <div className="absolute -left-40 top-32 h-[600px] w-[600px] rounded-full bg-lime-400/10 blur-[180px]" />
      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-400/5 blur-[180px]" />

      <div className="container relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">

          <Reveal direction="left">
            <Parallax offset={60}>
              <div className="relative">
                <div className="absolute -left-10 -top-10 -z-10 h-80 w-80 rounded-full bg-lime-400/20 blur-[120px]" />
                <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
                  <Image
                    src="/images/aboutt.jpg"
                    alt="SYRO Innovative Fitness Gym"
                    width={800}
                    height={900}
                    priority
                    className="h-[600px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-8 right-6 rounded-3xl border border-white/10 bg-black/80 px-8 py-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-lime-400/40 hover:-translate-y-1 lg:-right-8 text-center">
                  <h3 className="text-5xl font-black text-(--primary)">5+</h3>
                  <p className="mt-2 whitespace-nowrap text-sm text-white/70">Years Of Excellence</p>
                </div>
              </div>
            </Parallax>
          </Reveal>

          <Reveal direction="right" delay={150}>
            <div className="flex flex-col items-start text-left">
              <span className="text-sm font-semibold uppercase tracking-[0.45em] text-(--primary)">
                Experience
              </span>
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white lg:text-6xl">
                Why Choose <br /> <span className="text-(--primary)">SYRO Fitness</span>
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
                At SYRO Innovative Fitness, we go beyond the workout to deliver a complete health and wellness experience. By integrating customized fitness programming, dedicated nutritional guidance, and specialized recovery protocols, we ensure your body gets exactly what it needs to perform, heal, and grow. Join an environment where every aspect of your well-being is supported to help you build a stronger.
              </p>

              <div className="mt-12 grid w-full grid-cols-3 gap-6 border-y border-white/10 py-8 text-left">
                <div>
                  <h3 className="text-4xl font-black text-(--primary) lg:text-5xl"><Counter end={1000} suffix="+" /></h3>
                  <p className="mt-2 text-sm text-gray-400">Active Members</p>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-(--primary) lg:text-5xl"><Counter end={15} suffix="+" /></h3>
                  <p className="mt-2 text-sm text-gray-400">Certified Trainers</p>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-(--primary) lg:text-5xl"><Counter end={40} suffix="+" /></h3>
                  <p className="mt-2 text-sm text-gray-400">Premium Machines</p>
                </div>
              </div>

              <div className="mt-10 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((item) => (
                  <div key={item} className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:bg-lime-400/5 text-left">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(--primary) font-bold text-black transition-transform duration-300 group-hover:scale-110">✓</div>
                    <span className="text-sm font-medium text-white lg:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12">
                <Button href="#programs">Explore Programs</Button>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}