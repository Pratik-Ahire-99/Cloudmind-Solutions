
"use client";

import BrandLogo from "@/components/ui/BrandLogo";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  ArrowUp,
  Globe,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#030611]">
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[600px] max-w-full -translate-x-1/2 rounded-full bg-blue-600/5 blur-[120px]"
      />

      <div className="container-custom relative z-10">
        {/* Call to action */}
        <div className="border-b border-white/10 py-16 md:py-20">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-blue-400">
                Ready when you are
              </p>

              <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                Let's build the
                <br />
                <span className="gradient-text">
                  future together.
                </span>
              </h2>
            </div>

            <Link
              href="#contact"
              className="group inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-white px-6 py-3.5 font-semibold text-slate-950 transition-colors hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#030611]"
            >
              Start a Project

              <ArrowUpRight
                aria-hidden="true"
                size={18}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>
          </div>
        </div>

        {/* Main footer columns */}
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {/* Brand */}
          <div>
            <BrandLogo logoSize={52} />

            <p className="mt-6 max-w-md text-sm leading-7 text-slate-400">
              Intelligent technology solutions for businesses
              ready to innovate, scale, and build what comes next.
            </p>

            <a
              href="mailto:hello@cloudmindsolutions.com"
              className="mt-6 inline-flex items-center gap-2 break-all text-sm text-slate-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Mail
                aria-hidden="true"
                size={16}
                className="shrink-0"
              />
              hello@cloudmindsolutions.com
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Explore
            </h3>

            <div className="mt-5 space-y-3">
              <Link
                href="#about"
                className="block text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                About
              </Link>

              <Link
                href="#services"
                className="block text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Services
              </Link>

              <Link
                href="#solutions"
                className="block text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Solutions
              </Link>

              <Link
                href="#work"
                className="block text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Our Work
              </Link>

              <Link
                href="#contact"
                className="block text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>

            <div className="mt-5 space-y-3">
              <p className="text-sm text-slate-400">
                AI & Machine Learning
              </p>
              <p className="text-sm text-slate-400">
                Software Development
              </p>
              <p className="text-sm text-slate-400">
                Web & App Development
              </p>
              <p className="text-sm text-slate-400">
                Cloud Solutions
              </p>
              <p className="text-sm text-slate-400">
                Data & Analytics
              </p>
              <p className="text-sm text-slate-400">
                Automation
              </p>
            </div>
          </div>

          {/* Company information */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              CloudMind Solutions
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-400">
              Building intelligent software, modern digital
              experiences, and scalable technology solutions
              for growing businesses.
            </p>

            <Link
              href="#contact"
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              Get in touch
              <ArrowUpRight aria-hidden="true" size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col gap-5 border-t border-white/10 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-slate-400 sm:text-sm">
            © {new Date().getFullYear()} CloudMind Solutions.
            All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {/* Replace these placeholder links with your real profiles */}
            <a
              href="#"
              aria-label="LinkedIn profile — update link"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-slate-300 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              in
            </a>

            <a
              href="#"
              aria-label="GitHub profile — update link"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs font-bold text-slate-300 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              GH
            </a>

            <a
              href="/"
              aria-label="CloudMind Solutions website"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Globe aria-hidden="true" size={16} />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-slate-300 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <ArrowUp aria-hidden="true" size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
