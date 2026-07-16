import type { Meta, StoryObj } from "@storybook/react";
import { CadastroConvenio } from "./CadastroConvenio";
import { cadastroConvenio } from "../content/paginas-empresa";

const meta: Meta<typeof CadastroConvenio> = {
  title: "Páginas/Empresa/Cadastro de Convênio",
  component: CadastroConvenio,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof CadastroConvenio>;

export const Padrao: Story = { args: { content: cadastroConvenio } };
