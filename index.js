module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:vue/recommended',
    'airbnb-base',
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'vue',
    'prettier',
    'spellcheck'
  ],
  rules: {
    "prettier/prettier": "error",
    "no-param-reassign": [
      "error",
      {
        "props": true,
        "ignorePropertyModificationsFor": [
          "state",
          "acc",
          "e",
          "ctx",
          "req",
          "request",
          "res",
          "response",
          "$scope"
        ]
      }
    ],
    "spellcheck/spell-checker": ["warn"],
    "complexity": ["warn", 5],
    "max-depth": ["warn", 4],
    "max-nested-callbacks": ["warn", 3],
    "max-params": ["warn", 3]
  },
};
