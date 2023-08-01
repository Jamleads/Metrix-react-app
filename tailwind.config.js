/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlack: "#45464E",
        mainWhite: "#ffffff",
        textGray: "#8B8D97",
        actionRed: "#CC5F5F",
        actionGreen: "#519C66",
        actionBlue: "#5570f1",
        secondary: "#ffcc9133",
      },
    },
  },
  plugins: [],
};
