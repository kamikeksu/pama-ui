import withMT from "@material-tailwind/react/utils/withMT";
module.exports = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#608339",
        highlight: "#fba240",
      },
      backgroundImage: {
        "gradient-b-to-rt":
          "linear-gradient(to right bottom, #1b3706, #2b4913, #3c5c1f, #4e6f2c, #608339, #718e3b, #83993d, #96a33f, #aea538, #c7a635, #e1a537, #fba240)",
      },
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      animation: {
        shake: "shake 0.6s ease-in-out infinite",
      },
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "20%": { transform: "translateX(-3px)" },
          "40%": { transform: "translateX(3px)" },
          "60%": { transform: "translateX(-3px)" },
          "80%": { transform: "translateX(3px)" },
        },
      },
    },
  },
  plugins: [],
});
