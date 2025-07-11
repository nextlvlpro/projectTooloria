export function Button({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  ...props
}) {
  const baseStyles = `inline-flex items-center justify-center font-semibold transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`;

  const sizeStyles = {
    sm: "text-sm px-3 py-1.5 gap-2",
    md: "text-base px-4 py-2 gap-2",
    lg: "text-lg px-5 py-2.5 gap-2.5",
  };

  const variantStyles = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-secondary text-white hover:bg-secondary/90 focus:ring-secondary",
    outline: "border border-primary text-primary hover:bg-primary/50 focus:ring-primary",
    danger: "bg-danger/90 text-white hover:bg-danger/100 focus:ring-danger",
  };

  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {loading && (
        <span className="animate-spin rounded-full border-2 border-white/30 border-t-white w-4 h-4" />
      )}
      {children}
      
    </button>
  );
}
