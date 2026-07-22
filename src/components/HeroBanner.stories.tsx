import type { Meta, StoryObj } from "@storybook/react";
import { HeroBanner } from "./HeroBanner";
import { Carousel } from "./Carousel";
import { Button } from "./Button";
import heroOffice from "../assets/hero-office.jpg";

const meta: Meta<typeof HeroBanner> = {
  title: "Blocos/HeroBanner",
  component: HeroBanner,
  tags: ["autodocs"],
  argTypes: { brand: { table: { disable: true } }, actions: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof HeroBanner>;

const brand = (
  <>
    <span className="grid h-6 w-6 place-items-center rounded-[6px] bg-magenta-700 text-xs font-extrabold text-white">
      C
    </span>
    CENPRE
  </>
);

const actions = (
  <>
    <Button className="bg-white text-magenta-900 hover:bg-ash-100">Tenho interesse!</Button>
    <Button
      variant="ghost"
      className="border border-white/45 text-white hover:bg-white/10 hover:text-white"
    >
      Saber mais
    </Button>
  </>
);

export const Padrao: Story = {
  render: () => (
    <div style={{ maxWidth: 760 }}>
      <HeroBanner
        image={heroOffice}
        brand={brand}
        title="Conectando você ao seu futuro profissional."
        description="O CENPRE reúne oportunidades, orientações de estágio, documentos, convênios e conteúdos para aproximar alunos, egressos e empresas do mercado de trabalho."
        actions={actions}
      />
    </div>
  ),
};

export const EmCarousel: Story = {
  render: () => (
    <div style={{ maxWidth: 760 }}>
      <Carousel
        ariaLabel="Banners"
        slides={[
          <HeroBanner
            image={heroOffice}
            brand={brand}
            title="Conectando você ao seu futuro profissional."
            description="Oportunidades, orientações de estágio e conteúdos para aproximar alunos e empresas."
            actions={actions}
          />,
          <HeroBanner
            image={heroOffice}
            brand={brand}
            title="Sua empresa mais perto dos talentos da UCAM."
            description="Publique vagas, receba currículos qualificados e conte com o suporte do CENPRE."
            actions={actions}
          />,
        ]}
      />
    </div>
  ),
};
