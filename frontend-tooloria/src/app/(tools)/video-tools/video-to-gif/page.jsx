
import dynamic from "next/dynamic";
import Link from "next/link";
const VideoToGifTool = dynamic(
  () => import("@/components/tools/video-tools/VideoToGifTool"),
);


export const metadata = {
  title: "Video to GIF Converter | Tooloria",
  description:
    "Convert MP4, MOV, or WebM video files to animated GIFs in your browser using FFmpeg and WebAssembly. No upload required.",
  keywords: [
    "video to gif",
    "mp4 to gif",
    "gif converter",
    "ffmpeg wasm",
    "browser video converter",
    "Tooloria gif tool",
  ],
  openGraph: {
    title: "Video to GIF Converter | Tooloria",
    description:
      "Convert video files like MP4 or MOV into GIFs directly in your browser using FFmpeg WebAssembly.",
    url: "https://tooloria.org/dev-tools/video-to-gif",
    siteName: "Tooloria",
    images: [
      {
        url: "https://tooloria.org/tooloriaLogo.png",
        width: 1200,
        height: 630,
        alt: " Video to GIF Converter",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return (
    <main className="px-4 md:px-8 lg:px-16 py-10 max-w-4xl mx-auto">
      <header className="mb-8 text-center">
        <h1 className="heading-xl text-primary">Video to GIF Converter</h1>
        <p className="text-textMuted mt-2 text-lg">
          Convert your video clips into high-quality GIFs right in your browser.
          No uploads. Private and fast.
        </p>
      </header>

      <VideoToGifTool />

      <section className="mt-12">
        <h2 className="heading-lg text-primary mb-4">Frequently Asked Questions</h2>
        <details className="mb-4 border rounded-lg p-4">
          <summary className="cursor-pointer font-semibold text-lg text-primary">Is my video uploaded to a server?</summary>
          <p className="mt-2 text-textMuted">
            No. All conversion is done locally in your browser using WebAssembly.
            Your files never leave your device.
          </p>
        </details>
        <details className="mb-4 border rounded-lg p-4">
          <summary className="cursor-pointer font-semibold text-lg text-primary">What formats are supported?</summary>
          <p className="mt-2 text-textMuted">
            MP4, MOV, and WebM formats are supported. The output is a standard animated GIF.
          </p>
        </details>
        {/* <details className="mb-4 border rounded-lg p-4">
          <summary className="cursor-pointer font-semibold text-lg text-primary">Can I control the GIF size and duration?</summary>
          <p className="mt-2 text-textMuted">
            Yes! You can adjust scale, duration, and frame rate before converting the video to a GIF.
          </p>
        </details> */}
      </section>

      <footer className="mt-10 text-center text-textMuted space-y-4">
        <p>
          Try our{" "}
          <Link
            href="/dev-tools/base64-audio-encode"
            className="text-primary underline hover:animate-pulse transition"
          >
            Base64 Audio Encoder
          </Link>{" "}
          or{" "}
          <Link
            href="/dev-tools/base64-text-decode"
            className="text-primary underline hover:animate-pulse transition"
          >
            Base64 Text Decoder
          </Link>{" "}
          tools.
        </p>
      </footer>
    </main>
  );
}
