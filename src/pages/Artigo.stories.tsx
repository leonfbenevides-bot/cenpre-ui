import type { Meta, StoryObj } from "@storybook/react";
import { Artigo } from "./Artigo";
import { artigoExemplo } from "../content/paginas-conteudo";

const meta: Meta<typeof Artigo> = {
  title: "Páginas/Conteúdos/Artigo",
  component: Artigo,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Artigo>;

export const Padrao: Story = { args: { content: artigoExemplo } };
