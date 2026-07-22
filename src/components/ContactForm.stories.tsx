import type { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "./ContactForm";

const meta: Meta<typeof ContactForm> = {
  title: "Blocos/ContactForm",
  component: ContactForm,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
  argTypes: { contactLines: { table: { disable: true } }, onSubmit: { table: { disable: true } } },
};
export default meta;
type Story = StoryObj<typeof ContactForm>;

export const Convenio: Story = {
  args: {
    title: "Dúvidas sobre o cadastro?",
    description:
      "A equipe do CENPRE apoia a sua empresa em cada etapa do cadastro e da formalização do convênio.",
    contactLines: (
      <>
        E-mail: convenio.estagio@ucam-campos.br
        <br />
        Telefone: (22) 2726-2419 · WhatsApp: (22) 99618-0786
      </>
    ),
    onSubmit: (v) => alert(JSON.stringify(v, null, 2)),
  },
  render: (args) => (
    <div style={{ maxWidth: 960 }}>
      <ContactForm {...args} />
    </div>
  ),
};
