/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        freckle: "Freckle Face, system-ui",
        arima: "Arima, system-ui"
      }
    },
  },
  plugins: [],
}

