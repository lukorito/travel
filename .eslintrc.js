module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'eslint:recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'import/no-named-as-default': 0,
    'import/no-unresolved': 2,
    'indent': [1, 2],
    'react/jsx-indent': [0, 2], // warning & 2 spaces
    'no-unused-vars': 1,
    'jsx-a11y/anchor-is-valid': 1,
    'quotes': [1, 'single'],
    'class-methods-use-this': 0,
    'no-console': 2,
    'no-return-assign': 1,
    // 'semi': ['error', 'never'],
    'react/jsx-uses-vars': 1,
    'react/no-unused-state': 1,
    'react/jsx-key': 2,
    "react/jsx-no-literals": 1,
    'react/prefer-stateless-function': 2,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    'react/jsx-indent-props': 'off',
  },
};
