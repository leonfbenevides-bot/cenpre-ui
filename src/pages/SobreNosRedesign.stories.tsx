import type { Meta, StoryObj } from "@storybook/react";
import { SobreNosRedesign } from "./SobreNosRedesign";
import { sobreNos } from "../content/paginas-conteudo";

const meta: Meta<typeof SobreNosRedesign> = {
  title: "Páginas/★ Redesign/Institucional/Sobre nós",
  component: SobreNosRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof SobreNosRedesign>;

export const Padrao: Story = { args: { content: sobreNos } };
