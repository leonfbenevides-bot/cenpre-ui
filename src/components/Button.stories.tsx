import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { iconArgSm, hidden } from "../lib/storybook-controls";
import { ArrowRight } from "lucide-react";

const meta: Meta<typeof Button> = {
  title: "Primitivos/Button",
  component: Button,
  tags: ["autodocs"],
  args: { children: "Enviar contato", variant: "primary", size: "md" },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "ghost", "link"] },
    size: { control: "inline-radio", options: ["xs", "sm", "md", "lg"] },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    leftIcon: iconArgSm,
    rightIcon: iconArgSm,
    asChild: hidden,
  },
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {};
export const Secondary: Story = { args: { variant: "secondary", children: "Fale conosco" } };
export const Ghost: Story = { args: { variant: "ghost", children: "Ver detalhes" } };
export const Link: Story = { args: { variant: "link", children: "Saiba mais" } };
export const ComIcone: Story = { args: { rightIcon: <ArrowRight size={16} /> } };
export const Desabilitado: Story = { args: { disabled: true } };

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
      <Button>Primário</Button>
      <Button variant="secondary">Secundário</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
};

export const Tamanhos: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Button size="xs">XS · 32px</Button>
      <Button size="sm">SM · 36px</Button>
      <Button size="md">MD · 40px</Button>
      <Button size="lg">LG · 44px</Button>
    </div>
  ),
};
