/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'PSANS': ['Public Sans', 'sans-serif'],
        'PJakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'my-shadow': '0px 35px 80px rgba(13, 13, 13, 0.12)'
      }
    },
  },
  plugins: [],
}
