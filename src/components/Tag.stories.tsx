import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";

const meta: Meta<typeof Tag> = {
  title: "Primitivos/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: { children: "Marketing", tone: "neutral", size: "md" },
  argTypes: {
    tone: { control: "inline-radio", options: ["neutral", "brand", "accent"] },
    size: { control: "inline-radio", options: ["sm", "md"] },
  },
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Neutral: Story = {};
export const Brand: Story = { args: { tone: "brand", children: "CENPRE" } };
export const Accent: Story = { args: { tone: "accent", children: "NUBE" } };

export const EmUso: Story = {
  name: "Em uso (card de vaga)",
  render: () => (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      <Tag>Marketing</Tag>
      <Tag tone="brand">CENPRE</Tag>
      <Tag tone="neutral">Estágio</Tag>
    </div>
  ),
};
