import type { ReactNode } from "react";
import { IconChip } from "./IconChip";

export interface DocCardProps {
  /** Rótulo da etapa (ex.: Início, Durante, Encerramento). */
  label: string;
  icon: ReactNode;
  /** Lista de documentos da etapa. */
  items: string[];
  className?: string;
}

/**
 * Card de documentos por etapa. Barra de acento magenta no topo,
 * cabeçalho (ícone + etapa) e lista de documentos.
 */
export function DocCard({ label, icon, items, className }: DocCardProps) {
  return (
    <div
      className={`flex h-full flex-col overflow-hidden rounded-card border border-ash-300 bg-white shadow-card ${className ?? ""}`}
    >
      <div className="h-1 w-full bg-magenta-700" aria-hidden />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-2.5">
          <IconChip size="sm">{icon}</IconChip>
          <span className="text-base font-semibold text-charcoal-500">{label}</span>
        </div>
        <div className="h-px w-full bg-ash-200" />
        <ul className="flex flex-col gap-2">
          {items.map((item) => (
            <li key={item} className="flex gap-2 text-[13px] text-charcoal-400">
              <span aria-hidden className="text-magenta-700">
                →
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
