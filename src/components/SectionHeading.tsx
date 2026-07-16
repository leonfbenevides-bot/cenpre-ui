import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface SectionHeadingProps {
  /** Rótulo pequeno em maiúsculas (magenta). */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  /** Tag do título. @default "h2" */
  as?: ElementType;
  className?: string;
}

/**
 * Cabeçalho de seção padrão: eyebrow (magenta) + título + subtítulo.
 * Presente em quase todas as seções (Plataforma, Documentos, FAQ, etc.).
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  as: Title = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex max-w-prose flex-col gap-2.5",
        align === "center" && "items-center text-center",
        className,
      )}
    >
      {eyebrow && (
        <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-magenta-700">
          {eyebrow}
        </span>
      )}
      <Title className="font-display text-[32px] font-semibold leading-[1.1] text-charcoal-500 md:text-[40px]">
        {title}
      </Title>
      {subtitle && <p className="text-base leading-relaxed text-charcoal-400">{subtitle}</p>}
    </div>
  );
}
