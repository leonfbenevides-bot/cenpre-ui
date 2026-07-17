import type { Meta, StoryObj } from "@storybook/react";
import { SobreNos } from "./SobreNos";
import { sobreNos } from "../content/paginas-conteudo";

const meta: Meta<typeof SobreNos> = {
  title: "Páginas/Institucional/Sobre nós",
  component: SobreNos,
  parameters: { layout: "fullscreen" },
  // O conteúdo é um objeto tipado grande — edite em src/content/, não no painel.
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof SobreNos>;

export const Padrao: Story = { args: { content: sobreNos } };
