
"use client";

import { useReducedMotion } from "framer-motion";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  BarChart3,
  CloudCog,
  UsersRound,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "AI Vision Platform",
    category: "Artificial Intelligence",
    description:
      "An intelligent computer vision platform designed to detect, classify, and analyze objects from real-time visual data.",
    icon: BrainCircuit,
    technologies: ["Python", "AI", "Computer Vision"],
    size: "large",
  },
  {
    number: "02",
    title: "Business Intelligence Hub",
    category: "Data & Analytics",
    description:
      "A centralized analytics platform that turns business data into actionable dashboards and insights.",
    icon: BarChart3,
    technologies: ["Analytics", "BI", "Dashboards"],
    size: "small",
  },
  {
    number: "03",
    title: "Cloud Automation Platform",
    category: "Cloud & DevOps",
    description:
      "Automated infrastructure and deployment workflows designed for reliable and scalable applications.",
    icon: CloudCog,
    technologies: ["Cloud", "DevOps", "Automation"],
    size: "small",
  },
  {
    number: "04",
    title: "Smart Customer Platform",
    category: "Digital Products",
    description:
      "A modern customer platform connecting data, workflows, and personalized digital experiences.",
    icon: UsersRound,
    technologies: ["React", "APIs", "Data"],
    size: "large",
  },
];

export default function Portfolio() {
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
      id="work"
      aria-labelledby="portfolio-heading"
      className="section-padding relative overflow-hidden bg-[#050816]"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end md:gap-8">
          <div>
            <motion.div
              {...entrance()}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Featured work
              </span>
            </motion.div>

            <motion.h2
              {...entrance(0.05)}
              id="portfolio-heading"
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl"
            >
              Ideas turned into
              <span className="gradient-text"> real products.</span>
            </motion.h2>
          </div>

          <motion.p
            {...entrance(0.1)}
            className="max-w-md text-sm leading-7 text-slate-400"
          >
            A selection of technology concepts demonstrating how CloudMind
            combines engineering, intelligence, and thoughtful design.
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="mt-10 grid gap-5 sm:mt-14 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.number}
                {...entrance(index * 0.07)}
                className="group min-w-0"
              >
                <div
                  className={`portfolio-card relative isolate overflow-hidden rounded-3xl border border-white/10 bg-[#0a1020] ${
                    project.size === "large"
                      ? "min-h-[450px] sm:min-h-[470px]"
                      : "min-h-[430px] sm:min-h-[400px]"
                  }`}
                >
                  {/* Background grid */}
                  <div
                    aria-hidden="true"
                    className="grid-background pointer-events-none absolute inset-0 opacity-30"
                  />

                  {/* Lightweight accent glow */}
                  <div
                    aria-hidden="true"
                    className="portfolio-glow pointer-events-none absolute left-1/2 top-[28%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 transition-colors duration-300 group-hover:bg-cyan-400/15 sm:h-52 sm:w-52"
                  />

                  {/* Decorative dashboard preview */}
                  <div
                    aria-hidden="true"
                    className="portfolio-preview absolute left-[7%] right-[7%] top-[12%] overflow-hidden rounded-2xl border border-white/10 bg-[#080d1b] sm:left-[12%] sm:right-[12%] sm:top-[14%]"
                  >
                    <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-3 py-3 sm:px-4">
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />
                      <span className="h-2 w-2 rounded-full bg-white/20" />

                      <span className="ml-auto text-[8px] tracking-wide text-slate-500">
                        CLOUDMIND / PROJECT
                      </span>
                    </div>

                    <div className="p-3 sm:p-5">
                      <div className="flex items-center justify-between gap-3">
                        <div className="h-2.5 w-20 rounded-full bg-white/10 sm:w-24" />
                        <div className="h-6 w-6 rounded-lg border border-cyan-400/10 bg-cyan-400/10" />
                      </div>

                      <div className="mt-4 grid grid-cols-3 gap-2 sm:mt-6">
                        <div className="h-10 rounded-lg border border-white/[0.04] bg-white/[0.03] sm:h-14" />
                        <div className="h-10 rounded-lg border border-white/[0.04] bg-white/[0.03] sm:h-14" />
                        <div className="h-10 rounded-lg border border-white/[0.04] bg-white/[0.03] sm:h-14" />
                      </div>

                      <div className="mt-3 h-2 w-2/3 rounded-full bg-white/[0.06]" />
                      <div className="mt-2 h-2 w-1/2 rounded-full bg-white/[0.04]" />
                    </div>
                  </div>

                  {/* Project icon */}
                  <div className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#080d1d] sm:right-7 sm:top-7 sm:h-11 sm:w-11">
                    <Icon
                      size={19}
                      aria-hidden="true"
                      className="text-cyan-300"
                    />
                  </div>

                  {/* Project content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-5 sm:p-7">
                    <div className="mb-3 flex flex-wrap items-center gap-3">
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                        {project.category}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        / {project.number}
                      </span>
                    </div>

                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-bold leading-snug text-white sm:text-2xl lg:text-3xl">
                        {project.title}
                      </h3>

                      <ArrowUpRight
                        aria-hidden="true"
                        size={19}
                        className="mt-1 shrink-0 text-slate-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300 sm:hidden"
                      />
                    </div>

                    <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2 sm:mt-5">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-white/10 bg-[#080d1b] px-3 py-1.5 text-[10px] text-slate-400 sm:text-xs"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          {...entrance(0.08)}
          className="mt-10 text-center sm:mt-12"
        >
          <Link
            href="#contact"
            className="group inline-flex min-h-11 flex-wrap items-center justify-center gap-2 text-sm font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Have a project in mind?
            <span className="text-cyan-400">Let&apos;s talk</span>
            <ArrowUpRight
              aria-hidden="true"
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
