import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary via-primary/50 to-transparent py-24 px-6">

      {/* Bottom gradient overlay to blend with page background */}
      <div className="absolute inset-x-0 bottom-0  bg-gradient-to-b from-transparent to-white pointer-events-none z-0" />
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 drop-shadow-md">
          <span className="text-red-700">Tooloria:</span>&nbsp;<span className="text-border">Your Daily Tool Hub</span>
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto italic font-popi">  
          Compress, convert, generate — all in one place. Fast, free, secure and built for Applicants, Common Service Centers, Lok Mitra Kendra & developers alike.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="#tools"
            className="bg-purple-600 text-white text-xl font-mono px-6 py-3 rounded-full shadow hover:bg-purple-700 transition"
          >
            Explore Tools
          </Link>
        </div>
      </div>
    </section>
  );
}
