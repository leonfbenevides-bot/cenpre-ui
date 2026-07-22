import { useState, useEffect, useCallback, type ReactNode } from "react";
import { Button } from "../components/Button";
import { FeatureCard } from "../components/FeatureCard";
import { JobCard } from "../components/JobCard";
import { NewsCard } from "../components/NewsCard";
import { AccordionList } from "../components/Accordion";
import { Carousel } from "../components/Carousel";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UsersIcon,
  BuildingIcon,
  StarIcon,
} from "../components/Icons";
import type { UnidadeContent } from "../content/types";
import { SiteFooter } from "./shared";
import heroScene1 from "../assets/student-hero-1.jpg";
import heroScene2 from "../assets/student-hero-2.jpg";
import editorialImg from "../assets/student-walking.jpg";
import depoClose from "../assets/depo-close.jpg";
import depoWide from "../assets/depo-wide.jpg";
import depoPortrait from "../assets/student-portrait-close.jpg";
import avatar1 from "../assets/avatar-1.jpg";
import ctaImg from "../assets/student-hero-2.jpg";

/**
 * PILOTO — Home Aluno redesenhada no visual "Editorial Aspiracional".
 * Hero = carrossel de fotos ambiente full-bleed (a pessoa vive DENTRO da cena)
 * com scrim, tipografia display Work Sans em grande escala, seletor de perfil,
 * números, jornada editorial com composição de imagens e CTA.
 */

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const navLinks = ["Início", "Alunos e Egressos", "Empresas", "Vagas", "Conteúdos"];

/** Divide um array em grupos de `size` — usado para paginar o carrossel de depoimentos. */
function chunk<T>(items: T[], size: number): T[][] {
  const groups: T[][] = [];
  for (let i = 0; i < items.length; i += size) groups.push(items.slice(i, i + size));
  return groups;
}

interface Slide {
  kicker: string;
  title: ReactNode;
  sub: string;
  image: string;
  alt: string;
}

const slides: Slide[] = [
  {
    kicker: "Centro de Práticas Empresariais",
    title: (
      <>
        Conectando você
        <br />
        ao seu <span className="text-magenta-300">futuro profissional.</span>
      </>
    ),
    sub: "Oportunidades, orientações de estágio, convênios e conteúdos que aproximam alunos, egressos e empresas do mercado de trabalho.",
    image: heroScene1,
    alt: "Estudante da UCAM estudando no campus",
  },
  {
    kicker: "Estágios · Vagas · Convênios",
    title: (
      <>
        Sua próxima
        <br />
        oportunidade <span className="text-magenta-300">começa aqui.</span>
      </>
    ),
    sub: "Da orientação de carreira ao primeiro emprego, o CENPRE acompanha cada etapa da sua jornada profissional.",
    image: heroScene2,
    alt: "Estudante da UCAM em laboratório",
  },
];

function Reveal({
  as: Tag = "div",
  delay = 0,
  className,
  children,
}: {
  as?: "div" | "p" | "h1" | "span" | "li";
  delay?: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <Tag
      className={className}
      style={{
        animation: "reveal-up 0.7s cubic-bezier(0.22,1,0.36,1) both",
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </Tag>
  );
}

export interface HomeAlunoRedesignProps {
  content: UnidadeContent;
}

export function HomeAlunoRedesign({ content }: HomeAlunoRedesignProps) {
  const { numeros, topicos, vagas, depoimentos, motivos, noticias, faq, contato } = content;
  const [i, setI] = useState(0);
  const count = slides.length;
  const go = useCallback((n: number) => setI(((n % count) + count) % count), [count]);

  // Auto-avanço (pausa ao interagir via reset do efeito quando `i` muda).
  useEffect(() => {
    const t = setTimeout(() => setI((x) => (x + 1) % count), 6500);
    return () => clearTimeout(t);
  }, [i, count]);

  const slide = slides[i];

  return (
    <div className="bg-white text-charcoal-500">
      {/* ============================ HERO ============================ */}
      <section className="relative isolate flex min-h-[760px] flex-col overflow-hidden bg-charcoal-500 text-white lg:min-h-[90vh]">
        {/* Foto full-bleed da cena (troca por slide) — a pessoa vive DENTRO da cena */}
        <img
          key={`bg-${i}`}
          src={slide.image}
          alt={slide.alt}
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[66%_center]"
          style={{ animation: "fade-in 0.9s ease both" }}
        />
        {/* Scrim direcional: escurece a esquerda (texto) mantendo a cena à direita */}
        <div
          aria-hidden
          className="absolute inset-0 -z-20"
          style={{
            background:
              "linear-gradient(94deg, rgba(16,22,28,0.94) 0%, rgba(16,22,28,0.74) 30%, rgba(16,22,28,0.28) 58%, rgba(16,22,28,0.12) 100%)",
          }}
        />
        {/* Reforço na base p/ o stat strip e os controles */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 -z-20 h-2/5"
          style={{ background: "linear-gradient(to top, rgba(16,22,28,0.8), transparent)" }}
        />
        {/* Grão sutil */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] mix-blend-overlay"
          style={{ backgroundImage: GRAIN }}
        />

        {/* Nav transparente */}
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
            {navLinks.map((l, idx) => (
              <a
                key={l}
                href="/"
                className={`text-sm transition-colors hover:text-white ${idx === 0 ? "text-white" : "text-white/70"}`}
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

        {/* Conteúdo do hero (troca por slide) */}
        <div className="relative z-10 mx-auto flex w-full max-w-container flex-1 flex-col justify-center px-6 pb-10 pt-8 md:px-gutter">
          <div key={`txt-${i}`} className="max-w-2xl">
            <Reveal
              as="p"
              delay={0}
              className="mb-6 flex items-center gap-2.5 text-sm font-medium uppercase tracking-[0.2em] text-white/70"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-magenta-500" />
              {slide.kicker}
            </Reveal>
            <Reveal
              as="h1"
              delay={90}
              className="font-editorial text-[clamp(2.35rem,5vw,4.25rem)] font-semibold leading-[1] tracking-[-0.02em]"
            >
              {slide.title}
            </Reveal>
            <Reveal
              as="p"
              delay={180}
              className="mt-7 max-w-xl text-lg leading-relaxed text-white/75"
            >
              {slide.sub}
            </Reveal>
            <Reveal delay={260} className="mt-9 flex flex-wrap items-center gap-4">
              <Button size="lg" className="shadow-lg shadow-magenta-900/30">
                Tenho interesse
              </Button>
              <a
                href="/"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white"
              >
                Explorar vagas
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-white/60 group-hover:bg-white/10">
                  <ArrowRightIcon size={16} />
                </span>
              </a>
            </Reveal>
          </div>

          {/* Controles do carrossel */}
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
                  className={`h-1.5 rounded-pill transition-all ${idx === i ? "w-8 bg-white" : "w-4 bg-white/30 hover:bg-white/50"}`}
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
        </div>

        {/* Stat strip em vidro */}
        <div className="relative z-10 border-t border-white/10 bg-white/[0.06] backdrop-blur-md">
          <div className="mx-auto flex max-w-container items-center gap-x-6 overflow-x-auto px-6 py-4 md:gap-x-8 md:px-gutter md:py-5 lg:justify-between lg:gap-x-4">
            {[
              "Estágios & vagas",
              "Convênios",
              "Currículo & carreira",
              "Plataforma oficial UCAM",
            ].map((t) => (
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
      </section>

      {/* ========================= NÚMEROS ========================= */}
      <section className="mx-auto max-w-container px-6 py-16 md:px-gutter md:py-20">
        <div className="flex flex-col gap-8 border-b border-ash-300 pb-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700">
              {numeros.eyebrow}
            </p>
            <h2 className="font-editorial text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.015em] text-charcoal-500">
              Desenvolvendo, orientando, gerindo e recrutando.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button variant="secondary">{numeros.primaryLabel}</Button>
            <Button variant="ghost">{numeros.secondaryLabel}</Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ash-300 bg-ash-300 lg:grid-cols-4">
          {numeros.stats.map((s) => (
            <div
              key={s.label}
              className="group bg-white p-8 transition-colors hover:bg-magenta-100/40 md:p-10"
            >
              <p className="font-editorial text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.01em] text-magenta-700 md:text-[2.5rem]">
                {s.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Seletor de perfil — barra full-width que divide as seções (Figma).
          Tab ativa sublinhada em magenta; ocupa toda a largura da tela. */}
      <div
        className="border-y border-ash-300 bg-white"
        role="tablist"
        aria-label="Perfil de navegação"
      >
        <div className="mx-auto flex max-w-container items-stretch justify-center">
          <a
            href="/"
            role="tab"
            aria-selected="true"
            className="flex items-center gap-2 border-b-2 border-magenta-700 px-6 py-5 text-sm font-semibold text-magenta-700 md:text-[15px]"
          >
            <UsersIcon size={17} />
            Sou um aluno ou Egresso
          </a>
          <a
            href="/empresa"
            role="tab"
            aria-selected="false"
            className="flex items-center gap-2 border-b-2 border-transparent px-6 py-5 text-sm font-medium text-charcoal-300 transition-colors hover:text-magenta-700 md:text-[15px]"
          >
            <BuildingIcon size={17} />
            Sou uma empresa
          </a>
        </div>
      </div>

      {/* =================== JORNADA (editorial) =================== */}
      <section className="bg-ash-100/60">
        <div className="mx-auto grid max-w-container items-center gap-16 px-6 py-24 md:px-gutter md:py-32 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700">
              Entenda o impacto
            </p>
            <h2 className="max-w-xl font-editorial text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.03] tracking-[-0.015em] text-charcoal-500">
              Uma jornada integrada, do primeiro contato à efetivação.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal-400">
              Alunos, egressos e empresas conectados por estágios, vagas, convênios e suporte — cada
              etapa acompanhada de perto pelo CENPRE.
            </p>
            <ul className="mt-12 flex flex-col">
              {topicos.map((t, idx) => (
                <li key={t.title}>
                  <a
                    href={t.href}
                    className="group flex items-start gap-6 border-t border-ash-300 py-6 transition-colors hover:border-magenta-300"
                  >
                    <span className="font-editorial text-lg tabular-nums text-magenta-700/70">
                      0{idx + 1}
                    </span>
                    <span className="flex-1">
                      <span className="block text-lg font-semibold text-charcoal-500">
                        {t.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-charcoal-300">
                        {t.description}
                      </span>
                    </span>
                    <span className="mt-1 text-charcoal-200 transition-all group-hover:translate-x-1 group-hover:text-magenta-700">
                      <ArrowUpRightIcon size={18} />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -right-4 -top-6 h-40 w-40 rounded-3xl bg-magenta-700/90"
            />
            <div
              aria-hidden
              className="absolute -bottom-8 -left-6 hidden h-28 w-28 rounded-2xl border border-magenta-200 bg-magenta-100 lg:block"
            />
            <img
              src={editorialImg}
              alt="Estudantes e profissionais no ambiente de trabalho"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-charcoal-500/20"
            />
            <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/80 p-4 shadow-xl shadow-charcoal-500/10 backdrop-blur-md">
              <span className="font-editorial text-3xl font-semibold text-magenta-700">98%</span>
              <span className="text-xs leading-tight text-charcoal-400">
                de satisfação
                <br />e sucesso
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== PAINEL DE VAGAS ===================== */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700">
              Oportunidades
            </p>
            <h2 className="font-editorial text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.03] tracking-[-0.015em] text-charcoal-500">
              Painel de vagas
            </h2>
            <p className="mt-4 text-lg text-charcoal-400">
              Estágios e empregos do CENPRE e de centrais parceiras.
            </p>
          </div>
          <Button variant="secondary" asChild>
            <a href="/vagas">Ver todas as vagas</a>
          </Button>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {vagas.map((j) => (
            <JobCard key={j.title} {...j} actionLabel="Tenho interesse" />
          ))}
        </div>
      </section>

      {/* ============ DEPOIMENTO EM DESTAQUE (composição) ============ */}
      <section className="relative overflow-hidden bg-charcoal-500 text-white">
        <div
          aria-hidden
          className="absolute -left-24 top-1/3 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(180,54,91,0.6), transparent 68%)" }}
        />
        <div className="relative mx-auto grid max-w-container items-center gap-14 px-6 py-24 md:px-gutter md:py-32 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-300">
              Vida profissional
            </p>
            <h2 className="font-editorial text-[clamp(1.7rem,3.2vw,2.6rem)] font-semibold leading-[1.12] tracking-[-0.01em]">
              Do primeiro estágio ao primeiro emprego, a gente caminha com você.
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/70">
              Orientação de carreira, documentação, convênios e vagas — tudo acompanhado de perto
              pela equipe do CENPRE.
            </p>
            <Button size="lg" className="mt-8">
              Conheça o CENPRE
            </Button>
          </div>
          {/* Mosaico (composição das imagens da mesma estudante) */}
          <div className="relative mx-auto h-[420px] w-full max-w-md lg:h-[520px] lg:max-w-none">
            <div
              aria-hidden
              className="absolute right-2 top-0 h-24 w-24 rounded-2xl bg-magenta-700/90"
            />
            <img
              src={depoWide}
              alt="Estudante da UCAM em laboratório"
              className="absolute left-0 top-6 h-[60%] w-[56%] rounded-3xl object-cover shadow-2xl"
            />
            <img
              src={depoClose}
              alt="Retrato de estudante da UCAM"
              className="absolute bottom-0 right-0 h-[68%] w-[52%] rounded-3xl object-cover shadow-2xl ring-4 ring-charcoal-500"
            />
            <img
              src={depoPortrait}
              alt=""
              className="absolute bottom-[14%] left-[8%] hidden h-[32%] w-[40%] rounded-2xl object-cover shadow-xl ring-4 ring-charcoal-500 md:block"
            />
          </div>
        </div>
      </section>

      {/* ================== POR QUE O CENPRE ================== */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700">
            Por que o CENPRE
          </p>
          <h2 className="font-editorial text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.03] tracking-[-0.015em] text-charcoal-500">
            Motivos para escolher o CENPRE
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {motivos.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* ===================== DEPOIMENTOS ===================== */}
      <section className="mx-auto max-w-container px-6 pb-24 md:px-gutter">
        <div className="mb-12 max-w-xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700">
            Depoimentos
          </p>
          <h2 className="font-editorial text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.03] tracking-[-0.015em] text-charcoal-500">
            Histórias de quem já passou pelo CENPRE
          </h2>
        </div>
        <Carousel
          ariaLabel="Depoimentos"
          slides={chunk(depoimentos, 3).map((grupo, gi) => (
            <div
              key={gi}
              className="grid gap-6"
              style={{ gridTemplateColumns: `repeat(${grupo.length}, minmax(0, 1fr))` }}
            >
              {grupo.map((d) => (
                <figure
                  key={d.name}
                  className="group flex flex-col rounded-2xl border border-ash-300 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:border-magenta-200 hover:shadow-card-hover"
                >
                  {/* Nota (5 estrelas) + aspas decorativas */}
                  <div className="flex items-center justify-between">
                    <span
                      className="flex items-center gap-0.5"
                      role="img"
                      aria-label={`Avaliação: ${d.rating ?? 5} de 5`}
                    >
                      {Array.from({ length: 5 }).map((_, s) => (
                        <StarIcon
                          key={s}
                          size={15}
                          className={
                            s < (d.rating ?? 5)
                              ? "fill-magenta-500 text-magenta-500"
                              : "text-ash-300"
                          }
                          aria-hidden
                        />
                      ))}
                    </span>
                    <span
                      aria-hidden
                      className="font-editorial text-4xl leading-none text-magenta-200"
                    >
                      “
                    </span>
                  </div>
                  <p className="mt-3 text-[15px] font-semibold leading-snug text-charcoal-500">
                    {d.titulo}
                  </p>
                  <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-charcoal-400">
                    {d.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3 border-t border-ash-200 pt-5">
                    <img
                      src={d.foto ?? avatar1}
                      alt=""
                      className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-magenta-100"
                    />
                    <span className="text-sm">
                      <span className="block font-semibold text-charcoal-500">{d.name}</span>
                      <span className="text-charcoal-200">{d.course}</span>
                    </span>
                    <span className="ml-auto shrink-0 rounded-pill bg-magenta-100 px-2.5 py-1 text-[11px] font-semibold text-magenta-700">
                      Egresso
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        />
      </section>

      {/* ===================== NOTÍCIAS ===================== */}
      <section className="bg-ash-100/60">
        <div className="mx-auto max-w-container px-6 py-24 md:px-gutter">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-xl">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700">
                Conteúdos
              </p>
              <h2 className="font-editorial text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.03] tracking-[-0.015em] text-charcoal-500">
                Últimas notícias
              </h2>
            </div>
            <Button variant="secondary" asChild>
              <a href="/conteudos">Ver todos</a>
            </Button>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {noticias.map((n) => (
              <NewsCard key={n.title} {...n} />
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700">
              Dúvidas
            </p>
            <h2 className="font-editorial text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.03] tracking-[-0.015em] text-charcoal-500">
              Perguntas frequentes sobre o CENPRE
            </h2>
            <p className="mt-5 text-lg text-charcoal-400">
              Não achou o que procurava? Fale com a nossa equipe.
            </p>
          </div>
          <div className="lg:pt-1">
            <AccordionList items={faq} />
          </div>
        </div>
      </section>

      {/* ============================ CTA ============================ */}
      <section className="mx-auto max-w-container px-6 py-20 md:px-gutter">
        <div className="relative overflow-hidden rounded-[28px] bg-charcoal-500 px-8 py-16 text-white md:px-16 md:py-20">
          {/* Foto à direita + gradiente que funde na cor da faixa */}
          <img
            src={ctaImg}
            alt=""
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
          <div
            aria-hidden
            className="absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{ background: "radial-gradient(circle, rgba(180,54,91,0.7), transparent 70%)" }}
          />
          <p className="relative mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Comece agora
          </p>
          <h2 className="relative max-w-xl font-editorial text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
            Dê o próximo passo na sua carreira com o CENPRE.
          </h2>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <Button size="lg">Acessar a plataforma</Button>
            <Button
              size="lg"
              variant="ghost"
              className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              Fale com a gente
            </Button>
          </div>
        </div>
      </section>

      <SiteFooter contato={contato} />
    </div>
  );
}
