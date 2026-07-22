import type { ReactNode } from "react";
import { Card } from "./Card";
import { cn } from "@/lib/cn";

export interface StepCardProps {
  /** Número do passo (1, 2, 3…). */
  number: number | string;
  title: string;
  description: string;
  /** Ícone opcional à direita (ex.: no fluxo de cadastro). */
  icon?: ReactNode;
  className?: string;
}

/**
 * Card de passo numerado (badge circular magenta + título + descrição).
 * Usado em "Como funciona o cadastro" e "Como começar".
 */
export function StepCard({ number, title, description, icon, className }: StepCardProps) {
  return (
    <Card padding="none" className={cn("h-full", className)}>
      <div className="flex items-start gap-4 p-6">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-magenta-700 text-[17px] font-bold text-white"
          aria-hidden
        >
          {number}
        </span>
        <div className="flex flex-1 flex-col gap-1">
          <h3 className="text-base font-semibold text-charcoal-500">{title}</h3>
          <p className="text-[13px] leading-relaxed text-charcoal-400">{description}</p>
        </div>
        {icon && (
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-magenta-100 text-magenta-700"
            aria-hidden
          >
            {icon}
          </span>
        )}
      </div>
    </Card>
  );
}
