module.exports = {
  env: { browser: true,
    es2021: true },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: { ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module' },
  plugins: [
    'react',
  ],
  rules: { 'react/jsx-filename-extension': 'off',
    'jsx-a11y/media-has-caption': 'off',
    'import/named': 'off',
    'object-curly-newline': ['error', { minProperties: 5 }] },
};
