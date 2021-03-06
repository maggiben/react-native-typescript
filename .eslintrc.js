// https://decodenatura.com/set-up-react-native-typescript-eslint-prettier/
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    '@react-native-community',
    // 'universe/native',
    // 'airbnb-typescript',
    'airbnb/hooks',
    // 'plugin:@typescript-eslint/eslint-recommended',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'prettier/react',
    'eslint-config-prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
/*module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: '@react-native-community',
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier/@typescript-eslint',
    'prettier/react',
    'eslint-config-prettier'
  ],
  rules: {
    // Prettier violations should generate warnings
    'prettier/prettier': 'warn',
    'react/jsx-curly-brace-presence': 1,

    // Rules disabled because they don't add value
    'import/extensions': 0,
    'import/no-cycle': 0, // Too much to change
    'lines-between-class-members': 0,
    'no-case-declarations': 0,
    'no-undef-init': 0,
    'no-underscore-dangle': 0,
    'react/jsx-props-no-spreading': 0,
    'react/prop-types': 0,
    'react/no-unescaped-entities': 0,
    'react/sort-comp': 0,
    'react/static-property-placement': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-inferrable-types': 0,
    '@typescript-eslint/prefer-regexp-exec': 0,

    // Warnings that should be solve in order to enable the rules as errors
    'array-callback-return': 1,
    'consistent-return': 1,
    'default-case': 1,
    'dot-notation': 1,
    'func-names': 1,
    'import/first': 1,
    'import/named': 1,
    'import/newline-after-import': 1,
    'import/no-extraneous-dependencies': [1, {"devDependencies": true, "optionalDependencies": false, "peerDependencies": false, "bundledDependencies": false}],
    'import/no-named-as-default': 1,
    'import/no-unresolved': 1,
    'import/no-useless-path-segments': 1,
    'import/prefer-default-export': 1,
    'import/order': 1,
    'no-console': 1,
    'no-else-return': 1,
    'no-nested-ternary': 1,
    'no-param-reassign': 1,
    'no-prototype-builtins': 1,
    'no-restricted-globals': 1,
    'no-sequences': 1,
    'no-shadow': 1,
    'no-useless-concat': 1,
    'no-useless-return': 1,
    'object-shorthand': 1,
    'prefer-destructuring': 1,
    'react/jsx-boolean-value': 1,
    'react/destructuring-assignment': 1,
    'react/jsx-no-bind': 1,
    'react/prefer-stateless-function': 1,
    'react/jsx-no-target-blank': 1,
    'react-hooks/rules-of-hooks': 1,
    'spaced-comment': 1,
    '@typescript-eslint/ban-types': 1,
    '@typescript-eslint/explicit-function-return-type': 1,
    '@typescript-eslint/no-empty-interface': 1,
    '@typescript-eslint/no-explicit-any': 1,
    '@typescript-eslint/no-non-null-assertion': 1,
    '@typescript-eslint/no-unnecessary-type-assertion': 1,
    '@typescript-eslint/no-unused-expressions': 1,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/no-use-before-define': 1,
    '@typescript-eslint/prefer-includes': 1,
    '@typescript-eslint/unbound-method': 1,

    'react-hooks/exhaustive-deps': 0,
  },
  settings: {
      'import/resolver': {
          "typescript": {},
      }
  }
};*/
