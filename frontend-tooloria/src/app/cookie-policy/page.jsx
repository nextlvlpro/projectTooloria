import Script from "next/script";

export default function page() {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookie Policy",
            "url": "https://tooloria.org/cookie-policy",
            "description": "Cookie Policy explaining the use of cookies on Tooloria website.",
            "publisher": {
              "@type": "Organization",
              "name": "Tooloria",
              "url": "https://tooloria.org"
            }
          }),
        }}
      />
      <main className="mx-auto max-w-4xl p-6 pt-16">
        <h1 className="text-3xl font-bold mb-4">Cookie Policy</h1>
        <p>
          At Tooloria, we use cookies to enhance your experience on our site.
          Cookies are small text files stored on your device to help us
          improve functionality and analyze site traffic.
        </p>
        <h2 className="text-2xl mt-6 mb-2">What Are Cookies?</h2>
        <p>
          Cookies are small files placed on your device when you visit a website.
          They help the site remember your preferences and improve your experience.
        </p>
        <h2 className="text-2xl mt-6 mb-2">How We Use Cookies</h2>
        <ul className="list-disc list-inside">
          <li>To remember your settings and preferences</li>
          <li>To analyze site traffic and improve performance</li>
          <li>To ensure security and prevent fraud</li>
        </ul>
        <h2 className="text-2xl mt-6 mb-2">Managing Cookies</h2>
        <p>
          You can control or disable cookies through your browser settings.
          However, disabling cookies may affect your experience on Tooloria.
        </p>
        <h2 className="text-2xl mt-6 mb-2">Contact Us</h2>
        <p>
          If you have questions about our Cookie Policy, please contact us via{' '}
          <a href="mailto:bhanusharma089@gmail.com" className="text-blue-600 underline">
            email
          </a>.
        </p>
      </main>
    </>
  );
}
