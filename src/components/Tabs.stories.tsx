import type { Meta, StoryObj } from "@storybook/react";
import { TabsPills } from "./Tabs";

const meta: Meta<typeof TabsPills> = {
  title: "Interativos/Tabs",
  component: TabsPills,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof TabsPills>;

export const Pilulas: Story = {
  render: () => (
    <div style={{ width: 640, maxWidth: "100%" }}>
      <TabsPills
        items={[
          {
            value: "obrig",
            label: "Estágio Obrigatório",
            content: <p style={{ color: "#3c4b57" }}>Parte da matriz curricular, requisito para concluir o curso.</p>,
          },
          {
            value: "nao",
            label: "Estágio Não Obrigatório",
            content: <p style={{ color: "#3c4b57" }}>Atividade opcional que complementa a formação profissional.</p>,
          },
        ]}
      />
    </div>
  ),
};
