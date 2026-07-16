import type { Meta, StoryObj } from "@storybook/react";
import { Curriculo } from "./Curriculo";
import { curriculo } from "../content/paginas-aluno";

const meta: Meta<typeof Curriculo> = {
  title: "Páginas/Aluno/Currículo",
  component: Curriculo,
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof Curriculo>;

export const Padrao: Story = { args: { content: curriculo } };
