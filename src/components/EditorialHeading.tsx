import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface EditorialHeadingProps {
  /** Rótulo curto em maiúsculas acima do título (magenta). */
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Centraliza o bloco (usado em seções de largura total). */
  align?: "left" | "center";
  /** Escala do título. `lg` para seções principais, `md` para blocos internos. */
  size?: "md" | "lg";
  /** Cor do texto — `dark` para fundos escuros. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Cabeçalho editorial das seções (eyebrow + título display + subtítulo).
 * Padrão do redesign "Editorial Aspiracional" — usado em todas as seções das
 * páginas para manter a mesma escala tipográfica e o mesmo respiro.
 */
export function EditorialHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "lg",
  tone = "light",
  className,
}: EditorialHeadingProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 text-xs font-semibold uppercase tracking-[0.2em]",
            tone === "dark" ? "text-magenta-300" : "text-magenta-700",
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-editorial font-semibold tracking-[-0.015em]",
          size === "lg"
            ? "text-[clamp(2rem,4vw,3.25rem)] leading-[1.02]"
            : "text-[clamp(1.7rem,3.2vw,2.6rem)] leading-[1.12]",
          tone === "dark" ? "text-white" : "text-charcoal-500",
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-charcoal-400",
            align === "center" && "mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
