import dynamic from "next/dynamic";
import Link from "next/link";

const Base64AudioTool = dynamic(
  () => import("@/components/tools/dev-tools/base64/Base64AudioTool"),
);

export const metadata = {
  title: "Base64 to Audio Decoder – Convert Base64 to MP3/WAV | Tooloria",
  description:
    "Free online Base64 to Audio converter. Paste your Base64 string and play or download the decoded MP3 or WAV file. 100% browser-based, no upload needed.",
  keywords: [
    "base64 to audio",
    "base64 audio decoder",
    "decode base64 to mp3",
    "base64 audio player",
    "convert base64 to wav",
    "tooloria audio tools",
  ],
  openGraph: {
    title: "Base64 to Audio Decoder – Convert Base64 to MP3/WAV | Tooloria",
    description:
      "Paste a Base64 audio string and convert it back to playable MP3 or WAV audio. Instant conversion, browser-only.",
    url: "https://tooloria.org/dev-tools/base64-audio-decode",
    type: "website",
    siteName: "Tooloria",
  },
  alternates: {
    canonical: "https://tooloria.org/dev-tools/base64-audio-decode",
  },
};

export default function Page() {
  return (
    <main className="px-4 md:px-8 lg:px-16 py-10 max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="heading-xl text-primary">Base64 to Audio Decoder</h1>
        <p className="text-textMuted mt-2 text-lg">
          Convert a Base64-encoded audio string into a playable and downloadable audio file.
        </p>
      </header>

      <section>
        <Base64AudioTool />
      </section>

      <section className="mx-auto mt-10 space-y-6">
        <div>
          <h2 className="heading-lg text-primary">Related Tools</h2>
          <p className="text-textMuted text-lg">
            Need to convert audio to Base64? Try our{" "}
            <Link
              href="/dev-tools/base64-audio-encode"
              className="text-primary underline hover:animate-pulse transition"
            >
              Base64 Audio Encoder
            </Link>
            .
          </p>
          <p className="text-textMuted text-lg">
            Looking to decode Base64 text? Use our{" "}
            <Link
              href="/dev-tools/base64-text-decode"
              className="text-primary underline hover:animate-pulse transition"
            >
              Base64 Text Decoder
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="heading-lg text-primary mb-4">FAQs about Base64 Audio Decoder</h2>
        <details className="bg-muted p-4 rounded-xl mb-4">
          <summary className="cursor-pointer text-textMain font-medium">
            What is Base64 audio?
          </summary>
          <p className="mt-2 text-textMuted">
            Base64 audio is an audio file (like MP3 or WAV) encoded as a text string. It's used for embedding audio into HTML, JSON, or text-based formats.
          </p>
        </details>
        <details className="bg-muted p-4 rounded-xl mb-4">
          <summary className="cursor-pointer text-textMain font-medium">
            Can I decode Base64 to MP3 or WAV?
          </summary>
          <p className="mt-2 text-textMuted">
            Yes! This tool converts Base64 to a downloadable audio file in MP3 or WAV format, depending on the original encoding.
          </p>
        </details>
        <details className="bg-muted p-4 rounded-xl">
          <summary className="cursor-pointer text-textMain font-medium">
            Is it safe to use this tool?
          </summary>
          <p className="mt-2 text-textMuted">
            Absolutely. The conversion happens entirely in your browser. No files or data are uploaded to any server.
          </p>
        </details>
      </section>

      <footer className="mt-10 text-center text-textMuted text-sm">
        <p>Tooloria – Free developer tools, no data collection, fully open source.</p>
      </footer>
    </main>
  );
}
