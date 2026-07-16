import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface HeroBannerProps {
  /** URL da foto de fundo (full-bleed). Se ausente, usa um gradiente neutro. */
  image?: string;
  imageAlt?: string;
  /** Marca/logo acima do título. */
  brand?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  /** Ações (ex.: "Tenho interesse!" + "Saber mais"). */
  actions?: ReactNode;
  className?: string;
}

/**
 * Banner de destaque (hero) — foto full-bleed ao fundo, com um scrim escuro à
 * esquerda para legibilidade e o conteúdo (marca + título + CTAs) por cima.
 * Pensado para rodar dentro do `Carousel` (slides de hero) ou isolado.
 */
export function HeroBanner({ image, imageAlt = "", brand, title, description, actions, className }: HeroBannerProps) {
  return (
    <section
      className={cn(
        "relative isolate flex min-h-[380px] items-center overflow-hidden rounded-card bg-charcoal-500 text-white md:min-h-[440px]",
        className,
      )}
    >
      {image ? (
        <img
          src={image}
          alt={imageAlt}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-right"
        />
      ) : (
        <div
          className="absolute inset-0 -z-20"
          style={{ background: "linear-gradient(135deg,#2f3b45,#566574 55%,#b4365b)" }}
          aria-hidden
        />
      )}
      {/* Scrim: escurece a esquerda para o texto ficar legível sobre a foto. */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to right, rgba(48,62,73,0.96) 0%, rgba(48,62,73,0.72) 42%, rgba(48,62,73,0) 78%)",
        }}
        aria-hidden
      />
      <div className="flex max-w-xl flex-col gap-4 p-8 md:p-14">
        {brand && <div className="flex items-center gap-2 font-semibold">{brand}</div>}
        <h2 className="font-display text-3xl font-semibold leading-tight md:text-[40px]">{title}</h2>
        {description && <p className="max-w-md leading-relaxed text-ash-200">{description}</p>}
        {actions && <div className="mt-2 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
