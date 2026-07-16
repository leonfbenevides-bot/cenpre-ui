import { useState, useCallback, type ReactNode, type KeyboardEvent } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import { cn } from "@/lib/cn";

export interface CarouselProps {
  /** Slides (um por página). Cada item ocupa a largura total. */
  slides: ReactNode[];
  ariaLabel?: string;
  /** Mostrar as setas de navegação. @default true */
  arrows?: boolean;
  /** Mostrar os indicadores (dots). @default true */
  dots?: boolean;
  className?: string;
}

/**
 * Carrossel acessível: navegação por setas, dots e teclado (← →).
 * Loop infinito. Usado para hero-slides e depoimentos. Sem dependências —
 * transição por `translateX`. Passe os slides já montados em `slides`.
 */
export function Carousel({
  slides,
  ariaLabel = "Carrossel",
  arrows = true,
  dots = true,
  className,
}: CarouselProps) {
  const [index, setIndex] = useState(0);
  const count = slides.length;
  const go = useCallback((i: number) => setIndex(((i % count) + count) % count), [count]);

  function onKeyDown(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      go(index - 1);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      go(index + 1);
    }
  }

  return (
    <div
      className={cn("relative", className)}
      role="region"
      aria-roledescription="carrossel"
      aria-label={ariaLabel}
      tabIndex={0}
      onKeyDown={onKeyDown}
    >
      <div className="overflow-hidden rounded-card">
        <div
          className="flex transition-transform duration-300 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div
              key={i}
              className="w-full shrink-0"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} de ${count}`}
              aria-hidden={i !== index}
            >
              {slide}
            </div>
          ))}
        </div>
      </div>

      {arrows && count > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Slide anterior"
            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-pill border border-ash-300 bg-white text-charcoal-500 shadow-button transition-colors hover:border-magenta-300 hover:text-magenta-700"
          >
            <ChevronLeftIcon size={20} />
          </button>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Próximo slide"
            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-pill border border-ash-300 bg-white text-charcoal-500 shadow-button transition-colors hover:border-magenta-300 hover:text-magenta-700"
          >
            <ChevronRightIcon size={20} />
          </button>
        </>
      )}

      {dots && count > 1 && (
        <div className="mt-4 flex justify-center gap-2" role="tablist" aria-label="Selecionar slide">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Ir para o slide ${i + 1}`}
              onClick={() => go(i)}
              className={cn(
                "h-2 rounded-pill transition-all",
                i === index ? "w-6 bg-magenta-700" : "w-2 bg-ash-400 hover:bg-ash-600",
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
