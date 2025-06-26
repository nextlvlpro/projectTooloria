"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";
const ThemeToggle = dynamic(() => import("../theme/ThemeToggle"), {
  ssr: false,
});

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b border-muted bg-bg/80 shadow-md"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl tracking-tight hover:opacity-90 transition rounded-md p-2 pr-4 shadow-md bg-bg"
        >
          <img
            src="/tooloriaLogo.png"
            alt="Tooloria Logo"
            className="h-8 w-auto"
          />
          <span className="bg-gradient-to-r from-purple-800 to-blue-700 bg-clip-text text-transparent">
            Tooloria
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 text-base font-medium">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative text-textMain hover:text-textAccent transition-colors group"
              >
                {link.title}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 group-hover:w-full bg-textAccent transition-all"></span>
              </Link>
            </li>
          ))}
          <ThemeToggle />
        </ul>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-textMain"
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden bg-bg/90 backdrop-blur-lg border-t border-muted px-4 py-6 space-y-3 text-base font-medium shadow-lg">
          <ThemeToggle />
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-2 rounded hover:bg-muted hover:text-textAccent transition"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
