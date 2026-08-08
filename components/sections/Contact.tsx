import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#090909] section-spacing">
      <div className="pointer-events-none absolute left-0 top-20 h-[500px] w-[500px] rounded-full bg-lime-400/10 blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-lime-400/5 blur-[150px]" />

      <div className="container relative z-10">

        {/* ================= SECTION HEADER (CENTERED) ================= */}
        <div className="mb-16 flex w-full justify-center md:mb-20">
          <Reveal>
            <div className="flex max-w-4xl flex-col items-center text-center">
              <span className="text-sm font-semibold uppercase tracking-[0.4em] text-(--primary)">
                Get In Touch
              </span>
              <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl">
                READY TO <span className="text-(--primary)">GET STRONGER?</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
                Have questions about our memberships, training programs, or
                facilities? Get in touch with the SYRO team and start your fitness
                journey today.
              </p>
            </div>
          </Reveal>
        </div>

        {/* ================= CONTACT GRID ================= */}
        <div className="grid gap-8 lg:grid-cols-2">

          {/* LEFT — CONTACT INFORMATION */}
          <Reveal direction="left">
            <div className="flex h-full flex-col items-start rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-left md:p-10 transition-all duration-500 hover:-translate-y-2 hover:border-lime-400/30 hover:shadow-[0_20px_50px_rgba(163,230,53,0.12)]">
              <span className="text-xs font-bold uppercase tracking-[0.35em] text-(--primary)">
                Contact SYRO
              </span>
              <h3 className="mt-5 text-3xl font-black uppercase text-white md:text-4xl">
                LET'S CONNECT
              </h3>
              <p className="mt-5 leading-8 text-gray-400">
                Whether you're looking for a new gym, personal training, or
                simply want to know more about SYRO Innovative Fitness, we're
                here to help.
              </p>

              <div className="mt-10 flex w-full flex-col space-y-5">
                <a href="https://maps.app.goo.gl/p7x3HtPiX592zeCs5" target="_blank" rel="noopener noreferrer" className="group flex w-full flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-x-1 hover:border-(--primary)/40 hover:bg-white/[0.06] sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--primary) text-xl text-black">📍</div>
                  <div className="flex flex-col items-start">
                    <p className="text-sm font-semibold text-gray-500">VISIT US</p>
                    <p className="mt-1 font-medium text-white group-hover:text-(--primary)">SYRO Innovative Fitness</p>
                    <p className="mt-1 text-sm text-gray-400">Open Google Maps →</p>
                  </div>
                </a>

                <a href="https://www.instagram.com/syrofitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="group flex w-full flex-col items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-x-1 hover:border-(--primary)/40 hover:bg-white/[0.06] sm:flex-row sm:items-center">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-(--primary) text-xl text-black">◎</div>
                  <div className="flex flex-col items-start">
                    <p className="text-sm font-semibold text-gray-500">FOLLOW US</p>
                    <p className="mt-1 font-medium text-white group-hover:text-(--primary)">Instagram</p>
                    <p className="mt-1 text-sm text-gray-400">Follow SYRO on Instagram →</p>
                  </div>
                </a>
              </div>

              <div className="mt-8">
                <Button href="https://maps.app.goo.gl/p7x3HtPiX592zeCs5">Get Directions</Button>
              </div>

              {/* GOOGLE MAPS EMBED */}
              <div className="mt-10 w-full overflow-hidden rounded-2xl border border-white/10">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.614284253015!2d72.8715923!3d19.2120422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b737718a510d%3A0x7c78cec2d0e660a!2sSYRO%20INNOVATIVE%20FITNESS%20-%20KANDIVALI!5e0!3m2!1sen!2sin!4v1786001694929!5m2!1sen!2sin" width="100%" height="320" style={{ border: 0 }} loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" className="w-full" />
              </div>
            </div>
          </Reveal>

          {/* RIGHT — CTA CARD */}
          <Reveal direction="right" delay={150}>
            <div className="relative flex h-full flex-col items-start justify-center overflow-hidden rounded-3xl border border-(--primary)/20 bg-(--primary)/5 p-8 text-left md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(163,230,53,0.15)]">
              
              <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-lime-400/20 blur-[100px]" />

              <div className="relative z-10 flex flex-col items-start">
                <span className="text-xs font-bold uppercase tracking-[0.35em] text-(--primary)">
                  Start Today
                </span>
                <h3 className="mt-5 text-4xl font-black uppercase leading-tight text-white md:text-5xl">
                  YOUR <br /> STRONGER <br /> SELF <br /> STARTS HERE.
                </h3>
                <p className="mt-6 max-w-md leading-8 text-gray-300">
                  Stop waiting for the perfect time. Take the first step toward
                  a stronger, healthier, and more confident version of yourself.
                </p>

                <div className="mt-10 flex flex-wrap gap-5">
                  <Button href="#membership">Join SYRO</Button>
                  <a href="https://www.instagram.com/syrofitness?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-[52px] items-center justify-center rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-(--primary) hover:bg-(--primary) hover:text-black">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}