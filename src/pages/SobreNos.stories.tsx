import type { Meta, StoryObj } from "@storybook/react";
import { SobreNos } from "./SobreNos";
import { sobreNos } from "../content/paginas-conteudo";

const meta: Meta<typeof SobreNos> = {
  title: "Páginas/Institucional/Sobre nós",
  component: SobreNos,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof SobreNos>;

export const Padrao: Story = { args: { content: sobreNos } };
