/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        grotesk: ["'Space Grotesk'", "sans-serif"],
      },
      colors: {
        ink: "#0C0C0C",
        mist: "#D7E2EA",
        steel: "#BBCCD7",
        slate: "#646973",
      },
    },
  },
  plugins: [],
};
