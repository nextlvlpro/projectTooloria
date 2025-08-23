'use client';

import { forwardRef } from 'react';
import { LoadingSpinner } from './LoadingSpinner';

const Button = forwardRef(({
  children,
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  className = '',
  leftIcon,
  rightIcon,
  fullWidth = false,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none';
  
  const variants = {
    primary: 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white shadow-md hover:shadow-lg focus:ring-blue-500 hover:scale-105 active:scale-95',
    
    secondary: 'bg-purple-500 hover:bg-purple-600 active:bg-purple-700 text-white shadow-md hover:shadow-lg focus:ring-purple-500 hover:scale-105 active:scale-95',
    
    success: 'bg-green-500 hover:bg-green-600 active:bg-green-700 text-white shadow-md hover:shadow-lg focus:ring-green-500 hover:scale-105 active:scale-95',
    
    warning: 'bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 text-white shadow-md hover:shadow-lg focus:ring-yellow-500 hover:scale-105 active:scale-95',
    
    error: 'bg-red-500 hover:bg-red-600 active:bg-red-700 text-white shadow-md hover:shadow-lg focus:ring-red-500 hover:scale-105 active:scale-95',
    
    outline: 'border-2 border-blue-500 text-blue-500 hover:bg-blue-50 active:bg-blue-100 focus:ring-blue-500 hover:scale-105 active:scale-95',
    
    ghost: 'text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:ring-gray-500 hover:scale-105 active:scale-95',
    
    link: 'text-blue-500 hover:text-blue-600 underline-offset-4 hover:underline focus:ring-blue-500',
    
    gradient: 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-md hover:shadow-lg focus:ring-blue-500 hover:scale-105 active:scale-95'
  };
  
  const sizes = {
    xs: 'px-2.5 py-1.5 text-xs gap-1 min-h-[28px]',
    sm: 'px-3 py-2 text-sm gap-1.5 min-h-[32px]',
    md: 'px-4 py-2.5 text-sm gap-2 min-h-[40px]',
    lg: 'px-6 py-3 text-base gap-2 min-h-[48px]',
    xl: 'px-8 py-4 text-lg gap-2.5 min-h-[56px]'
  };
  
  const iconSizes = {
    xs: 'w-3 h-3',
    sm: 'w-4 h-4',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6'
  };
  
  const isDisabled = disabled || loading;
  
  return (
    <button
      ref={ref}
      className={`
        ${baseStyles}
        ${variants[variant]}
        ${sizes[size]}
        ${fullWidth ? 'w-full' : ''}
        ${isDisabled ? 'transform-none cursor-not-allowed' : ''}
        ${className}
      `}
      disabled={isDisabled}
      {...props}
    >
      {loading && (
        <LoadingSpinner size={iconSizes[size]} className="text-current" />
      )}
      {!loading && leftIcon && (
        <span className={`${iconSizes[size]} flex-shrink-0`}>{leftIcon}</span>
      )}
      <span className={loading ? 'ml-2' : ''}>{children}</span>
      {!loading && rightIcon && (
        <span className={`${iconSizes[size]} flex-shrink-0`}>{rightIcon}</span>
      )}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };