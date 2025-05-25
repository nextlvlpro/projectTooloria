import dynamic from "next/dynamic";

// ✅ Dynamically import the client-side QR code generator
const QRCodeGenerator = dynamic(() => import("@/components/tools/qr-code-generator/QrCodeGeneretor"), {
  loading: () => <div>Loading...</div>,
});

// ✅ SEO metadata
export const metadata = {
  title: "QR Code Generator | Tooloria",
  description:
    "Generate QR codes for links, text, and more using Tooloria's free QR code generator.",
  keywords: [
    "QR code generator",
    "Tooloria QR",
    "create QR codes",
    "free QR code",
    "qr code generator",
    "qr code generator tool",
    "qr code generator online",
    "qr code generator tool",
    "qr code generator tool online",
    "qr code generator tool online free",
    "best qr code generator",
    "best qr code generator tool",
    "best qr code generator online",
    "best qr code generator tool online",
    "best qr code generator tool online free",
    "best qr code generator tool online free qr code",
    "beutiful qr code generator",
  ],
  openGraph: {
    title: "QR Code Generator | Tooloria",
    description: "Generate QR codes instantly with Tooloria.",
    url: "https://tooloria.org/qr-code",
    siteName: "Tooloria",
    images: [
      {
        url: "https://tooloria.org/tooloriaLogo.png", // replace with your OG image
        width: 1200,
        height: 630,
        alt: "Tooloria QR Code Generator",
      },
    ],
    type: "website",
  },
};

export default function page() {
  return (
    <main className="py-10 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-6 text-center">
        Free QR Code Generator
      </h1>
      <p className="text-center text-textMuted max-w-xl">
        Enter a link, message, or any text to generate a QR code instantly.
      </p>
      <QRCodeGenerator />
    </main>
  );
}
