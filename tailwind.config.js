/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f9f4ed",
        secondary: "#2a2a2a",
        tertiary: "#af695c",
        btnHover: "",
      },
    },
  },
  plugins: [],
};
