//text decode
import Base64TextTool from "@/components/tools/dev-tools/base64/base64-text-tool/Base64TextTool";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Base64 Decode Tool | Tooloria",
  description:
    "Easily convert base64 to text with our free online Base64 decoder. Fast, simple, and privacy-friendly.",
  keywords: [
    "Base64 decoder",
    "Base64 to text",
    "Decode Base64",
    "Online Base64 tool",
    "Tooloria developer tools",
  ],
  openGraph: {
    title: "Base64 Decode Tool | Tooloria",
    description:
      "Convert your Base64 format instantly. Free, secure, and easy to use.",
    url: "https://tooloria.org/dev-tools/base64-text-decode",
    siteName: "Tooloria",
    type: "website",
  },
};


export default function page() {
  return (
    <main className="px-4 md:px-8 lg:px-16 py-10 max-w-4xl mx-auto">
    <header className="mb-8 text-center">
      <h1 className="heading-xl text-primary">Base64 Decode Tool</h1>
      <p className="text-textMuted mt-2 text-lg">
        Paste your Base64 text below and instantly decode it into text format.
      </p>
    </header>
    <Base64TextTool/>
    <footer className="mx-auto mt-10">
     <h1 className="heading-lg text-primary">Want to encode text to Base64?</h1>
     <p className="text-textMuted mt-2 text-lg">Use our <Link href="/dev-tools/base64-text-encode" className="text-primary underline hover:animate-pulse transition">Base64 encoder</Link> to encode text to Base64 strings.</p>
    </footer>
  </main>
  )
}
