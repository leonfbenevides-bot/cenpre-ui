import type { Meta, StoryObj } from "@storybook/react";
import { PainelVagas } from "./PainelVagas";
import { vagas } from "../content/paginas-conteudo";

const meta: Meta<typeof PainelVagas> = {
  title: "Páginas/Vagas e Oportunidades",
  component: PainelVagas,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof PainelVagas>;

export const Padrao: Story = { args: { content: vagas } };
