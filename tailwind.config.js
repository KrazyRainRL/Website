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
          900: '#0a0d0a', // Deepest background
          800: '#111511', // Card background
          700: '#1a201a', // Hover states
          600: '#2d372d', // Borders/dividers
        },
        forest: {
          400: '#4ade80', // Lighter accent for small details
          500: '#22c55e', // Bright accent
          600: '#16a34a', // Primary button
          700: '#15803d', // Hover button
          800: '#166534', // Deep green accent
          900: '#14532d', // Subtle background accent
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
