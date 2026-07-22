import type { Meta, StoryObj } from "@storybook/react";
import { CurriculoRedesign } from "./CurriculoRedesign";
import { curriculo } from "../content/paginas-aluno";

const meta: Meta<typeof CurriculoRedesign> = {
  title: "Páginas/★ Redesign/Aluno/Currículo",
  component: CurriculoRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof CurriculoRedesign>;

export const Padrao: Story = { args: { content: curriculo } };
