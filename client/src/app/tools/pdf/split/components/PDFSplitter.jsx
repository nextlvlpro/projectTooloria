// File: client/src/app/tools/pdf/split/components/PDFSplitter.jsx
"use client";

import { FileUpload, Button } from "@/components/ui";
import PDFPreview from "@/components/ui/PDFPreview";
import { formatFileSize } from "@/utils/commonUtils";
import { downloadSingleFile, downloadPdfResults } from "@/utils/downloadUtils";
import { splitPdf, getPdfInfo, validatePdf } from "@/utils/pdfUtils";
import React, { useState, useCallback } from "react";

export default function PDFSplitter() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileInfo, setFileInfo] = useState(null);
  const [splitFiles, setSplitFiles] = useState([]);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);
  const [splitMethod, setSplitMethod] = useState('all'); // 'all', 'range', 'individual'
  const [pageRanges, setPageRanges] = useState('');
  const [individualPages, setIndividualPages] = useState('');
  const [selectedPages, setSelectedPages] = useState(new Set());

  const handleFileSelect = useCallback(async (fileOrFiles) => {
    console.log("Files received:", fileOrFiles); // Debug log
    
    // Clear previous state first
    setSplitFiles([]);
    setError(null);
    setSelectedPages(new Set());
    
    // Handle both single file and array of files
    let file = null;
    if (!fileOrFiles) {
      setSelectedFile(null);
      setFileInfo(null);
      return;
    }
    
    // Check if it's an array (multiple=true) or single file (multiple=false)
    if (Array.isArray(fileOrFiles)) {
      if (fileOrFiles.length === 0) {
        setSelectedFile(null);
        setFileInfo(null);
        return;
      }
      file = fileOrFiles[0]; // Take first file from array
    } else {
      file = fileOrFiles; // Single file object
    }
    
    console.log("Processing file:", file); // Debug log
    
    if (!file || !file.name) {
      setError("Invalid file selected");
      setSelectedFile(null);
      setFileInfo(null);
      setProcessing(false);
      return;
    }

    setProcessing(true);

    try {
      await validatePdf(file);
      const info = await getPdfInfo(file);
      setSelectedFile(file);
      setFileInfo({
        ...info,
        file: file
      });
      
      // Reset split method specific states when new file is loaded
      setPageRanges('');
      setIndividualPages('');
      setSelectedPages(new Set());
      
    } catch (err) {
      console.error(`Invalid PDF: ${file.name}`, err);
      setError("Please select a valid PDF file");
      setSelectedFile(null);
      setFileInfo(null);
    } finally {
      setProcessing(false);
    }
  }, []);

  const clearFiles = () => {
    setSelectedFile(null);
    setFileInfo(null);
    setSplitFiles([]);
    setError(null);
    setPageRanges('');
    setIndividualPages('');
    setSelectedPages(new Set());
    setSplitMethod('all'); // Reset split method to default
    setProcessing(false); // Reset processing state
  };

  // Handle split method changes and reset related state
  const handleSplitMethodChange = (newMethod) => {
    setSplitMethod(newMethod);
    setPageRanges('');
    setIndividualPages('');
    setSelectedPages(new Set());
    setSplitFiles([]); // Clear any previous split results
    setError(null);
  };

  // Handle page selection from PDFPreview component
  const handlePageSelect = (pageNumber) => {
    const newSelected = new Set(selectedPages);
    if (newSelected.has(pageNumber)) {
      newSelected.delete(pageNumber);
    } else {
      newSelected.add(pageNumber);
    }
    setSelectedPages(newSelected);
    
    // Update individual pages input when using visual selection
    if (splitMethod === 'individual') {
      setIndividualPages(Array.from(newSelected).sort((a, b) => a - b).join(', '));
    }
  };

  // Parse page ranges (e.g., "1-5, 10-15, 20")
  const parsePageRanges = (rangeString, totalPages) => {
    if (!rangeString.trim()) return [];
    
    const ranges = [];
    const parts = rangeString.split(',').map(part => part.trim());
    
    for (const part of parts) {
      if (part.includes('-')) {
        const [start, end] = part.split('-').map(num => parseInt(num.trim()));
        if (start >= 1 && end <= totalPages && start <= end) {
          for (let i = start; i <= end; i++) {
            if (!ranges.includes(i)) ranges.push(i);
          }
        }
      } else {
        const pageNum = parseInt(part);
        if (pageNum >= 1 && pageNum <= totalPages && !ranges.includes(pageNum)) {
          ranges.push(pageNum);
        }
      }
    }
    
    return ranges.sort((a, b) => a - b);
  };

  // Parse individual pages (e.g., "1, 3, 5, 10")
  const parseIndividualPages = (pageString, totalPages) => {
    if (!pageString.trim()) return [];
    
    const pages = pageString.split(',')
      .map(page => parseInt(page.trim()))
      .filter(page => !isNaN(page) && page >= 1 && page <= totalPages);
    
    return [...new Set(pages)].sort((a, b) => a - b);
  };

  const handleSplit = async () => {
    if (!selectedFile || !fileInfo) {
      setError("Please select a PDF file first");
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      let splitOptions = {};

      switch (splitMethod) {
        case 'all':
          // Split into individual pages
          splitOptions = { splitType: 'pages' };
          break;
        
        case 'range':
          const ranges = parsePageRanges(pageRanges, fileInfo.pageCount);
          if (ranges.length === 0) {
            setError("Please enter valid page ranges (e.g., 1-5, 10-15)");
            setProcessing(false);
            return;
          }
          
          // Convert individual pages to ranges for the existing utility
          const pageRangeObjects = ranges.map(pageNum => ({
            start: pageNum,
            end: pageNum
          }));
          
          splitOptions = { 
            splitType: 'ranges', 
            pageRanges: pageRangeObjects 
          };
          break;
        
        case 'individual':
          const pages = parseIndividualPages(individualPages, fileInfo.pageCount);
          if (pages.length === 0) {
            setError("Please enter valid page numbers (e.g., 1, 3, 5, 10)");
            setProcessing(false);
            return;
          }
          
          // Convert individual pages to ranges for the existing utility
          const individualRangeObjects = pages.map(pageNum => ({
            start: pageNum,
            end: pageNum
          }));
          
          splitOptions = { 
            splitType: 'ranges', 
            pageRanges: individualRangeObjects 
          };
          break;
        
        default:
          setError("Please select a split method");
          setProcessing(false);
          return;
      }

      // Split PDF using existing utility function
      const splitResults = await splitPdf(selectedFile, splitOptions);
      
      const splitFilesData = splitResults.map((result, index) => ({
        id: Date.now() + index,
        file: result.file,
        url: URL.createObjectURL(result.file),
        filename: result.file.name,
        pageNumber: result.pageNumber || (splitMethod === 'all' ? index + 1 : null),
        pageRange: result.pageRange,
        pageCount: result.pageCount || 1,
        size: result.file.size
      }));

      setSplitFiles(splitFilesData);
    } catch (err) {
      setError("Failed to split PDF file. Please try again.");
      console.error("Split error:", err);
    } finally {
      setProcessing(false);
    }
  };

  const downloadFile = (splitFile) => {
    downloadSingleFile(splitFile.url, splitFile.filename);
  };

  const downloadAllAsZip = async () => {
    await downloadPdfResults(splitFiles, fileInfo.fileName, 'split');
  };

  return (
    <div className="space-y-8">
      {/* Step 1: Upload File */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          1. Upload PDF File
        </h2>

        <FileUpload
          multiple={false}
          accept=".pdf"
          onFileSelect={handleFileSelect}
          // clearFileInstruction={clearFiles}
          placeholder="Drop PDF file here or click to browse"
          helper="Select a PDF file to split into separate pages or extract specific pages."
        />

        {error && (
          <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
          </div>
        )}
      </div>

      {/* Step 2: Choose Split Method */}
      {fileInfo && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            2. Choose Split Method
          </h2>

          <div className="space-y-4">
            {/* Split All Pages */}
            <label className="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <input
                type="radio"
                name="splitMethod"
                value="all"
                checked={splitMethod === 'all'}
                onChange={(e) => handleSplitMethodChange(e.target.value)}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">
                  Split into individual pages
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Extract every page as a separate PDF file ({fileInfo.pageCount} files will be created)
                </div>
              </div>
            </label>

            {/* Page Ranges */}
            <label className="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <input
                type="radio"
                name="splitMethod"
                value="range"
                checked={splitMethod === 'range'}
                onChange={(e) => handleSplitMethodChange(e.target.value)}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">
                  Extract page ranges
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Extract specific page ranges (e.g., 1-5, 10-15, 20)
                </div>
                {splitMethod === 'range' && (
                  <input
                    type="text"
                    value={pageRanges}
                    onChange={(e) => setPageRanges(e.target.value)}
                    placeholder="e.g., 1-5, 10-15, 20"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                )}
              </div>
            </label>

            {/* Individual Pages */}
            <label className="flex items-start space-x-3 p-4 border border-gray-200 dark:border-gray-600 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700">
              <input
                type="radio"
                name="splitMethod"
                value="individual"
                checked={splitMethod === 'individual'}
                onChange={(e) => handleSplitMethodChange(e.target.value)}
                className="mt-1"
              />
              <div className="flex-1">
                <div className="font-medium text-gray-900 dark:text-white">
                  Extract specific pages
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Extract individual pages by page number (e.g., 1, 3, 5, 10)
                </div>
                {splitMethod === 'individual' && (
                  <input
                    type="text"
                    value={individualPages}
                    onChange={(e) => setIndividualPages(e.target.value)}
                    placeholder="e.g., 1, 3, 5, 10"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                  />
                )}
              </div>
            </label>
          </div>

          {/* Split Button */}
          <div className="mt-6 text-center">
            <Button
              onClick={handleSplit}
              disabled={processing || !fileInfo}
              className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {processing ? (
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  <span>Splitting PDF...</span>
                </div>
              ) : (
                'Split PDF'
              )}
            </Button>
          </div>
        </div>
      )}

      {/* PDF Preview Component */}
      {fileInfo && (
        <PDFPreview
          file={selectedFile}
          onPageSelect={handlePageSelect}
          selectedPages={selectedPages}
          selectionMode={splitMethod === 'individual'}
          showToggle={true}
        />
      )}

      {/* Step 3: Download Split Files */}
      {splitFiles.length > 0 && (
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              3. Download Split Files ({splitFiles.length} files)
            </h2>
            {splitFiles.length > 1 && (
              <Button
                onClick={downloadAllAsZip}
                variant="outline"
                className="text-sm"
              >
                Download All
              </Button>
            )}
          </div>

          <div className="space-y-3 max-h-96 overflow-y-auto">
            {splitFiles.map((splitFile) => (
              <div
                key={splitFile.id}
                className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400 rounded-full text-xs font-medium">
                    {splitFile.pageRange || splitFile.pageNumber}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    
                    <div>
                      <div className="font-medium text-gray-900 dark:text-white">
                        {splitFile.filename}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {splitFile.pageRange ? `Pages ${splitFile.pageRange}` : `Page ${splitFile.pageNumber}`} • {formatFileSize(splitFile.size)}
                        {splitFile.pageCount && splitFile.pageCount > 1 && (
                          <span> • {splitFile.pageCount} pages</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    onClick={() => downloadFile(splitFile)}
                    variant="outline"
                    size="sm"
                    className="text-sm"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Download
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="mt-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
            <div className="flex items-center space-x-2 text-green-700 dark:text-green-300">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-medium">
                Successfully split {fileInfo.fileName} into {splitFiles.length} files
              </span>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              Total extracted files: {splitFiles.length}
              {splitFiles.some(f => f.pageRange) && (
                <span> • Page ranges: {splitFiles.map(f => f.pageRange || f.pageNumber).join(', ')}</span>
              )}
            </p>
          </div>
        </div>
      )}

      {/* Tips Section */}
      {!splitFiles.length && fileInfo && (
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-300 mb-3">
            💡 Tips for Splitting PDFs
          </h3>
          <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Use page ranges like "1-5" to extract pages 1 through 5</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Combine ranges and individual pages: "1-3, 7, 10-12"</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>Individual pages method is perfect for extracting specific forms or signatures</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-500 mt-1">•</span>
              <span>All processing happens in your browser - your files never leave your device</span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}