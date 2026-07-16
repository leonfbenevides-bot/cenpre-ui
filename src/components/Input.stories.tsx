import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Input> = {
  title: "Primitivos/Input",
  component: Input,
  tags: ["autodocs"],
  args: { label: "Email", placeholder: "seu@email.com" },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Padrao: Story = {};
export const ComHint: Story = { args: { hint: "Usaremos para retornar o contato." } };
export const ComErro: Story = { args: { label: "Telefone", error: "Campo obrigatório", placeholder: "(22) 00000-0000" } };
export const Desabilitado: Story = { args: { disabled: true, value: "não editável" } };

export const AreaDeTexto: StoryObj<typeof Textarea> = {
  render: () => (
    <div style={{ width: 360 }}>
      <Textarea label="Mensagem" placeholder="Escreva a sua mensagem..." rows={4} />
    </div>
  ),
};
