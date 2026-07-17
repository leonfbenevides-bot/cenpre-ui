// ESLint flat config — CENPRE UI
// Padrão: TypeScript strict + React Hooks + acessibilidade (jsx-a11y) + Storybook.
// Regra de projeto: desencorajar hex cru / valores arbitrários em className
// para manter a paridade com os tokens do Figma (bg-magenta-700, p-token-24, ...).

import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import storybook from "eslint-plugin-storybook";
import globals from "globals";

export default tseslint.config(
  {
    ignores: ["dist/**", "storybook-static/**", "node_modules/**", "*.html"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Scripts utilitários Node (ex.: auditoria de a11y). `axe` é injetado na
    // página via addScriptTag e avaliado no browser.
    files: ["scripts/**/*.mjs"],
    languageOptions: { globals: { ...globals.node, ...globals.browser, axe: "readonly" } },
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      globals: { ...globals.browser },
    },
    plugins: {
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...jsxA11y.flatConfigs.recommended.rules,
      // Token discipline — warn (não bloqueia o CI, mas aparece no editor).
      // Ver CONTRIBUTING.md: novos componentes devem usar tokens, não hex/arbitrário.
      "no-restricted-syntax": [
        "warn",
        {
          selector:
            "JSXAttribute[name.name='className'] Literal[value=/#[0-9a-fA-F]{3,8}\\b/]",
          message:
            "Evite hex cru em className — use um token de cor (ex.: bg-magenta-700, text-charcoal-500).",
        },
        {
          selector:
            "JSXAttribute[name.name='className'] Literal[value=/\\[[^\\]]+\\]/]",
          message:
            "Evite valores arbitrários do Tailwind (bg-[...], p-[...]) — use um token da escala (spacing token-*, rounded-card, etc.).",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
  // Stories e arquivos de config podem relaxar a disciplina de tokens.
  {
    files: ["**/*.stories.tsx", "**/*.config.{ts,js}", "**/App.tsx", "src/pages/**"],
    rules: {
      "no-restricted-syntax": "off",
    },
  },
  ...storybook.configs["flat/recommended"],
);
