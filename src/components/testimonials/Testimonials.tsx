"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "CloudMind helped us turn a complex technical idea into a product that was simple, scalable, and ready for real users.",
    name: "Business Client",
    role: "Technology & Operations",
  },
  {
    quote:
      "The team understood both the technology and the business problem. The result was much more practical than a typical development project.",
    name: "Product Client",
    role: "Digital Product",
  },
  {
    quote:
      "From architecture to implementation, the focus on performance and long-term scalability gave us confidence in the solution.",
    name: "Enterprise Client",
    role: "Engineering",
  },
];

export default function Testimonials() {
  return (
    <section className="section-padding relative overflow-hidden bg-[#070b18]">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/5 blur-[140px]" />

      <div className="container-custom relative z-10">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Client perspective
            </span>

            <span className="h-px w-8 bg-cyan-400" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            Technology is better
            <span className="gradient-text"> together.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mx-auto mt-5 max-w-xl text-sm leading-6 text-slate-500"
          >
            We work closely with our clients to understand their challenges,
            build the right solution, and create technology that lasts.
          </motion.p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="glass-card rounded-3xl p-7"
            >
              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={13}
                      className="fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>

                <Quote size={22} className="text-slate-700" />
              </div>

              <p className="mt-7 text-base leading-7 text-slate-300">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 border-t border-white/5 pt-5">
                <p className="text-sm font-semibold text-white">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-xs text-slate-600">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}