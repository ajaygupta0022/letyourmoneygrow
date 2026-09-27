import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    // Android browsers commonly use a 980px CSS viewport in "Desktop site"
    // mode. Starting the existing desktop layout at 960px preserves the laptop
    // design while letting that browser mode use the same desktop composition.
    screens: {
      ...defaultTheme.screens,
      lg: "960px",
    },
    extend: {
      colors: {
        "error-container": "#ffdad6",
        "secondary": "#EA580C", // Vibrant warm orange
        "secondary-hover": "#C2410C",
        "surface-container-low": "#fff7ed",
        "tertiary-container": "#1e293b",
        "inverse-on-surface": "#f8fafc",
        "surface-dim": "#f1f5f9",
        "on-surface-variant": "#475569",
        "on-error-container": "#93000a",
        "on-primary": "#ffffff",
        "primary-container": "#0f172a", // Deep charcoal/black
        "error": "#ba1a1a",
        "surface-container-high": "#ffedd5",
        "on-secondary-container": "#9a3412",
        "secondary-fixed": "#ffedd5",
        "primary": "#0f172a",
        "on-background": "#0f172a",
        "on-surface": "#0f172a",
        "surface-container-lowest": "#ffffff",
        "surface": "#ffffff",
        "on-error": "#ffffff",
        "on-secondary": "#ffffff",
        "inverse-surface": "#1e293b",
        "surface-bright": "#ffffff",
        "background": "#fafaf9",
        "amber-accent": "#F59E0B",
        "brand-orange": "#F97316",
        "outline-variant": "#e2e8f0",
        "outline": "#94a3b8"
      },
      borderRadius: {
        "DEFAULT": "0.25rem",
        "lg": "0.5rem",
        "xl": "0.75rem",
        "full": "9999px"
      },
      fontFamily: {
        "title": ["Plus Jakarta Sans", "sans-serif"],
        "display": ["Plus Jakarta Sans", "sans-serif"],
        "headline-lg": ["Plus Jakarta Sans", "sans-serif"],
        "headline-md": ["Plus Jakarta Sans", "sans-serif"],
        "headline-sm": ["Plus Jakarta Sans", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "body-sm": ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
