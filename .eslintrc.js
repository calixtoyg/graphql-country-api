module.exports = {
  parserOptions: {
    ecmaVersion: 2020
  },
  extends: [
    'prettier',
    "google",
    "eslint:recommended"
  ],
  rules: {
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    "require-jsdoc" : 0,
    'max-len': ["error", { "code": 120 }],
  },
  root: true,
  env: {
    node: true,
    es6: true,
  },
}
