import type { Meta, StoryObj } from "@storybook/react";
import { HomeEmpresa } from "./HomeEmpresa";
import { empresa } from "../content/empresa";

const meta: Meta<typeof HomeEmpresa> = {
  title: "Páginas/Home - Empresa",
  component: HomeEmpresa,
  parameters: { layout: "fullscreen" },
  // O conteúdo é um objeto tipado grande — edite em src/content/, não no painel.
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof HomeEmpresa>;

/** Jornada "Sou uma empresa" — conteúdo em `src/content/empresa.tsx`. */
export const Padrao: Story = { args: { content: empresa } };
