module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: { min: "200px", max: "767px" },
      md: { min: "768px", max: "991px" },
    },
    extend: {
      colors: {
        gray_501: "#a3a3a3",
        yellow_600: "#ffd231",
        gray_500: "#949494",
        black_900: "#100d09",
        black_902: "#0f0c09",
        black_901: "#000000",
        gray_900: "#1e1e1e",
        red_500: "#ff3030",
        deep_purple_A200: "#9747ff",
        gray_200: "#eeeeee",
        white_A700: "#ffffff",
      },
      borderRadius: {
        radius5: "5px",
        radius14: "14px",
        radius20: "20px",
        radius33: "33px",
        radius40: "40px",
        radius50: "50%",
        radius145: "14.5px",
        radius195: "19.5px",
      },
      fontFamily: { inter: "Inter" },
      letterSpacing: {
        ls7: "7px",
        ls10: "10px",
        ls14549999999999999: "14.549999999999999px",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
