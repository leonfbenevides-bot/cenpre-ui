import type { Meta, StoryObj } from "@storybook/react";
import { EmpresasConveniadasRedesign } from "./EmpresasConveniadasRedesign";
import { conveniadas } from "../content/paginas-empresa";

const meta: Meta<typeof EmpresasConveniadasRedesign> = {
  title: "Páginas/★ Redesign/Empresa/Empresas conveniadas",
  component: EmpresasConveniadasRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof EmpresasConveniadasRedesign>;

export const Padrao: Story = { args: { content: conveniadas } };
