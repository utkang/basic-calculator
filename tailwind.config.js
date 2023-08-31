/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      borderWidth: {
        1: "1px",
      },
      spacing: {
        88: "22rem",
        92: "23rem",
      },       
    },
  },
  plugins: [],
}

