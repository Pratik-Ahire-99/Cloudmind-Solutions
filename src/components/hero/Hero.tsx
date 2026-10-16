
"use client";

import { useEffect, useState } from "react";
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

const technologyTags = ["AI", "Cloud", "Data", "Software", "Automation"];

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const updateMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMobile();
    mediaQuery.addEventListener("change", updateMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateMobile);
    };
  }, []);

  const disableAnimation = Boolean(shouldReduceMotion) || isMobile;

  const entranceClass = disableAnimation
    ? "opacity-100"
    : "hero-entrance";

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
        className="pointer-events-none absolute left-1/2 top-[35%] h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-blue-600/[0.08] blur-[45px] sm:h-[400px] sm:w-[400px] sm:blur-[80px] lg:h-[500px] lg:w-[500px] lg:blur-[100px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[5%] top-[20%] h-[120px] w-[120px] rounded-full bg-cyan-500/[0.04] blur-[40px] sm:h-[200px] sm:w-[200px] sm:blur-[70px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[10%] right-[5%] h-[150px] w-[150px] rounded-full bg-purple-600/[0.04] blur-[45px] sm:h-[250px] sm:w-[250px] sm:blur-[80px]"
      />

      {/* Floating technology cards: desktop only */}
      {!disableAnimation &&
        technologies.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.label}
              aria-hidden="true"
              className={`pointer-events-none absolute hidden lg:block ${item.position}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{
                opacity: 1,
                y: [0, -6, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.4,
                  delay: index * 0.08,
                },
                y: {
                  duration: 5 + index,
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
          <div
            className={`${entranceClass} mb-7 inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/70 px-3 py-2 sm:mb-8 sm:px-4`}
            style={
              disableAnimation
                ? undefined
                : { animationDelay: "0ms" }
            }
          >
            <span
              aria-hidden="true"
              className="relative flex h-2 w-2 shrink-0"
            >
              <span className="absolute hidden h-full w-full rounded-full bg-cyan-400 opacity-50 motion-reduce:animate-none sm:inline-flex sm:animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>

            <span className="text-xs font-medium leading-5 tracking-wide text-slate-300 sm:text-sm">
              Building the future with intelligent technology
            </span>
          </div>

          {/* Main heading */}
          <h1
            id="hero-heading"
            className={`${entranceClass} mx-auto max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl sm:leading-[1.08] md:text-7xl lg:text-8xl`}
            style={
              disableAnimation
                ? undefined
                : { animationDelay: "80ms" }
            }
          >
            Technology that
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">
              moves business forward.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`${entranceClass} mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:mt-7 sm:text-lg sm:leading-8`}
            style={
              disableAnimation
                ? undefined
                : { animationDelay: "160ms" }
            }
          >
            CloudMind Solutions builds intelligent software,
            AI-powered solutions, cloud platforms, and modern
            digital experiences that help businesses grow faster
            and operate smarter.
          </p>

          {/* Calls to action */}
          <div
            className={`${entranceClass} mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:items-center sm:gap-4`}
            style={
              disableAnimation
                ? undefined
                : { animationDelay: "240ms" }
            }
          >
            <Link
              href="#contact"
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] sm:w-auto motion-reduce:transition-none"
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
              className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050816] sm:w-auto motion-reduce:transition-none"
            >
              Explore Services

              <ArrowRight
                aria-hidden="true"
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
              />
            </Link>
          </div>

          {/* Technology indicators */}
          <div
            aria-label="Our technology areas"
            className={`${entranceClass} mt-10 flex flex-wrap items-center justify-center gap-2 sm:mt-12 sm:gap-3`}
            style={
              disableAnimation
                ? undefined
                : { animationDelay: "320ms" }
            }
          >
            {technologyTags.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-2 text-xs font-medium text-slate-300"
              >
                {technology}
              </span>
            ))}
          </div>
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
