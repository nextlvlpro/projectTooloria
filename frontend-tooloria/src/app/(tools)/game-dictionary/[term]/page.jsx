// app/game-dictionary/[term]/page.jsx

import Link from "next/link";
import { gamerDictionary } from "../../../../lib/gameDictionaryData";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
import { notFound } from "next/navigation";

const SearchableGamerDictionary = dynamic(
  () => import("@/components/tools/game-dictionary/SearchableGamerDictionary"),
  {
    loading: () => <Loading />
  }
);

// Generate static pages for each term
export async function generateStaticParams() {
  return gamerDictionary.map((item) => ({
    term: encodeURIComponent(item.term.toLowerCase()),
  }));
}

// SEO metadata
export async function generateMetadata({ params }) {
  const decodedTerm = decodeURIComponent(params.term).toLowerCase();
  const termData = gamerDictionary.find(
    (item) => item.term.toLowerCase() === decodedTerm
  );

  if (!termData) {
    return {
      title: "Term Not Found | Gamer Dictionary",
      description: "This gaming term was not found in the dictionary.",
      robots: "noindex",
    };
  }

  return {
    title: `${termData.term} | Gamer Dictionary | Tooloria`,
    description: termData.definition,
    keywords: [
      "Gamer dictionary",
      "Gaming terms",
      termData.term,
      ...(termData.related || []),
    ],
    alternates: {
      canonical: `https://tooloria.org/game-dictionary/${encodeURIComponent(termData.term.toLowerCase())}`,
    },
    openGraph: {
      title: `${termData.term} | Gamer Dictionary`,
      description: termData.definition,
      url: `https://tooloria.org/game-dictionary/${encodeURIComponent(termData.term.toLowerCase())}`,
      siteName: "Tooloria",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${termData.term} | Gamer Dictionary`,
      description: termData.definition,
    },
  };
}

// Render page
export default function Page({ params }) {
  const decodedTerm = decodeURIComponent(params.term).toLowerCase();
  const termData = gamerDictionary.find(
    (item) => item.term.toLowerCase() === decodedTerm
  );

  if (!termData) {
    notFound(); // Proper 404 handling
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: termData.term,
    description: termData.definition,
    inDefinedTermSet: "https://tooloria.org/game-dictionary",
    url: `https://tooloria.org/game-dictionary/${encodeURIComponent(termData.term.toLowerCase())}`,
    ...(termData.related?.length > 0 && {
      hasDefinedTerm: termData.related.map((rel) => ({
        "@type": "DefinedTerm",
        name: rel,
        url: `https://tooloria.org/game-dictionary/${encodeURIComponent(rel.toLowerCase())}`,
      })),
    }),
  };

  return (
    <main className="max-w-3xl mx-auto p-6">
      <SearchableGamerDictionary terms={gamerDictionary} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <h1 className="text-4xl font-extrabold mb-6 text-textMain">
        {termData.term}
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Definition</h2>
        <p className="text-textMuted">{termData.definition}</p>
      </section>

      {termData.examples?.length > 0 && (
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Examples</h2>
          <ul className="list-disc list-inside text-textMuted space-y-2">
            {termData.examples.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </section>
      )}

      {termData.related?.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-2">Related Terms</h2>
          <ul className="flex flex-wrap gap-4">
            {termData.related.map((relatedTerm) => (
              <li key={relatedTerm}>
                <Link
                  href={`/game-dictionary/${encodeURIComponent(relatedTerm.toLowerCase())}`}
                  className="text-primary hover:underline"
                >
                  {relatedTerm}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
