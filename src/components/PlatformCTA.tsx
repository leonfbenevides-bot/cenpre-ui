import type { ReactNode } from "react";
import { Button } from "./Button";
import { ShieldCheckIcon } from "./Icons";
import { cn } from "@/lib/cn";

export interface PlatformCTAProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Botão primário (Acessar a plataforma). */
  primaryLabel?: string;
  primaryHref?: string;
  onPrimary?: () => void;
  /** Botão secundário em contorno (Fale conosco). */
  secondaryLabel?: string;
  secondaryHref?: string;
  onSecondary?: () => void;
  /** Linha de confiança (ex.: "Processos 100% seguros"). */
  trust?: ReactNode;
  /** Slot visual à direita (ilustração/mockup da plataforma). */
  media?: ReactNode;
  className?: string;
}

/**
 * Faixa de CTA da Plataforma CENPRE Carreiras — fundo claro, texto charcoal,
 * botões magenta e ilustração da plataforma sangrando à direita. Encerra as
 * páginas direcionando para a plataforma (symplicity).
 */
export function PlatformCTA({
  eyebrow = "PLATAFORMA CENPRE",
  title,
  description,
  primaryLabel = "Acessar a plataforma",
  primaryHref,
  onPrimary,
  secondaryLabel = "Fale conosco",
  secondaryHref,
  onSecondary,
  trust = "Processos 100% seguros",
  media,
  className,
}: PlatformCTAProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden rounded-card border border-ash-200 bg-ash-100",
        className,
      )}
    >
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-5 p-8 md:p-12">
          <span className="text-[13px] font-semibold uppercase tracking-[0.16em] text-magenta-700">
            {eyebrow}
          </span>
          <h2 className="font-display text-[32px] font-semibold leading-[1.1] text-charcoal-500 md:text-[40px]">
            {title}
          </h2>
          {description && <p className="max-w-prose text-charcoal-400">{description}</p>}
          <div className="flex flex-wrap gap-3 pt-1">
            {primaryHref ? (
              <Button asChild>
                <a href={primaryHref}>{primaryLabel}</a>
              </Button>
            ) : (
              <Button onClick={onPrimary}>{primaryLabel}</Button>
            )}
            {secondaryHref ? (
              <Button
                asChild
                variant="secondary"
                className="border-magenta-300 text-magenta-700 hover:bg-magenta-100"
              >
                <a href={secondaryHref}>{secondaryLabel}</a>
              </Button>
            ) : (
              <Button
                variant="secondary"
                onClick={onSecondary}
                className="border-magenta-300 text-magenta-700 hover:bg-magenta-100"
              >
                {secondaryLabel}
              </Button>
            )}
          </div>
          {trust && (
            <p className="flex items-center gap-2 text-sm text-magenta-700">
              <ShieldCheckIcon size={16} className="shrink-0" />
              {trust}
            </p>
          )}
        </div>
        {media && <div className="relative hidden self-stretch md:block">{media}</div>}
      </div>
    </section>
  );
}
