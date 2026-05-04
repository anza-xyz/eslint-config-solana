import eslint from "@eslint/js";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

const sortOptions = {
  ignoreCase: false,
  order: "asc",
  type: "alphabetical",
};

const sortObjectOptions = {
  ...sortOptions,
  useConfigurationIf: {
    objectType: "non-destructured",
  },
};

function addTypeScriptLanguageOptions(config) {
  return {
    ...config,
    languageOptions: {
      ...config.languageOptions,
      globals: {
        ...config.languageOptions?.globals,
        ...globals.es2020,
        ...globals["shared-node-browser"],
      },
      parserOptions: {
        projectService: true,
      },
      sourceType: "module",
    },
  };
}
export default defineConfig(
  globalIgnores(["**/dist/", "**/lib/", "**/*.json"]),
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked.map(addTypeScriptLanguageOptions),
  addTypeScriptLanguageOptions({
    files: ["**/*.ts"],
    plugins: {
      perfectionist: perfectionistPlugin,
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/prefer-promise-reject-errors": "error",
      "@typescript-eslint/require-await": "error",
      "@typescript-eslint/restrict-plus-operands": "error",
      "@typescript-eslint/restrict-template-expressions": "error",
      // See https://stackoverflow.com/questions/43353087/are-there-performance-concerns-with-return-await/70979225#70979225
      "@typescript-eslint/return-await": ["error", "always"],
      "@typescript-eslint/sort-type-constituents": "error",
      "no-return-await": "off",
      "perfectionist/sort-interfaces": ["error", sortOptions],
      "perfectionist/sort-object-types": ["error", sortOptions],
      "perfectionist/sort-objects": ["error", sortObjectOptions],
      "simple-import-sort/imports": "error",
    },
  })
);
