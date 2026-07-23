import type { Meta, StoryObj } from "@storybook/react";
import * as Icons from "./components/Icons";

const meta: Meta = {
  title: "Fundações/Tokens",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj;

const magenta: [string, string][] = [
  ["magenta 100", "#fff0f5"],
  ["magenta 200", "#ffdde8"],
  ["magenta 300", "#fcb9ce"],
  ["magenta 400", "#f494b2"],
  ["magenta 500", "#ea7095"],
  ["magenta 600", "#d64e76"],
  ["magenta 700 ★", "#b4365b"],
  ["magenta 800", "#922243"],
  ["magenta 900", "#70132f"],
  ["magenta 1000", "#530e23"],
];
const ash: [string, string][] = [
  ["ash 100", "#f9fafb"],
  ["ash 200", "#f1f3f5"],
  ["ash 300", "#e2e6e9"],
  ["ash 400", "#d6dce0"],
  ["ash 600", "#939eaa"],
];
const charcoal: [string, string][] = [
  ["charcoal 100", "#758493"],
  ["charcoal 200", "#566574"],
  ["charcoal 300", "#415260"],
  ["charcoal 400", "#3c4b57"],
  ["charcoal 500", "#303e49"],
];

function Grid({ title, items }: { title: string; items: [string, string][] }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h2 style={{ margin: "0 0 12px", fontSize: 16, fontWeight: 700, color: "#303e49" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(112px, 1fr))",
          gap: 10,
        }}
      >
        {items.map(([name, hex]) => (
          <div
            key={name}
            style={{ overflow: "hidden", borderRadius: 10, border: "1px solid #e2e6e9" }}
          >
            <div style={{ height: 56, background: hex }} />
            <div style={{ background: "#fff", padding: "8px 10px" }}>
              <div style={{ fontSize: 12.5, fontWeight: 600, color: "#303e49" }}>{name}</div>
              <div
                style={{
                  fontFamily: "ui-monospace, monospace",
                  fontSize: 11.5,
                  color: "#758493",
                  textTransform: "uppercase",
                }}
              >
                {hex}
              </div>
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
    <div
      style={{
        display: "flex",
        gap: 24,
        padding: 32,
        fontFamily: "Work Sans, system-ui, sans-serif",
      }}
    >
      {(
        [
          ["8px", "chip"],
          ["16px", "card"],
          ["100px", "pill"],
        ] as [string, string][]
      ).map(([r, label]) => (
        <div key={label} style={{ textAlign: "center", fontSize: 12, color: "#415260" }}>
          <div
            style={{
              height: 64,
              width: 96,
              marginBottom: 8,
              background: "#fff0f5",
              border: "1px solid #fcb9ce",
              borderRadius: r,
            }}
          />
          {label} · {r}
        </div>
      ))}
    </div>
  ),
};

const shadows: [string, string][] = [
  ["shadow-button", "0 1px 2px 0 rgba(48, 62, 73, 0.05)"],
  ["shadow-card", "0 1px 2px 0 rgba(48, 62, 73, 0.06), 0 4px 10px -3px rgba(48, 62, 73, 0.07)"],
  [
    "shadow-card-hover",
    "0 2px 4px -1px rgba(48, 62, 73, 0.06), 0 12px 24px -6px rgba(48, 62, 73, 0.12)",
  ],
  [
    "shadow-popover",
    "0 4px 8px -2px rgba(48, 62, 73, 0.06), 0 16px 32px -8px rgba(48, 62, 73, 0.12)",
  ],
  [
    "shadow-modal",
    "0 8px 16px -4px rgba(48, 62, 73, 0.08), 0 32px 56px -16px rgba(48, 62, 73, 0.2)",
  ],
];

export const Sombras: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 32,
        padding: 32,
        background: "#f1f3f5",
        fontFamily: "Work Sans, system-ui, sans-serif",
      }}
    >
      {shadows.map(([name, value]) => (
        <div key={name} style={{ textAlign: "center" }}>
          <div
            style={{
              height: 80,
              borderRadius: 16,
              background: "#fff",
              marginBottom: 14,
              boxShadow: value,
            }}
          />
          <div style={{ fontSize: 12.5, fontWeight: 600, color: "#303e49" }}>{name}</div>
        </div>
      ))}
    </div>
  ),
};

export const Tipografia: Story = {
  render: () => (
    <div style={{ padding: 32, display: "flex", flexDirection: "column", gap: 36 }}>
      <div>
        <p style={{ margin: "0 0 12px", fontSize: 12, fontWeight: 700, color: "#758493" }}>
          WORK SANS · font-display / font-editorial · títulos e headlines em todas as páginas
        </p>
        <p
          style={{
            margin: "0 0 6px",
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 600,
            fontSize: 44,
            lineHeight: 1.05,
            color: "#303e49",
          }}
        >
          Conectando você ao futuro.
        </p>
        <p
          style={{
            margin: 0,
            fontFamily: "Work Sans, sans-serif",
            fontWeight: 500,
            fontSize: 22,
            color: "#303e49",
          }}
        >
          Work Sans 500/600 — clamp(2rem, 4vw, 3.25rem) nos H2 das seções.
        </p>
      </div>
      <div>
        <p style={{ margin: "0 0 12px", fontSize: 12, fontWeight: 700, color: "#758493" }}>
          INTER · font-sans (padrão) · corpo de texto e UI
        </p>
        <p
          style={{
            margin: "0 0 6px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: 16,
            lineHeight: 1.6,
            color: "#3c4b57",
            maxWidth: 560,
          }}
        >
          Texto de corpo em Inter 400 — orientações de estágio, documentos, convênios e vagas
          acompanhados de perto pela equipe do CENPRE.
        </p>
        <p style={{ margin: 0, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16 }}>
          Inter 600 — labels, botões e ênfases de UI.
        </p>
      </div>
    </div>
  ),
};

export const IconesEmUso: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(96px, 1fr))",
        gap: 4,
        padding: 32,
        fontFamily: "Work Sans, system-ui, sans-serif",
      }}
    >
      {Object.entries(Icons).map(([name, Icon]) => (
        <div
          key={name}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            padding: "16px 8px",
            borderRadius: 10,
            border: "1px solid #e2e6e9",
          }}
        >
          <Icon size={20} color="#b4365b" />
          <span style={{ fontSize: 10.5, color: "#566574", textAlign: "center" }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
