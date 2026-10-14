"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Blocks,
  Lightbulb,
  ShieldCheck,
  Zap,
} from "lucide-react";
import Link from "next/link";

const strengths = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We use modern technologies and intelligent approaches to solve real business problems.",
  },
  {
    icon: Blocks,
    title: "Built to Scale",
    description:
      "Our solutions are designed with performance, flexibility, and long-term growth in mind.",
  },
  {
    icon: ShieldCheck,
    title: "Security Focused",
    description:
      "Security and reliability are considered from architecture through deployment.",
  },
  {
    icon: Zap,
    title: "Business Impact",
    description:
      "We focus on technology that improves efficiency, customer experience, and measurable outcomes.",
  },
];

const stats = [
  { value: "10+", label: "Technology Domains" },
  { value: "24/7", label: "Digital Reliability" },
  { value: "100%", label: "Growth Focused" },
  { value: "∞", label: "Possibilities" },
];

export default function About() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-[#050816]"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[140px]" />

      <div className="container-custom relative z-10">
        {/* Main about */}
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Left content */}
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
                About CloudMind
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
            >
              We turn complex ideas into
              <span className="gradient-text"> intelligent solutions.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-6 max-w-xl text-base leading-7 text-slate-400"
            >
              CloudMind Solutions is a technology company focused on helping
              businesses use software, artificial intelligence, cloud
              technologies, and data to build better products and operate
              smarter.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 max-w-xl text-base leading-7 text-slate-400"
            >
              We believe great technology should be powerful behind the scenes
              and simple for people to use. That's why we combine engineering
              excellence with a deep understanding of business goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8"
            >
              <Link
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
              >
                Let's build something meaningful

                <ArrowUpRight
                  size={17}
                  className="text-cyan-400 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass-card relative min-h-[430px] overflow-hidden rounded-[2rem] p-8">
              {/* Grid */}
              <div className="absolute inset-0 grid-background opacity-40" />

              {/* Central glow */}
              <div className="absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[80px]" />

              {/* Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10"
              />

              
{/* Center logo */}
<div className="absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center ">
  <Image
    src="/logos/cloudmind-logo.png"
    alt="CloudMind Solutions logo"
    width={88}
    height={88}
    className="h-[88px] w-[88px] rounded-2xl object-contain"
  />
</div>


              {/* Floating nodes */}
              <div className="absolute left-[18%] top-[22%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Lightbulb size={18} className="text-yellow-300" />
              </div>

              <div className="absolute right-[17%] top-[24%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Blocks size={18} className="text-purple-300" />
              </div>

              <div className="absolute bottom-[22%] left-[20%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <ShieldCheck size={18} className="text-emerald-300" />
              </div>

              <div className="absolute bottom-[20%] right-[18%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                <Zap size={18} className="text-cyan-300" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3">
                <span className="text-xs text-slate-500">
                  Engineering • Intelligence • Growth
                </span>

                <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/50" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 divide-x divide-white/10 border-y border-white/10 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="px-5 py-8 text-center md:py-10"
            >
              <div className="text-3xl font-bold text-white sm:text-4xl">
                {stat.value}
              </div>

              <div className="mt-2 text-xs text-slate-500 sm:text-sm">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Strengths */}
        <div className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Why CloudMind
            </span>

            <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Built for what comes next.
            </h3>
          </motion.div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 md:grid-cols-2 lg:grid-cols-4">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;

              return (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="bg-[#080d1d] p-7 transition-colors duration-300 hover:bg-[#0c1327]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon size={20} className="text-cyan-300" />
                  </div>

                  <h4 className="mt-6 text-base font-semibold text-white">
                    {strength.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    {strength.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}