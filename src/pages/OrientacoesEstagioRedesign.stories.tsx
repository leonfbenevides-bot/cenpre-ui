import type { Meta, StoryObj } from "@storybook/react";
import { OrientacoesEstagioRedesign } from "./OrientacoesEstagioRedesign";
import { orientacoes } from "../content/paginas-aluno";

const meta: Meta<typeof OrientacoesEstagioRedesign> = {
  title: "Páginas/★ Redesign/Aluno/Orientações de Estágio",
  component: OrientacoesEstagioRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof OrientacoesEstagioRedesign>;

export const Padrao: Story = { args: { content: orientacoes } };
