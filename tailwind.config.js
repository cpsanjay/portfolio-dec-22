/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
      boxShadow: {
        "3xl": "-3px 10px 24px #000000",
      },
    },
  },
  plugins: [],
};
