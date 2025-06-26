"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Base64TextTool() {
  const [isEncode, setIsEncode] = useState(true);
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const location = usePathname();
  
  useEffect(() => {
    if (location === "/dev-tools/base64-text-encode") {
      setIsEncode(true);
    } else {
      setIsEncode(false);
    }
  }, [location]);

  function encodeText() {
    if (!inputText) return;

    try {
      
      setInputText(inputText.trim());
      const encodedText = btoa(inputText);
      setOutputText(encodedText);
    } catch (error) {
      setOutputText("Error: Invalid input");
    }
  }

  function handleKeyDown(e) {
    if (e.shiftKey && e.key === "Enter") {
      // allow newline
      return;
    }

    if (e.key === "Enter") {
      e.preventDefault();
      isEncode ? encodeText() : decodeText();
    }
  }

  function decodeText() {
    if (!inputText) return;

    try {
      setInputText(inputText.trim());
      const decodedText = atob(inputText);
      setOutputText(decodedText);
    } catch (error) {
      setOutputText("Error: Invalid input");
    }
  }

  return (
    <section className="flex flex-col gap-6">
      <textarea
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter text to encode..."
        className="textInput w-full p-4 rounded-xl bg-muted text-textMain border border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        rows={6}
      />
      <button
        onClick={isEncode ? encodeText : decodeText}
        className="bg-primary text-white px-6 py-2 rounded-xl hover:bg-opacity-90 transition"
      >
        {isEncode ? "Encode" : "Decode"}
      </button>
      <textarea
        value={outputText}
        readOnly
        placeholder="Encoded Base64 output will appear here..."
        className="textOutput w-full p-4 rounded-xl bg-muted text-textMain border border-primary"
        rows={6}
      />
    </section>
  );
}
