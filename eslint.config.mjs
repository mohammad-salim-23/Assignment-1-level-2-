import globals from "globals";
import pluginJs from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"], // Match your files
    languageOptions: {
      parser: tsParser, // Use TypeScript parser
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": tsPlugin, // Add TypeScript plugin
    },
    rules: {
      ...pluginJs.configs.recommended.rules, // Include JS recommended rules
      ...tsPlugin.configs.recommended.rules, // Include TypeScript recommended rules
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-console": "warn",
      "no-undef": "error",
      "@typescript-eslint/no-require-imports": "error", // TypeScript-specific rule
    },
  },
  {
    ignores: ["node_modules", "dist"], // Ignore folders
  },
];
