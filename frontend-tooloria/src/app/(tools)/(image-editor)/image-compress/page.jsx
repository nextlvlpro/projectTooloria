import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/components/Loading";
import Link from "next/link";

const ImageCompress = dynamic(
  () => import("@/components/tools/image-tools/image-compress/ImageCompress"),
  { suspense: true }
);

export const metadata = {
  metadataBase: new URL("https://tooloria.org"),
  title: "Image Compressor | Tooloria — Free Online Image Compression Tool",
  description:
    "Compress images online quickly and easily with Tooloria’s free image compressor. Reduce file size without losing quality to optimize your website and save bandwidth.",
  keywords: [
    "image compressor",
    "compress image online",
    "free image compression",
    "reduce image file size",
    "Tooloria image tools",
    "online image optimizer",
    "optimize images for web",
    "image compression tool",
  ],
  openGraph: {
    title: "Image Compressor | Tooloria",
    description:
      "Compress images quickly and easily online with Tooloria. Reduce file size without losing quality.",
    url: "https://tooloria.org/image-compressor",
    siteName: "Tooloria",
    images: [
      {
        url: "https://tooloria.org/tooloriaLogo.png", // Prefer a custom OG image specific to this tool
        width: 1200,
        height: 630,
        alt: "Tooloria Image Compressor Tool",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Compressor | Tooloria",
    description:
      "Compress images quickly and easily online with Tooloria. Reduce file size without losing quality.",
    images: ["https://tooloria.org/tooloriaLogo.png"],
  },
};

export default function Page() {
  return (
    <main
      className="max-w-3xl mx-auto p-6 bg-bg rounded-md shadow-md"
      role="main"
      aria-labelledby="page-title"
    >
      <h1 id="page-title" className="text-3xl font-extrabold mb-6 text-primary text-center">
        Image Compressor — Free Online Image Compression Tool
      </h1>
      <p className="mb-8 text-textMuted  text-center">
        Compress your images quickly and easily without losing quality. Adjust compression settings as needed and download optimized images ready for web or sharing.
      </p>
      <section
        aria-label="Image compression tool"
        className="bg-bg/70 rounded-lg shadow-inner p-4"
      >
        <Suspense fallback={<Loading />}>
          <ImageCompress />
        </Suspense>
      </section>

      <section className="text-center my-12">
          <h3 className="text-2xl font-semibold mb-2">Want to generate QR codes securely?</h3>
          <p className="mb-4 max-w-xl mx-auto text-textSecondary">
            Click the button below to generate QR codes. we do not store your images. everything is done on your browser.
          </p>
          <Link href="/qr-code-generator">
            <div className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition font-medium">
              Go to QR Code Generator Tool
            </div>
          </Link>
        </section>
    </main>
  );
}
