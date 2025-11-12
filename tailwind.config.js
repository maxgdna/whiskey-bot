/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0f0f1e',
          DEFAULT: '#1a1a2e',
          light: '#2a2a3e',
        },
        accent: {
          blue: '#16213e',
          'blue-light': '#1e3a5f',
          gold: '#d4af37',
          'gold-light': '#f4d03f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

