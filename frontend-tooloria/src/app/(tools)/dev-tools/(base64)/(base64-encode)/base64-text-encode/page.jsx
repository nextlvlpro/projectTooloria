import Base64TextTool from "@/components/tools/dev-tools/base64/base64-text-tool/Base64TextTool";
import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Base64 Encode Tool | Tooloria",
  description:
    "Easily convert text to Base64 encoding with our free online Base64 encoder. Fast, simple, and privacy-friendly.",
  keywords: [
    "Base64 encoder",
    "Text to Base64",
    "Encode to Base64",
    "Online Base64 tool",
    "Tooloria developer tools",
  ],
  openGraph: {
    title: "Base64 Encode Tool | Tooloria",
    description:
      "Convert your text into Base64 format instantly. Free, secure, and easy to use.",
    url: "https://tooloria.org/dev-tools/base64-text-encode",
    siteName: "Tooloria",
    type: "website",
  },
};


export default function page() {
  return (
    <main className="px-4 md:px-8 lg:px-16 py-10 max-w-4xl mx-auto">
    <header className="mb-8 text-center">
      <h1 className="heading-xl text-primary">Base64 Encode Tool</h1>
      <p className="text-textMuted mt-2 text-lg">
        Paste your text below and instantly encode it into Base64 format.
      </p>
    </header>
    <Base64TextTool />
    <footer className="mx-auto mt-10">
     <h1 className="heading-lg text-primary">Want to decode Base64 String?</h1>
     <p className="text-textMuted mt-2 text-lg">Use our <Link href="/dev-tools/base64-text-decode" className="text-primary underline hover:animate-pulse transition">Base64 decoder</Link> to decode Base64 strings.</p>
    </footer>
  </main>
  )
}
