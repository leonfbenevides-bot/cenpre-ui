import type { Meta, StoryObj } from "@storybook/react";
import { AccordionList } from "./Accordion";

const meta: Meta<typeof AccordionList> = {
  title: "Interativos/Accordion",
  component: AccordionList,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof AccordionList>;

const faq = [
  {
    question: "Quem pode realizar estágio não obrigatório?",
    answer:
      "Estudantes regularmente matriculados na UCAM, com matrícula ativa. Saúde a partir do 2º período; demais cursos a partir do 1º.",
  },
  {
    question: "Como formalizar o meu estágio?",
    answer:
      "Pela celebração do Termo de Compromisso de Estágio (TCE), assinado pelo estudante, pela empresa concedente e pela UCAM/CENPRE.",
  },
  {
    question: "Quais são os meus direitos como estagiário?",
    answer:
      "Bolsa-auxílio e auxílio-transporte, jornada de até 6h diárias e 30h semanais, e recesso de 30 dias em estágios de 1 ano ou mais.",
  },
];

export const FAQ: Story = {
  args: { items: faq, type: "single" },
  render: (args) => <div style={{ width: 640, maxWidth: "100%" }}><AccordionList {...args} /></div>,
};

export const MultiploAberto: Story = {
  args: { items: faq, type: "multiple" },
  render: (args) => <div style={{ width: 640, maxWidth: "100%" }}><AccordionList {...args} /></div>,
};
