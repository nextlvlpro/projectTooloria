import Script from "next/script";
export default function TermsPage() {
    return (
        <>
        <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "url": "https://tooloria.org/terms",
            "description": "Terms of Service for Tooloria, outlining user rights and responsibilities.",
            "publisher": {
              "@type": "Organization",
              "name": "Tooloria",
              "url": "https://tooloria.org"
            }
          }),
        }}
      />
      <main className="max-w-3xl mx-auto py-16 px-4 prose prose-invert">
        <h1>Terms of Service</h1>
        <p>Last updated: May 25, 2025</p>
  
        <p>Welcome to Tooloria! By accessing or using our website, you agree to be bound by the following Terms of Service. Please read them carefully.</p>
  
        <h2>1. Use of the Site</h2>
        <p>Tooloria provides a collection of online tools for general use. You may use the services for lawful purposes only.</p>
  
        <h2>2. Intellectual Property</h2>
        <p>All content, logos, and tools are the property of Tooloria. You may not reuse or redistribute them without permission.</p>
  
        <h2>3. Disclaimer</h2>
        <p>All tools are provided “as is” without warranty of any kind. We are not liable for any damages or losses resulting from your use of the site.</p>
  
        <h2>4. Changes to the Terms</h2>
        <p>We may update these Terms from time to time. Continued use of the website means you accept the new terms.</p>
  
        <h2>5. Contact</h2>
        <p>If you have questions about these Terms, please <a href="/contact">contact us</a>.</p>
      </main>
      </>
    );
  }
  