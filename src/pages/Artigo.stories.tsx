import type { Meta, StoryObj } from "@storybook/react";
import { Artigo } from "./Artigo";
import { artigoExemplo } from "../content/paginas-conteudo";

const meta: Meta<typeof Artigo> = {
  title: "Páginas/Conteúdos/Artigo",
  component: Artigo,
  parameters: { layout: "fullscreen" },
  // O conteúdo é um objeto tipado grande — edite em src/content/, não no painel.
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof Artigo>;

export const Padrao: Story = { args: { content: artigoExemplo } };
