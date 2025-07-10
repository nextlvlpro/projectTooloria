/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary))',
        secondary: 'hsl(var(--color-secondary))',
        accent: 'hsl(var(--color-accent))',
        danger: 'hsl(var(--color-danger))',
        surface: 'hsl(var(--color-surface))',
        text: 'hsl(var(--color-text))',
        subtle: 'hsl(var(--color-subtle))',
        border: 'hsl(var(--color-border))',
      },

    },
  },
  plugins: [],
};
