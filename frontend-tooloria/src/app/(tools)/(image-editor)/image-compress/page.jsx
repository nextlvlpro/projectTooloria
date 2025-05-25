import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loading from "@/components/Loading";
const ImageCompress = dynamic(() => import("@/components/tools/image-tools/image-compress/ImageCompress"), { suspense: true });

export const metadata = {
  title: "Image Compressor - Tooloria",
  description: "Compress images easily online with Tooloria's Image Compressor.",
  openGraph: {
    title: "Image Compressor - Tooloria",
    description: "Compress images easily online with Tooloria's Image Compressor.",
    url: "https://tooloria.org/image-compressor",
    images: [
      {
        url: "/og-image-image-compressor.png", // your combined OG image with logo
        width: 1200,
        height: 630,
        alt: "Tooloria Image Compressor",
      },
    ],
    siteName: "Tooloria",
    type: "website",
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
