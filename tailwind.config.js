/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'x-black': '#000000',
        'x-dark': '#16181c',
        'x-border': '#2f3336',
        'x-gray': '#71767b',
        'x-blue': '#1d9bf0',
        'x-white': '#e7e9ea',
        'x-light-gray': '#536471',
      },
      fontFamily: {
        'chirp': ['Chirp', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
