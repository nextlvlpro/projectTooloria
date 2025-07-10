export function Button({
    children,
    type = "button",
    variant = "primary",
    size = "md",
    className = "",
    disabled = false,
    ...props
}) {
    const baseStyles = `inline-flex items-center justify-center font-semibold transition-colors duration-200 rounded-md focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`;

    const sizeStyles = {
        sm: "text-sm px-3 py-1.5",
        md: "text-base px-4 py-2",
        lg: "text-lg px-5 py-2.5",
    };

    const variantStyles = {
        primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
        secondary: "bg-secondary text-white hover:bg-border/80 focus:ring-border",
        outline: "border border-primary text-primary hover:bg-primary/10 focus:ring-primary",
        danger: "bg-danger text-white hover:bg-danger/90 focus:ring-danger",
    };

    return (
        <button
            type={type}
            disabled={disabled}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
