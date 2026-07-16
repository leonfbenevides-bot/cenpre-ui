import type { Meta, StoryObj } from "@storybook/react";
import { BibliotecaConteudos } from "./BibliotecaConteudos";
import { biblioteca } from "../content/paginas-conteudo";

const meta: Meta<typeof BibliotecaConteudos> = {
  title: "Páginas/Conteúdos/Biblioteca",
  component: BibliotecaConteudos,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof BibliotecaConteudos>;

export const Padrao: Story = { args: { content: biblioteca } };
