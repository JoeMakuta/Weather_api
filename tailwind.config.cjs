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
        'MainBack': "url('./src/assets/pexels-eberhard-grossgasteiger-1287075.jpg')",
        'SubMainBack': "url('./src/assets/pexels-sid-ali-2028885-1920x1920.jpg')",
        'ThirdMainBack': "url('./src/assets/pexels-johannes-plenio-1118873-1600x1600.jpg')",


      }
    },

  },
  plugins: [],
}
