'use client';

import { forwardRef, useRef, useState } from 'react';
import { Button } from './Button';

const FileUpload = forwardRef(({
  accept,
  multiple = false,
  maxSize,
  onFileSelect,
  onError,
  label,
  helper,
  error,
  disabled = false,
  variant = 'dropzone',
  placeholder = 'Choose files or drag and drop',
  className = '',
  clearFileInstruction,
  ...props
}, ref) => {
  const inputRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState([]);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const validateFile = (file) => {
    if (maxSize && file.size > maxSize) {
      return `File size must be less than ${formatFileSize(maxSize)}`;
    }
    if (accept) {
      const acceptedTypes = accept.split(',').map(type => type.trim());
      const isValidType = acceptedTypes.some(type => {
        if (type.startsWith('.')) {
          return file.name.toLowerCase().endsWith(type.toLowerCase());
        }
        return file.type.match(type.replace('*', '.*'));
      });
      if (!isValidType) {
        return `File type not supported. Accepted types: ${accept}`;
      }
    }
    return null;
  };

  const handleFiles = (fileList) => {
    console.log("file list",fileList);
    
    const filesArray = Array.from(fileList);
    const validFiles = [];
    const errors = [];

    filesArray.forEach(file => {
      const error = validateFile(file);
      if (error) {
        errors.push({ file: file.name, error });
      } else {
        validFiles.push(file);
      }
    });

    if (errors.length > 0 && onError) {
      onError(errors);
    }

    if (validFiles.length > 0) {
      console.log("already added files",files);
      
      console.log("valid files",validFiles);
      let allFiles = multiple ?  [...files, ...validFiles] : [validFiles[0]]
      
      
      setFiles(allFiles);
      if (onFileSelect) {
        onFileSelect(multiple ? allFiles : allFiles[0]);
      }
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (disabled) return;
    
    const droppedFiles = e.dataTransfer.files;
    if (droppedFiles?.length > 0) {
      handleFiles(droppedFiles);
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleInputChange = (e) => {
    if (e.target.files?.length > 0) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    if (!multiple && inputRef.current){
      inputRef.current.value = '';
    }
    setFiles(newFiles);
    if (onFileSelect) {
      onFileSelect(multiple ? newFiles : null);
    }
  };

  const openFileDialog = () => {
    if (!disabled && inputRef.current) {
      inputRef.current.click();
    }
  };

  const clearAllFiles = () => {
    setFiles([]);
    if (inputRef.current) {
      inputRef.current.value = ''; // Reset the input so same file can be selected again
    }
    if (clearFileInstruction) {
      clearFileInstruction();
    }
    if (onFileSelect) {
      onFileSelect(multiple ? [] : null);
    }
  };

  // Button variant
  if (variant === 'button') {
    return (
      <div className={className}>
        {label && (
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            {label}
            {files.length > 0 && (
              <span className="ml-2 text-primary-500">({files.length} selected)</span>
            )}
          </label>
        )}
        
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          onChange={handleInputChange}
          className="hidden"
          {...props}
        />
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={openFileDialog}
            disabled={disabled}
            leftIcon={
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
              </svg>
            }
          >
            Choose Files
          </Button>
          
          {files.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFiles}
              className="text-gray-500 hover:text-error-500"
            >
              Clear All
            </Button>
          )}
        </div>
        
        {files.length > 0 && (
          <div className="mt-3 space-y-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-300 truncate max-w-xs">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-500">({formatFileSize(file.size)})</span>
                </div>
                <button
                  onClick={() => removeFile(index)}
                  className="text-error-500 hover:text-error-600 p-1 rounded hover:bg-error-50 dark:hover:bg-error-900/20"
                  title="Remove file"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        )}
        
        {error && (
          <p className="mt-1 text-sm text-error-500 dark:text-error-400 flex items-center gap-1">
            <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </p>
        )}
        
        {helper && !error && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            {helper}
          </p>
        )}
      </div>
    );
  }

  // Dropzone variant (default)
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {files.length > 0 && (
            <span className="ml-2 text-primary-500">({files.length} selected)</span>
          )}
        </label>
      )}
      
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        disabled={disabled}
        onChange={handleInputChange}
        className="hidden"
        {...props}
      />
      
      <div
        onClick={openFileDialog}
        onDrop={handleDrop}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        className={`
          relative border-2 border-dashed rounded-xl p-8 text-center
          transition-all duration-200 cursor-pointer
          ${dragActive 
            ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
            : 'border-gray-300 dark:border-gray-600 hover:border-primary-400 hover:bg-gray-50 dark:hover:bg-gray-800'
          }
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        <div className="flex flex-col items-center space-y-4">
          <div className={`p-3 rounded-full transition-colors ${
            dragActive 
              ? 'bg-primary-100 text-primary-600 dark:bg-primary-900/30 dark:text-primary-400' 
              : 'bg-gray-100 text-gray-400 dark:bg-gray-700 dark:text-gray-500'
          }`}>
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300">
              {dragActive ? 'Drop files here' : placeholder}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {accept && `Supported: ${accept.replace(/\./g, '').toUpperCase()}`}
              {maxSize && ` • Max: ${formatFileSize(maxSize)}`}
              {multiple && ' • Multiple files allowed'}
            </p>
            {!dragActive && (
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Click to browse or drag and drop
              </p>
            )}
          </div>
        </div>
      </div>
      
      {files.length > 0 && (
        <div className="mt-4">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Selected Files ({files.length})
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFiles}
              className="text-gray-500 hover:text-error-500"
            >
              Clear All
            </Button>
          </div>
          
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 truncate">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {formatFileSize(file.size)} • {file.type || 'Unknown type'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFile(index);
                  }}
                  className="p-2 text-gray-400 hover:text-error-500 dark:text-gray-500 dark:hover:text-error-400 transition-colors rounded hover:bg-error-50 dark:hover:bg-error-900/20"
                  title="Remove file"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {error && (
        <p className="mt-2 text-sm text-error-500 dark:text-error-400 flex items-center gap-1">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {error}
        </p>
      )}
      
      {helper && !error && (
        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
          {helper}
        </p>
      )}
    </div>
  );
});

FileUpload.displayName = 'FileUpload';

export { FileUpload };