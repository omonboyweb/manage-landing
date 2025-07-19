/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navtext: "#242d52",
        buttonbg: "#f3603c",
        white: '#fcf6f5',
        bodycolor: "#fafafa",
        bgabout: "#fff0ec",
        footer: "#1d1e25"

      }
    },
  },
  plugins: [],
}