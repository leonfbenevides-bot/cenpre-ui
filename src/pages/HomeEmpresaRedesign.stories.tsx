import type { Meta, StoryObj } from "@storybook/react";
import { HomeEmpresaRedesign } from "./HomeEmpresaRedesign";
import { empresa } from "../content/empresa";

const meta: Meta<typeof HomeEmpresaRedesign> = {
  title: "Páginas/★ Home Empresa — Redesign (piloto)",
  component: HomeEmpresaRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof HomeEmpresaRedesign>;

export const Piloto: Story = { args: { content: empresa } };
