/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0c0c0c', // Deepest background - slightly softer black
          800: '#141414', // Card background
          700: '#1e1e1e', // Hover states
          600: '#2a2a2a', // Borders/dividers
        },
        moss: {
          400: '#a3b18a', // Lighter accent, sage-like
          500: '#8f9f76', // Base moss
          600: '#75885c', // Primary button / accent
          700: '#5c6b48', // Hover states
          800: '#465235', // Deep moss
          900: '#2a331e', // Subtle background
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}
