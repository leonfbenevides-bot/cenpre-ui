import type { Meta, StoryObj } from "@storybook/react";
import { TemplateUnidade } from "./TemplateUnidade";
import { campos } from "../content/campos";

const meta: Meta<typeof TemplateUnidade> = {
  title: "Páginas/Home - Aluno (Unidade)",
  component: TemplateUnidade,
  parameters: { layout: "fullscreen" },
  // O conteúdo é um objeto tipado grande — edite em src/content/, não no painel.
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof TemplateUnidade>;

/** Home da unidade Campos dos Goytacazes — conteúdo em `src/content/campos.tsx`. */
export const Campos: Story = { args: { content: campos } };
