/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'body': ['Ubuntu'],
        'body1': ['Poppins']

      },
      backgroundImage: {
        'MainBack': "url('/src/assets/background1.jpg')",
        'SubMainBack': "url('/src/assets/background2.jpg')",
        'ThirdMainBack': "url('/src/assets/background3.jpg')",
      }
    },

  },
  plugins: [],
}
