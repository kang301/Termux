/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        shopee: '#EE4D2D',
        tiktok: '#FE2C55',
        tokopedia: '#03AC0E'
      }
    },
  },
  plugins: [],
}