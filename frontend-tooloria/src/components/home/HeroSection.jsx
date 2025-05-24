import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Tooloria — All-in-One Online Toolbox",
  description: "Convert, format, count, and more — Tooloria helps you get things done fast.",
  openGraph: {
    title: "Tooloria",
    description: "Your All-in-One Online Toolbox",
    url: "https://tooloria.org",
    siteName: "Tooloria",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tooloria Open Graph Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tooloria",
    description: "Convert, format, count, and more — all in one place.",
    creator: "@yourtwitterhandle",
  },
};

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center p-10 pt-16 text-white animate-fade-in bg-animated-gradient">
      <h1 className="heading-xl">Tooloria — Your All-in-One Online Toolbox</h1>
      <p className="lead mt-4 max-w-xl text-center">
        Convert, format, count, and more — all in one place. Tooloria helps you
        get things done fast.
      </p>
      <Link href="/tools" className="accent mt-6 underline underline-offset-4">
        Explore Tools
      </Link>
    </section>
  );
}
