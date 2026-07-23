import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface EditorialCTAProps {
  eyebrow?: string;
  title: ReactNode;
  /** Botões/ações — normalmente um `<Button>` primário + um ghost claro. */
  actions?: ReactNode;
  /** Foto de fundo (com fundo real, não recorte) ou cutout — ver `imageFit`. */
  image?: string;
  imageAlt?: string;
  /**
   * `"cover"` (padrão): foto cheia sangrando à direita com scrim escuro por
   * cima, para texto legível — mesmo tratamento do `HeroBanner`. `"contain"`:
   * cutout/recorte de fundo transparente, sem cobrir a largura toda.
   * @default "cover"
   */
  imageFit?: "cover" | "contain";
  className?: string;
}

/**
 * Card de encerramento das páginas: bloco charcoal arredondado com glow magenta,
 * título display e ações. Padrão do redesign "Editorial Aspiracional".
 *
 * Com `image` + `imageFit="contain"` (cutout): `h-full` é necessário — um
 * `<img>` absoluto com `inset-y-0` + largura fixa mas sem altura explícita usa
 * a proporção intrínseca em vez de esticar pro container, e acaba cortado
 * pelo `overflow-hidden`.
 */
export function EditorialCTA({
  eyebrow,
  title,
  actions,
  image,
  imageAlt = "",
  imageFit = "cover",
  className,
}: EditorialCTAProps) {
  const isCover = image && imageFit === "cover";
  const isContain = image && imageFit === "contain";
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-[28px] bg-charcoal-500 px-8 py-16 text-white md:px-16 md:py-20",
        className,
      )}
    >
      {isCover && (
        <>
          <img
            src={image}
            alt={imageAlt}
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[46%] object-cover object-center lg:block"
          />
          <div
            aria-hidden
            className="absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, #303e49 0%, #303e49 48%, rgba(48,62,73,0.82) 62%, rgba(48,62,73,0.25) 100%)",
            }}
          />
        </>
      )}
      <div
        aria-hidden
        className={cn(
          "absolute h-80 w-80 rounded-full opacity-40 blur-3xl",
          isContain ? "-right-16 top-1/2 h-96 w-96 -translate-y-1/2" : "-right-20 -top-20",
        )}
        style={{ background: "radial-gradient(circle, rgba(180,54,91,0.7), transparent 70%)" }}
      />
      {isContain && (
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
