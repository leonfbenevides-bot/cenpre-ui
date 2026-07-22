import type { Meta, StoryObj } from "@storybook/react";
import { PorQueSerParceiroRedesign } from "./PorQueSerParceiroRedesign";
import { parceiro } from "../content/paginas-empresa";

const meta: Meta<typeof PorQueSerParceiroRedesign> = {
  title: "Páginas/★ Redesign/Empresa/Por que ser parceiro",
  component: PorQueSerParceiroRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof PorQueSerParceiroRedesign>;

export const Padrao: Story = { args: { content: parceiro } };
