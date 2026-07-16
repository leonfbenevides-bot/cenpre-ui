import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import { IconChip } from "./IconChip";
import { Building2, Briefcase, GraduationCap } from "lucide-react";

const meta: Meta<typeof Avatar> = {
  title: "Primitivos/Avatar & IconChip",
  component: Avatar,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Avatar>;

export const AvatarIniciais: Story = { args: { fallback: "TS" } };
export const AvatarIcone: Story = { args: { icon: <Building2 size={22} /> } };

export const Tamanhos: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <Avatar size="sm" fallback="AB" />
      <Avatar size="md" fallback="CD" />
      <Avatar size="lg" fallback="EF" />
    </div>
  ),
};

export const Chips: Story = {
  name: "IconChip (tons e tamanhos)",
  render: () => (
    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <IconChip><Briefcase size={22} /></IconChip>
      <IconChip tone="neutral"><GraduationCap size={22} /></IconChip>
      <IconChip size="sm"><Building2 size={18} /></IconChip>
      <IconChip size="lg"><Briefcase size={24} /></IconChip>
    </div>
  ),
};
