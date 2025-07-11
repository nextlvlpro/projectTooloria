// components/home/Hero.jsx

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 py-24 px-6">
      <div className="max-w-4xl mx-auto text-center z-10 relative">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 drop-shadow-md">
          Tooloria: Your Daily Tool Hub
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto">
          Compress, convert, generate — all in one place. Fast, free, and built for CSC & developers alike.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#tools"
            className="bg-purple-600 text-white px-6 py-3 rounded-full shadow hover:bg-purple-700 transition"
          >
            Explore Tools
          </a>
          <a
            href="mailto:contact@tooloria.org"
            className="border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-full hover:bg-purple-50 transition"
          >
            Suggest a Tool
          </a>
        </div>
      </div>

      {/* Decorative Background Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-100 rounded-full opacity-30 blur-3xl animate-pulse -z-10" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-100 rounded-full opacity-30 blur-3xl animate-pulse -z-10" />
    </section>
  )
}
