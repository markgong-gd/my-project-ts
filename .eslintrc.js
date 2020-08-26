module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true
  },
  extends: 'airbnb',
  rules: {
    'react/jsx-filename-extension': 'off',
    'comma-dangle': ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/extensions': 'off'
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  }
};
