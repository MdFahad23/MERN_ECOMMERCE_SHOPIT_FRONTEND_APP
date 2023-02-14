/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
        "4xl": "0 2px 8px 2px rgb(20 23 28 / 20%)",
      },
    },
    fontFamily: {
      Roboto: ["Roboto", "sans-serif"],
      OpenSans: ["Open Sans", "sans-serif"],
      Item: ["Itim", "cursive"],
      Mulish: ["Mulish", "sans-serif"],
      DancingScript: ["Dancing Script", "cursive"],
    },
  },
  plugins: [],
};
