import type { Meta, StoryObj } from "@storybook/react";
import { CadastroConvenioRedesign } from "./CadastroConvenioRedesign";
import { cadastroConvenio } from "../content/paginas-empresa";

const meta: Meta<typeof CadastroConvenioRedesign> = {
  title: "Páginas/★ Redesign/Empresa/Cadastro de Convênio",
  component: CadastroConvenioRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof CadastroConvenioRedesign>;

export const Padrao: Story = { args: { content: cadastroConvenio } };
