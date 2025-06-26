/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        /** utility → hsl(var(--token)/<alpha-value>) keeps design-tokens
         *   and lets you adjust opacity with Tailwind’s `/xx` syntax
         *   e.g. bg-primary/70
         */
        bg:       'hsl(var(--color-bg) / <alpha-value>)',
        fg:       'hsl(var(--color-fg) / <alpha-value>)',
        primary:  'hsl(var(--color-primary) / <alpha-value>)',
        accent:   'hsl(var(--color-accent) / <alpha-value>)',
        muted:    'hsl(var(--color-muted) / <alpha-value>)',
        textMain: 'hsl(var(--color-text-main) / <alpha-value>)',
        textMuted:'hsl(var(--color-text-muted) / <alpha-value>)',
        textAccent:'hsl(var(--color-text-accent) / <alpha-value>)',
      },
    },
  },

  plugins: [
    require('@tailwindcss/typography'),   // prose classes for blog posts/FAQs
  ],
};
