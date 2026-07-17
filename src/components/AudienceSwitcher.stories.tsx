import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { AudienceSwitcher } from "./AudienceSwitcher";
import { UsersIcon, BuildingIcon } from "./Icons";

const options = [
  { value: "aluno", label: "Sou um aluno ou Egresso", icon: <UsersIcon size={16} /> },
  { value: "empresa", label: "Sou uma empresa", icon: <BuildingIcon size={16} /> },
];

const meta: Meta<typeof AudienceSwitcher> = {
  title: "Blocos/AudienceSwitcher",
  component: AudienceSwitcher,
  argTypes: { options: { table: { disable: true } } },
  args: { options, value: "empresa", floating: false },
};
export default meta;
type Story = StoryObj<typeof AudienceSwitcher>;

export const Empresa: Story = {};

export const Aluno: Story = { args: { value: "aluno" } };

/** Controlado — clique para alternar o perfil. */
export const Interativo: Story = {
  render: (args) => {
    const [value, setValue] = useState("aluno");
    return <AudienceSwitcher {...args} value={value} onChange={setValue} />;
  },
};
