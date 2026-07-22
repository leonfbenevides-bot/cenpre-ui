import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface EditorialPageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  /** Ações (botões). Ex.: "Quero fazer contato". */
  actions?: ReactNode;
  /** Chips/pills opcionais abaixo do subtítulo. */
  pills?: ReactNode;
  /** Breadcrumb opcional (ex.: "Início › Empresa › ..."). */
  breadcrumb?: ReactNode;
  /** Foto/ilustração à direita (poucas subpáginas). Ativa layout 2 colunas. */
  media?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

/**
 * Hero editorial das subpáginas: bloco charcoal com textura granulada e glow
 * magenta — mesma linguagem do `HomeRedesign`, sem depender de foto full-bleed
 * (a maioria das subpáginas não tem uma foto dedicada e distinta disponível).
 * Mesma API do `PageHero` (drop-in), para manter as duas versões em paralelo.
 */
export function EditorialPageHero({
  eyebrow,
  title,
  subtitle,
  actions,
  pills,
  breadcrumb,
  media,
  align = "left",
  className,
}: EditorialPageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-charcoal-500 py-20 text-white md:py-28",
        className,
      )}
    >
      <div
        aria-hidden
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(180,54,91,0.55), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />
      <div
        className={cn(
          "relative mx-auto max-w-container px-6 md:px-gutter",
          media && "grid items-center gap-12 lg:grid-cols-2",
        )}
      >
        <div
          className={cn(
            "flex flex-col gap-5",
            align === "center" && !media && "mx-auto items-center text-center",
          )}
        >
          {breadcrumb && <div>{breadcrumb}</div>}
          {eyebrow && (
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-magenta-300">
              {eyebrow}
            </span>
          )}
          <h1 className="max-w-2xl font-editorial text-[clamp(2.25rem,4.5vw,3.75rem)] font-semibold leading-[1.03] tracking-[-0.02em]">
            {title}
          </h1>
          {subtitle && <p className="max-w-xl text-lg leading-relaxed text-white/70">{subtitle}</p>}
          {pills && <div className="flex flex-wrap gap-2 pt-1">{pills}</div>}
          {actions && <div className="flex flex-wrap gap-3 pt-2">{actions}</div>}
        </div>
        {media && (
          <div className="hidden overflow-hidden rounded-3xl shadow-2xl shadow-charcoal-500/40 lg:block">
            {media}
          </div>
        )}
      </div>
    </section>
  );
}
