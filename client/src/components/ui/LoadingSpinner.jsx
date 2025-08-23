'use client';

export function LoadingSpinner({ 
  size = 'w-5 h-5', 
  className = '',
  variant = 'primary' 
}) {
  const variants = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-500',
    success: 'text-success-500',
    warning: 'text-warning-500',
    error: 'text-error-500',
    neutral: 'text-gray-500',
    current: 'text-current',
    white: 'text-white'
  };

  return (
    <svg
      className={`animate-spin ${size} ${variants[variant]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
}

// Loading dots animation
export function LoadingDots({ 
  className = '', 
  variant = 'primary',
  size = 'md'
}) {
  const variants = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
    neutral: 'bg-gray-500',
    white: 'bg-white'
  };

  const sizes = {
    sm: 'w-1.5 h-1.5',
    md: 'w-2 h-2',
    lg: 'w-3 h-3'
  };

  return (
    <div className={`flex space-x-1 ${className}`}>
      <div 
        className={`${sizes[size]} ${variants[variant]} rounded-full animate-bounce`} 
        style={{ animationDelay: '0ms' }} 
      />
      <div 
        className={`${sizes[size]} ${variants[variant]} rounded-full animate-bounce`} 
        style={{ animationDelay: '150ms' }} 
      />
      <div 
        className={`${sizes[size]} ${variants[variant]} rounded-full animate-bounce`} 
        style={{ animationDelay: '300ms' }} 
      />
    </div>
  );
}

// Pulse loading animation
export function LoadingPulse({ 
  className = '', 
  variant = 'primary',
  size = 'md'
}) {
  const variants = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500',
    neutral: 'bg-gray-500'
  };

  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizes[size]} ${variants[variant]} rounded-full animate-pulse ${className}`} />
  );
}

// Progress bar component
export function ProgressBar({ 
  progress = 0, 
  variant = 'primary',
  size = 'md',
  showLabel = false,
  className = ''
}) {
  const variants = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    success: 'bg-success-500',
    warning: 'bg-warning-500',
    error: 'bg-error-500'
  };

  const sizes = {
    sm: 'h-1',
    md: 'h-2',
    lg: 'h-3'
  };

  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
            Progress
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {Math.round(clampedProgress)}%
          </span>
        </div>
      )}
      <div className={`w-full bg-gray-200 dark:bg-gray-700 rounded-full ${sizes[size]} overflow-hidden`}>
        <div
          className={`${sizes[size]} ${variants[variant]} rounded-full transition-all duration-300 ease-out`}
          style={{ width: `${clampedProgress}%` }}
        />
      </div>
    </div>
  );
}

// Skeleton loader for content
export function SkeletonLoader({ 
  lines = 3,
  className = '',
  variant = 'rounded'
}) {
  const variants = {
    rounded: 'rounded-md',
    circle: 'rounded-full',
    square: 'rounded-none'
  };

  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {Array.from({ length: lines }, (_, index) => (
        <div
          key={index}
          className={`h-4 bg-gray-300 dark:bg-gray-600 ${variants[variant]}`}
          style={{
            width: index === lines - 1 ? '75%' : '100%'
          }}
        />
      ))}
    </div>
  );
}

// Full page loading overlay
export function LoadingOverlay({ 
  visible = false, 
  message = 'Loading...',
  variant = 'primary'
}) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl flex flex-col items-center space-y-4 max-w-sm mx-4">
        <LoadingSpinner size="w-8 h-8" variant={variant} />
        <p className="text-gray-700 dark:text-gray-300 font-medium">
          {message}
        </p>
      </div>
    </div>
  );
}