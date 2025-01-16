import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f3eae4",
          200: "#e4cdc0",
          300: "#d3ad95",
          400: "#ba8463",
          500: "#9c6849",
          600: "#80543a",
          700: "#634029",
          800: "#422a19",
          900: "#24150b",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
