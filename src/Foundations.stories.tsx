import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Fundações/Tokens",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

const magenta: [string, string][] = [
  ["magenta 100", "#fff0f5"], ["magenta 200", "#ffdde8"], ["magenta 300", "#fcb9ce"],
  ["magenta 400", "#f494b2"], ["magenta 500", "#ea7095"], ["magenta 600", "#d64e76"],
  ["magenta 700 ★", "#b4365b"], ["magenta 800", "#922243"], ["magenta 900", "#70132f"], ["magenta 1000", "#530e23"],
];
const ash: [string, string][] = [
  ["ash 100", "#f9fafb"], ["ash 200", "#f1f3f5"], ["ash 300", "#e2e6e9"], ["ash 400", "#d6dce0"], ["ash 600", "#939eaa"],
];
const charcoal: [string, string][] = [
  ["charcoal 100", "#758493"], ["charcoal 200", "#566574"], ["charcoal 300", "#415260"], ["charcoal 400", "#3c4b57"], ["charcoal 500", "#303e49"],
];

function Grid({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#303e49" }}>{title}</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(112px, 1fr))", gap: 10 }}>
        {items.map(([name, hex]) => (
          <div key={name} style={{ overflow: "hidden", borderRadius: 10, border: "1px solid #e2e6e9" }}>
            <div style={{ height: 56, background: hex }} />
            <div style={{ background: "#fff", padding: "8px 10px" }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "#303e49" }}>{name}</div>
              <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 11.5, color: "#758493", textTransform: "uppercase" }}>{hex}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export const Cores: Story = {
  render: () => (
    <div style={{ padding: 32, fontFamily: "Work Sans, system-ui, sans-serif" }}>
      <Grid title="Marca — magenta (primária = 700)" items={magenta} />
      <Grid title="Neutros — ash (fundos/bordas)" items={ash} />
      <Grid title="Texto — charcoal" items={charcoal} />
    </div>
  ),
};

export const RaioECantos: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24, padding: 32, fontFamily: "Work Sans, system-ui, sans-serif" }}>
      {([["8px", "chip"], ["16px", "card"], ["100px", "pill"]] as [string, string][]).map(([r, label]) => (
        <div key={label} style={{ textAlign: "center", fontSize: 12, color: "#415260" }}>
          <div style={{ height: 64, width: 96, marginBottom: 8, background: "#fff0f5", border: "1px solid #fcb9ce", borderRadius: r }} />
          {label} · {r}
        </div>
      ))}
    </div>
  ),
};
