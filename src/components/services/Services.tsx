"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
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
  return (
    <section
      id="services"
      className="section-padding relative overflow-hidden bg-[#050816]"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="container-custom relative z-10">
        {/* Section heading */}
        <div className="mb-16 grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-cyan-400" />

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                What we do
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Technology built around
              <span className="gradient-text"> your ambitions.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-xl text-base leading-7 text-slate-400 md:ml-auto"
          >
            From intelligent automation to scalable cloud platforms, we combine
            engineering expertise and business thinking to create technology
            that delivers measurable impact.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                }}
                className="group relative"
              >
                <div className="glass-card relative flex h-full min-h-[330px] flex-col overflow-hidden rounded-3xl p-7 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-white/20">
                  {/* Hover glow */}
                  <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/10 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />

                  {/* Top row */}
                  <div className="relative flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all duration-300 group-hover:border-cyan-400/20 group-hover:bg-cyan-400/10">
                      <Icon
                        size={22}
                        className="text-slate-300 transition-colors duration-300 group-hover:text-cyan-300"
                      />
                    </div>

                    <span className="text-xs font-medium tracking-wider text-slate-600">
                      {service.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative mt-auto">
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      {service.description}
                    </p>

                    {/* Tags */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-white/5 bg-white/[0.03] px-2.5 py-1 text-[10px] font-medium text-slate-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-7 right-7 flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-white/[0.03] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <ArrowUpRight
                      size={16}
                      className="text-white"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}