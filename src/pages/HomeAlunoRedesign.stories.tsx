import type { Meta, StoryObj } from "@storybook/react";
import { HomeAlunoRedesign } from "./HomeAlunoRedesign";
import { campos } from "../content/campos";

const meta: Meta<typeof HomeAlunoRedesign> = {
  title: "Páginas/★ Home Aluno — Redesign (piloto)",
  component: HomeAlunoRedesign,
  parameters: { layout: "fullscreen" },
  argTypes: { content: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof HomeAlunoRedesign>;

/**
 * PILOTO da direção "Editorial Aspiracional": tipografia display Fraunces,
 * fotografia cinematográfica com profundidade (imagem dupla), composição
 * editorial e vidro. Para aprovar a direção antes de propagar.
 */
export const Piloto: Story = { args: { content: campos } };
