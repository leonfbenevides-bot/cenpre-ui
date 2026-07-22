import type { Meta, StoryObj } from "@storybook/react";
import { PainelVagasRedesign } from "./PainelVagasRedesign";
import { vagas } from "../content/paginas-conteudo";

const meta: Meta<typeof PainelVagasRedesign> = {
  title: "Páginas/★ Redesign/Vagas e Oportunidades",
  component: PainelVagasRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof PainelVagasRedesign>;

export const Padrao: Story = { args: { content: vagas } };
