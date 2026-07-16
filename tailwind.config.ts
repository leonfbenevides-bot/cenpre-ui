import type { Config } from "tailwindcss";
import cenprePreset from "./tailwind-preset";

/**
 * Config do Tailwind desta biblioteca/preview.
 * Os tokens vivem em `tailwind-preset.ts` (shippable) — aqui só apontamos
 * o conteúdo a escanear. Projetos consumidores fazem `presets: [cenprePreset]`.
 */
const config: Config = {
  presets: [cenprePreset],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
};

export default config;
