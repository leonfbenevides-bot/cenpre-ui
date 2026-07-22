import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface EditorialCTAProps {
  eyebrow?: string;
  title: ReactNode;
  /** Botões/ações — normalmente um `<Button>` primário + um ghost claro. */
  actions?: ReactNode;
  className?: string;
}

/**
 * Card de encerramento das páginas: bloco charcoal arredondado com glow magenta,
 * título display e ações. Padrão do redesign "Editorial Aspiracional".
 */
export function EditorialCTA({ eyebrow, title, actions, className }: EditorialCTAProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] bg-charcoal-500 px-8 py-16 text-white md:px-16 md:py-20",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(180,54,91,0.7), transparent 70%)" }}
      />
      {eyebrow && (
        <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          {eyebrow}
        </p>
      )}
      <h2 className="relative max-w-2xl font-editorial text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
        {title}
      </h2>
      {actions && <div className="relative mt-8 flex flex-wrap gap-4">{actions}</div>}
    </div>
  );
}
