/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#303841",
        primary_second: "#3A4750",
        secondary: "#EEEEEE",
        accent: "#EA9215",
        accent_second: "#bd7510",
      },
    },
  },

  plugins: [],
};
