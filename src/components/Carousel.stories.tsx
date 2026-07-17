import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";

const meta: Meta<typeof Carousel> = {
  title: "Interativos/Carousel",
  component: Carousel,
  tags: ["autodocs"],
  argTypes: { slides: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof Carousel>;

function Quote({ quote, name, cargo }: { quote: string; name: string; cargo: string }) {
  return (
    <div className="flex flex-col gap-4 rounded-card border border-ash-300 bg-white p-8 shadow-card">
      <p className="text-lg leading-relaxed text-charcoal-400">“{quote}”</p>
      <div className="text-sm">
        <span className="font-semibold text-charcoal-500">{name}</span>{" "}
        <span className="text-charcoal-200">· {cargo}</span>
      </div>
    </div>
  );
}

export const Depoimentos: Story = {
  args: {
    ariaLabel: "Depoimentos",
    slides: [
      <Quote
        quote="Consegui meu primeiro estágio pela plataforma do CENPRE. O acompanhamento em cada etapa fez toda a diferença."
        name="Marina Rocha"
        cargo="Estagiária · Direito"
      />,
      <Quote
        quote="Como empresa parceira, publicamos vagas e recebemos currículos qualificados de alunos da UCAM com muita agilidade."
        name="Tech Solutions"
        cargo="Empresa conveniada"
      />,
      <Quote
        quote="O suporte do CENPRE na formalização do convênio foi impecável. Recomendo para qualquer empresa parceira."
        name="Grupo ABC"
        cargo="Empresa conveniada"
      />,
    ],
  },
  render: (args) => (
    <div style={{ maxWidth: 680 }}>
      <Carousel {...args} />
    </div>
  ),
};
