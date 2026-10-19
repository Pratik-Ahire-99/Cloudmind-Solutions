
"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Database,
  Code2,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

const technologies = [
  {
    icon: BrainCircuit,
    label: "Transformation",
    position: "left-[4%] top-[28%]",
  },
  {
    icon: Cloud,
    label: "Salesforce",
    position: "right-[4%] top-[27%]",
  },
  {
    icon: Database,
    label: "Data",
    position: "left-[8%] bottom-[22%]",
  },
  {
    icon: Code2,
    label: "Software",
    position: "right-[7%] bottom-[20%]",
  },
];

const technologyTags = ["IT Services", "Salesforce", "Data Engineering", "Software","Resource Planning"];

const entranceVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const entranceTransition = (delay = 0) =>
    shouldReduceMotion
      ? { duration: 0 }
      : {
          duration: 0.48,
          delay,
          ease: "easeOut" as const,
        };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#050816] px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40 lg:pb-16 lg:pt-32"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="grid-background pointer-events-none absolute inset-0 opacity-40"
      />

      {/* Lightweight ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[35%] h-40 w-40 -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[40px] sm:h-80 sm:w-80 sm:blur-[65px] lg:h-[500px] lg:w-[500px] lg:blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[20%] hidden h-40 w-40 rounded-full bg-cyan-500/[0.04] blur-[60px] sm:block"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10%] right-[5%] hidden h-48 w-48 rounded-full bg-purple-600/[0.04] blur-[65px] sm:block"
      />

      {/* Desktop-only floating technology cards */}
      {!shouldReduceMotion &&
        technologies.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              aria-hidden="true"
              className={`pointer-events-none absolute hidden lg:block ${item.position}`}
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: 1,
                y: [0, -4, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.4,
                  delay: index * 0.08,
                },
                y: {
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="glass-card flex items-center gap-3 rounded-2xl px-4 py-3 shadow-xl shadow-black/10">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/5">
                  <Icon size={18} className="text-cyan-300" />
                </div>

                <span className="text-sm font-medium text-slate-300">
                  {item.label}
                </span>
              </div>
            </motion.div>
          );
        })}

      {/* Main hero content */}
      <div className="container-custom relative z-10 flex min-h-[min(680px,calc(100svh-10rem))] items-center justify-center">
        <div className="mx-auto w-full max-w-5xl text-center">
          {/* Eyebrow */}
          <motion.div
            variants={entranceVariants}
            initial="hidden"
            animate="visible"
            transition={entranceTransition(0)}
            className="mb-7 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 sm:mb-8 sm:px-4"
          >
            <span
              aria-hidden="true"
              className="relative flex h-2 w-2 shrink-0"
            >
              <span className="absolute hidden h-full w-full rounded-full bg-cyan-400 opacity-50 motion-safe:sm:inline-flex motion-safe:sm:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-xs font-medium leading-5 tracking-wide text-slate-300 sm:text-sm">
              Innovate, Scale, and Expand with CloudMind Solutions.
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            id="hero-heading"
            variants={entranceVariants}
            initial="hidden"
            animate="visible"
            transition={entranceTransition(0.08)}
            className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl sm:leading-[1.08] md:text-7xl lg:text-7xl"
          >
            Custom Enterprise  
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">
             Solutions Built for Any Industry.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={entranceVariants}
            initial="hidden"
            animate="visible"
            transition={entranceTransition(0.16)}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-7"
          >
            CloudMind Solutions develop custom solutions for you no matter your industry or need.
            Delivering Value through Cybernated Implementations, Acquire, Store & Analyze Data at Scale and
            Drive, Deliver & Expand Seamlessly with the World's #1 CRM
          </motion.p>

          {/* Calls to action */}
          <motion.div
            variants={entranceVariants}
            initial="hidden"
            animate="visible"
            transition={entranceTransition(0.24)}
            className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] motion-reduce:transition-none sm:w-auto"
            >
              Start a Project

              <ArrowUpRight
                aria-hidden="true"
                size={17}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>

            <Link
              href="#services"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] motion-reduce:transition-none sm:w-auto"
            >
              Explore Services

              <ArrowRight
                aria-hidden="true"
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </motion.div>

          {/* Technology indicators */}
          <motion.div
            aria-label="Our technology areas"
            variants={entranceVariants}
            initial="hidden"
            animate="visible"
            transition={entranceTransition(0.32)}
            className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-3"
          >
            {technologyTags.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300"
              >
                {technology}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#050816] to-transparent sm:h-28"
      />
    </section>
  );
}
