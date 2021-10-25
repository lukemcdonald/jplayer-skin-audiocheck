const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.+(html|js)'],
  },
  // the NODE_ENV thing is for https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      // color scheme is defined in /app.css
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
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
