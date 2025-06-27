import Base64TextTool from "@/components/tools/dev-tools/base64/Base64TextTool";
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

export default function Page() {
  return (
    <main className="px-4 md:px-8 lg:px-16 py-10 max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="heading-xl text-primary">Text to Base64 Encoder</h1>
        <p className="text-textMuted mt-2 text-lg">
          Paste your text below and instantly encode it into Base64 format.
        </p>
      </header>

      <Base64TextTool />

      <footer className="mx-auto mt-10 space-y-6">
        <div>
          <h2 className="heading-lg text-primary">Want to decode a Base64 string?</h2>
          <p className="text-textMuted mt-2 text-lg">
            Use our{" "}
            <Link
              href="/dev-tools/base64-text-decode"
              className="text-primary underline hover:animate-pulse transition"
            >
              Base64 decoder
            </Link>{" "}
            to decode Base64 strings.
          </p>
        </div>

        <section className="mt-12">
          <h2 className="heading-md text-primary">FAQ: Base64 Encoding Options</h2>
          <div className="mt-4 space-y-4">
            <details className="border border-border rounded-xl bg-muted p-4 group">
              <summary className="cursor-pointer text-textMain font-medium text-lg list-none group-open:mb-2">
                🔒 What is URL-safe Base64?
              </summary>
              <p className="text-textMuted mt-2">
                Standard Base64 encoding uses characters like <code>+</code>, <code>/</code>, and <code>=</code>,
                which may cause issues in URLs or file names. URL-safe Base64 replaces <code>+</code> with <code>-</code> and <code>/</code> with <code>_</code>, and omits padding. This makes the encoded string safe to use in URLs and filenames.
              </p>
            </details>

            <details className="border border-border rounded-xl bg-muted p-4 group">
              <summary className="cursor-pointer text-textMain font-medium text-lg list-none group-open:mb-2">
                📏 What does "Line Breaks" mean?
              </summary>
              <p className="text-textMuted mt-2">
                By default, Base64 is encoded in one long line. Enabling line breaks will insert a newline character every 76 characters, following MIME format. This is useful for email content, PEM certificates, or other text-based formats that expect line wrapping.
              </p>
            </details>
          </div>
        </section>
      </footer>
    </main>
  );
}
