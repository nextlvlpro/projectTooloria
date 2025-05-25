// app/privacy/page.tsx
export const metadata = {
    title: "Privacy Policy – Tooloria",
    description: "Read Tooloria's privacy policy to learn how we handle data. We do not collect personal information.",
  };
  
  export default function page() {
    return (
      <main className="max-w-3xl mx-auto px-4 py-12 text-left text-sm leading-relaxed text-neutral-800 dark:text-neutral-200">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
  
        <p className="mb-4">
          Tooloria values your privacy. We do not collect any personal information from users.
          All tools operate entirely in your browser and do not send data to any server unless explicitly mentioned.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Cookies</h2>
        <p className="mb-4">
          Tooloria does not use cookies to track you. Some tools may use local storage to save your preferences, which stays on your device.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Advertisements</h2>
        <p className="mb-4">
          We may display ads using Google AdSense to support the site. AdSense may use cookies to serve relevant ads.
          You can learn more about how Google uses your data <a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="underline text-blue-600 dark:text-blue-400">here</a>.
        </p>
  
        <h2 className="text-xl font-semibold mt-8 mb-2">Contact</h2>
        <p className="mb-4">
          If you have any questions about our privacy practices, contact us via email at <a href="mailto:bhanusharma089@gmail.com" className="underline text-blue-600 dark:text-blue-400">bhanusharma089@gmail.com</a> or on <a href="https://www.linkedin.com" className="underline text-blue-600 dark:text-blue-400" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
  
        <p className="text-xs mt-10">Last updated: May 25, 2025</p>
      </main>
    );
  }
  