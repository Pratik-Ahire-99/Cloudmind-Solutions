
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
  Rocket,
  Link2,
  TrendingUp,
  Users,
  FileText,
  Settings2,
} from "lucide-react";

const solutions = [
  {
    icon: BrainCircuit,
    title: "Digital Transformation",
    description:
      "Drive meaningful, measurable, and sustainable business change through digital strategy, modern technologies, and optimized processes.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "Build reliable data foundations with data strategy, engineering, implementation, analytics, and training to solve complex business challenges.",
  },
  {
    icon: Cloud,
    title: "Salesforce Solutions",
    description:
      "Extend Salesforce capabilities with tailored CRM solutions, custom workflows, integrations, and functionality beyond standard features.",
  },
  {
    icon: Network,
    title: "IT Solutions and Staffing",
    description:
      "Access IT services, technical expertise, and staffing support to meet your business needs and strengthen your technology teams.",
  },
  {
    icon: Workflow,
    title: "Application Managed Services",
    description:
      "Support and manage business applications and IT resources to improve reliability, simplify operations, and support ongoing business needs.",
  },
  {
    icon: Layers3,
    title: "Enterprise Resource Planning",
    description:
      "Connect business resources and processes with an integrated planning framework for improved operations and customer workflow management.",
  },
];

const outcomes = [
  {
    icon: Rocket,
    title: "Modernize",
    description: "Upgrade systems for a digital future.",
  },
  {
    icon: Link2,
    title: "Integrate",
    description: "Connect data, people, and processes.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Build for sustainable growth.",
  },
];

export default function Solutions() {
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
      id="solutions"
      aria-labelledby="solutions-heading"
      className="section-padding relative isolate overflow-hidden bg-[#070b18]"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-120px] top-[15%] h-64 w-64 rounded-full bg-blue-600/[0.045]"
      />

      <div className="container-custom relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-8 xl:gap-10">
          {/* LEFT: Solutions */}
          <div className="min-w-0">
            {/* Section heading */}
            <motion.div
              {...entrance()}
              className="mb-5 flex items-center gap-3"
            >
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                Our solutions
              </span>
            </motion.div>

            <motion.h2
              {...entrance(0.05)}
              id="solutions-heading"
              className="max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl xl:text-5xl"
            >
              Integrated solutions for real{" "}
              <span className="gradient-text">business impact.</span>
            </motion.h2>

            <motion.p
              {...entrance(0.1)}
              className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
            >
              We combine technology expertise with business thinking to help
              organizations modernize operations, connect systems, and grow
              with confidence.
            </motion.p>

            {/* Six solution cards */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;

                return (
                  <motion.article
                    key={solution.title}
                    {...entrance(index * 0.045)}
                    className="group min-w-0"
                  >
                    <div className="glass-card relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-2xl border border-white/10 p-5 transition-colors duration-200 hover:border-cyan-400/25 sm:min-h-[265px] sm:p-6">
                      {/* Subtle hover accent */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-cyan-400/[0.045] opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      />

                      <div className="relative flex items-start justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06]">
                          <Icon
                            size={21}
                            aria-hidden="true"
                            className="text-cyan-300"
                          />
                        </div>

                        <span className="text-xs font-semibold tracking-wider text-slate-500">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="relative mt-6 flex-1">
                        <h3 className="pr-2 text-base font-semibold leading-snug text-white sm:text-lg">
                          {solution.title}
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-slate-400">
                          {solution.description}
                        </p>
                      </div>

                      <div
                        aria-hidden="true"
                        className="absolute bottom-5 right-5 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors duration-200 group-hover:border-cyan-400/30 group-hover:text-cyan-300"
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Editorial business ecosystem panel */}
          <motion.aside
            {...entrance(0.12)}
            aria-label="CloudMind's approach to business technology"
            className="relative flex min-w-0 flex-col overflow-hidden rounded-3xl border border-cyan-400/[0.16] bg-[#050b18] p-5 sm:p-7 lg:p-6 xl:p-8"
          >
            {/* Subtle background grid and ambient color */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 grid-background opacity-20"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute right-[-70px] top-[-70px] h-56 w-56 rounded-full bg-cyan-500/[0.055]"
            />

            <div className="relative z-10">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-7 bg-cyan-400" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Our approach
                </span>
              </div>

              <h3 className="max-w-md text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
                Technology that{" "}
                <span className="gradient-text">
                  moves business forward.
                </span>
              </h3>

              <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                We connect strategy, data, people, and technology to create
                scalable solutions that drive meaningful business outcomes.
              </p>
            </div>

            {/* Connected technology illustration */}
            <div className="relative mx-auto my-5 h-[290px] w-full max-w-[440px] sm:my-7 sm:h-[430px]">
              {/* Perspective grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-3 top-10 overflow-hidden"
              >
                <div className="absolute inset-0 [background-image:linear-gradient(rgba(56,189,248,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.07)_1px,transparent_1px)] [background-size:30px_30px] [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_75%,transparent)] [transform:perspective(350px)_rotateX(52deg)_scale(1.35)]" />
              </div>

              {/* Static connection lines */}
              <svg
                aria-hidden="true"
                viewBox="0 0 400 290"
                className="absolute inset-0 h-full w-full"
                fill="none"
              >
                <ellipse
                  cx="200"
                  cy="155"
                  rx="100"
                  ry="37"
                  stroke="rgba(34,211,238,0.16)"
                />
                <ellipse
                  cx="200"
                  cy="155"
                  rx="143"
                  ry="55"
                  stroke="rgba(34,211,238,0.10)"
                />

                <path
                  d="M78 75 C115 75 125 111 164 135"
                  stroke="rgba(34,211,238,0.65)"
                  strokeWidth="1.2"
                />
                <path
                  d="M322 67 C283 67 278 108 236 133"
                  stroke="rgba(34,211,238,0.65)"
                  strokeWidth="1.2"
                />
                <path
                  d="M90 226 C132 226 138 190 166 177"
                  stroke="rgba(34,211,238,0.55)"
                  strokeWidth="1.2"
                />
                <path
                  d="M310 226 C271 226 262 190 235 177"
                  stroke="rgba(34,211,238,0.55)"
                  strokeWidth="1.2"
                />

                <circle cx="78" cy="75" r="3" fill="#22d3ee" />
                <circle cx="322" cy="67" r="3" fill="#22d3ee" />
                <circle cx="90" cy="226" r="3" fill="#22d3ee" />
                <circle cx="310" cy="226" r="3" fill="#22d3ee" />
                <circle cx="164" cy="135" r="2.5" fill="#67e8f9" />
                <circle cx="236" cy="133" r="2.5" fill="#67e8f9" />
                <circle cx="166" cy="177" r="2.5" fill="#67e8f9" />
                <circle cx="235" cy="177" r="2.5" fill="#67e8f9" />
              </svg>

              {/* People node */}
              <div className="absolute left-0 top-[42px] z-10 flex items-center gap-2 sm:left-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#0b1729]">
                  <Users size={19} className="text-cyan-300" />
                </div>
                <span className="text-xs font-medium text-slate-300">
                  People
                </span>
              </div>

              {/* Data node */}
              <div className="absolute right-0 top-[35px] z-10 flex items-center gap-2 sm:right-1">
                <span className="text-xs font-medium text-slate-300">
                  Data
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#0b1729]">
                  <Database size={19} className="text-cyan-300" />
                </div>
              </div>

              {/* Strategy node */}
              <div className="absolute bottom-[30px] left-0 z-10 flex items-center gap-2 sm:left-1">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#0b1729]">
                  <FileText size={19} className="text-blue-300" />
                </div>
                <span className="text-xs font-medium text-slate-300">
                  Strategy
                </span>
              </div>

              {/* Technology node */}
              <div className="absolute bottom-[30px] right-0 z-10 flex items-center gap-2 sm:right-1">
                <span className="text-xs font-medium text-slate-300">
                  Technology
                </span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/20 bg-[#0b1729]">
                  <Settings2 size={19} className="text-cyan-300" />
                </div>
              </div>

              {/* Central platform */}
              <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="relative flex h-[100px] w-[112px] items-center justify-center sm:h-[115px] sm:w-[130px]">
                  <div
                    aria-hidden="true"
                    className="absolute inset-2 rounded-3xl bg-cyan-400/[0.09]"
                  />

                  <div className="absolute bottom-3 left-1/2 h-8 w-[110px] -translate-x-1/2 skew-y-[-20deg] rounded-md border border-cyan-400/50 bg-[#0c3452] sm:w-[125px]" />

                  <div className="absolute bottom-7 left-1/2 h-8 w-[110px] -translate-x-1/2 skew-y-[-20deg] rounded-md border border-cyan-300/60 bg-[#0c2340] sm:w-[125px]" />

                  <div className="relative z-10 flex h-[58px] w-[58px] items-center justify-center rounded-2xl border border-cyan-300/50 bg-[#0c1c35] shadow-[0_0_28px_rgba(34,211,238,0.10)] sm:h-[66px] sm:w-[66px]">
                    <Image
                      src="/logos/cloudmind-logo.png"
                      alt=""
                      aria-hidden="true"
                      width={48}
                      height={48}
                      className="h-10 w-10 object-contain sm:h-12 sm:w-12"
                    />
                  </div>
                </div>

                <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300 sm:text-xs">
                  System
                </span>
              </div>
            </div>

            {/* Business outcomes */}
            <div className="relative z-10 mt-auto grid grid-cols-3 border-t border-white/[0.09] pt-5">
              {outcomes.map((outcome, index) => {
                const Icon = outcome.icon;

                return (
                  <div
                    key={outcome.title}
                    className={`min-w-0 px-2 text-center sm:px-3 ${
                      index !== 0 ? "border-l border-white/[0.09]" : ""
                    }`}
                  >
                    <Icon
                      size={22}
                      aria-hidden="true"
                      className="mx-auto text-cyan-300"
                    />

                    <h4 className="mt-3 text-sm font-semibold text-white sm:text-base">
                      {outcome.title}
                    </h4>

                    <p className="mx-auto mt-2 max-w-[125px] text-xs leading-5 text-slate-500 sm:text-sm">
                      {outcome.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
