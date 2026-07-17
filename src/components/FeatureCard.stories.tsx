import type { Meta, StoryObj } from "@storybook/react";
import { FeatureCard } from "./FeatureCard";
import { iconArg, iconName } from "../lib/storybook-controls";
import { Briefcase, FileText, ShieldCheck } from "lucide-react";

const meta: Meta<typeof FeatureCard> = {
  title: "Composição/FeatureCard",
  component: FeatureCard,
  tags: ["autodocs"],
  args: {
    icon: iconName("estagio"),
    title: "Vagas e oportunidades",
    description: "Estágios e empregos do CENPRE e de parceiros.",
  },
  argTypes: { icon: iconArg },
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof FeatureCard>;

export const Padrao: Story = {};

export const Grid: Story = {
  render: () => (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, maxWidth: 760 }}>
      <FeatureCard icon={<Briefcase />} title="Vagas e oportunidades" description="Estágios e empregos do CENPRE e de parceiros." />
      <FeatureCard icon={<FileText />} title="Documentos de estágio" description="Emita TCE, termos e relatórios online." />
      <FeatureCard icon={<ShieldCheck />} title="Suporte em todas as etapas" description="Do cadastro à efetivação, com orientação." />
    </div>
  ),
};
