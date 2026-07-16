import type { Meta, StoryObj } from "@storybook/react";
import { LogoBand } from "./LogoBand";

const meta: Meta<typeof LogoBand> = {
  title: "Composição/LogoBand",
  component: LogoBand,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof LogoBand>;

export const Parceiros: Story = {
  args: {
    items: ["CIEE", "NUBE", "Agiel", "ABRE", "CIDE", "IEL", "Universia"].map((name) => ({ name, href: "#" })),
  },
};
