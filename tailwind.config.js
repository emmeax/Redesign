/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        montserrate:['Montserrat', 'sans-serif'],
        instrument: ["Instrument Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}

