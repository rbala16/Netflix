/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.html',   // For HTML files in the public folder
    './src/**/*.{js,jsx,ts,tsx}',  // For React components inside src folder
    './src/**/*.css',  // For any CSS files inside src folder
  ],
  theme: {
    extend: {
      colors: {
        bodyColor: "#212428",
        lightText: "#c4cfde",
    },
    fontFamily:{
      bodyFont:["Poppins","sans-serif"],
      titleFont:["Montserrat","sans-serif"],
    },
  },
},
  plugins: [],
}