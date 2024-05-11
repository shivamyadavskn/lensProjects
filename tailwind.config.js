/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customGray: "#fcfbf7",
        btnColor: "#272e5c",
        textColor: "#8a8a8a",
        bgcolor: "#242424",
      },
    },
  },
  plugins: [],
};
