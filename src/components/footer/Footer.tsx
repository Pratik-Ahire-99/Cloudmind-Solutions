
"use client";

import { useCallback } from "react";
import BrandLogo from "@/components/ui/BrandLogo";
import Link from "next/link";
import {
  ArrowUp,
  ArrowUpRight,
  Globe,
  Mail,
} from "lucide-react";

const exploreLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Our Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Digital Transformation",
  "Data Engineering",
  "Salesforce Solutions",
  "IT Solutions and Staffing",
  "Application Managed Services",
  "Enterprise Resource Planning",
];

export default function Footer() {
  const scrollToTop = useCallback(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  return (
    <footer className="relative isolate overflow-hidden border-t border-white/10 bg-[#030611]">
      {/* Lightweight background decoration */}
      <div
        aria-hidden="true"
        className="footer-glow pointer-events-none absolute left-1/2 top-0 h-48 w-[min(100%,600px)] -translate-x-1/2 rounded-full bg-blue-600/[0.06] sm:h-64"
      />

      <div className="container-custom relative z-10">
        {/* Call to action */}
        <div className="border-b border-white/10 py-12 sm:py-16 md:py-20">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end md:gap-8">
            <div className="max-w-2xl">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-blue-400 sm:text-sm">
                Ready when you are
              </p>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
                Let&apos;s build the
                <br />
                <span className="gradient-text">
                  future together.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                From digital transformation to enterprise solutions,
                let&apos;s find the right technology approach for your
                business.
              </p>
            </div>

            <Link
              href="#contact"
              className="group inline-flex min-h-12 w-fit items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition-colors duration-200 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 motion-reduce:transition-none"
            >
              Start a Project
              <ArrowUpRight
                aria-hidden="true"
                size={18}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>

        {/* Main footer columns */}
        <div className="grid gap-10 py-10 sm:grid-cols-2 sm:gap-12 sm:py-14 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div className="min-w-0">
            <BrandLogo logoSize={52} />

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:mt-6">
              Your technology partner for digital transformation,
              data engineering, Salesforce solutions, and scalable
              business technology.
            </p>

            <a
              href="mailto:hello@cloudmindsolutions.com"
              className="mt-5 inline-flex min-h-11 max-w-full items-center gap-2 text-sm leading-6 text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:mt-6"
            >
              <Mail
                aria-hidden="true"
                size={16}
                className="shrink-0"
              />
              <span className="break-all">
                hello@cloudmindsolutions.com
              </span>
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {exploreLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-8 items-center text-sm text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Updated services */}
          <nav aria-label="Our services">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="inline-flex min-h-6 items-center text-sm leading-6 text-slate-400 transition-colors duration-200 hover:text-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company information */}
          <div className="min-w-0">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              CloudMind Solutions
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              We help businesses plan their digital transformation,
              connect systems, strengthen IT capabilities, and build
              a foundation for sustainable growth.
            </p>

            <Link
              href="#contact"
              className="mt-5 inline-flex min-h-10 items-center gap-2 text-sm font-medium text-cyan-300 transition-colors duration-200 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Get in touch
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between sm:py-7">
          <p className="text-xs leading-6 text-slate-400 sm:text-sm">
            © {new Date().getFullYear()} CloudMind Solutions.
            All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {/* Replace with your official company profiles when available */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-slate-300 transition-colors duration-200 hover:border-white/25 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              in
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-slate-300 transition-colors duration-200 hover:border-white/25 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              GH
            </a>

            <Link
              href="/"
              aria-label="CloudMind Solutions homepage"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors duration-200 hover:border-white/25 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <Globe aria-hidden="true" size={16} />
            </Link>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-1 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors duration-200 hover:border-white/25 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              <ArrowUp aria-hidden="true" size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
