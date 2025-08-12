'use client';

import {  useEffect, useRef, useState } from 'react';
import FileUploader from './FileUploader';
import Controls from './Controls';
import Compressor from 'compressorjs';
import { resizeAndCompressWithCanvas } from '@/utils/image-tools/resizeAndCompressWithCanvas';


const resizePresets = [
  { label: 'Passport (413x531)', dimension: { width: 413, height: 531 } },
  { label: 'ID Card (300x300)', dimension: { width: 300, height: 300 } },
  { label: 'Driver License (300x300)', dimension: { width: 300, height: 300 } },
];

const compressPresets = [10, 50, 100, 150, 200, 300];

export default function ImageResizeCompressTool() {
  const [imageFile, setImageFile] = useState(null);
  const [finalImage, setFinalImage] = useState(null);
  const [selectedResizePreset, setSelectedResizePreset] = useState(resizePresets[0].dimension);
  const [selectedCompressPreset, setSelectedCompressPreset] = useState(compressPresets[0]);
  const [previewUrl, setPreviewUrl] = useState(null);
  const workerRef = useRef(null);

  useEffect(() => {
    workerRef.current = new Worker(
      new URL("./image-worker.js", import.meta.url)
    );

    workerRef.current.onmessage = (e) => {
      const { blob } = e.data;
      setFinalURL(URL.createObjectURL(blob));
    };

    return () => {
      workerRef.current.terminate();
    };
  }, []);


 const processImage = () => {
    if (!imageFile) return;
    workerRef.current.postMessage({
      file: imageFile,
      width: selectedResizePreset.width,
      height: selectedResizePreset.height,
      maxSizeKB: selectedCompressPreset,
    });

    workerRef.current.onmessage = (e) => {
    const { blob, error } = e.data;
    if (error) {
      console.error("Worker error:", error);
    } else {
      const url = URL.createObjectURL(blob);
      setPreviewUrl(url); // your state
    }
  };
}



  return (
    <div className="flex flex-col gap-6 p-4 max-w-xl mx-auto">
      <FileUploader setImageFile={setImageFile} />
      {imageFile && (
        <>
          <Controls
            resizePresets={resizePresets}
            compressPresets={compressPresets}
            selectedResizePreset={selectedResizePreset}
            selectedCompressPreset={selectedCompressPreset}
            setSelectedResizePreset={setSelectedResizePreset}
            setSelectedCompressPreset={setSelectedCompressPreset}
            processImage={processImage}
          />
        </>
      )}
      {previewUrl && (
        <div className="mt-4">
          <h2 className="mb-2 font-semibold">Preview</h2>
          <img src={previewUrl} alt="Compressed Preview" className="max-w-full h-auto border rounded shadow" />
        </div>
      )}
    </div>

  );
}
