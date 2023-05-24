/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Ubuntu"],
        body1: ["Poppins"],
      },
      backgroundImage: {
        MainBack: "url('./assets/background1.jpg')",
        SubMainBack: "url('./assets/background2.jpg')",
        ThirdMainBack: "url('./assets/background3.jpg')",
      },
    },
  },
  plugins: [],
};
