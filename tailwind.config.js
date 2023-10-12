/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        borderUser:{
          "0%":{backgroundColor:"White"},
          "50%":{backgroundColor:"#dcfce7"},
          "75%":{backgroundColor:"#dcfce7"},
          "100%":{backgroundColor:"#bbf7d0"},
        }
      },
      animation:{
        borderUser:"borderUser 2s infinite reverse"
      }
    },
  },
  plugins: [],
}
