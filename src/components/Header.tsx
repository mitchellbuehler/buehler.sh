"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-base/80 backdrop-blur-xl border-b border-base-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display text-2xl text-text-primary tracking-tight"
        >
          {siteConfig.name}
          <span className="text-accent">.</span>
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-body hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`block h-px w-6 bg-text-body transition-all ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-body transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-text-body transition-all ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-base-border bg-base/95 backdrop-blur-xl">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-text-body hover:text-accent transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
