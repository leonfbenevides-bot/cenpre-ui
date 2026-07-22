import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface EditorialCTAProps {
  eyebrow?: string;
  title: ReactNode;
  /** Botões/ações — normalmente um `<Button>` primário + um ghost claro. */
  actions?: ReactNode;
  /** Cutout (PNG/WebP com fundo transparente) — some à direita, sem foto de fundo. */
  image?: string;
  imageAlt?: string;
  className?: string;
}

/**
 * Card de encerramento das páginas: bloco charcoal arredondado com glow magenta,
 * título display e ações. Padrão do redesign "Editorial Aspiracional". Com
 * `image`, mostra um cutout à direita (mesmo tratamento dos CTAs da Home —
 * `h-full` é necessário: um `<img>` absoluto com `inset-y-0` + largura fixa mas
 * sem altura explícita usa a proporção intrínseca em vez de esticar pro
 * container, e acaba cortado pelo `overflow-hidden`).
 */
export function EditorialCTA({
  eyebrow,
  title,
  actions,
  image,
  imageAlt = "",
  className,
}: EditorialCTAProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] bg-charcoal-500 px-8 py-16 text-white md:px-16 md:py-20",
        className,
      )}
    >
      <div
        aria-hidden
        className={cn(
          "absolute h-80 w-80 rounded-full opacity-40 blur-3xl",
          image ? "-right-16 top-1/2 h-96 w-96 -translate-y-1/2" : "-right-20 -top-20",
        )}
        style={{ background: "radial-gradient(circle, rgba(180,54,91,0.7), transparent 70%)" }}
      />
      {image && (
        <img
          src={image}
          alt={imageAlt}
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-6 hidden h-full w-[34%] object-contain object-bottom drop-shadow-[0_24px_40px_rgba(0,0,0,0.4)] md:right-10 lg:block"
        />
      )}
      {eyebrow && (
        <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "relative font-editorial text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.015em]",
          image ? "max-w-xl" : "max-w-2xl",
        )}
      >
        {title}
      </h2>
      {actions && <div className="relative mt-8 flex flex-wrap gap-4">{actions}</div>}
    </div>
  );
}
