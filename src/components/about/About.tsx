
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  Blocks,
  Lightbulb,
  ShieldCheck,
  Zap,
  Target,
  Workflow,
  Cloud,
  Users,
} from "lucide-react";
import Link from "next/link";

const strengths = [
  {
    number: "01",
    icon: Target,
    title: "Plan Your Strategy",
    description:
      "Our team of experts can help you identify and assess your business needs, then develop a clear strategy to meet your goals.",
  },
  {
    number: "02",
    icon: Workflow,
    title: "Choose the Right Digital Transformation Services",
    description:
      "We help you identify and implement cost-effective, scalable technology solutions aligned with your business needs.",
  },
  {
    number: "03",
    icon: Cloud,
    title: "Bring the Power of Salesforce to Your Business",
    description:
      "Our Salesforce consulting and development services help streamline operations, strengthen customer relationships, and support business growth.",
  },
  {
    number: "04",
    icon: Blocks,
    title: "Scale Your IT Infrastructure",
    description:
      "Application managed services help you maintain reliable, scalable IT infrastructure with flexible remote or on-site support.",
  },
  {
    number: "05",
    icon: Users,
    title: "Bring the Right People Onboard",
    description:
      "We help businesses find suitable talent, from sales professionals to engineers, to support their technology and business objectives.",
  },
];

const stats = [
  { value: "10+", label: "Technology Domains" },
  { value: "24/7", label: "Digital Reliability" },
  { value: "100%", label: "Growth Focused" },
  { value: "∞", label: "Possibilities" },
];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  const entrance = (delay = 0) => ({
    initial: shouldReduceMotion ? false : { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.12 },
    transition: shouldReduceMotion
      ? { duration: 0 }
      : { duration: 0.45, delay, ease: "easeOut" as const },
  });

  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden bg-[#050816]"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[10%] h-[300px] w-[300px] rounded-full bg-purple-600/[0.05] sm:h-[400px] sm:w-[400px] lg:h-[500px] lg:w-[500px]"
      />

      <div className="container-custom relative z-10">
        {/* Main About section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Left content */}
          <div>
            <motion.div
              {...entrance()}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                About CloudMind
              </span>
            </motion.div>

            <motion.h2
              {...entrance(0.05)}
              className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl"
            >
              Focused on Delivering{" "}
              <span className="gradient-text">
                Value-Driven Solutions
              </span>
            </motion.h2>

            <motion.p
              {...entrance(0.1)}
              className="mt-6 max-w-xl text-base leading-7 text-slate-400"
            >
              CloudMind Solutions is a business technology partner focused on
              helping organizations achieve important projects and milestones.
              We take a tailored approach to help clients remain flexible,
              innovative, and on the path to success.
            </motion.p>

            <motion.p
              {...entrance(0.15)}
              className="mt-4 max-w-xl text-base leading-7 text-slate-400"
            >
              Our capabilities span digital transformation, Salesforce
              solutions, data engineering, IT services and staffing, and
              application management, helping businesses improve their
              operations and pursue new opportunities.
            </motion.p>

            <motion.div {...entrance(0.2)} className="mt-8">
              <Link
                href="#contact"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-white"
              >
                Let&apos;s build something meaningful
                <ArrowUpRight
                  size={17}
                  aria-hidden="true"
                  className="text-cyan-400 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </motion.div>
          </div>

          {/* Right visual */}
          <motion.div {...entrance(0.1)} className="relative min-w-0">
            <div className="glass-card relative min-h-[390px] overflow-hidden rounded-[2rem] p-6 sm:min-h-[430px] sm:p-8">
              {/* Grid */}
              <div
                aria-hidden="true"
                className="grid-background pointer-events-none absolute inset-0 opacity-40"
              />

              {/* Central ambient color */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] sm:h-40 sm:w-40"
              />

              {/* Static orbit rings */}
              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 sm:h-64 sm:w-64"
              />

              <div
                aria-hidden="true"
                className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/10 sm:h-40 sm:w-40"
              />

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

              {/* Surrounding capability icons */}
              <div className="absolute left-[12%] top-[19%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0b1124] sm:left-[18%] sm:top-[22%]">
                <Lightbulb size={18} className="text-yellow-300" />
              </div>

              <div className="absolute right-[12%] top-[21%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0b1124] sm:right-[17%] sm:top-[24%]">
                <Blocks size={18} className="text-purple-300" />
              </div>

              <div className="absolute bottom-[22%] left-[14%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0b1124] sm:left-[20%]">
                <ShieldCheck size={18} className="text-emerald-300" />
              </div>

              <div className="absolute bottom-[20%] right-[13%] flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#0b1124] sm:right-[18%]">
                <Zap size={18} className="text-cyan-300" />
              </div>

              {/* Status bar */}
              <div className="absolute bottom-5 left-4 right-4 flex items-center justify-between gap-3 rounded-xl border border-white/[0.07] bg-[#080d1b] px-3 py-3 sm:bottom-6 sm:left-6 sm:right-6 sm:px-4">
                <span className="text-[10px] text-slate-400 sm:text-xs">
                  Engineering · Intelligence · Growth
                </span>
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-emerald-400"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 divide-x divide-white/10 border-y border-white/10 sm:mt-20 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              {...entrance(index * 0.05)}
              className="px-4 py-7 text-center sm:px-5 sm:py-10"
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

        {/* Why CloudMind */}
        <div className="mt-20 sm:mt-24">
          <motion.div {...entrance()} className="mb-5 flex items-center gap-3 ">
            <span className="h-px w-8 bg-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
              Why CloudMind
            </span>
          </motion.div>

          <motion.h2>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl">
              Your roadmap to{" "}
              <span className="gradient-text">
                digital transformation.
              </span>
            </h2>
            </motion.h2>

            <motion.p
            {...entrance(0.1)}
              className="mt-6 max-w-xl text-base leading-7 text-slate-400">
              From planning your strategy to building the right team, we help
              you identify practical opportunities and choose technology
              solutions aligned with your business goals.
            
            </motion.p>
          

          {/* Numbered transformation process */}
          <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((strength, index) => {
              const Icon = strength.icon;

              return (
                <motion.article
                  key={strength.number}
                  {...entrance(index * 0.05)}
                  className="group relative min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#080d1d] p-6 transition-colors duration-200 hover:border-cyan-400/25 hover:bg-[#0a1123] sm:p-7"
                >
                  {/* Number and icon */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                      <Icon
                        size={20}
                        aria-hidden="true"
                        className="text-cyan-300"
                      />
                    </div>

                    <span className="text-sm font-semibold tracking-widest text-slate-600">
                      {strength.number}
                    </span>
                  </div>

                  {/* Step content */}
                  <h4 className="mt-6 pr-2 text-lg font-semibold leading-snug text-white">
                    {strength.title}
                  </h4>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {strength.description}
                  </p>

                  {/* Decorative accent */}
                  <div
                    aria-hidden="true"
                    className="mt-6 h-px w-10 bg-cyan-400/40 transition-[width] duration-200 group-hover:w-16"
                  />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
