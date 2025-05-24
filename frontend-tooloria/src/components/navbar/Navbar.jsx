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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-gray-900/70 shadow-lg text-textMain" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link
          href="/"
          className="text-xl font-bold text-primary tracking-tight flex items-center gap-2"
        >
            
              <img
                src="/tooloriaLogo.png"
                alt="Tooloria Logo"
                className="h-8 w-auto"
              />
              <span>Tooloria</span>
        </Link>

        <ul className="hidden md:flex gap-6  font-medium">
          <>
            {navLinks.map((link) => (
              <li key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="hover:text-textAccent transition-colors"
                >
                  {link.title}
                </Link>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-textAccent transition-all group-hover:w-full"></span>
              </li>
            ))}
          </>
          <ThemeToggle />
        </ul>

        <button
          className="md:hidden text-textMain"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <ul className="md:hidden px-4 py-10 pb-4 space-y-2 bg-bg backdrop-blur-lg  font-medium">
          <>
          <ThemeToggle />
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block py-2 hover:text-textAccent transition-colors"
                  onClick={() => setOpen(false)}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </>
        </ul>
      )}
    </header>
  );
}
