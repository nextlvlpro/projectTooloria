import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const UnitConverter = dynamic(
  () => import("@/components/tools/unit-converter/UnitConverter"),
  { suspense: true }
);

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category || "unit converter";

  const title = `${category.charAt(0).toUpperCase() + category.slice(1)} Unit Converter – Tooloria`;
  const description = `${category} category using Tooloria's unit converter.`;

  const keywords = [
    "unit converter",
    category + " conversion",
    "Tooloria",
    "unit converter tool online",
  ].filter(Boolean);

  return {
    title,
    description,
    keywords,
  };
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const category = resolvedParams.category;

  return (
    <main className="mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">
        {category.charAt(0).toUpperCase() + category.slice(1)} Unit Converter
      </h1>
      <p className="mb-4 text-textMuted">
        Use this simple tool to convert {category}
      </p>

      <Suspense fallback={<Loading />}>
        <UnitConverter params={resolvedParams} />
      </Suspense>
    </main>
  );
}
