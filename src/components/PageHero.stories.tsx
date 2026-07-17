import type { Meta, StoryObj } from "@storybook/react";
import { PageHero } from "./PageHero";
import { Button } from "./Button";

const meta: Meta<typeof PageHero> = {
  title: "Blocos/PageHero",
  component: PageHero,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen" },
  argTypes: { breadcrumb: { table: { disable: true } }, actions: { table: { disable: true } }, pills: { table: { disable: true } }, media: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof PageHero>;

export const Empresa: Story = {
  args: {
    eyebrow: "Para empresas parceiras",
    title: "Contrate talentos da UCAM para a sua empresa",
    subtitle:
      "Simplifique a contratação de estagiários qualificados: publique vagas, receba currículos e conte com suporte completo do CENPRE.",
    actions: (
      <>
        <Button variant="secondary" className="bg-white text-magenta-800">Quero ser parceiro</Button>
        <Button className="bg-white/15 hover:bg-white/25">Acessar plataforma</Button>
      </>
    ),
  },
};
