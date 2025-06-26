import dynamic from "next/dynamic";
import Link from "next/link";

// ✅ Dynamically import the client-side QR code generator
const QRCodeGenerator = dynamic(
  () => import("@/components/tools/qr-code-generator/QrCodeGeneretor"),
  { loading: () => <div>Loading...</div> }
);

// ✅ SEO metadata via generateMetadata
export async function generateMetadata() {
  return {
    title: "QR Code Generator | Tooloria",
    description:
      "Generate QR codes for links, text, and more using Tooloria's free QR code generator.",
    keywords: [
      "QR code generator",
      "Tooloria QR",
      "create QR codes",
      "free QR code",
      "qr code generator tool",
      "qr code generator online",
      "best qr code generator",
      "beautiful qr code generator",
    ],
    openGraph: {
      title: "QR Code Generator | Tooloria",
      description: "Generate QR codes instantly with Tooloria.",
      url: "https://tooloria.org/qr-code-generator",
      siteName: "Tooloria",
      images: [
        {
          url: "https://tooloria.org/tooloriaLogo.png", // ✅ use a real OG image
          width: 1200,
          height: 630,
          alt: "Tooloria QR Code Generator",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "QR Code Generator | Tooloria",
      description: "Generate QR codes instantly with Tooloria.",
      images: ["https://tooloria.org/tooloriaLogo.png"],
    },
  };
}

// ✅ Page component
export default function QRCodePage() {
  return (
    <main className="py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Free QR Code Generator
      </h1>
      <p className="text-center text-textMuted max-w-xl">
        Enter a link, message, or any text to generate a QR code instantly.
      </p>
      <QRCodeGenerator />
      <section className="text-center my-12">
          <h3 className="text-2xl font-semibold mb-2">Want to compress images securely?</h3>
          <p className="mb-4 max-w-xl mx-auto text-textSecondary">
            Click the button below to compress your images. we do not store your images. everything is done on your browser.
          </p>
          <Link href="/image-compress">
            <div className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:bg-primary/90 transition font-medium">
              Go to Image Compressor Tool
            </div>
          </Link>
        </section>
    </main>
  );
}
