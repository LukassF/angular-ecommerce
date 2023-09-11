/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      minHeight: {
        "4screen/5": "90vh",
        "screen/2": "50vh",
        "screen/3": "33vh",
      },

      gridTemplateColumns: {
        productInfo: "2fr 3fr",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
