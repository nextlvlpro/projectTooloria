export function Loader({ size = "md", color = "primary", className = "", ...props }) {
  const sizeClasses = {
    sm: "w-7 h-7 border-2",
    md: "w-14 h-14 border-4",
    lg: "w-20 h-20 border-4",
  };

  const colorMap = {
    primary: "border-primary border-t-transparent",
    secondary: "border-secondary border-t-transparent",
    danger: "border-danger border-t-transparent",
    accent: "border-accent border-t-transparent",
    subtle: "border-subtle border-t-transparent",
    black: "border-black border-t-transparent",
    white: "border-white border-t-transparent",
  };

  return (
    <span
      role="status"
      aria-label="Loading..."
      className={`inline-block rounded-full animate-spin ${sizeClasses[size]} ${colorMap[color] || colorMap.primary} ${className}`}
      {...props}
    />
  );
}
