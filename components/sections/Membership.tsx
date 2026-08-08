import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

// Removed 'price' completely to keep cards ultra-clean
const plans = [
  {
    name: "STARTER",
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Full Gym Access",
      "Modern Fitness Equipment",
      "Cardio Zone Access",
      "Locker Facility",
    ],
    popular: false,
  },
  {
    name: "PREMIUM",
    description: "Everything you need to take your fitness to the next level.",
    features: [
      "Unlimited Gym Access",
      "Strength & Cardio Training",
      "CrossFit Programs",
      "Trainer Guidance",
      "Nutrition Guidance",
      "Locker Facility",
    ],
    popular: true,
  },
  {
    name: "ELITE",
    description: "A personalized experience designed for serious results.",
    features: [
      "Everything in Premium",
      "Personal Training",
      "Personalized Workout Plan",
      "Personalized Nutrition Guidance",
      "Priority Trainer Support",
      "Exclusive Coaching",
    ],
    popular: false,
  },
];

export default function Membership() {
  return (
    <section
      id="membership"
      className="relative overflow-hidden bg-[#090909] section-spacing"
    >
      {/* ================= Background Glow ================= */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime-400/10 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-lime-400/5 blur-[140px]" />

      {/* ================= Content ================= */}
      <div className="container relative z-10">

        {/* ================= SECTION HEADER ================= */}
        <div className="flex w-full justify-center">
          <Reveal>
            <div className="flex max-w-4xl flex-col items-center text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-(--primary)">
                Membership
              </span>
              
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
                CHOOSE YOUR
                <br />
                FITNESS PLAN
              </h2>
<div className="h-24 md:h-32 lg:h-2" />
              {/* ================= SINGLE PREMIUM SUB-HEADER ================= */}
              <div className="mt-8 inline-flex items-center justify-center rounded-full border border-(--primary)/30 bg-(--primary)/10 px-8 py-3 text-sm font-bold uppercase tracking-[0.2em] text-(--primary) shadow-[0_0_20px_rgba(163,230,53,0.1)]">
                Contact Us For Pricing
              </div>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                Choose the membership that fits your goals and start your journey
                towards a stronger, healthier, and more confident you.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= MASSIVE BULLETPROOF SPACER ================= */}
        {/* This forces a huge gap that CSS margins can't collapse or ignore */}
        <div className="h-24 md:h-32 lg:h-20" />

        {/* ================= PRICING CARDS ================= */}
        <div className="grid gap-8 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 150}>
              <div
                className={`group relative flex h-full flex-col items-start rounded-3xl border p-8 pt-10 text-left transition-all duration-500 hover:shadow-[0_20px_60px_rgba(163,230,53,0.12)] md:p-10 md:pt-12 ${
                  plan.popular
                    ? "border-(--primary)/60 bg-(--primary)/5 shadow-[0_0_50px_rgba(163,230,53,0.08)] lg:-translate-y-4"
                    : "border-white/10 bg-white/[0.03] hover:-translate-y-2 hover:border-(--primary)/40 hover:bg-white/[0.05]"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <span className="whitespace-nowrap rounded-full bg-(--primary) px-6 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-black shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Name (Main title of the card) */}
                <div className="flex w-full flex-col items-start">
                  <h3 className="text-4xl font-black uppercase tracking-wide text-white md:text-5xl">
                    {plan.name}
                  </h3>
                  <p className="mt-5 min-h-[56px] w-full leading-7 text-gray-400">
                    {plan.description}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-8 h-px w-full bg-white/10" />

                {/* Features */}
                <div className="flex-1 w-full space-y-5">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-4 text-left">
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-(--primary) text-sm font-black text-black">
                        ✓
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-12 w-full">
                  <Button href="#contact">Choose {plan.name}</Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ================= BOTTOM NOTE ================= */}
        <Reveal delay={500}>
          <div className="mt-20 flex flex-col items-center text-center">
            <p className="text-sm text-gray-500">
              Ready to take the next step?
            </p>
            <a
              href="#contact"
              className="mt-2 inline-block font-semibold text-(--primary) transition hover:text-white"
            >
              Contact SYRO Fitness →
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  );
}