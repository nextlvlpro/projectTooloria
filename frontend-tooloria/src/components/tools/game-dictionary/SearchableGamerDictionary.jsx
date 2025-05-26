"use client";

import { useState } from "react";
import Link from "next/link";

export default function SearchableGamerDictionary({ terms }) {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter terms for suggestion dropdown (limit to, say, 5 results)
  const suggestions = terms
    .filter((item) => {
      const termLower = item.term.toLowerCase();
      const defLower = item.definition.toLowerCase();
      const searchLower = searchTerm.toLowerCase();
      return (
        searchLower.length > 0 &&
        (termLower.includes(searchLower) || defLower.includes(searchLower))
      );
    })
    .slice(0, 5);

  return (
    <>
      <div className="relative max-w-md mx-auto mb-8">
        <input
          type="search"
          aria-label="Search gaming terms"
          placeholder="Search terms or definitions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary dark:bg-gray-800 dark:text-white"
          autoComplete="off"
        />

        {/* Suggestion dropdown */}
        {suggestions.length > 0 && (
          <ul className="absolute z-20 w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md mt-1 max-h-60 overflow-auto shadow-lg">
            {suggestions.map((item) => (
              <li key={item.term}>
                <Link
                  href={`/game-dictionary/${item.term.toLowerCase()}`}
                  className="block px-4 py-2 hover:bg-primary hover:text-white transition-colors"
                  onClick={() => setSearchTerm("")}
                >
                  {item.term}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Full dictionary cards below */}
      {/* <section aria-label="List of gaming terms">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {terms.map((item) => (
            <li key={item.term}>
              <Link
                href={`/game-dictionary/${item.term.toLowerCase()}`}
                className="group block p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-primary dark:border-gray-700
                           transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden
                           flex flex-col justify-between min-h-[260px] h-full"
                aria-label={`Learn about the term ${item.term}`}
              >
                <div>
                  <h2 className="text-2xl font-bold mb-2 text-textMain">{item.term}</h2>
                  <p className="text-textMuted line-clamp-3">{item.definition}</p>
                </div>

                <button
                  type="button"
                  className="absolute bottom-6 right-6 hidden opacity-0 translate-y-4
                             group-hover:block group-hover:opacity-100 group-hover:translate-y-0
                             transition-all duration-300 bg-primary text-white px-4 py-2 rounded-md shadow-md
                             hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  Learn More
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </section> */}
    </>
  );
}
