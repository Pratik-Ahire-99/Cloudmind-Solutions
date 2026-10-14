"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
  return (
    <section
      id="solutions"
      className="section-padding relative overflow-hidden bg-[#070b18]"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[150px]" />

      <div className="container-custom relative z-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <span className="h-px w-8 bg-cyan-400" />

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Our solutions
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
            From idea to
            <span className="gradient-text"> intelligent reality.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-400"
          >
            We bring together software engineering, AI, cloud, data, and
            automation to create technology ecosystems that are built for
            what's next.
          </motion.p>
        </div>

        {/* Solutions + visual */}
        <div className="mt-16 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Solution list */}
          <div className="grid gap-3 sm:grid-cols-2">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.07,
                  }}
                  className="group"
                >
                  <div className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/20">
                    <div className="flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] transition-colors duration-300 group-hover:bg-cyan-400/10">
                        <Icon
                          size={20}
                          className="text-slate-300 transition-colors duration-300 group-hover:text-cyan-300"
                        />
                      </div>

                      <ArrowUpRight
                        size={17}
                        className="text-slate-700 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-300"
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
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-[#050816]"
          >
            {/* Grid */}
            <div className="absolute inset-0 grid-background opacity-50" />

            {/* Glow */}
            <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[90px]" />

            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/10"
            />

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
            />

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center ">
              <Image
                src="/logos/cloudmind-logo.png"
                alt="CloudMind Solutions logo"
                width={88}
                height={88}
                className="h-[88px] w-[88px] rounded-2xl object-contain"
              />
            </div>

            {/* Nodes */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-[12%] top-[18%] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <BrainCircuit size={15} className="text-purple-300" />
                <span className="text-xs text-slate-400">AI</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute right-[10%] top-[23%] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <Cloud size={15} className="text-cyan-300" />
                <span className="text-xs text-slate-400">Cloud</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -7, 0] }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[23%] left-[10%] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <Database size={15} className="text-blue-300" />
                <span className="text-xs text-slate-400">Data</span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute bottom-[18%] right-[9%] rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 backdrop-blur-xl"
            >
              <div className="flex items-center gap-2">
                <Workflow size={15} className="text-emerald-300" />
                <span className="text-xs text-slate-400">Automation</span>
              </div>
            </motion.div>

            {/* Bottom status */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
                <span className="text-xs text-slate-500">
                  Systems connected
                </span>
              </div>

              <span className="text-xs font-medium text-slate-600">
                6 CORE DOMAINS
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}