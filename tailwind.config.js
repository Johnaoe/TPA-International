/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#196ee6',
        'primary-hover': '#155dbf',
        'soft-blue': '#E3F2FD',
        'dark-blue': '#1e2732',
        // Adding some TPA colors just in case
        "tpa-primary-500": "#FF6B66",
        "tpa-secondary-500": "#FFC132",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}