import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
      expanded: true,
      // `className` é override interno — só polui o painel.
      exclude: ["className"],
      sort: "requiredFirst",
    },
    layout: "centered",
    // Viewports de referência do design (Figma: mobile 390 · desktop 1440).
    viewport: {
      viewports: {
        mobile: {
          name: "Mobile (390 — Figma)",
          styles: { width: "390px", height: "844px" },
          type: "mobile",
        },
        tablet: {
          name: "Tablet (744)",
          styles: { width: "744px", height: "1024px" },
          type: "tablet",
        },
        desktop: {
          name: "Desktop (1440 — Figma)",
          styles: { width: "1440px", height: "900px" },
          type: "desktop",
        },
      },
    },
    backgrounds: {
      default: "Branco",
      values: [
        { name: "Branco", value: "#ffffff" },
        { name: "Ash 100", value: "#f9fafb" },
        { name: "Escuro", value: "#19222a" },
      ],
    },
    options: {
      storySort: {
        order: ["Fundações", "Primitivos", "Composição", "Interativos", "Blocos", "Páginas"],
      },
    },
  },
};

export default preview;
