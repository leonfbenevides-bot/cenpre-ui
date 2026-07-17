import type { Meta, StoryObj } from "@storybook/react";
import { PorQueSerParceiro } from "./PorQueSerParceiro";
import { parceiro } from "../content/paginas-empresa";

const meta: Meta<typeof PorQueSerParceiro> = {
  title: "Páginas/Empresa/Por que ser parceiro",
  component: PorQueSerParceiro,
  parameters: { layout: "fullscreen" },
  // O conteúdo é um objeto tipado grande — edite em src/content/, não no painel.
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof PorQueSerParceiro>;

export const Padrao: Story = { args: { content: parceiro } };
