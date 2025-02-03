/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat-Regular", "sans-serif"],
      },
    },
  },
  plugins: [],
};
