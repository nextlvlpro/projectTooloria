import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import CookieConsent from "@/components/coockie-consent/CookieConsent";
import AdSenseLoader from "@/components/ads/google/AdSenseLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Tooloria",
  description: "All in one tools for your daily tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/tooloriaLogo.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen justify-between`}
      >
       <AdSenseLoader />
        <Navbar />
        <CookieConsent />
        {children}
      </body>
    </html>
  );
}
