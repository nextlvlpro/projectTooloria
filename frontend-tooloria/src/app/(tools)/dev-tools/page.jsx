import React from "react";
import DevToolsGrid from "@/components/tools/dev-tools/home/DevToolsGrid";
export const metadata = {
  title: "Developer Tools",
  description:
    "Explore a collection of free online developer tools like Base64 Encoder, Regex Tester, and more.",
  keywords: [
    "developer tools",
    "base64 encoder",
    "regex tester",
    "free tools for developers",
    "Tooloria",
  ],
  openGraph: {
    title: "Developer Tools | Tooloria",
    description:
      "Explore a collection of free online developer tools like Base64 Encoder, Regex Tester, and more.",
    url: "https://tooloria.org/dev-tools",
    type: "website",
    images: [
      {
        url: "https://tooloria.org/tooloriaLogo.png", // You can add a placeholder in /public for now
        width: 1200,
        height: 630,
        alt: "Tooloria Dev Tools",
      },
    ],
  },
};

export default function page() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Moving Gradient Background */}
      <section className="h-[50vh] relative">
        <div className="absolute inset-0 -z-20 bg-animated-gradient"></div>

        {/* Blur Overlay */}
        <div className="absolute inset-0 -z-10 blur-lg bg-bg/30 dark:bg-bg/80" />

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 py-24 space-y-6 text-center text-white ">
          <h1 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Developer Tools
          </h1>
          <p className="max-w-2xl mx-auto lead text-white/90">
            Handy, no-setup tools for developers. Encode, decode, test, format —
            all in one place.
          </p>
        </section>
      </section>
      <section>
        <DevToolsGrid />
      </section>       
      
    </main>
  );
}
