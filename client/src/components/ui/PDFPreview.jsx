// File: client/src/components/ui/PDFPreview.jsx
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { getPdfInfo } from '@/utils/pdfUtils';
import { PDFDocument } from 'pdf-lib';

export default function PDFPreview({
  file,
  onPageSelect,
  selectedPages = new Set(),
  selectionMode = false, // true for splitter, false for viewing only
  maxHeight = "24rem", // max-h-96 equivalent
  columns = {
    sm: 4,    // grid-cols-4
    md: 6,    // md:grid-cols-6  
    lg: 8     // lg:grid-cols-8
  },
  showToggle = true,
  className = ""
}) {
  const [pdfPreview, setPdfPreview] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Generate PDF preview when file changes
  useEffect(() => {
    if (file) {
      generatePdfPreview();
    } else {
      setPdfPreview(null);
      setShowPreview(false);
    }
  }, [file]);

  const generatePdfPreview = async () => {
    if (!file) return;
    
    setLoading(true);
    setError(null);

    try {
      const arrayBuffer = await file.arrayBuffer();
      const pdfDoc = await PDFDocument.load(arrayBuffer);
      const pageCount = pdfDoc.getPageCount();
      
      const preview = {
        pageCount,
        pages: [],
        title: file.name
      };

      // Create page data structure
      // In a full implementation, you'd use PDF.js to render actual thumbnails
      for (let i = 0; i < pageCount; i++) {
        preview.pages.push({
          pageNumber: i + 1,
          thumbnail: null, // Would contain base64 image data from PDF.js
          width: 595, // Standard A4 width in points
          height: 842 // Standard A4 height in points
        });
      }

      setPdfPreview(preview);
    } catch (err) {
      console.error('Error generating PDF preview:', err);
      setError('Failed to generate PDF preview');
      setPdfPreview(null);
    } finally {
      setLoading(false);
    }
  };

  const handlePageClick = (pageNumber) => {
    if (selectionMode && onPageSelect) {
      onPageSelect(pageNumber);
    }
  };

  const getGridClasses = () => {
    return `grid grid-cols-${columns.sm} md:grid-cols-${columns.md} lg:grid-cols-${columns.lg} gap-4`;
  };

  if (!file) return null;

  return (
    <div className={`bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 ${className}`}>
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          PDF Preview
          {pdfPreview && ` (${pdfPreview.pageCount} pages)`}
        </h3>
        
        {showToggle && (
          <Button
            onClick={() => setShowPreview(!showPreview)}
            variant="outline"
            size="sm"
            disabled={loading}
          >
            {loading ? 'Loading...' : showPreview ? 'Hide Preview' : 'Show Preview'}
            {!loading && (
              <svg 
                className={`w-4 h-4 ml-2 transition-transform ${showPreview ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </Button>
        )}
      </div>

      {/* Selection Info */}
      {showPreview && selectionMode && selectedPages.size > 0 && (
        <div className="mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <p className="text-sm text-blue-700 dark:text-blue-300">
            {selectedPages.size} page{selectedPages.size === 1 ? '' : 's'} selected: {Array.from(selectedPages).sort((a, b) => a - b).join(', ')}
          </p>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-700 dark:text-red-400 text-sm">{error}</p>
        </div>
      )}

      {/* Preview Grid */}
      {showPreview && pdfPreview && !loading && !error && (
        <div className={`${getGridClasses()} overflow-y-auto`} style={{ maxHeight }}>
          {pdfPreview.pages.map((page) => (
            <div
              key={page.pageNumber}
              className={`relative border-2 rounded-lg p-3 transition-all ${
                selectionMode ? 'cursor-pointer' : ''
              } ${
                selectionMode && selectedPages.has(page.pageNumber)
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20'
                  : 'border-gray-200 dark:border-gray-600 hover:border-gray-300 dark:hover:border-gray-500'
              }`}
              onClick={() => handlePageClick(page.pageNumber)}
              title={selectionMode ? `Click to ${selectedPages.has(page.pageNumber) ? 'deselect' : 'select'} page ${page.pageNumber}` : `Page ${page.pageNumber}`}
            >
              {/* Page Thumbnail */}
              <div className="aspect-[3/4] bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center mb-2 relative overflow-hidden">
                {page.thumbnail ? (
                  <img 
                    src={page.thumbnail} 
                    alt={`Page ${page.pageNumber}`}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  /* Placeholder for PDF page */
                  <div className="text-center p-2">
                    <svg className="w-8 h-8 text-gray-400 mx-auto mb-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    
                    {/* Mock PDF content lines */}
                    <div className="space-y-1 mt-2">
                      <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-full"></div>
                      <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mx-auto"></div>
                      <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-5/6 mx-auto"></div>
                      <div className="h-1 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mx-auto"></div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Page Number */}
              <div className="text-center">
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Page {page.pageNumber}
                </span>
              </div>

              {/* Selection Indicator */}
              {selectionMode && selectedPages.has(page.pageNumber) && (
                <div className="absolute top-1 right-1 w-5 h-5 bg-primary-500 text-white rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center py-8">
          <div className="flex items-center space-x-3 text-gray-600 dark:text-gray-400">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
            </svg>
            <span>Generating preview...</span>
          </div>
        </div>
      )}

      {/* Helper Text */}
      {showPreview && selectionMode && pdfPreview && !loading && (
        <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
            💡 Click on pages to select them for extraction. Selected pages will be highlighted in blue.
          </p>
        </div>
      )}
    </div>
  );
}