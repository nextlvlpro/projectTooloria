'use client';

import { forwardRef, useState } from 'react';

const Input = forwardRef(({
  label,
  type = 'text',
  placeholder,
  error,
  helper,
  leftIcon,
  rightIcon,
  size = 'md',
  variant = 'default',
  disabled = false,
  required = false,
  className = '',
  onFocus,
  onBlur,
  ...props
}, ref) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleFocus = (e) => {
    setFocused(true);
    onFocus?.(e);
  };
  
  const handleBlur = (e) => {
    setFocused(false);
    onBlur?.(e);
  };
  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const baseStyles = 'block w-full rounded-xl border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-gray-400 dark:placeholder:text-gray-500';
  
  const variants = {
    default: `
      border-gray-300 bg-white text-gray-900
      hover:border-gray-400 focus:border-primary-500 focus:ring-primary-500/20
      dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100
      dark:hover:border-gray-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/20
    `,
    filled: `
      border-transparent bg-gray-100 text-gray-900
      hover:bg-gray-200 focus:bg-white focus:border-primary-500 focus:ring-primary-500/20
      dark:bg-gray-700 dark:text-gray-100
      dark:hover:bg-gray-600 dark:focus:bg-gray-800 dark:focus:border-primary-400 dark:focus:ring-primary-400/20
    `
  };
  
  const sizes = {
    sm: 'px-3 py-2 text-sm min-h-[36px]',
    md: 'px-4 py-2.5 text-sm min-h-[40px]',
    lg: 'px-4 py-3 text-base min-h-[48px]'
  };
  
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-5 h-5'
  };
  
  const errorStyles = error ? `
    border-error-500 focus:border-error-500 focus:ring-error-500/20
    dark:border-error-400 dark:focus:border-error-400 dark:focus:ring-error-400/20
  ` : '';
  
  const hasLeftIcon = leftIcon;
  const hasRightIcon = rightIcon || type === 'password';
  
  const paddingWithIcons = `
    ${hasLeftIcon ? (size === 'sm' ? 'pl-9' : size === 'md' ? 'pl-10' : 'pl-11') : ''}
    ${hasRightIcon ? (size === 'sm' ? 'pr-9' : size === 'md' ? 'pr-10' : 'pr-11') : ''}
  `;

  const inputType = type === 'password' ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
          {required && <span className="text-error-500 ml-1">*</span>}
        </label>
      )}
      
      <div className="relative">
        {hasLeftIcon && (
          <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 ${iconSizes[size]}`}>
            {leftIcon}
          </div>
        )}
        
        <input
          ref={ref}
          type={inputType}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          className={`
            ${baseStyles}
            ${variants[variant]}
            ${sizes[size]}
            ${errorStyles}
            ${paddingWithIcons}
            ${focused ? 'ring-2' : ''}
          `}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        
        {type === 'password' && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-gray-500 dark:hover:text-gray-300 ${iconSizes[size]}`}
          >
            {showPassword ? (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
              </svg>
            ) : (
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            )}
          </button>
        )}
        
        {rightIcon && type !== 'password' && (
          <div className={`absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 ${iconSizes[size]}`}>
            {rightIcon}
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
    </div>
  );
});

Input.displayName = 'Input';

export { Input };