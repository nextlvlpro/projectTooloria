import Link from "next/link";
import { gamerDictionary } from "../../../lib/gameDictionaryData";
import SearchableGamerDictionary from "@/components/tools/game-dictionary/SearchableGamerDictionary";

export const metadata = {
  title: "Gamer Dictionary | Tooloria",
  description:
    "Explore gaming terms and slang in our gamer dictionary. Understand phrases like AFK, nerf, buff, AoE, DPS, Aggro and more with clear definitions and examples.",
  keywords: [
    "Gamer dictionary",
    "Gaming terms",
    "AFK meaning",
    "AAA games",
    "FPS gaming terms",
    "Tooloria gamer glossary",
    "nerf",
    "buff",
    "aoe",
    "dps",
    "tank",
    "healer",
    "gg",
    "wp",
    "ftw",
    "brb",
    "logout",
    "inactivity",
    "camping",
    "aimbot",
    "videogame terms",
    "gaming slang",
    "gaming glossary",
  ],
};

export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold mb-4 text-textMain">
          Gamer Dictionary
        </h1>
        <p className="text-lg text-textMuted max-w-xl mx-auto">
          Learn the meaning of popular gaming terms used by players around the
          world. Click any term to explore its full definition, examples, and
          related terms.
        </p>
      </header>
      <SearchableGamerDictionary terms={gamerDictionary} />

      <section aria-label="List of gaming terms">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gamerDictionary.map((item) => (
            <li key={item.term}>
              <Link
                href={`/game-dictionary/${item.term.toLowerCase()}`}
                className="group block p-6 rounded-xl bg-white dark:bg-gray-900 shadow-lg border border-primary dark:border-gray-700 
                           transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden min-h-[250px]"
                aria-label={`Learn about the term ${item.term}`}
              >
                <h2 className="text-2xl font-bold mb-2 text-textMain">
                  {item.term}
                </h2>
                <p className="text-textMuted line-clamp-3">{item.definition}</p>

                {/* CTA Button - hidden by default, shows on hover */}
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
      </section>
    </main>
  );
}
