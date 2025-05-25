import Loading from "@/app/loading";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const UnitConverter = dynamic(
  () => import("@/components/tools/unit-converter/UnitConverter"),
  { suspense: true }
);

export async function generateStaticParams() {
  const categories = [
    'length', 'area', 'mass', 'volume', 'each', 'temperature', 'time',
    'digital', 'partsPer', 'speed', 'pace', 'pressure', 'current',
    'voltage', 'power', 'reactivePower', 'apparentPower', 'energy',
    'reactiveEnergy', 'volumeFlowRate', 'illuminance', 'frequency', 'angle'
  ];
  return categories.map(category => ({ category }));
}

export async function generateMetadata({ params }) {
  const category = params.category || "unit converter";

  const title = `${category.charAt(0).toUpperCase() + category.slice(1)} Unit Converter – Tooloria`;
  const description = `${category} category using Tooloria's unit converter.`;

  const keywords = [
    "unit converter",
    `${category} conversion`,
    "Tooloria",
    "unit converter tool online",
  ];

  return {
    title,
    description,
    keywords,
  };
}

export default async function Page({ params }) {
  const category = params.category;

  return (
    <main className="mx-auto px-6">
      <h1 className="text-4xl font-bold mb-6">
        {category.charAt(0).toUpperCase() + category.slice(1)} Unit Converter
      </h1>
      <p className="mb-4 text-textMuted">
        Use this simple tool to convert {category}
      </p>

      <Suspense fallback={<Loading />}>
        <UnitConverter params={params} />
      </Suspense>
    </main>
  );
}
