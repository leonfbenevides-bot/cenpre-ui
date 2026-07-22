import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { iconArgSm } from "../lib/storybook-controls";

const meta: Meta<typeof Input> = {
  title: "Primitivos/Input",
  component: Input,
  tags: ["autodocs"],
  args: { label: "Email", placeholder: "seu@email.com" },
  argTypes: { leftIcon: iconArgSm },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof Input>;

export const Padrao: Story = {};
export const ComHint: Story = { args: { hint: "Usaremos para retornar o contato." } };
export const ComErro: Story = {
  args: { label: "Telefone", error: "Campo obrigatório", placeholder: "(22) 00000-0000" },
};
export const Desabilitado: Story = { args: { disabled: true, value: "não editável" } };

/** O `Textarea` ocupa 100% da largura do container (fill) — como no formulário real. */
export const AreaDeTexto: StoryObj<typeof Textarea> = {
  render: () => <Textarea label="Mensagem" placeholder="Escreva a sua mensagem..." rows={4} />,
};
