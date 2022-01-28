module.exports = {
  extends: ['kentcdodds', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'no-console': 'off',

    // meh...
    '@babel/new-cap': 'off',

    // this one isn't smart enough for our "~/" imports
    'import/order': 'off',

    // Options: https://prettier.io/docs/en/options.html
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'avoid',
        printWidth: 120,
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        tabWidth: 2,
      },
    ],
  },
}
