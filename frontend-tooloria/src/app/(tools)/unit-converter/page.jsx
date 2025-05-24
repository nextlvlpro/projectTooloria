import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const UnitConverter = dynamic(
  () => import("@/components/unit-converter/UnitConverter"),
  { suspense: true }
);

export const metadata = {
  title: "Unit Converter – Tooloria",
  description:
    "Convert length units easily with our SEO optimized unit converter tool.",
  keywords: [
    "unit converter",
    "length conversion",
    "meters to kilometers",
    "Tooloria",
    "kg to lbs",
    "unit converter tool",
    "unit converter tool online",
  ],
};

export default async function UnitConverterPage() {
  return (
    <main className=" mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">Unit Converter</h1>
      <p className="mb-4 text-textMuted">
        Use this simple tool to convert length units like meters, kilometers,
        miles, and feet.
      </p>

      {/* Client-only interactive component */}
      <Suspense fallback={<Loading />}>
        <UnitConverter params={null} />
      </Suspense>
    </main>
  );
}
