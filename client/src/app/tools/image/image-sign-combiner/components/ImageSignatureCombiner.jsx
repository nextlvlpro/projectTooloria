"use client";

import React, { useEffect, useState } from "react";
import { FileUpload } from "@/components/ui/FileUpload";
import { Button } from "@/components/ui/Button";

export default function ImageSignatureCombiner() {
  const [photo, setPhoto] = useState(null);
  const [signature, setSignature] = useState(null);
  const [layout, setLayout] = useState("side"); // "side" | "top"
  const [merged, setMerged] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadImage = (file) =>
    new Promise((resolve) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => resolve(img);
    });

  const combinePhotoAndSignature = async (photoFile, signFile, layoutType = "side") => {
    const [photoImg, signImg] = await Promise.all([loadImage(photoFile), loadImage(signFile)]);

    const maxWidth = 800;
    const scale = Math.min(1, maxWidth / Math.max(photoImg.width, signImg.width));

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const pW = photoImg.width * scale;
    const pH = photoImg.height * scale;
    const sW = signImg.width * scale;
    const sH = signImg.height * scale;

    if (layoutType === "side") {
      canvas.width = pW + sW;
      canvas.height = Math.max(pH, sH);
      ctx.drawImage(photoImg, 0, 0, pW, pH);
      ctx.drawImage(signImg, pW, 0, sW, sH);
    } else {
      canvas.width = Math.max(pW, sW);
      canvas.height = pH + sH;
      ctx.drawImage(photoImg, 0, 0, pW, pH);
      ctx.drawImage(signImg, 0, pH, sW, sH);
    }

    return new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(new File([blob], "combined.png", { type: "image/png" })), "image/png");
    });
  };

  const handleCombine = async () => {
    if (!photo || !signature) return;
    setLoading(true);

    try {
      const combined = await combinePhotoAndSignature(photo, signature, layout);
      setMerged({
        file: combined,
        url: URL.createObjectURL(combined),
      });
    } catch (err) {
      console.error("Error combining images:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      if (photo) URL.revokeObjectURL(photo);
      if (signature) URL.revokeObjectURL(signature);
      if (merged?.url) URL.revokeObjectURL(merged.url);
    };
  }, [photo, signature, merged]);

  return (
    <div className="space-y-8">
      <FileUpload
        accept="image/*"
        multiple={false}
        label="Upload Photo"
        placeholder="Choose your photo"
        onFileSelect={(file) => setPhoto(file || null)}
      />

      <FileUpload
        accept="image/*"
        multiple={false}
        label="Upload Signature"
        placeholder="Choose your signature"
        onFileSelect={(file) => setSignature(file || null)}
      />

      <div className="text-sm text-gray-600 dark:text-gray-300">
        {photo && <p>✅ Photo ready: {photo.name}</p>}
        {signature && <p>✅ Signature ready: {signature.name}</p>}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border">
        <h2 className="text-lg font-semibold mb-4">Choose Layout</h2>
        <div className="flex gap-4">
          <Button
            variant={layout === "side" ? "primary" : "outline"}
            onClick={() => setLayout("side")}
          >
            Side by Side
          </Button>
          <Button
            variant={layout === "top" ? "primary" : "outline"}
            onClick={() => setLayout("top")}
          >
            Top / Bottom
          </Button>
        </div>
      </div>

      {photo && signature && (
        <div className="text-center">
          <Button onClick={handleCombine} loading={loading}>
            Combine
          </Button>
        </div>
      )}

      {merged && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border text-center">
          <h2 className="text-lg font-semibold mb-4">Result</h2>
          <img src={merged.url} alt="Combined" className="max-w-full mx-auto rounded shadow" />
          <Button
            onClick={() => {
              const link = document.createElement("a");
              link.href = merged.url;
              link.download = merged.file.name;
              link.click();
            }}
            className="mt-4"
          >
            Download Combined Image
          </Button>
        </div>
      )}
    </div>
  );
}
