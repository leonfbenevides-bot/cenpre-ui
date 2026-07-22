import type { Meta, StoryObj } from "@storybook/react";
import { JobCard } from "./JobCard";

const meta: Meta<typeof JobCard> = {
  title: "Composição/JobCard",
  component: JobCard,
  tags: ["autodocs"],
  args: {
    area: "Marketing",
    source: "CENPRE",
    modality: "Estágio",
    title: "Assistente de Marketing Digital",
    company: "Tech Solutions",
    location: "Campos dos Goytacazes, RJ",
    salary: "R$ 1.000,00 + Benefícios",
    actionLabel: "Ver vaga",
  },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof JobCard>;

export const Padrao: Story = {
  render: (args) => (
    <div style={{ maxWidth: 380 }}>
      <JobCard {...args} />
    </div>
  ),
};

export const FonteParceira: Story = {
  args: {
    source: "NUBE",
    area: "Saúde",
    title: "Estágio em Nutrição",
    company: "Hospital Regional",
    salary: "R$ 900,00 + Benefícios",
  },
  render: (args) => (
    <div style={{ maxWidth: 380 }}>
      <JobCard {...args} />
    </div>
  ),
};

export const Grid: Story = {
  render: () => (
    <div
      style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 1100 }}
    >
      <JobCard
        area="Marketing"
        source="CENPRE"
        modality="Estágio"
        title="Assistente de Marketing"
        company="Tech Solutions"
        location="Campos dos Goytacazes, RJ"
        salary="R$ 1.000,00 + Benefícios"
      />
      <JobCard
        area="Saúde"
        source="NUBE"
        modality="Estágio"
        title="Estágio em Nutrição"
        company="Hospital Regional"
        location="Campos dos Goytacazes, RJ"
        salary="R$ 900,00 + Benefícios"
      />
      <JobCard
        area="Direito"
        source="CENPRE"
        modality="Estágio"
        title="Estágio Jurídico"
        company="Escritório Menezes"
        location="Campos dos Goytacazes, RJ"
        salary="R$ 1.200,00"
      />
    </div>
  ),
};
