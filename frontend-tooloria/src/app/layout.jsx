//rool layout.jsx
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
   subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'], // choose what you need
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "Tooloria",
  description: "All in one tools for your daily tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${poppins.variable} font-popi`}
      >
        {children}
      </body>
    </html>
  );
}
