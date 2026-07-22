import { useState, useEffect, useCallback, type ReactNode } from "react";
import { Button } from "./Button";
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from "./Icons";
import { cn } from "@/lib/cn";

/** Textura de grão sutil (SVG inline) aplicada por cima da foto. */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export interface HeroSlide {
  /** Rótulo curto acima do título (com bolinha magenta). */
  kicker: string;
  title: ReactNode;
  sub: string;
  /** Foto **ambiente** full-bleed — prefira imagens com o sujeito à direita. */
  image: string;
  alt: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export interface HeroCarouselProps {
  slides: HeroSlide[];
  /** Itens da faixa de destaques na base do hero (uma linha só). */
  highlights?: string[];
  navItems?: string[];
  /** Índice do item de nav ativo. */
  activeNav?: number;
  /** Intervalo do auto-avanço em ms. `0` desliga. @default 6500 */
  interval?: number;
  className?: string;
}

/**
 * Hero das homes: carrossel de **fotos ambiente full-bleed** (a pessoa vive
 * dentro da cena) com scrim direcional, nav transparente, título display,
 * ações, controles e faixa de destaques em vidro.
 */
export function HeroCarousel({
  slides,
  highlights,
  navItems = ["Início", "Alunos e Egressos", "Empresas", "Vagas", "Conteúdos"],
  activeNav = 0,
  interval = 6500,
  className,
}: HeroCarouselProps) {
  const [i, setI] = useState(0);
  const count = slides.length;
  const go = useCallback((n: number) => setI(((n % count) + count) % count), [count]);

  useEffect(() => {
    if (!interval || count < 2) return;
    const t = setTimeout(() => setI((x) => (x + 1) % count), interval);
    return () => clearTimeout(t);
  }, [i, count, interval]);

  const slide = slides[i];
  const reveal = (delay: number) => ({
    animation: "reveal-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
    animationDelay: `${delay}ms`,
  });

  return (
    <section
      className={cn(
        "relative isolate flex min-h-[720px] flex-col overflow-hidden bg-charcoal-500 text-white lg:min-h-[88vh]",
        className,
      )}
    >
      <img
        key={`bg-${i}`}
        src={slide.image}
        alt={slide.alt}
        className="absolute inset-0 -z-30 h-full w-full object-cover object-[66%_center]"
        style={{ animation: "fade-in 0.9s ease both" }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(94deg, rgba(16,22,28,0.94) 0%, rgba(16,22,28,0.74) 30%, rgba(16,22,28,0.28) 58%, rgba(16,22,28,0.12) 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-20 h-2/5"
        style={{ background: "linear-gradient(to top, rgba(16,22,28,0.8), transparent)" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
        style={{ backgroundImage: GRAIN }}
      />

      {/* Nav transparente sobre a foto */}
      <header className="relative z-10 mx-auto flex w-full max-w-container items-center justify-between px-6 py-6 md:px-gutter">
        <span className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-magenta-700 text-sm font-bold text-white">
            C
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-[15px] font-semibold tracking-tight">CENPRE</span>
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55">
              Carreiras · UCAM
            </span>
          </span>
        </span>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          {navItems.map((l, idx) => (
            <a
              key={l}
              href="/"
              className={cn(
                "text-sm transition-colors hover:text-white",
                idx === activeNav ? "text-white" : "text-white/70",
              )}
            >
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="hidden text-sm text-white/70 transition-colors hover:text-white sm:block"
          >
            Entrar
          </a>
          <Button className="bg-white text-charcoal-500 hover:bg-white/90">
            Acessar plataforma
          </Button>
        </div>
      </header>

      {/* Conteúdo do slide */}
      <div className="relative z-10 mx-auto flex w-full max-w-container flex-1 flex-col justify-center px-6 pb-10 pt-8 md:px-gutter">
        <div key={`txt-${i}`} className="max-w-2xl">
          <p
            className="mb-6 flex items-center gap-2.5 text-sm font-medium uppercase tracking-[0.2em] text-white/70"
            style={reveal(0)}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-magenta-500" />
            {slide.kicker}
          </p>
          <h1
            className="font-editorial text-[clamp(2.35rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.02em]"
            style={reveal(90)}
          >
            {slide.title}
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/75" style={reveal(180)}>
            {slide.sub}
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4" style={reveal(260)}>
            <Button size="lg" className="shadow-lg shadow-magenta-900/30">
              {slide.primaryLabel}
            </Button>
            <a
              href="/"
              className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white"
            >
              {slide.secondaryLabel}
              <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-white/60 group-hover:bg-white/10">
                <ArrowRightIcon size={16} />
              </span>
            </a>
          </div>
        </div>

        {count > 1 && (
          <div className="mt-12 flex items-center gap-5">
            <div
              className="flex items-center gap-2"
              role="tablist"
              aria-label="Selecionar destaque"
            >
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  role="tab"
                  aria-selected={idx === i}
                  aria-label={`Destaque ${idx + 1}`}
                  onClick={() => go(idx)}
                  className={cn(
                    "h-1.5 rounded-pill transition-all",
                    idx === i ? "w-8 bg-white" : "w-4 bg-white/30 hover:bg-white/50",
                  )}
                />
              ))}
            </div>
            <span className="text-xs tabular-nums text-white/50">
              0{i + 1} / 0{count}
            </span>
            <div className="ml-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => go(i - 1)}
                aria-label="Destaque anterior"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                <ChevronLeftIcon size={16} />
              </button>
              <button
                type="button"
                onClick={() => go(i + 1)}
                aria-label="Próximo destaque"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/80 transition-colors hover:border-white/50 hover:text-white"
              >
                <ChevronRightIcon size={16} />
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Faixa de destaques em vidro (uma linha) */}
      {highlights && highlights.length > 0 && (
        <div className="relative z-10 border-t border-white/10 bg-white/[0.06] backdrop-blur-md">
          <div className="mx-auto flex max-w-container items-center gap-x-6 overflow-x-auto px-6 py-4 md:gap-x-8 md:px-gutter md:py-5 lg:justify-between lg:gap-x-4">
            {highlights.map((t) => (
              <span
                key={t}
                className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-white/85 md:text-[15px] lg:text-base"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-magenta-400" />
                {t}
              </span>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
