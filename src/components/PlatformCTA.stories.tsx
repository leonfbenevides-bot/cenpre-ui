import type { Meta, StoryObj } from "@storybook/react";
import { PlatformCTA } from "./PlatformCTA";

const meta: Meta<typeof PlatformCTA> = {
  title: "Blocos/PlatformCTA",
  component: PlatformCTA,
  tags: ["autodocs"],
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof PlatformCTA>;

export const Padrao: Story = {
  args: {
    title: "Mais do que uma plataforma completa, nós acompanhamos todas as etapas.",
    description: "Vagas, currículo, documentos e convênios em um só lugar.",
    primaryHref: "https://ucam-csm.symplicity.com",
  },
  render: (args) => <div style={{ maxWidth: 1000 }}><PlatformCTA {...args} /></div>,
};
