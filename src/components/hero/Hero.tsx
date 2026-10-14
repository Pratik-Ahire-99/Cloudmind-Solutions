
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Database,
  Code2,
} from "lucide-react";

const technologies = [
  {
    icon: BrainCircuit,
    label: "AI & ML",
    position: "left-[4%] top-[28%]",
  },
  {
    icon: Cloud,
    label: "Cloud",
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

const technologyTags = [
  "AI",
  "Cloud",
  "Data",
  "Software",
  "Automation",
];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[100svh] overflow-hidden bg-[#050816] px-4 pb-16 pt-36 sm:px-6 sm:pb-20 sm:pt-40 lg:pb-16 lg:pt-32"
    >
      {/* Background grid */}
      <div
        aria-hidden="true"
        className="grid-background pointer-events-none absolute inset-0 opacity-50"
      />

      {/* Ambient lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[35%] h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[100px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[20%] h-[200px] w-[200px] rounded-full bg-cyan-500/5 blur-[90px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10%] right-[5%] h-[250px] w-[250px] rounded-full bg-purple-600/5 blur-[100px]"
      />

      {/* Floating technology cards */}
      {technologies.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.label}
            aria-hidden="true"
            className={`pointer-events-none absolute ${item.position} hidden lg:block`}
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 16 }
            }
            animate={
              shouldReduceMotion
                ? { opacity: 1, y: 0 }
                : {
                    opacity: 1,
                    y: [0, -8, 0],
                  }
            }
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : {
                    opacity: {
                      duration: 0.5,
                      delay: index * 0.12,
                    },
                    y: {
                      duration: 4 + index,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }
            }
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
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
            className="mb-7 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 backdrop-blur-xl sm:mb-8 sm:px-4"
          >
            <span
              aria-hidden="true"
              className="relative flex h-2 w-2 shrink-0"
            >
              {!shouldReduceMotion && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-50 motion-reduce:animate-none" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-xs font-medium leading-5 tracking-wide text-slate-300 sm:text-sm">
              Building the future with intelligent technology
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            id="hero-heading"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 20 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.65,
              delay: shouldReduceMotion ? 0 : 0.08,
            }}
            className="mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl sm:leading-[1.08] md:text-7xl lg:text-8xl"
          >
            Technology that
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">
              moves business forward.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 16 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.18,
            }}
            className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8"
          >
            CloudMind Solutions builds intelligent software,
            AI-powered solutions, cloud platforms, and modern
            digital experiences that help businesses grow faster
            and operate smarter.
          </motion.p>

          {/* Calls to action */}
          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, y: 16 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.28,
            }}
            className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              href="#contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] sm:w-auto"
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
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] sm:w-auto"
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
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0 }
            }
            animate={{ opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.45,
            }}
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
