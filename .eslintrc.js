module.exports =  {
  overrides: [
    {
      files: [
        "src/renderer/**/*.js",
        "build/**/*.js",
        "src/renderer/**/*.vue"
      ],
      extends: [
        'eslint:recommended',
        'plugin:vue/recommended'
      ],
      env: {
        node: true
      },
      parserOptions:  {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      rules: {
        "indent": ["error", 2],
        "no-unused-vars": "off",
        "vue/order-in-components": "off",
        "vue/attributes-order": "off",
        "vue/max-attributes-per-line": "off"
      }
    },
    {
      files: [
        "build/*.ts",
        "src/**/*.ts",
        "integration/**/*.ts"
      ],
      parser: "@typescript-eslint/parser",
      extends:  [
        'plugin:@typescript-eslint/recommended',
      ],
      parserOptions:  {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/ban-ts-comment": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "indent": ["error", 2]
      },
    },
    {
      files: [
        "src/renderer/**/*.tsx",
      ],
      parser: "@typescript-eslint/parser",
      extends:  [
        'plugin:@typescript-eslint/recommended',
      ],
      parserOptions:  {
        ecmaVersion: 2018,
        sourceType: 'module',
        jsx: true,
      },
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/interface-name-prefix": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-empty-interface": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-empty-function": "off",
        "indent": ["error", 2]
      },
    }
  ]
};
