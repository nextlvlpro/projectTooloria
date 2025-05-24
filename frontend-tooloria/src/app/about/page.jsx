// app/about/page.tsx

export default async function page() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 text-textMain">
      <h1 className="text-4xl font-bold mb-6 text-textAccent">About Tooloria</h1>
      <p className="text-lg leading-relaxed text-textMuted">
        Tooloria is your all-in-one toolbox for digital utilities — from QR code generators to image compressors, and everything in between.
        <br />
        <br />  
        Whether you're a developer, designer, or just someone trying to simplify daily tasks, Tooloria offers a suite of free, privacy-first tools designed to save your time.
      </p>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Why Tooloria?</h2>
        <ul className="list-disc list-inside space-y-2 text-textMuted">
          <li>No tracking – ever.</li>
          <li>Completely free to use.</li>
          <li>Fast, modern, mobile-friendly UI.</li>
        </ul>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Built with ❤️ using:</h2>
        <ul className="list-disc list-inside space-y-1 text-textMuted">
          <li>Next.js & node.js </li>
          <li>Tailwind CSS</li>
          <li>AWS</li>
        </ul>
      </div>
    </main>
  );
}
