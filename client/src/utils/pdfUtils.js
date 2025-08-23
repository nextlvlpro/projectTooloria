// utils/pdfUtils.js
// Install: npm install pdf-lib

import { PDFDocument } from 'pdf-lib';

/**
 * Get PDF basic information
 */
export const getPdfInfo = async (file) => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);
    
    return {
      pageCount: pdf.getPageCount(),
      fileSize: file.size,
      fileName: file.name,
      title: pdf.getTitle() || file.name.replace('.pdf', ''),
    };
  } catch (error) {
    console.error('Error reading PDF info:', error);
    throw new Error('Failed to read PDF information. Please ensure the file is a valid PDF.');
  }
};

/**
 * Validate PDF file
 */
export const validatePdf = async (file) => {
  if (file.type !== 'application/pdf') {
    throw new Error('File must be a PDF');
  }
  
  try {
    const arrayBuffer = await file.arrayBuffer();
    await PDFDocument.load(arrayBuffer);
    return true;
  } catch (error) {
    throw new Error('Invalid PDF file format');
  }
};

/**
 * Merge multiple PDF files into one
 */
export const mergePdfs = async (files) => {
  try {
    const mergedPdf = await PDFDocument.create();
    
    for (const file of files) {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await PDFDocument.load(arrayBuffer);
      const copiedPages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
      copiedPages.forEach((page) => mergedPdf.addPage(page));
    }

    // Set metadata
    mergedPdf.setTitle(`Merged PDF - ${new Date().toLocaleDateString()}`);
    mergedPdf.setAuthor('Tooloria PDF Merger');
    mergedPdf.setCreator('Tooloria');
    mergedPdf.setProducer('Tooloria PDF Tools');
    mergedPdf.setCreationDate(new Date());

    const pdfBytes = await mergedPdf.save();
    return new File([pdfBytes], 'merged-document.pdf', { type: 'application/pdf' });
  } catch (error) {
    console.error('Error merging PDFs:', error);
    throw new Error('Failed to merge PDF files. Please ensure all files are valid PDFs.');
  }
};

/**
 * Split PDF into separate pages or ranges
 */
export const splitPdf = async (file, options = {}) => {
  const { splitType = 'pages', pageRanges = [] } = options;
  
  try {
    const arrayBuffer = await file.arrayBuffer();
    const sourcePdf = await PDFDocument.load(arrayBuffer);
    const totalPages = sourcePdf.getPageCount();
    
    const results = [];

    if (splitType === 'pages') {
      // Split into individual pages
      for (let i = 0; i < totalPages; i++) {
        const newPdf = await PDFDocument.create();
        const [copiedPage] = await newPdf.copyPages(sourcePdf, [i]);
        newPdf.addPage(copiedPage);
        
        newPdf.setTitle(`${file.name} - Page ${i + 1}`);
        newPdf.setAuthor('Tooloria PDF Splitter');
        newPdf.setCreator('Tooloria');
        
        const pdfBytes = await newPdf.save();
        const fileName = `${file.name.replace('.pdf', '')}-page-${i + 1}.pdf`;
        
        results.push({
          file: new File([pdfBytes], fileName, { type: 'application/pdf' }),
          pageNumber: i + 1,
          pageRange: `${i + 1}`,
        });
      }
    } else if (splitType === 'ranges' && pageRanges.length > 0) {
      // Split by custom ranges
      for (let rangeIndex = 0; rangeIndex < pageRanges.length; rangeIndex++) {
        const { start, end } = pageRanges[rangeIndex];
        const newPdf = await PDFDocument.create();
        
        const startIdx = Math.max(1, Math.min(start, totalPages)) - 1;
        const endIdx = Math.max(startIdx, Math.min(end, totalPages)) - 1;
        
        const pageIndices = [];
        for (let i = startIdx; i <= endIdx; i++) {
          pageIndices.push(i);
        }
        
        const copiedPages = await newPdf.copyPages(sourcePdf, pageIndices);
        copiedPages.forEach(page => newPdf.addPage(page));
        
        newPdf.setTitle(`${file.name} - Pages ${start}-${end}`);
        newPdf.setAuthor('Tooloria PDF Splitter');
        newPdf.setCreator('Tooloria');
        
        const pdfBytes = await newPdf.save();
        const fileName = `${file.name.replace('.pdf', '')}-pages-${start}-${end}.pdf`;
        
        results.push({
          file: new File([pdfBytes], fileName, { type: 'application/pdf' }),
          pageRange: `${start}-${end}`,
          pageCount: endIdx - startIdx + 1
        });
      }
    }

    return results;
  } catch (error) {
    console.error('Error splitting PDF:', error);
    throw new Error('Failed to split PDF. Please ensure the file is a valid PDF.');
  }
};

/**
 * Compress PDF (basic compression)
 */
export const compressPdf = async (file, compressionLevel = 'medium') => {
  try {
    const arrayBuffer = await file.arrayBuffer();
    const pdf = await PDFDocument.load(arrayBuffer);
    
    // Basic compression by optimizing save options
    const pdfBytes = await pdf.save({
      useObjectStreams: true,
      addDefaultPage: false,
      objectsPerTick: 50,
    });

    const compressedFile = new File([pdfBytes], file.name, { type: 'application/pdf' });
    
    return {
      original: file,
      compressed: compressedFile,
      originalSize: file.size,
      compressedSize: compressedFile.size,
      compressionRatio: Math.round((1 - compressedFile.size / file.size) * 100),
      url: URL.createObjectURL(compressedFile)
    };
  } catch (error) {
    console.error('Error compressing PDF:', error);
    throw new Error('Failed to compress PDF. Please ensure the file is a valid PDF.');
  }
};

/**
 * Convert images to PDF
 */
export const imagesToPdf = async (imageFiles, options = {}) => {
  const {
    pageSize = 'A4', // 'A4', 'Letter', 'Legal', etc.
    orientation = 'portrait', // 'portrait' or 'landscape'
    margin = 20,
    imageScaling = 'fit', // 'fit', 'fill', 'stretch'
  } = options;

  try {
    const pdf = await PDFDocument.create();
    
    // Page size configurations
    const pageSizes = {
      A4: [595.28, 841.89],
      Letter: [612, 792],
      Legal: [612, 1008],
      A3: [841.89, 1190.55],
      A5: [419.53, 595.28]
    };
    
    let [pageWidth, pageHeight] = pageSizes[pageSize] || pageSizes.A4;
    
    if (orientation === 'landscape') {
      [pageWidth, pageHeight] = [pageHeight, pageWidth];
    }

    for (const imageFile of imageFiles) {
      const imageBytes = await imageFile.arrayBuffer();
      
      let image;
      if (imageFile.type.includes('png')) {
        image = await pdf.embedPng(imageBytes);
      } else if (imageFile.type.includes('jpeg') || imageFile.type.includes('jpg')) {
        image = await pdf.embedJpg(imageBytes);
      } else {
        console.warn(`Unsupported image format: ${imageFile.type}. Skipping ${imageFile.name}`);
        continue;
      }

      const page = pdf.addPage([pageWidth, pageHeight]);
      const { width: imgWidth, height: imgHeight } = image.scale(1);
      
      // Calculate image dimensions based on scaling option
      const availableWidth = pageWidth - (margin * 2);
      const availableHeight = pageHeight - (margin * 2);
      
      let drawWidth, drawHeight, x, y;
      
      switch (imageScaling) {
        case 'fit':
          const scaleRatio = Math.min(availableWidth / imgWidth, availableHeight / imgHeight);
          drawWidth = imgWidth * scaleRatio;
          drawHeight = imgHeight * scaleRatio;
          break;
        case 'fill':
          const fillRatio = Math.max(availableWidth / imgWidth, availableHeight / imgHeight);
          drawWidth = imgWidth * fillRatio;
          drawHeight = imgHeight * fillRatio;
          break;
        case 'stretch':
          drawWidth = availableWidth;
          drawHeight = availableHeight;
          break;
        default:
          drawWidth = Math.min(imgWidth, availableWidth);
          drawHeight = Math.min(imgHeight, availableHeight);
      }
      
      // Center the image
      x = (pageWidth - drawWidth) / 2;
      y = (pageHeight - drawHeight) / 2;
      
      page.drawImage(image, {
        x,
        y,
        width: drawWidth,
        height: drawHeight,
      });
    }

    // Set metadata
    pdf.setTitle(`Images to PDF - ${new Date().toLocaleDateString()}`);
    pdf.setAuthor('Tooloria Images to PDF');
    pdf.setSubject('PDF created from images');
    pdf.setCreator('Tooloria');
    pdf.setProducer('Tooloria PDF Tools');
    pdf.setCreationDate(new Date());

    const pdfBytes = await pdf.save();
    return new File([pdfBytes], 'images-to-pdf.pdf', { type: 'application/pdf' });
  } catch (error) {
    console.error('Error creating PDF from images:', error);
    throw new Error('Failed to create PDF from images. Please ensure all files are valid images.');
  }
};