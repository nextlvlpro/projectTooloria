"use client";

import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ImageToolsLanding() {
  return (
    <main className="px-6 py-16 max-w-4xl mx-auto font-popi text-text">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-6 text-primary"
      >
        Resize & Compress Images for Forms
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg sm:text-xl mb-8 text-subtle"
      >
        Tooloria's smart image tool helps you quickly resize and compress
        images for CSC, LMK, PAN, Passport, and other official forms —
        effortlessly and for free.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="bg-surface border border-border rounded-2xl p-6 shadow-sm space-y-3"
      >
        <Feature text="✨ Predefined sizes: 213×213, 350×350, 150×150 & more" />
        <Feature text="🎯 Compress to 20 KB, 100 KB, or custom sizes" />
        <Feature text="🖼️ No cropping or background removal required" />
        <Feature text="⚡ Fast, Free & Works Offline (PWA Ready)" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="mt-10 flex items-center justify-center"
      >
        <Button
          size="lg"
          variant="primary"
        >
          <Link href="/image-tools/resize-compress">
            ➜ Go to Resize & Compress Tool
          </Link>
          
        </Button>
      </motion.div>
    </main>
  );
}

function Feature({ text }) {
  return (
    <div className="flex items-start gap-2 text-base text-text">
      <span className="text-accent text-lg leading-6">•</span>
      <p>{text}</p>
    </div>
  );
}
