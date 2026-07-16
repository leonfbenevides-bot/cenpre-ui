import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: { color: /(background|color)$/i, date: /Date$/i },
      expanded: true,
    },
    layout: "centered",
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
        order: ["Fundações", "Primitivos", "Composição", "Interativos", "Blocos"],
      },
    },
  },
};

export default preview;
