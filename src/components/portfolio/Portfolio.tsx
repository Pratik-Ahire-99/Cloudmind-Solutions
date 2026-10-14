"use client";

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
  return (
    <section
      id="work"
      className="section-padding relative overflow-hidden bg-[#050816]"
    >
      <div className="container-custom">
        {/* Heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
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
                Featured work
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Ideas turned into
              <span className="gradient-text"> real products.</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md text-sm leading-6 text-slate-500"
          >
            A selection of technology concepts demonstrating how CloudMind
            combines engineering, intelligence, and thoughtful design.
          </motion.p>
        </div>

        {/* Project grid */}
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.div
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group"
              >
                <div
                  className={`relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a1020] ${
                    project.size === "large"
                      ? "min-h-[440px]"
                      : "min-h-[360px]"
                  }`}
                >
                  {/* Abstract project visual */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 grid-background opacity-30" />

                    <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[90px] transition-all duration-700 group-hover:bg-cyan-400/15" />

                    {/* Visual panel */}
                    <div className="absolute left-[12%] right-[12%] top-[14%] h-[45%] overflow-hidden rounded-2xl border border-white/10 bg-slate-950/60 shadow-2xl backdrop-blur-xl transition-transform duration-700 group-hover:scale-[1.02]">
                      <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
                        <span className="h-2 w-2 rounded-full bg-white/10" />
                        <span className="h-2 w-2 rounded-full bg-white/10" />
                        <span className="h-2 w-2 rounded-full bg-white/10" />

                        <span className="ml-auto text-[8px] text-slate-700">
                          CLOUDMIND / PROJECT
                        </span>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center justify-between">
                          <div className="h-3 w-24 rounded-full bg-white/10" />
                          <div className="h-6 w-6 rounded-lg bg-cyan-400/10" />
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-2">
                          <div className="h-16 rounded-lg bg-white/[0.03]" />
                          <div className="h-16 rounded-lg bg-white/[0.03]" />
                          <div className="h-16 rounded-lg bg-white/[0.03]" />
                        </div>

                        <div className="mt-3 h-2 w-2/3 rounded-full bg-white/5" />

                        <div className="mt-2 h-2 w-1/2 rounded-full bg-white/5" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                    <div className="flex items-end justify-between gap-5">
                      <div>
                        <div className="mb-3 flex items-center gap-3">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan-400">
                            {project.category}
                          </span>

                          <span className="text-[10px] text-slate-700">
                            / {project.number}
                          </span>
                        </div>

                        <h3 className="text-2xl font-bold text-white sm:text-3xl">
                          {project.title}
                        </h3>

                        <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                          {project.description}
                        </p>

                        <div className="mt-5 flex flex-wrap gap-2">
                          {project.technologies.map((technology) => (
                            <span
                              key={technology}
                              className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[10px] text-slate-500"
                            >
                              {technology}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="hidden shrink-0 sm:flex">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10">
                          <ArrowUpRight
                            size={18}
                            className="text-white transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project icon */}
                  <div className="absolute right-7 top-7 z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/20 backdrop-blur-xl">
                    <Icon size={19} className="text-cyan-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            Have a project in mind?

            <span className="text-cyan-400">Let's talk</span>

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}