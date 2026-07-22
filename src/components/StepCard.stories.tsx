import type { Meta, StoryObj } from "@storybook/react";
import { StepCard } from "./StepCard";
import { iconArg } from "../lib/storybook-controls";

const meta: Meta<typeof StepCard> = {
  title: "Composição/StepCard",
  component: StepCard,
  tags: ["autodocs"],
  args: {
    number: 1,
    title: "Acesse e crie seu perfil",
    description: "Entre na plataforma e complete os seus dados.",
  },
  argTypes: { icon: iconArg },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof StepCard>;

export const Padrao: Story = {};

export const Fluxo: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 820 }}>
      <StepCard
        number={1}
        title="Acesse e crie seu perfil"
        description="Entre na plataforma e complete os seus dados."
      />
      <StepCard
        number={2}
        title="Cadastre seu currículo"
        description="Envie ou monte o seu no Banco de Currículos."
      />
      <StepCard
        number={3}
        title="Candidate-se às vagas"
        description="Aplique e acompanhe todo o processo."
      />
    </div>
  ),
};
