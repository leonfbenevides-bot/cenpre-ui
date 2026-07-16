import type { Meta, StoryObj } from "@storybook/react";
import { OrientacoesEstagio } from "./OrientacoesEstagio";
import { orientacoes } from "../content/paginas-aluno";

const meta: Meta<typeof OrientacoesEstagio> = {
  title: "Páginas/Aluno/Orientações de Estágio",
  component: OrientacoesEstagio,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof OrientacoesEstagio>;

export const Padrao: Story = { args: { content: orientacoes } };
