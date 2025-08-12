"use client";
import { useRef } from "react";

export default function FileUploader({ setImageFile }) {
  const inputRef = useRef();

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImageFile(file);
    }
  }

  return (
    <div className="w-full">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        ref={inputRef}
        className="hidden"
      />
      <button
        className="w-full bg-white border-2 border-primary text-primary font-semibold px-4 py-3 rounded-xl transition duration-200 hover:bg-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-primary"
        onClick={() => inputRef.current.click()}
      >
        📤 Upload Image
      </button>
    </div>
  );
}
