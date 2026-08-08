"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/ui/Reveal";

const faqs = [
  {
    question: "What are your gym timings?",
    answer:
      "We are open from 6:00 AM to 11:00 PM, Monday to Sunday.",
  },
  {
    question: "Do you offer personal training?",
    answer:
      "Yes. Our certified trainers provide customized workout plans and one-on-one coaching.",
  },
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, contact us to schedule your free trial session.",
  },
  {
    question: "Do you have locker facilities?",
    answer:
      "Yes, secure lockers are available for all members.",
  },
  {
    question: "Can beginners join?",
    answer:
      "Absolutely! Our trainers will guide beginners from day one.",
  },
  {
    question: "What membership plans are available?",
    answer:
      "We offer Starter, Premium, and Elite membership plans.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="bg-[#090909] py-28"
    >
      <div className="container max-w-4xl">

        <Reveal>
          <div className="text-center">

            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-(--primary)">
              FAQ
            </span>

            <h2 className="mt-5 text-5xl font-black uppercase text-white md:text-6xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-6 text-gray-400">
              Everything you need to know before joining SYRO Innovative Fitness.
            </p>

          </div>
        </Reveal>

        <div className="mt-16 space-y-5">

          {faqs.map((faq, index) => (

            <Reveal key={index} delay={index * 80}>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="flex w-full items-center justify-between p-6 text-left"
                >

                  <span className="text-lg font-bold text-white">
                    {faq.question}
                  </span>

                  <span className="text-3xl text-(--primary)">
                    {open === index ? "−" : "+"}
                  </span>

                </button>

                <AnimatePresence>

                  {open === index && (

                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-400">
                        {faq.answer}
                      </div>
                    </motion.div>

                  )}

                </AnimatePresence>

              </div>

            </Reveal>

          ))}

        </div>

      </div>
    </section>
  );
}