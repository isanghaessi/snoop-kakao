module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/vue3-essential', 'google'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    'max-len': [1, 160, 2],
  },
};
