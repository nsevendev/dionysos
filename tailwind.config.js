/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts,css,scss}", "./src/**/*.spec.ts"],
  theme: {
    extend: {
      fontFamily: {
        p: ["Work Sans", "sans-serif"],
        nav: ["Roboto", "sans-serif"],
        h1: ["Anton", "sans-serif"],
        h2: ["Anton", "sans-serif"],
        h3: ["Anton", "sans-serif"],
      },
      colors: {
        violet: "#900C8C",
      },
      fontSize: {
        h1: "3rem",
        nav: "2rem",
      },
    },
  },
  plugins: [],
};
