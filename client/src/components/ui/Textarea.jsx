'use client';

import { forwardRef, useState } from 'react';

const Textarea = forwardRef(({
  label,
  placeholder,
  error,
  helper,
  rows = 4,
  disabled = false,
  required = false,
  maxLength,
  showCount = false,
  className = '',
  onFocus,
  onBlur,
  onChange,
  value,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);
  const [charCount, setCharCount] = useState(value?.length || 0);
  
  const handleFocus = (e) => {
    setFocused(true);
    onFocus?.(e);
  };
  
  const handleBlur = (e) => {
    setFocused(false);
    onBlur?.(e);
  };
  
  const handleChange = (e) => {
    setCharCount(e.target.value.length);
    onChange?.(e);
  };
  
  const baseStyles = 'block w-full rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400 dark:placeholder:text-gray-500 resize-y';
  
  const defaultStyles = `
    border-gray-300 bg-white text-gray-900
    hover:border-gray-400 focus:border-primary-500 focus:ring-primary-500/20
    dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
    dark:hover:border-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20
  `;
  
  const errorStyles = error ? `
    border-error-500 focus:border-error-500 focus:ring-error-500/20
    dark:border-error-400 dark:focus:border-error-400 dark:focus:ring-error-400/20
  ` : '';

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        <textarea
          ref={ref}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          rows={rows}
          maxLength={maxLength}
          value={value}
          className={`
            ${baseStyles}
            ${defaultStyles}
            ${errorStyles}
            px-4 py-2.5 text-sm min-h-[100px]
            ${focused ? 'ring-2' : ''}
          `}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          {...props}
        />
        
        {showCount && maxLength && (
          <div className="absolute bottom-2 right-2 text-xs text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 px-2 py-1 rounded">
            {charCount}/{maxLength}
          </div>
        )}
      </div>
      
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
      
      {showCount && maxLength && !error && !helper && (
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400 text-right">
          {charCount}/{maxLength} characters
        </p>
      )}
    </div>
  );
});

Textarea.displayName = 'Textarea';

export { Textarea };