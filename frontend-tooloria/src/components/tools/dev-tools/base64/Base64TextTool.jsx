"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Base64 } from "js-base64";

export default function Base64TextTool() {
  const [isEncode, setIsEncode] = useState(true);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [urlSafe, setUrlSafe] = useState(false);
  const [lineBreaks, setLineBreaks] = useState(false);
  const [copied, setCopied] = useState(false);

  const location = usePathname();

  useEffect(() => {
    setIsEncode(location === "/dev-tools/base64-text-encode");
  }, [location]);

  function insertLineBreaks(str, every = 76) {
    return str.match(new RegExp(`.{1,${every}}`, "g"))?.join("\n") ?? str;
  }

  function encodeText() {
    if (!inputText.trim()) return;
    try {
      const cleanInput = inputText.trim();
      let encoded;

      if (urlSafe) {
        encoded = Base64.encodeURI(cleanInput);
      } else if (lineBreaks) {
        encoded = Base64.encode(cleanInput, true); // insert line breaks
      } else {
        encoded = Base64.encode(cleanInput);
      }

      setOutputText(encoded);
    } catch {
      setOutputText("Error: Invalid input");
    }
  }

  function decodeText() {
    if (!inputText.trim()) return;
    try {
      const cleanInput = inputText.trim();
      const decoded = Base64.decode(cleanInput);
      setOutputText(decoded);
    } catch {
      setOutputText("Error: Invalid input");
    }
  }

  function handleKeyDown(e) {
    if (e.shiftKey && e.key === "Enter") return;
    if (e.key === "Enter") {
      e.preventDefault();
      isEncode ? encodeText() : decodeText();
    }
  }

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(outputText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="flex flex-col gap-6">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={isEncode ? "Enter text to encode..." : "Enter base64 to decode..."}
        className="textInput w-full p-4 rounded-xl bg-muted text-textMain border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        rows={6}
      />

      {isEncode && (
        <div className="flex items-center gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={urlSafe}
              onChange={() => setUrlSafe(!urlSafe)}
              disabled={lineBreaks}
            />
            URL Safe
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={lineBreaks}
              onChange={() => setLineBreaks(!lineBreaks)}
              disabled={urlSafe}
            />
            Line Breaks (76 char)
          </label>
        </div>
      )}

      <button
        onClick={isEncode ? encodeText : decodeText}
        className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-opacity-90 transition"
      >
        {isEncode ? "Encode" : "Decode"}
      </button>

      <div className="relative">
        <textarea
          value={outputText}
          readOnly
          placeholder="Encoded/Decoded output will appear here..."
          className="textOutput w-full p-4 rounded-xl bg-muted text-textMain border border-primary pr-32"
          rows={6}
        />
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 px-4 py-1 bg-primary text-white rounded-md text-sm hover:bg-opacity-90 transition"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
    </section>
  );
}
