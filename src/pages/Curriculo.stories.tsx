import type { Meta, StoryObj } from "@storybook/react";
import { Curriculo } from "./Curriculo";
import { curriculo } from "../content/paginas-aluno";

const meta: Meta<typeof Curriculo> = {
  title: "Páginas/Aluno/Currículo",
  component: Curriculo,
  parameters: { layout: "fullscreen" },
  // O conteúdo é um objeto tipado grande — edite em src/content/, não no painel.
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof Curriculo>;

export const Padrao: Story = { args: { content: curriculo } };
