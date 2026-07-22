import type { Meta, StoryObj } from "@storybook/react";
import { EmpresasConveniadasRedesign } from "./EmpresasConveniadasRedesign";
import { conveniadas } from "../content/paginas-empresa";
import { empresa } from "../content/empresa";

const meta: Meta<typeof EmpresasConveniadasRedesign> = {
  title: "Páginas/★ Redesign/Empresa/Empresas conveniadas",
  component: EmpresasConveniadasRedesign,
  parameters: { layout: "fullscreen" },
  args: { content: conveniadas, parceiros: empresa.parceiros },
  argTypes: {
    content: { table: { disable: true } },
    parceiros: { table: { disable: true } },
  },
};
export default meta;
type Story = StoryObj<typeof EmpresasConveniadasRedesign>;

export const Padrao: Story = {};
