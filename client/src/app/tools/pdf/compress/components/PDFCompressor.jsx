"use client";
import { FileUpload, Button } from "@/components/ui";
import { formatFileSize } from "@/utils/commonUtils";
import React, { useEffect, useState } from "react";
import { PDFDocument } from "pdf-lib";
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";

export const compressPdf = async (selectedFile, compressionLevel = 0.7) => {
  try {
    const arrayBuffer = await selectedFile.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const newPdf = await PDFDocument.create();

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const viewport = page.getViewport({ scale: 0.5 });
      const canvas = document.createElement("canvas");
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext("2d");
      await page.render({ canvasContext: ctx, viewport }).promise;

      const imgBlob = await new Promise((resolve) =>
        canvas.toBlob((b) => resolve(b), "image/jpeg", compressionLevel)
      );

      const imgBytes = await imgBlob.arrayBuffer();
      const img = await newPdf.embedJpg(imgBytes);
      const pdfPage = newPdf.addPage([img.width, img.height]);
      pdfPage.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
    }

    const compressedBytes = await newPdf.save();
    return new File(
      [compressedBytes],
      selectedFile.name.replace(".pdf", "_compressed.pdf"),
      { type: "application/pdf" }
    );
  } catch (error) {
    console.error("Error compressing PDF:", error);
    throw new Error("Failed to compress PDF. Please ensure the file is a valid PDF.");
  }
};

export default function PDFCompressor() {
  useEffect(() => {
    pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdfjs/pdf.worker.min.js"; // your public worker path
  }, []);

  const [selectedFile, setSelectedFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [compressedFile, setCompressedFile] = useState(null);
  const [error, setError] = useState(null);
  const [quality, setQuality] = useState(7); // default quality 7/10

  const handleFileSelect = (file) => {
    if (!file) return;
    setSelectedFile(file);
    setCompressedFile(null);
    setError(null);
  };

  const handleClear = () => {
    setSelectedFile(null);
    setCompressedFile(null);
    setError(null);
  };

  const handleCompress = async () => {
    if (!selectedFile) return;
    setProcessing(true);
    setError(null);

    try {
      const jpegQuality = Math.min(Math.max(quality, 1), 10) / 10;
      const compressed = await compressPdf(selectedFile, jpegQuality);

      setCompressedFile({
        original: selectedFile,
        compressed,
        originalSize: selectedFile.size,
        compressedSize: compressed.size,
        url: URL.createObjectURL(compressed),
      });
    } catch (err) {
      console.error(err);
      setError("Failed to compress PDF");
    } finally {
      setProcessing(false);
    }
  };

  const handleDownload = (file) => {
    const link = document.createElement("a");
    link.href = file.url;
    link.download = file.compressed.name;
    link.click();
  };

  return (
    <div>
      <FileUpload
        multiple={false}
        accept=".pdf"
        onFileSelect={handleFileSelect}
        clearFileInstruction={handleClear}
        placeholder="Drop PDF here or click to browse"
      />

      {selectedFile && (
        <div className="mt-4">
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Compression Quality: {quality}/10
          </label>
          <input
            type="range"
            min={1}
            max={10}
            value={quality}
            onChange={(e) => setQuality(Number(e.target.value))}
            className="w-full"
          />
        </div>
      )}

      {error && (
        <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
        </div>
      )}

      {selectedFile && (
        <div className="mt-4 flex gap-2">
          <Button onClick={handleCompress} disabled={processing} variant="primary">
            {processing ? "Compressing..." : "Compress PDF"}
          </Button>
        </div>
      )}

      {compressedFile && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 mt-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            ✅ PDF Successfully Compressed!
          </h2>

          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4 flex items-center justify-between">
            <div>
              <div className="font-medium text-gray-900 dark:text-white">
                {compressedFile.compressed.name}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Original: {formatFileSize(compressedFile.originalSize)} • Compressed:{" "}
                {formatFileSize(compressedFile.compressedSize)}
              </div>
            </div>

            <Button onClick={() => handleDownload(compressedFile)} size="lg">
              Download PDF
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
