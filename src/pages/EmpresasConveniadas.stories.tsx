import type { Meta, StoryObj } from "@storybook/react";
import { EmpresasConveniadas } from "./EmpresasConveniadas";
import { conveniadas } from "../content/paginas-empresa";

const meta: Meta<typeof EmpresasConveniadas> = {
  title: "Páginas/Empresa/Empresas conveniadas",
  component: EmpresasConveniadas,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof EmpresasConveniadas>;

export const Padrao: Story = { args: { content: conveniadas } };
