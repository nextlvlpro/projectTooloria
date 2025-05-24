/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--color-bg) / <alpha-value>)",
        fg: "hsl(var(--color-fg) / <alpha-value>)",
        primary: "hsl(var(--color-primary) / <alpha-value>)",
        accent: "hsl(var(--color-accent) / <alpha-value>)",
        muted: "hsl(var(--color-muted) / <alpha-value>)",
        textMain: "hsl(var(--color-text-main) / <alpha-value>)",
        textMuted: "hsl(var(--color-text-muted) / <alpha-value>)",
        textAccent: "hsl(var(--color-text-accent) / <alpha-value>)",
      },
    },
  },
  plugins: [],
};
