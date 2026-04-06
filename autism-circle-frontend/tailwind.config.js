/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#071F3A",   // Deep Navy
        secondary: "#4EA8DE", // Blue
        accent: "#2EC4B6",    // Teal
 maxWidth: {
      '8xl': '96rem', // 1536px — adjust to whatever you need
    },
        lightBg: "#F4F9FF",
        textDark: "#0A2540",
        textLight: "#6B7C93",
      },

      backgroundImage: {
        "gradient-main": "linear-gradient(to right, #4EA8DE, #2EC4B6)",
      },
    },
  },
  plugins: [],
};