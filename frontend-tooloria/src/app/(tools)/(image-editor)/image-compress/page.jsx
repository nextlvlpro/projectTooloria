import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/components/Loading";
const ImageCompress = dynamic(() => import("@/components/tools/image-tools/image-compress/ImageCompress"), { suspense: true });

export const metadata = {
  metadataBase: new URL("https://tooloria.org"),
  title: "Image Compressor | Tooloria",
  description: "Compress images quickly and easily online with Tooloria. Reduce file size without losing quality.",
  keywords: [
    "image compressor",
    "compress image online",
    "free image compression",
    "reduce image file size",
    "Tooloria image tools",
    "online image optimizer"
  ],
  openGraph: {
    title: "Image Compressor | Tooloria",
    description: "Compress images quickly and easily online with Tooloria. Reduce file size without losing quality.",
    url: "https://tooloria.org/tooloriaLogo.png",
    siteName: "Tooloria",
    images: [
      {
        url: "https://tooloria.org/tooloriaLogo.png", // 🔁 Use custom OG image, not logo
        width: 1200,
        height: 630,
        alt: "Tooloria Image Compressor",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Image Compressor | Tooloria",
    description: "Compress images quickly and easily online with Tooloria. Reduce file size without losing quality.",
    images: ["https://tooloria.org/tooloriaLogo.png"],
  },
};


export default function Page() {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-bg rounded-md shadow-md">
      <h1 className="text-4xl font-extrabold mb-6 text-textMain">
        Image Compressor
      </h1>
      <p className="mb-8 text-textMuted max-w-xl">
        Compress your images quickly and easily without losing quality. Adjust
        the settings as needed and download the optimized image.
      </p>
      <div className="bg-bg/70 rounded-lg shadow-inner">
      <Suspense fallback={<Loading />}>
        <ImageCompress />
      </Suspense>
      </div>
    </main>
  );
}
