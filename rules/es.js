module.exports = {
  rules: {
    'linebreak-style': 'off',
    'func-names': ['error', 'as-needed'],
    'prefer-arrow-callback': 'warn',
    'no-multi-assign': 'warn',
    'no-param-reassign': 'off',
    'no-unused-expressions': ['error', { allowShortCircuit: true, allowTernary: true }],
    'consistent-return': 'off',
    'no-unused-vars': 'warn',
    'global-require': 'off',
    'max-len': ['warn', 200],
    'no-console': ['warn', { allow: ['debug', 'info', 'warn', 'error'] }],
    'no-bitwise': ['error', { allow: ['~'] }],
    'no-underscore-dangle': 'off',
    'arrow-body-style': 'off',
    'default-case': 'off',
    'comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'never',
    }],
    eqeqeq: ['warn', 'always', { null: 'ignore' }],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
  },
};
