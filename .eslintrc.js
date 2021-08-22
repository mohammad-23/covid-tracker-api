module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["prettier"],
  rules: {
    quotes: ["error", "double", { avoidEscape: true }],
    "no-console": 0,
    "linebreak-style": ["error", "unix"],
    "arrow-body-style": [2, "as-needed"],
    "comma-dangle": [
      "error",
      {
        arrays: "only-multiline",
        objects: "only-multiline",
        imports: "only-multiline",
        exports: "never",
        functions: "only-multiline",
      },
    ],
    "padding-line-between-statements": [
      "error",
      { blankLine: "always", prev: "*", next: "return" },
      { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
      {
        blankLine: "any",
        prev: ["const", "let", "var"],
        next: ["const", "let", "var"],
      },
      { blankLine: "always", prev: ["case", "default"], next: "*" },
      { blankLine: "always", prev: "*", next: "export" },
      { blankLine: "always", prev: "export", next: "*" },
      { blankLine: "always", prev: "*", next: "try" },
      {
        blankLine: "always",
        prev: "import",
        next: ["const", "let", "var"],
      },
    ],
  },
};
