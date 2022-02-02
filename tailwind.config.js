const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.+(html|js)'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#ffffff',
      gray: colors.gray,
      primary: colors.red,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
