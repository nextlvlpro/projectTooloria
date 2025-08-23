// app/tools/pdf/merge/components/PDFMerger.jsx
"use client";

import { FileUpload, Button } from "@/components/ui";
import { formatFileSize } from "@/utils/commonUtils";
import { mergePdfs, getPdfInfo, validatePdf } from "@/utils/pdfUtils";
import React, { useState, useCallback } from "react";

export default function PDFMerger() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileInfos, setFileInfos] = useState([]);
  const [mergedFile, setMergedFile] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  const handleFileSelect = useCallback(async (files) => {
    if (!files || files.length === 0) {
      setSelectedFiles([]);
      setFileInfos([]);
      return;
    }

    setError(null);
    setProcessing(true);

    try {
      const validFiles = [];
      const infos = [];

      for (const file of files) {
        try {
          await validatePdf(file);
          const info = await getPdfInfo(file);
          validFiles.push(file);
          infos.push({
            ...info,
            id: Date.now() + Math.random(),
            file: file
          });
        } catch (err) {
          console.error(`Invalid PDF: ${file.name}`, err);
          setError(prev => prev ? `${prev}, ${file.name}` : `Invalid PDF file: ${file.name}`);
        }
      }

      setSelectedFiles(validFiles);
      setFileInfos(infos);
    } catch (err) {
      setError("Error processing PDF files");
    } finally {
      setProcessing(false);
    }
  }, []);

  const clearFiles = () => {
    setSelectedFiles([]);
    setFileInfos([]);
    setMergedFile(null);
    setError(null);
  };

  const removeFile = useCallback((index) => {
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newInfos = fileInfos.filter((_, i) => i !== index);
    setSelectedFiles(newFiles);
    setFileInfos(newInfos);
  }, [selectedFiles, fileInfos]);

  const moveFile = useCallback((fromIndex, toIndex) => {
    const newFiles = [...selectedFiles];
    const newInfos = [...fileInfos];
    
    const [movedFile] = newFiles.splice(fromIndex, 1);
    const [movedInfo] = newInfos.splice(fromIndex, 1);
    
    newFiles.splice(toIndex, 0, movedFile);
    newInfos.splice(toIndex, 0, movedInfo);
    
    setSelectedFiles(newFiles);
    setFileInfos(newInfos);
  }, [selectedFiles, fileInfos]);

  const handleMerge = async () => {
    if (selectedFiles.length < 2) {
      setError("Please select at least 2 PDF files to merge");
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      const merged = await mergePdfs(selectedFiles);
      setMergedFile({
        file: merged,
        url: URL.createObjectURL(merged),
        originalCount: selectedFiles.length,
        totalPages: fileInfos.reduce((sum, info) => sum + info.pageCount, 0),
        totalSize: selectedFiles.reduce((sum, file) => sum + file.size, 0)
      });
    } catch (err) {
      setError("Failed to merge PDF files. Please try again.");
      console.error("Merge error:", err);
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Step 1: Upload Files */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          1. Upload PDF Files
        </h2>

        <FileUpload
          multiple
          accept=".pdf"
          onFileSelect={handleFileSelect}
          clearFileInstruction={clearFiles}
          placeholder="Drop PDF files here or click to browse"
          helper="Select multiple PDF files to combine into one document. Minimum 2 files required."
        />

        {error && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}
      </div>

      {/* Step 2: Organize Files */}
      {fileInfos.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            2. Organize Files ({fileInfos.length} files selected)
          </h2>
          
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Files will be merged in the order shown below. Use the up/down arrows to reorder.
          </p>

          <div className="space-y-3">
            {fileInfos.map((info, index) => (
              <div
                key={info.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium">
                    {index + 1}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {info.fileName}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {info.pageCount} pages • {formatFileSize(info.fileSize)}
                        {info.title && info.title !== info.fileName && (
                          <span> • {info.title}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {/* Move Up */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => index > 0 && moveFile(index, index - 1)}
                    disabled={index === 0}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </Button>
                  
                  {/* Move Down */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => index < fileInfos.length - 1 && moveFile(index, index + 1)}
                    disabled={index === fileInfos.length - 1}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Button>
                  
                  {/* Remove */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFile(index)}
                    className="text-red-600 hover:text-red-700 dark:text-red-400"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-2">Merge Summary:</h3>
            <div className="text-sm text-blue-800 dark:text-blue-200 grid grid-cols-3 gap-4">
              <div>
                <strong>{fileInfos.length}</strong> files
              </div>
              <div>
                <strong>{fileInfos.reduce((sum, info) => sum + info.pageCount, 0)}</strong> total pages
              </div>
              <div>
                <strong>{formatFileSize(selectedFiles.reduce((sum, file) => sum + file.size, 0))}</strong> total size
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Process Button */}
      {selectedFiles.length > 0 && (
        <div className="text-center">
          <Button
            onClick={handleMerge}
            loading={processing}
            disabled={selectedFiles.length < 2}
            size="lg"
            className="px-8"
          >
            {processing ? "Merging PDFs..." : `Merge ${selectedFiles.length} PDFs`}
          </Button>
        </div>
      )}

      {/* Step 4: Results */}
      {mergedFile && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <svg className="w-6 h-6 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            PDF Successfully Merged!
          </h2>
          
          <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <svg className="w-10 h-10 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd" />
                </svg>
                
                <div>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {mergedFile.file.name}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {mergedFile.totalPages} pages • {formatFileSize(mergedFile.file.size)}
                  </div>
                  <div className="text-xs text-green-600 dark:text-green-400">
                    Merged from {mergedFile.originalCount} files
                  </div>
                </div>
              </div>
              
              <Button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = mergedFile.url;
                  link.download = mergedFile.file.name;
                  link.click();
                }}
                size="lg"
              >
                Download PDF
              </Button>
            </div>
          </div>

          <div className="text-sm text-green-700 dark:text-green-300">
            <strong>Success!</strong> Your {mergedFile.originalCount} PDF files have been combined into a single document.
          </div>
        </div>
      )}

      {/* Usage Instructions */}
      {selectedFiles.length === 0 && !mergedFile && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">
            How to merge PDF files:
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Upload at least 2 PDF files using the file selector above</li>
            <li>• Use the arrow buttons to reorder files as needed</li>
            <li>• Preview the merge summary with total pages and file count</li>
            <li>• Click "Merge PDFs" to combine all files into one document</li>
            <li>• Download your merged PDF - all processing happens in your browser</li>
          </ul>
        </div>
      )}
    </div>
  );
}