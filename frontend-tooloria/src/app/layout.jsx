// app/layout.jsx (or app/root-layout.jsx)

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import CookieConsent from "@/components/coockie-consent/CookieConsent";
import AdSenseLoader from "@/components/ads/google/AdSenseLoader";
import PlausibleAnalytics from "@/components/PlausibleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tooloria — Free Online Tools",
  description:
    "All-in-one free tools like unit converters, QR code generators, and more. No data tracking. Built for speed and simplicity.",
  keywords: [
    "online tools",
    "unit converter",
    "qr code generator",
    "text tools",
    "number tools",
    "free utilities",
    "Tooloria",
  ],
  alternates: {
    canonical: "https://tooloria.org/",
  },
  openGraph: {
    title: "Tooloria — Free Online Tools",
    description:
      "All-in-one free tools like unit converters, QR code generators, and more. No data tracking.",
    url: "https://tooloria.org/",
    siteName: "Tooloria",
    images: [
      {
        url: "https://tooloria.org/tooloriaLogo.png",
        width: 1200,
        height: 630,
        alt: "Tooloria — Free Online Tools",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tooloria — Free Online Tools",
    description: "No signup. No tracking. Just fast, useful tools.",
    images: ["https://tooloria.org/tooloriaLogo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon and viewport are not managed by metadata, so keep these */}
        <link rel="icon" href="/tooloriaLogo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Canonical is handled via metadata.alternates.canonical, so you can remove manual */}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen justify-between`}
      >
        <PlausibleAnalytics />
        <AdSenseLoader />
        <Navbar />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
