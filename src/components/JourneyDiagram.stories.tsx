import type { Meta, StoryObj } from "@storybook/react";
import { JourneyDiagram } from "./JourneyDiagram";
import { campos } from "../content/campos";

const meta: Meta<typeof JourneyDiagram> = {
  title: "Blocos/JourneyDiagram",
  component: JourneyDiagram,
  parameters: { layout: "padded" },
};
export default meta;
type Story = StoryObj<typeof JourneyDiagram>;

export const Padrao: Story = { args: { aluno: campos.jornada.aluno, empresa: campos.jornada.empresa } };
