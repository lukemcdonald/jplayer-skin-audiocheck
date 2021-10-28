const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.+(html|js)'],
  },
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  darkMode: false, // or 'media' or 'class'
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
  variants: {
    extend: {
      borderWidth: ['last'],
      cursor: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
