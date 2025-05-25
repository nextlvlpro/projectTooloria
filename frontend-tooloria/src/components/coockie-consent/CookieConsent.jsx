'use client';
import { useState, useEffect } from "react";

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent === "true") {
      setConsent(true);
      loadCloudflareScript();
    } else {
      setConsent(false);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("cookieConsent", "true");
    setConsent(true);
    loadCloudflareScript();
  }

  function loadCloudflareScript() {
    if (document.getElementById("cloudflare-analytics")) return;

    const script = document.createElement("script");
    script.id = "cloudflare-analytics";
    script.src = "https://static.cloudflareinsights.com/beacon.min.js";
    script.defer = true;
    script.setAttribute(
      "data-cf-beacon",
      '{"token": "d34cace1a383445ba7aa924d0914c7fb"}'
    );
    document.head.appendChild(script);
  }

  // Don't render anything on the server, only render on client after hydration
  if (!isClient) return null;

  if (consent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-bg text-textMain p-4 shadow-lg flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 z-50 border border-primary">
      <p className="max-w-lg text-center sm:text-left">
        We use cookies to improve your experience. By clicking accept, you
        consent to the use of cookies.
      </p>
      <button
        onClick={acceptCookies}
        className="ml-0 sm:ml-4 px-4 py-2 bg-textAccent text-bg rounded hover:bg-textAccent/80 transition"
      >
        Accept
      </button>
    </div>
  );
}
