import type { Meta, StoryObj } from "@storybook/react";
import { ImageMosaic } from "./ImageMosaic";
import col1 from "../assets/col-1.jpg";
import col2 from "../assets/col-2.jpg";
import col3 from "../assets/col-3.jpg";
import col4 from "../assets/col-4.jpg";

const meta: Meta<typeof ImageMosaic> = {
  title: "Composição/ImageMosaic",
  component: ImageMosaic,
  parameters: { layout: "centered" },
};
export default meta;
type Story = StoryObj<typeof ImageMosaic>;

/* Ordem importa: a 1ª é a foto principal (maior). Lidere com rostos —
   enquadramentos de costas funcionam melhor como apoio, no final. */
const imgs = [
  { src: col2, alt: "Estagiário da UCAM trabalhando no escritório" },
  { src: col3, alt: "Estudante da UCAM sorrindo no ambiente de trabalho" },
  { src: col4, alt: "Estudante da UCAM em sua estação de trabalho" },
  { src: col1, alt: "Ambiente de trabalho colaborativo" },
];

/** Colagem com 4 fotos — sobre fundo claro. */
export const Claro: Story = {
  args: { images: imgs, ringTone: "light" },
  decorators: [
    (S) => (
      <div className="w-[560px] bg-white p-10">
        <S />
      </div>
    ),
  ],
};

/** Colagem sobre faixa escura (banner de marca). */
export const Escuro: Story = {
  args: { images: imgs, ringTone: "dark" },
  decorators: [
    (S) => (
      <div className="w-[560px] bg-charcoal-500 p-10">
        <S />
      </div>
    ),
  ],
};
