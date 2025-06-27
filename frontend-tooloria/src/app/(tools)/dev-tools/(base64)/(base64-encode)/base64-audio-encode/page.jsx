import dynamic from "next/dynamic";
import Link from "next/link";
import React from "react";

const Base64AudioTool = dynamic(
  () => import("@/components/tools/dev-tools/base64/Base64AudioTool"),
);

export const metadata = {
  title: "Audio to Base64 Tool | Tooloria",
  description:
    "Convert audio files to Base64 and back with our free online Base64 audio encoder and decoder. Supports MP3, WAV and more.",
  keywords: [
    "Audio Base64",
    "Base64 audio converter",
    "MP3 to Base64",
    "Decode Base64 audio",
    "Tooloria developer tools",
  ],
  openGraph: {
    title: "Audio to Base64 Tool | Tooloria",
    description:
      "Encode and decode audio files to Base64 format online. Free, secure, and easy to use.",
    url: "https://tooloria.org/dev-tools/base64-audio",
    siteName: "Tooloria",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="px-4 md:px-8 lg:px-16 py-10 max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="heading-xl text-primary">Audio to Base64 Encoder & Decoder</h1>
        <p className="text-textMuted mt-2 text-lg">
          Upload audio files like MP3 or WAV and convert them to Base64, or decode Base64 strings back into audio.
        </p>
      </header>

      <Base64AudioTool />

      <footer className="mx-auto mt-10 space-y-6">
       

        <section className="mt-12">
          <h2 className="heading-lg text-primary">FAQ: Audio & Base64</h2>
          <div className="mt-4 space-y-4">
            <details className="border border-border rounded-xl bg-muted p-4 group">
              <summary className="cursor-pointer text-textMain font-medium text-lg list-none group-open:mb-2">
                🎧 What is Base64-encoded audio?
              </summary>
              <p className="text-textMuted mt-2">
                Base64 encoding transforms binary audio files into plain-text strings. This is useful for embedding audio into HTML, JSON, or text-based formats that don't support binary files directly.
              </p>
            </details>

            <details className="border border-border rounded-xl bg-muted p-4 group">
              <summary className="cursor-pointer text-textMain font-medium text-lg list-none group-open:mb-2">
                🔄 Which audio formats are supported?
              </summary>
              <p className="text-textMuted mt-2">
                Most modern browsers support encoding/decoding of common audio formats like MP3, WAV, OGG, and AAC. The tool accepts any file type supported by your browser's FileReader API.
              </p>
            </details>

            <details className="border border-border rounded-xl bg-muted p-4 group">
              <summary className="cursor-pointer text-textMain font-medium text-lg list-none group-open:mb-2">
                📦 Are there size limitations?
              </summary>
              <p className="text-textMuted mt-2">
                Yes. Since Base64 increases the size by ~33%, large audio files may result in very long strings. For best performance, keep files under 5–10 MB, especially on slower devices or browsers.
              </p>
            </details>
          </div>
        </section>

        <div>
          <h2 className="heading-lg text-primary">Want to try another tool?</h2>
          <p className="text-textMuted text-lg">
            Use our{" "}
            <Link
              href="/dev-tools/base64-audio-decode"
              className="text-primary underline hover:animate-pulse transition"
            >
              Base64 audio decoder
            </Link>{" "}
            for base64 to audio conversion.
          </p>
          <p className="text-textMuted text-lg">
            Use our{" "}
            <Link
              href="/dev-tools/base64-text-encode"
              className="text-primary underline hover:animate-pulse transition"
            >
              Base64 text encoder
            </Link>{" "}
            for text conversion.
          </p>
        </div>
      </footer>
    </main>
  );
}
