/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#978897",
        textClr: "#292D32",
        purpleClr: "#978897",
        lightGray: "#707070",
      },
      fontFamily: {
        logo: ["Playfair Display", "serif"],
        primary: ["Plus Jakarta Sans", "sans-serif"],
        noto: ["Noto Serif", "serif"],
      },
      backgroundImage: {
        hero: "url('./assets/heroBanner.png')",
      },
    },
  },
  plugins: [],
};
