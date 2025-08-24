// File: client/src/utils/downloadUtils.js
import { formatFileSize } from './commonUtils';
import JSZip from 'jszip';

/**
 * Download a single file (extends existing downloadImage from commonUtils)
 * @param {string} url - File URL or Blob URL
 * @param {string} filename - Desired filename
 */
export function downloadSingleFile(url, filename) {
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

/**
 * Download multiple files as individual downloads with staggered timing
 * @param {Array} files - Array of {url, filename} objects
 * @param {number} delay - Delay between downloads in ms (default: 500ms)
 * @param {Function} onProgress - Optional progress callback
 */
export function downloadMultipleFiles(files, delay = 500, onProgress = null) {
  files.forEach((file, index) => {
    setTimeout(() => {
      downloadSingleFile(file.url, file.filename);
      if (onProgress) onProgress(index + 1, files.length);
    }, index * delay);
  });

  // Show completion message after all downloads
  if (files.length > 1) {
    setTimeout(() => {
      alert(`Successfully downloaded ${files.length} files!`);
    }, files.length * delay + 1000);
  }
}

/**
 * Create and download a real ZIP file using JSZip
 * @param {Array} files - Array of {file: Blob/File, filename: string} objects
 * @param {string} zipFilename - Name for the ZIP file
 * @param {Function} onProgress - Optional progress callback
 */
export async function downloadAsZip(files, zipFilename = 'download.zip', onProgress = null) {
  try {
    const zip = new JSZip();
    
    // Add each file to the ZIP
    for (let i = 0; i < files.length; i++) {
      const { file, filename } = files[i];
      
      // Add file to ZIP
      if (file instanceof Blob || file instanceof File) {
        zip.file(filename, file);
      } else {
        console.warn(`Skipping invalid file: ${filename}`);
      }
      
      // Report progress
      if (onProgress) {
        onProgress(i + 1, files.length, 'Adding files to ZIP...');
      }
    }

    // Generate ZIP file
    if (onProgress) {
      onProgress(files.length, files.length, 'Creating ZIP file...');
    }

    const zipBlob = await zip.generateAsync({
      type: 'blob',
      compression: 'DEFLATE',
      compressionOptions: {
        level: 6
      }
    });

    // Download the ZIP file
    const zipUrl = URL.createObjectURL(zipBlob);
    downloadSingleFile(zipUrl, zipFilename);
    
    // Cleanup
    setTimeout(() => {
      URL.revokeObjectURL(zipUrl);
    }, 1000);

    if (onProgress) {
      onProgress(files.length, files.length, 'ZIP download started!');
    }

    return true;
  } catch (error) {
    console.error('Error creating ZIP file:', error);
    
    // Fallback to individual downloads
    const shouldFallback = confirm(
      'Failed to create ZIP file. Would you like to download files individually instead?'
    );
    
    if (shouldFallback) {
      const fileUrls = files.map(f => ({
        url: f.file instanceof Blob ? URL.createObjectURL(f.file) : f.file,
        filename: f.filename
      }));
      downloadMultipleFiles(fileUrls);
    }
    
    return false;
  }
}

/**
 * Enhanced download function for PDF tools with real ZIP support
 * @param {Array} splitFiles - Array of split file objects with {file, filename, url} properties
 * @param {string} originalFilename - Original PDF filename for ZIP naming
 * @param {string} toolName - Tool name for ZIP naming (e.g., 'split', 'merge')
 * @param {Function} onProgress - Optional progress callback
 */
export async function downloadPdfResults(splitFiles, originalFilename, toolName = 'processed', onProgress = null) {
  if (splitFiles.length === 0) {
    alert('No files to download');
    return;
  }

  if (splitFiles.length === 1) {
    // Single file - direct download
    downloadSingleFile(splitFiles[0].url, splitFiles[0].filename);
    return;
  }

  // Multiple files - create ZIP
  const baseFilename = originalFilename.replace(/\.pdf$/i, '');
  const zipFilename = `${baseFilename}_${toolName}_${splitFiles.length}_files.zip`;

  // Prepare files for ZIP
  const filesForZip = splitFiles.map(sf => ({
    file: sf.file, // Use the actual File/Blob object
    filename: sf.filename
  }));

  const success = await downloadAsZip(filesForZip, zipFilename, onProgress);
  
  if (success) {
    // Cleanup blob URLs after successful ZIP creation
    setTimeout(() => {
      splitFiles.forEach(sf => {
        if (sf.url && sf.url.startsWith('blob:')) {
          URL.revokeObjectURL(sf.url);
        }
      });
    }, 2000);
  }
}

/**
 * Download multiple images as ZIP (for image tools)
 * @param {Array} processedImages - Array of processed image objects
 * @param {string} toolName - Tool name for ZIP naming
 */
export async function downloadImagesAsZip(processedImages, toolName = 'processed') {
  if (processedImages.length === 0) {
    alert('No images to download');
    return;
  }

  if (processedImages.length === 1) {
    // Single image - direct download
    const result = processedImages[0];
    downloadSingleFile(result.url, `${toolName}_${result.original.name}`);
    return;
  }

  // Multiple images - create ZIP
  const zipFilename = `${toolName}_images_${processedImages.length}_files.zip`;

  // Convert processed images to the format needed for ZIP
  const filesForZip = processedImages.map(result => ({
    file: result.resized || result.file, // Use processed file
    filename: `${toolName}_${result.original.name}`
  }));

  await downloadAsZip(filesForZip, zipFilename);
}