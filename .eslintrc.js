module.exports = {
  "root": true,
  "env": {
    "node": true,
    "browser": true,
    "es6": true,
  },
  "extends": [
    "plugin:vue/essential",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  "parserOptions": {
    "parser": "babel-eslint"
  },
  "rules": {
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
