import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface JourneyDiagramNode {
  icon: ReactNode;
  label: string;
}

export interface JourneyDiagramSide {
  label: string;
  nos: JourneyDiagramNode[];
}

export interface JourneyDiagramProps {
  aluno: JourneyDiagramSide;
  empresa: JourneyDiagramSide;
  className?: string;
}

function NodeChip({ icon, label, align }: JourneyDiagramNode & { align: "left" | "right" }) {
  return (
    <div className={cn("flex items-center gap-3", align === "right" && "flex-row-reverse")}>
      <div className="flex h-[72px] w-[72px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-chip border-2 border-ash-200 bg-white">
        <span className="text-magenta-700" aria-hidden>
          {icon}
        </span>
        <span className="rounded-chip bg-ash-200 px-1.5 py-0.5 text-[11px] font-medium text-charcoal-400">
          {label}
        </span>
      </div>
      <div
        className="h-px flex-1 border-t border-dashed border-ash-400"
        style={{ minWidth: 24 }}
        aria-hidden
      />
    </div>
  );
}

/**
 * Diagrama de jornada Aluno × Empresa em torno do hub CENPRE (Figma: seção
 * "Entenda como conectamos"). Recriação simplificada — hub-and-spoke com
 * conectores tracejados — do desenho original (composição SVG absoluta).
 */
export function JourneyDiagram({ aluno, empresa, className }: JourneyDiagramProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[24px] border border-ash-200 bg-white p-6 md:p-10",
        className,
      )}
    >
      <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        <div className="flex flex-col gap-4">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-charcoal-300 md:hidden">
            {aluno.label}
          </p>
          {aluno.nos.map((n) => (
            <NodeChip key={n.label} {...n} align="right" />
          ))}
        </div>

        <div className="hidden flex-col items-center gap-3 self-stretch md:flex">
          <span
            className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal-300"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
          >
            {aluno.label}
          </span>
          <div className="w-px flex-1 border-l border-dashed border-ash-400" aria-hidden />
          <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full bg-charcoal-500 text-center text-sm font-bold tracking-wide text-white shadow-modal">
            CENPRE
          </div>
          <div className="w-px flex-1 border-l border-dashed border-ash-400" aria-hidden />
          <span
            className="text-xs font-semibold uppercase tracking-[0.16em] text-charcoal-300"
            style={{ writingMode: "vertical-rl" }}
          >
            {empresa.label}
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.16em] text-charcoal-300 md:hidden">
            {empresa.label}
          </p>
          {empresa.nos.map((n) => (
            <NodeChip key={n.label} {...n} align="left" />
          ))}
        </div>
      </div>
    </div>
  );
}
