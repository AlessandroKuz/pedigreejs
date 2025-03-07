import globals from "globals";
import babelParser from "@babel/eslint-parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [...compat.extends("eslint:recommended"), {
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.jquery,
            Atomics: "readonly",
            SharedArrayBuffer: "readonly",
            d3: true,
            canvg: true,
        },

        parser: babelParser,
        ecmaVersion: 2018,
        sourceType: "module",
    },

    rules: {
        "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],

        "no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
        }],

        eqeqeq: ["error", "smart"],
        "no-mixed-operators": "error",
        "no-cond-assign": "error",
        "no-loop-func": "error",
        "no-throw-literal": "error",
        "no-new-object": "error",
        "no-useless-concat": "error",
        "no-lone-blocks": "error",
        "no-empty": "error",
    },
}];