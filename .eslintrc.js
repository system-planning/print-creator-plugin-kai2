module.exports = {
  extends: [
    '@cybozu/eslint-config/presets/react',
    '@cybozu/eslint-config/presets/prettier',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'prettier/prettier': ['error', { singleQuote: true }],
  },
  env: {
    node: 'true',
  },
  globals: {
    kintone: false,
  },
};
