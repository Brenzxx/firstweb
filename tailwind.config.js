/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        bg: "#F8EDE3",
        primary: "#7D6E83",
        color1: "#DFD3C3",
        color2: "#D0B8A8",
        color3: "#F2E7D5",
        color4: "#0E5E6F",
        color5: "#87805E",
        color6: "#FCF8E8",
        dark: "#251B37",
      },

      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
