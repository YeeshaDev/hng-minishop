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
        hero: "url('/assets/heroBanner.png')",
        heromobile:
          "url('https://res.cloudinary.com/debgkcg8v/image/upload/v1720464118/Group_1321314349_1_na0hrh.png')",
        yellow: " linear-gradient(135deg, #A88F38 0%, #FDD137 83.33%)",
        gray: "linear-gradient(135deg, #545454 0%, #D9D9D9 83.33%)",
      },
    },
  },
  plugins: [],
};
