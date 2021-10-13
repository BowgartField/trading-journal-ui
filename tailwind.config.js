const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      red: "#DC2626",
      green: "#6ab04c",
      white: colors.white,
      black: colors.black,
      grey: colors.grey
    },
    fontFamily: {
      "Roboto" : ["Roboto","sans-serif"]
    },
    extend: {},
  },
  variants: {
    extend: {
      translate: ['group-hover'],
      transition: ['group-hover'],
      cursor: ['group-hover']
    },
  },
  plugins: [],
}
