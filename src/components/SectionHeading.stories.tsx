import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeading } from "./SectionHeading";

const meta: Meta<typeof SectionHeading> = {
  title: "Composição/SectionHeading",
  component: SectionHeading,
  tags: ["autodocs"],
  args: {
    eyebrow: "Plataforma CENPRE Carreiras",
    title: "Tudo o que você precisa em um só lugar",
    subtitle: "Um ambiente digital que centraliza oportunidades, serviços e a gestão de estágios.",
  },
  argTypes: { align: { control: "inline-radio", options: ["left", "center"] } },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof SectionHeading>;

export const Esquerda: Story = {};
export const Centralizado: Story = { args: { align: "center" } };
