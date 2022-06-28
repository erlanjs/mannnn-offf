/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    screens: {

      sm: "300px",
      md: "640px",
      // => @media (min-width: 640px) { ... }
      lg:"992px",

      xl: "1024px",
      // => @media (min-width: 1024px) { ... }
      xxl: "1280px",
      // => @media (min-width: 1280px) { ... }
    },
  },  plugins: [],
}