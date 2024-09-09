module.exports = {
  root: true,
  extends: '@react-native',
  plugins: ['import'],
  rules: {
    'import/order': [
      'error',
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
        'pathGroups': [
          {
            pattern: 'react-native',
            group: 'builtin',
            position: 'before',
          },
        ],
        'pathGroupsExcludedImportTypes': ['builtin'],
      },
    ],
    // react-native-gesture-handler에서 TextInput을 import하지 못하게 차단
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react-native-gesture-handler',
            importNames: ['TextInput'],
            message: 'Please import TextInput from react-native, not from react-native-gesture-handler.',
          },
        ],
      },
    ],
  },
};
