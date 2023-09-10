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
        footer: "2fr 1fr 1fr 2fr",
        footerMed: "2fr 1fr 1fr",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
