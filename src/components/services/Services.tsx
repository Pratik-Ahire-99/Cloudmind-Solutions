
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  BarChart3,
  Cloud,
  Code2,
  Database,
  Globe,
  Workflow,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "AI & Machine Learning",
    description:
      "Build intelligent systems that automate decisions, uncover insights, and create smarter customer experiences.",
    icon: BrainCircuit,
    tags: ["AI", "ML", "GenAI"],
  },
  {
    number: "02",
    title: "Software Development",
    description:
      "Scalable and reliable software engineered around your business goals, workflows, and long-term growth.",
    icon: Code2,
    tags: ["Web", "Backend", "APIs"],
  },
  {
    number: "03",
    title: "Web & App Development",
    description:
      "Modern, responsive digital products designed to deliver exceptional experiences across every device.",
    icon: Globe,
    tags: ["Next.js", "React", "Mobile"],
  },
  {
    number: "04",
    title: "Cloud Solutions",
    description:
      "Design and deploy secure, scalable cloud infrastructure built for performance, reliability, and growth.",
    icon: Cloud,
    tags: ["AWS", "Azure", "DevOps"],
  },
  {
    number: "05",
    title: "Data & Analytics",
    description:
      "Turn complex data into actionable insights with analytics platforms, dashboards, and intelligent reporting.",
    icon: Database,
    tags: ["Analytics", "BI", "Data"],
  },
  {
    number: "06",
    title: "Automation & Integration",
    description:
      "Connect systems and automate repetitive processes to improve efficiency and reduce operational overhead.",
    icon: Workflow,
    tags: ["APIs", "Automation", "Integration"],
  },
];

export default function Services() {
  const shouldReduceMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 14 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.45, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="section-padding relative isolate overflow-hidden bg-[#050816]"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="services-glow pointer-events-none absolute left-[-100px] top-[20%] h-56 w-56 rounded-full bg-blue-600/[0.06] sm:h-80 sm:w-80"
      />

      <div className="container-custom relative z-10">
        {/* Section heading */}
        <div className="mb-10 grid gap-6 sm:mb-16 md:grid-cols-[1fr_1.2fr] md:items-end md:gap-8">
          <div>
            <motion.div
              {...entrance()}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                What we do
              </span>
            </motion.div>

            <motion.h2
              {...entrance(0.05)}
              id="services-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Technology built around
              <span className="gradient-text"> your ambitions.</span>
            </motion.h2>
          </div>

          <motion.p
            {...entrance(0.1)}
            className="max-w-xl text-sm leading-7 text-slate-400 sm:text-base md:ml-auto"
          >
            From intelligent automation to scalable cloud platforms, we combine
            engineering expertise and business thinking to create technology
            that delivers measurable impact.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.number}
                {...entrance(index * 0.06)}
                className="group min-w-0"
              >
                <div className="glass-card service-card relative flex h-full min-h-[310px] flex-col overflow-hidden rounded-3xl p-6 sm:min-h-[330px] sm:p-7">
                  {/* Desktop hover accent */}
                  <div
                    aria-hidden="true"
                    className="service-card-glow pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  />

                  {/* Top row */}
                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-colors duration-200 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/10">
                      <Icon
                        size={22}
                        aria-hidden="true"
                        className="text-slate-300 transition-colors duration-200 group-hover:text-cyan-300"
                      />
                    </div>

                    <span className="text-xs font-medium tracking-wider text-slate-500">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative mt-auto pt-8">
                    <h3 className="text-lg font-semibold leading-snug text-white sm:text-xl">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>

                    {/* Technology tags */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/[0.07] bg-white/[0.03] px-2.5 py-1.5 text-[10px] font-medium text-slate-400 sm:text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative arrow */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-6 right-6 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-slate-300 opacity-100 transition-colors duration-200 group-hover:border-cyan-400/30 group-hover:text-cyan-300 sm:bottom-7 sm:right-7 sm:opacity-0 sm:group-hover:opacity-100"
                  >
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
