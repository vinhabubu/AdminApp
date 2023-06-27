module.exports = {
  bracketSpacing: true,
  jsxBracketSameLine: true,
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'all',
  arrowParens: 'always',
  importOrder: [
    'react',
    'react-dom',
    'react-native',
    'core/(.*)$',
    'hooks/?(.*)$',
    'libs/?(.*)$',
    'resources/?(.*)$',
    'services/?(.*)$',
    'utils/?(.*)$',
    'pages/?(.*)$',
    '<THIRD_PARTY_MODULES>',
    '^[.]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
};
