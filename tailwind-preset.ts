import type { Config } from "tailwindcss";

/**
 * Preset Tailwind do CENPRE Carreiras — tokens de design (cores, spacing,
 * radius, fontes) extraídos do Figma "UCAM SITE".
 *
 * Uso em um projeto que consome a biblioteca:
 *   // tailwind.config.ts do app
 *   import cenprePreset from "cenpre-ui/tailwind-preset";
 *   export default {
 *     presets: [cenprePreset],
 *     content: [
 *       "./src/**\/*.{ts,tsx}",
 *       "./node_modules/cenpre-ui/src/**\/*.{ts,tsx}", // para o Tailwind ver as classes dos componentes
 *     ],
 *   };
 */
const preset: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        magenta: {
          100: "#fff0f5",
          200: "#ffdde8",
          300: "#fcb9ce",
          400: "#f494b2",
          500: "#ea7095",
          600: "#d64e76",
          700: "#b4365b",
          800: "#922243",
          900: "#70132f",
          1000: "#530e23",
        },
        ash: {
          100: "#f9fafb",
          200: "#f1f3f5",
          300: "#e2e6e9",
          400: "#d6dce0",
          600: "#939eaa",
        },
        charcoal: {
          100: "#758493",
          200: "#566574",
          300: "#415260",
          400: "#3c4b57",
          500: "#303e49",
        },
        // Feedback positivo (ex.: "N vagas abertas"). Valor aproximado do
        // verde do Figma — confirmar hex exato quando o MCP estiver autenticado.
        success: {
          100: "#e8f5ee",
          600: "#22935a",
          700: "#1e7d46",
        },
        brand: {
          DEFAULT: "#b4365b",
          strong: "#922243",
          soft: "#fff0f5",
        },
      },
      fontFamily: {
        // Corpo/UI — Inter (pareamento display/corpo do CENPRE).
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        // Títulos/display — Work Sans. Use `font-display` em H1/H2/H3 e heros.
        display: [
          "Work Sans",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
      spacing: {
        "token-4": "4px",
        "token-8": "8px",
        "token-12": "12px",
        "token-16": "16px",
        "token-20": "20px",
        "token-24": "24px",
        "token-32": "32px",
        "token-40": "40px",
        "token-48": "48px",
        "token-56": "56px",
        "token-64": "64px",
        "token-80": "80px",
        "token-96": "96px",
      },
      borderRadius: {
        chip: "8px",
        card: "16px",
        pill: "100px",
      },
      maxWidth: {
        container: "1440px",
        content: "1296px",
        prose: "820px",
      },
      boxShadow: {
        // Escala de elevação — espelha os effect styles "Elevation/*" do Figma.
        button: "0 1px 2px 0 rgba(48, 62, 73, 0.05)",
        card: "0 1px 2px 0 rgba(48, 62, 73, 0.06), 0 4px 10px -3px rgba(48, 62, 73, 0.07)",
        "card-hover": "0 2px 4px -1px rgba(48, 62, 73, 0.06), 0 12px 24px -6px rgba(48, 62, 73, 0.12)",
        popover: "0 4px 8px -2px rgba(48, 62, 73, 0.06), 0 16px 32px -8px rgba(48, 62, 73, 0.12)",
        modal: "0 8px 16px -4px rgba(48, 62, 73, 0.08), 0 32px 56px -16px rgba(48, 62, 73, 0.20)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.22s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
};

export default preset;
