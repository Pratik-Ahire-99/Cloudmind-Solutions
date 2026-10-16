
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Cloud,
  Database,
  Layers3,
  Network,
  Workflow,
} from "lucide-react";

const solutions = [
  {
    icon: BrainCircuit,
    title: "Intelligent Systems",
    description:
      "AI-powered applications, machine learning workflows, and intelligent assistants designed around real business use cases.",
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    description:
      "Secure and scalable cloud architectures that help teams deploy faster and operate with confidence.",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    description:
      "Transform fragmented data into dashboards, analytics platforms, and actionable business intelligence.",
  },
  {
    icon: Layers3,
    title: "Digital Products",
    description:
      "Modern web and software products designed around usability, performance, and customer experience.",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    description:
      "Automate repetitive workflows and connect systems to reduce manual effort and improve operational efficiency.",
  },
  {
    icon: Network,
    title: "Enterprise Integration",
    description:
      "Connect applications, APIs, data sources, and business systems into a unified technology ecosystem.",
  },
];

export default function Solutions() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="solutions"
      className="section-padding relative overflow-hidden bg-[#070b18]"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="solutions-background-glow pointer-events-none absolute left-1/2 top-0 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[80px] sm:h-[500px] sm:w-[700px] sm:blur-[150px]"
      />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Our solutions
            </span>
            <span className="h-px w-8 bg-cyan-400" />
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.7 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
          >
            From idea to
            <span className="gradient-text"> intelligent reality.</span>
          </motion.h2>

          <motion.p
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              delay: shouldReduceMotion ? 0 : 0.1,
            }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400"
          >
            We bring together software engineering, AI, cloud, data, and
            automation to create technology ecosystems that are built for
            what&apos;s next.
          </motion.p>
        </div>

        {/* Solutions and technology visualization */}
        <div className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Solution list */}
          <div className="grid gap-3 sm:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.title}
                  initial={
                    shouldReduceMotion ? false : { opacity: 0, y: 25 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.55,
                    delay: shouldReduceMotion ? 0 : index * 0.07,
                  }}
                  className="group"
                >
                  <div className="glass-card h-full rounded-2xl p-6 transition-colors duration-300 hover:border-cyan-400/20">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:bg-cyan-400/10">
                        <Icon
                          size={20}
                          className="text-slate-300 transition-colors duration-300 group-hover:text-cyan-300"
                        />
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="text-slate-700 transition-colors duration-300 group-hover:text-cyan-300"
                      />
                    </div>

                    <h3 className="mt-6 text-base font-semibold text-white">
                      {solution.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                      {solution.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Technology visualization */}
          <div className="relative min-h-[420px] overflow-hidden rounded-3xl border border-white/10 bg-[#050816] sm:min-h-[500px]">
            {/* Grid */}
            <div
              aria-hidden="true"
              className="absolute inset-0 grid-background opacity-50"
            />

            {/* Glow */}
            <div
              aria-hidden="true"
              className="solutions-visual-glow absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[45px] sm:h-56 sm:w-56 sm:blur-[90px]"
            />

            {/* Rotating rings: desktop only */}
            {!shouldReduceMotion && (
              <div
                aria-hidden="true"
                className="solutions-orbit absolute left-1/2 top-1/2 hidden h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10 lg:block"
              >
                <div className="solutions-orbit-reverse absolute inset-8 rounded-full border border-cyan-400/10" />
              </div>
            )}

            {/* Center logo */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center">
              <Image
                src="/logos/cloudmind-logo.png"
                alt="CloudMind Solutions logo"
                width={88}
                height={88}
                className="h-[88px] w-[88px] rounded-2xl object-contain"
              />
            </div>

            {/* Technology nodes: static on mobile, animated on desktop */}
            <div className="solutions-node absolute left-[8%] top-[15%] rounded-xl border border-white/10 bg-[#0b1124] px-3 py-2 sm:left-[12%] sm:top-[18%] sm:px-4 sm:py-3 lg:bg-white/[0.04] lg:backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <BrainCircuit size={15} className="text-purple-300" />
                <span className="text-xs text-slate-400">AI</span>
              </div>
            </div>

            <div className="solutions-node absolute right-[8%] top-[23%] rounded-xl border border-white/10 bg-[#0b1124] px-3 py-2 sm:right-[10%] sm:px-4 sm:py-3 lg:bg-white/[0.04] lg:backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Cloud size={15} className="text-cyan-300" />
                <span className="text-xs text-slate-400">Cloud</span>
              </div>
            </div>

            <div className="solutions-node absolute bottom-[23%] left-[8%] rounded-xl border border-white/10 bg-[#0b1124] px-3 py-2 sm:left-[10%] sm:px-4 sm:py-3 lg:bg-white/[0.04] lg:backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Database size={15} className="text-blue-300" />
                <span className="text-xs text-slate-400">Data</span>
              </div>
            </div>

            <div className="solutions-node absolute bottom-[18%] right-[8%] rounded-xl border border-white/10 bg-[#0b1124] px-3 py-2 sm:right-[9%] sm:px-4 sm:py-3 lg:bg-white/[0.04] lg:backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Workflow size={15} className="text-emerald-300" />
                <span className="text-xs text-slate-400">Automation</span>
              </div>
            </div>

            {/* Bottom status */}
            <div className="absolute bottom-5 left-3 right-3 flex items-center justify-between rounded-xl border border-white/5 bg-[#080d1b] px-3 py-3 sm:left-5 sm:right-5 sm:px-4 lg:bg-black/20 lg:backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="text-xs text-slate-400">
                  Systems connected
                </span>
              </div>

              <span className="text-xs font-medium text-slate-500">
                6 CORE DOMAINS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
