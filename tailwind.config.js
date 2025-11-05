/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'apple-gray': '#1d1d1f',
        'apple-light-gray': '#f5f5f7',
        'apple-blue': '#0071e3',
        'apple-blue-hover': '#0077ed',
        'apple-text-gray': '#86868b',
        'apple-dark-gray': '#6e6e73',
      },
      fontFamily: {
        'apple': ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

