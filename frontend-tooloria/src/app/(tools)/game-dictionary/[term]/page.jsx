// app/game-dictionary/[term]/page.jsx

import Link from "next/link";
import { gamerDictionary } from "../../../../lib/gameDictionaryData";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
import { notFound } from "next/navigation";
import Tags from "@/components/tools/game-dictionary/Tags";

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
export async function generateMetadata(props) {
  const  params  = await props?.params; 
  const paramTerm = await params?.term;
  const decodedTerm = decodeURIComponent(paramTerm).toLowerCase();
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

function genrateTags(termData) {
  let termTags = [];
  termTags[0]= "what is the meaning of " + termData.term;
  termTags[1] = "definition of " + termData.term + " in gaming";
  termTags[2] = "what " + termData.term + " means in gaming";
  termTags[3] = "gaming term " + termData.term;
  termTags[4] = "gaming dictionary";
  return termTags;
}
// Render page
export default async function Page(props) {
  const params = await props?.params;
  let paramTerm = await params?.term;
  const decodedTerm = decodeURIComponent(paramTerm).toLowerCase();
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
      <Tags tags={genrateTags(termData)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <h2 className="text-4xl font-extrabold mb-6 text-textMain">
        {termData.term}
      </h2>

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

      <section className="my-12">
        <h2 className="text-2xl font-semibold mb-2">Try our other tools</h2>
        <div className="flex flex-wrap gap-4">
        <Link
            href="/"
            className="text-primary hover:underline"
          >
            All Tools
          </Link>
          <Link
            href="/unit-converter"
            className="text-primary hover:underline"
          >
            Unit Converter
          </Link>
          <Link
            href="/ip-checker"
            className="text-primary hover:underline"
          >
            IP Checker
          </Link>
          <Link
            href="/ip-lookup"
            className="text-primary hover:underline"
          >
            IP Lookup
          </Link>
          <Link
            href="/video-tools/video-to-gif"
            className="text-primary hover:underline"
          >
            Video to Gif
          </Link>
        </div>        
      </section>
      
    </main>
  );
}
