import dynamic from "next/dynamic";
import Link from "next/link";

const Base64AudioTool = dynamic(
  () => import("@/components/tools/dev-tools/base64/Base64AudioTool"),
);

export const metadata = {
  title: "Base64 to Audio Decoder | Tooloria",
  description:
    "Paste a Base64 audio string and convert it back to playable audio. Supports MP3 and WAV formats.",
};

export default function Page() {
  return (
    <main className="px-4 md:px-8 lg:px-16 py-10 max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="heading-xl text-primary">Base64 to Audio Decoder</h1>
        <p className="text-textMuted mt-2 text-lg">
          Paste your Base64 audio string and play or download the result.
        </p>
      </header>
      <Base64AudioTool />
      <footer className="mx-auto mt-10 space-y-6">
      <div>
          <h2 className="heading-lg text-primary">Want to try another tool?</h2>
          <p className="text-textMuted text-lg">
            Use our{" "}
            <Link
              href="/dev-tools/base64-audio-encode"
              className="text-primary underline hover:animate-pulse transition"
            >
              Base64 audio encoder
            </Link>{" "}
            for audio to base64 conversion.
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
