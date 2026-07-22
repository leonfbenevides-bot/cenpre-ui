import type { Meta, StoryObj } from "@storybook/react";
import { BibliotecaConteudosRedesign } from "./BibliotecaConteudosRedesign";
import { biblioteca } from "../content/paginas-conteudo";

const meta: Meta<typeof BibliotecaConteudosRedesign> = {
  title: "Páginas/★ Redesign/Conteúdos/Biblioteca",
  component: BibliotecaConteudosRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof BibliotecaConteudosRedesign>;

export const Padrao: Story = { args: { content: biblioteca } };
