/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-purple':'#b990f9',
        'dark-purple':'#6708F7',
        'white': '#ffffff',
        'black': '#000000',
      },
    },
  },
  plugins: [],
}