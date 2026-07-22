import { cn } from "@/lib/cn";

export interface MosaicImage {
  src: string;
  alt: string;
}

export interface ImageMosaicProps {
  /** 3 ou 4 imagens (quadradas funcionam melhor). */
  images: MosaicImage[];
  /** Cor do "anel" que separa as fotos sobrepostas — combine com o fundo da seção. */
  ringTone?: "light" | "dark";
  className?: string;
}

/**
 * Colagem editorial de fotos — arranjo sobreposto com cantos arredondados e
 * blocos magenta de acento. É o padrão de composição do redesign, usado nas
 * seções de destaque (banner de marca, "sobre", histórias).
 */
export function ImageMosaic({ images, ringTone = "light", className }: ImageMosaicProps) {
  const ring = ringTone === "dark" ? "ring-charcoal-500" : "ring-white";
  const [a, b, c, d] = images;

  return (
    <div className={cn("relative mx-auto aspect-square w-full max-w-lg", className)}>
      {/* Acentos */}
      <div
        aria-hidden
        className="absolute -right-3 -top-4 h-24 w-24 rounded-2xl bg-magenta-700/90"
      />
      <div
        aria-hidden
        className="absolute -bottom-5 -left-4 hidden h-20 w-20 rounded-2xl border border-magenta-200 bg-magenta-100 md:block"
      />

      {/* Foto principal */}
      {a && (
        <img
          src={a.src}
          alt={a.alt}
          className="absolute left-0 top-0 h-[58%] w-[62%] rounded-3xl object-cover shadow-2xl"
        />
      )}
      {/* Secundária — canto inferior direito, sobreposta */}
      {b && (
        <img
          src={b.src}
          alt={b.alt}
          className={cn(
            "absolute bottom-0 right-0 h-[62%] w-[56%] rounded-3xl object-cover shadow-2xl ring-4",
            ring,
          )}
        />
      )}
      {/* Terceira — superior direita */}
      {c && (
        <img
          src={c.src}
          alt={c.alt}
          className={cn(
            "absolute right-0 top-[6%] h-[34%] w-[34%] rounded-2xl object-cover shadow-xl ring-4",
            ring,
          )}
        />
      )}
      {/* Quarta — inferior esquerda */}
      {d && (
        <img
          src={d.src}
          alt={d.alt}
          className={cn(
            "absolute bottom-[8%] left-[4%] hidden h-[32%] w-[36%] rounded-2xl object-cover shadow-xl ring-4 md:block",
            ring,
          )}
        />
      )}
    </div>
  );
}
