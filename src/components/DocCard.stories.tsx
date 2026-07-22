import type { Meta, StoryObj } from "@storybook/react";
import { DocCard } from "./DocCard";
import { iconArg, iconName } from "../lib/storybook-controls";
import { FileText, CalendarDays, CircleCheck } from "lucide-react";

const meta: Meta<typeof DocCard> = {
  title: "Composição/DocCard",
  component: DocCard,
  tags: ["autodocs"],
  args: {
    label: "Início",
    icon: iconName("documento"),
    items: [
      "Manual de estágio",
      "Emissão do TCE",
      "Declaração de matrícula",
      "Plano de atividades",
    ],
  },
  argTypes: { icon: iconArg },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof DocCard>;

export const Padrao: Story = {};

export const PorEtapa: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 820 }}>
      <DocCard
        label="Início"
        icon={<FileText size={20} />}
        items={["Manual de estágio", "Emissão do TCE", "Plano de atividades"]}
      />
      <DocCard
        label="Durante"
        icon={<CalendarDays size={20} />}
        items={["Termo aditivo", "Relatório de acompanhamento"]}
      />
      <DocCard
        label="Encerramento"
        icon={<CircleCheck size={20} />}
        items={["Termo de rescisão", "Avaliação final"]}
      />
    </div>
  ),
};
