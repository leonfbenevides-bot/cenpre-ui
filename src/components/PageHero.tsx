import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Ações (botões). Ex.: "Quero fazer contato". */
  actions?: ReactNode;
  /** Chips/pills opcionais abaixo do subtítulo. */
  pills?: ReactNode;
  /** Breadcrumb opcional (ex.: "Início › Empresa › ..."). */
  breadcrumb?: ReactNode;
  /** Foto/ilustração à direita (algumas subpáginas). Ativa layout 2 colunas. */
  media?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

/**
 * Hero de página em fundo magenta (marca), texto branco, com textura sutil.
 * Usado nas subpáginas e no "Sobre nós". Com `media`, vira 2 colunas (texto + foto).
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  actions,
  pills,
  breadcrumb,
  media,
  align = "left",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-magenta-800 py-16 text-white md:py-20",
        className,
      )}
    >
      {/* Textura: pattern de bolinhas + glows radiais suaves (decor do design). */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.10) 1px, transparent 0) 0 0 / 18px 18px, radial-gradient(460px 460px at 88% -15%, rgba(255,255,255,0.08), transparent 60%), radial-gradient(240px 240px at 10% 120%, rgba(255,255,255,0.05), transparent 60%)",
        }}
      />
      <div
        className={cn(
          "relative mx-auto max-w-content px-6 md:px-gutter",
          media && "grid items-center gap-10 md:grid-cols-2",
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-5",
            align === "center" && !media && "items-center text-center",
          )}
        >
          {breadcrumb && <div className="text-sm text-magenta-200">{breadcrumb}</div>}
          {eyebrow && (
            <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-magenta-200">
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-prose font-display text-3xl font-semibold leading-tight md:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="max-w-prose text-base text-magenta-100 md:text-lg">{subtitle}</p>}
          {pills && <div className="flex flex-wrap gap-2 pt-1">{pills}</div>}
          {actions && <div className="flex flex-wrap gap-3 pt-2">{actions}</div>}
        </div>
        {media && (
          <div className="hidden overflow-hidden rounded-card md:block">{media}</div>
        )}
      </div>
    </section>
  );
}
