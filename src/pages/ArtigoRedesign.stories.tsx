import type { Meta, StoryObj } from "@storybook/react";
import { ArtigoRedesign } from "./ArtigoRedesign";
import { artigoExemplo } from "../content/paginas-conteudo";

const meta: Meta<typeof ArtigoRedesign> = {
  title: "Páginas/★ Redesign/Conteúdos/Artigo",
  component: ArtigoRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof ArtigoRedesign>;

export const Padrao: Story = { args: { content: artigoExemplo } };
