import type { Meta, StoryObj } from "@storybook/react";
import { TemplateUnidade } from "./TemplateUnidade";

const meta: Meta<typeof TemplateUnidade> = {
  title: "Páginas/Template - Unidade",
  component: TemplateUnidade,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof TemplateUnidade>;

export const Padrao: Story = {};
