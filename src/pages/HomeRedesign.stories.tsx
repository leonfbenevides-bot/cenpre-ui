import type { Meta, StoryObj } from "@storybook/react";
import { HomeRedesign } from "./HomeRedesign";
import { campos } from "../content/campos";
import { empresa } from "../content/empresa";

const meta: Meta<typeof HomeRedesign> = {
  title: "Páginas/★ Home — Redesign (piloto)",
  component: HomeRedesign,
  parameters: { layout: "fullscreen" },
  args: { alunoContent: campos, empresaContent: empresa },
  argTypes: {
    alunoContent: { table: { disable: true } },
    empresaContent: { table: { disable: true } },
  },
};
export default meta;
type Story = StoryObj<typeof HomeRedesign>;

/**
 * PILOTO da direção "Editorial Aspiracional": tipografia display Work Sans,
 * fotografia cinematográfica, composição editorial. "Sou aluno" × "Sou
 * empresa" é uma página só — a tab (no hero e na faixa de perfil) troca o
 * conteúdo inteiro por estado, incluindo o hero, sem reload. Uma única story
 * (não duas) para não sugerir que são páginas diferentes.
 */
export const Padrao: Story = { args: { defaultPerfil: "aluno" } };
