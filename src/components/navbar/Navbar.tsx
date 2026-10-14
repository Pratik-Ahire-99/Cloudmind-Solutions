
"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/ui/BrandLogo";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Solutions", href: "#solutions" },
  { name: "Work", href: "#work" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const mobileMenuId = useId();

  useEffect(() => {
    if (!mobileOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  function closeMobileMenu() {
    setMobileOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        aria-label="Main navigation"
        className="mx-auto max-w-7xl"
      >
        {/* Solid navbar background */}
        <div className="relative rounded-2xl border border-white/10 bg-[#080D1D] px-3 py-3 shadow-2xl shadow-black/40 sm:px-4">
          <div className="flex min-h-10 items-center justify-between gap-3">
            {/* Logo */}
            

{/* Logo and company name */}
<BrandLogo logoSize={44} />



            {/* Desktop navigation */}
            <div className="hidden items-center gap-6 md:flex lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="rounded-md text-sm font-medium text-slate-300 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-4 focus-visible:ring-offset-[#080D1D]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <Link
              href="#contact"
              className="group hidden min-h-11 shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D1D] md:inline-flex"
            >
              Let's Talk

              <ArrowUpRight
                aria-hidden="true"
                size={16}
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              onClick={() => setMobileOpen((open) => !open)}
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 md:hidden"
            >
              {mobileOpen ? (
                <X aria-hidden="true" size={20} />
              ) : (
                <Menu aria-hidden="true" size={20} />
              )}
            </button>
          </div>

          {/* Mobile navigation */}
          <div
            id={mobileMenuId}
            hidden={!mobileOpen}
            className="mt-3 border-t border-white/10 pt-3 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="flex min-h-11 items-center rounded-xl px-4 py-3 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-cyan-300"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-2 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080D1D]"
              >
                Let's Talk
                <ArrowUpRight aria-hidden="true" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
