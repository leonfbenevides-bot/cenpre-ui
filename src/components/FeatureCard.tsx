import type { ReactNode } from "react";
import { Card } from "./Card";
import { IconChip } from "./IconChip";

export interface FeatureCardProps {
  /** Ícone (24px) exibido no chip. */
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

/**
 * Card de destaque com ícone + título + descrição.
 * Cobre os "módulos da plataforma" e a seção "O CENPRE em números".
 */
export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <Card padding="none" className={className}>
      <div className="flex flex-col gap-3 p-6">
        <IconChip>{icon}</IconChip>
        <h3 className="text-base font-semibold text-charcoal-500">{title}</h3>
        <p className="text-[13px] leading-relaxed text-charcoal-400">{description}</p>
      </div>
    </Card>
  );
}
