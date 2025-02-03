import globals from "globals";
import pluginJs from "@eslint/js";
import pluginHtml from "eslint-plugin-html"; // Import HTML plugin

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: globals.browser,
    },
  },
  {
    files: ["**/*.html"], // Enable ESLint for HTML files
    plugins: { html: pluginHtml },
    processor: "html/html", // Use the HTML processor
  },
  pluginJs.configs.recommended,
];
