module.exports = {
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "tsconfig.json",
    tsconfigRootDir: __dirname,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  extends: [
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: [".eslintrc.js"],
  rules: {
    "@typescript-eslint/array-type": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/consistent-type-imports": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        checksVoidReturn: { attributes: false },
      },
    ],
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/lines-between-class-members": ["error"],
    "@typescript-eslint/no-explicit-any": "off",
    "max-classes-per-file": ["error", 1],
    "no-lonely-if": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "no-useless-return": "error",
    "no-warning-comments": "warn",
    "require-await": "error",
    "spaced-comment": "error",
  },
};
