/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0e162a",
        primary_darker: "#0b101f",
        secondary: "#ffffff",
        accent: "#fa923b",
        accent_lighter: "#fba762",
      },
    },
  },

  plugins: [],
};
