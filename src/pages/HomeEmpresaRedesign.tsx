import { useState, useEffect, useCallback, type ReactNode } from "react";
import { Button } from "../components/Button";
import { Avatar } from "../components/Avatar";
import { NewsCard } from "../components/NewsCard";
import { AccordionList } from "../components/Accordion";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UsersIcon,
  BuildingIcon,
} from "../components/Icons";
import type { EmpresaContent } from "../content/types";
import { SiteFooter } from "./shared";
import heroScene1 from "../assets/hero-empresa-bg.jpg";
import heroScene2 from "../assets/professional-portrait-1.jpg";
import ofertasImg from "../assets/professional-desk-back.jpg";
import emp1 from "../assets/emp-1.jpg";
import emp2 from "../assets/emp-2.jpg";
import emp3 from "../assets/emp-3.jpg";
import ctaImg from "../assets/professional-desk-overhead.jpg";

/**
 * PILOTO — Home Empresa no visual "Editorial Aspiracional" (par da Home Aluno).
 * Mesmos padrões: hero de fotos ambiente full-bleed, tab bar full-width, escala
 * display Work Sans, seções editoriais e composição de imagens.
 */

const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.82' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

const navLinks = ["Início", "Alunos e Egressos", "Empresas", "Vagas", "Conteúdos"];

interface Slide {
  kicker: string;
  title: ReactNode;
  sub: string;
  image: string;
  alt: string;
  primary: string;
  secondary: string;
}

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

export interface HomeEmpresaRedesignProps {
  content: EmpresaContent;
}

export function HomeEmpresaRedesign({ content }: HomeEmpresaRedesignProps) {
  const { hero, numeros, ofertas, parceiros, stats, sobre, noticias, faq, contato } = content;

  const slides: Slide[] = [
    {
      kicker: "Para empresas e organizações",
      title: (
        <>
          Conecte-se aos talentos
          <br />
          <span className="text-magenta-300">UCAM.</span>
        </>
      ),
      sub: hero.description,
      image: heroScene1,
      alt: "Profissional em ambiente de trabalho",
      primary: hero.primaryLabel,
      secondary: hero.secondaryLabel,
    },
    {
      kicker: "Estágio · Emprego · Convênios",
      title: (
        <>
          Publique vagas e receba
          <br />
          candidatos <span className="text-magenta-300">qualificados.</span>
        </>
      ),
      sub: "Divulgação de vagas, captação de estagiários e gestão simplificada — com respaldo jurídico e agilidade.",
      image: heroScene2,
      alt: "Estudante candidato em ambiente universitário",
      primary: "Cadastrar minha empresa",
      secondary: "Ver como funciona",
    },
  ];

  const [i, setI] = useState(0);
  const count = slides.length;
  const go = useCallback((n: number) => setI(((n % count) + count) % count), [count]);
  useEffect(() => {
    const t = setTimeout(() => setI((x) => (x + 1) % count), 6500);
    return () => clearTimeout(t);
  }, [i, count]);
  const slide = slides[i];

  return (
    <div className="bg-white text-charcoal-500">
      {/* ============================ HERO ============================ */}
      <section className="relative isolate flex min-h-[720px] flex-col overflow-hidden bg-charcoal-500 text-white lg:min-h-[86vh]">
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
                className={`text-sm transition-colors hover:text-white ${idx === 2 ? "text-white" : "text-white/70"}`}
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

        {/* Conteúdo do hero */}
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
                {slide.primary}
              </Button>
              <a
                href="/"
                className="group inline-flex items-center gap-2 text-[15px] font-semibold text-white"
              >
                {slide.secondary}
                <span className="grid h-9 w-9 place-items-center rounded-full border border-white/25 transition-colors group-hover:border-white/60 group-hover:bg-white/10">
                  <ArrowRightIcon size={16} />
                </span>
              </a>
            </Reveal>
          </div>

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

        {/* Stat strip */}
        <div className="relative z-10 border-t border-white/10 bg-white/[0.06] backdrop-blur-md">
          <div className="mx-auto flex max-w-container items-center gap-x-6 overflow-x-auto px-6 py-4 md:gap-x-8 md:px-gutter md:py-5 lg:justify-between lg:gap-x-4">
            {["Convênios", "Divulgação de vagas", "Captação de talentos", "Suporte do CENPRE"].map(
              (t) => (
                <span
                  key={t}
                  className="flex items-center gap-2.5 whitespace-nowrap text-sm font-medium text-white/85 md:text-[15px] lg:text-base"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-magenta-400" />
                  {t}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ========================= NÚMEROS ========================= */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter md:py-32">
        <div className="flex flex-col gap-10 border-b border-ash-300 pb-14 md:flex-row md:items-end md:justify-between">
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
            <div key={s.label} className="bg-white p-8 md:p-10">
              <p className="font-editorial text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.01em] text-magenta-700 md:text-[2.5rem]">
                {s.value}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-charcoal-300">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Tab bar full-width — Empresa ativa */}
      <div
        className="border-y border-ash-300 bg-white"
        role="tablist"
        aria-label="Perfil de navegação"
      >
        <div className="mx-auto flex max-w-container items-stretch justify-center">
          <a
            href="/"
            role="tab"
            aria-selected="false"
            className="flex items-center gap-2 border-b-2 border-transparent px-6 py-5 text-sm font-medium text-charcoal-300 transition-colors hover:text-magenta-700 md:text-[15px]"
          >
            <UsersIcon size={17} />
            Sou um aluno ou Egresso
          </a>
          <a
            href="/empresa"
            role="tab"
            aria-selected="true"
            className="flex items-center gap-2 border-b-2 border-magenta-700 px-6 py-5 text-sm font-semibold text-magenta-700 md:text-[15px]"
          >
            <BuildingIcon size={17} />
            Sou uma empresa
          </a>
        </div>
      </div>

      {/* =================== O QUE OFERECEMOS =================== */}
      <section className="bg-ash-100/60">
        <div className="mx-auto grid max-w-container items-center gap-16 px-6 py-24 md:px-gutter md:py-32 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700">
              O que oferecemos
            </p>
            <h2 className="max-w-xl font-editorial text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[1.03] tracking-[-0.015em] text-charcoal-500">
              Tudo que sua empresa precisa em um só lugar.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-charcoal-400">
              Convênios, divulgação de vagas, captação de estagiários e acompanhamento em todas as
              etapas — com respaldo jurídico.
            </p>
            <ul className="mt-12 flex flex-col">
              {ofertas.map((o, idx) => (
                <li key={o.title}>
                  <a
                    href={o.href}
                    className="group flex items-start gap-6 border-t border-ash-300 py-6 transition-colors hover:border-magenta-300"
                  >
                    <span className="font-editorial text-lg tabular-nums text-magenta-700/70">
                      0{idx + 1}
                    </span>
                    <span className="flex-1">
                      <span className="block text-lg font-semibold text-charcoal-500">
                        {o.title}
                      </span>
                      <span className="mt-1 block text-sm leading-relaxed text-charcoal-300">
                        {o.description}
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
            <img
              src={ofertasImg}
              alt="Profissional em ambiente de escritório"
              className="relative aspect-[4/5] w-full rounded-3xl object-cover shadow-2xl shadow-charcoal-500/20"
            />
          </div>
        </div>
      </section>

      {/* =================== EMPRESAS CONVENIADAS =================== */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700">
              Parceiros CENPRE
            </p>
            <h2 className="font-editorial text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.03] tracking-[-0.015em] text-charcoal-500">
              Empresas conveniadas
            </h2>
          </div>
          <Button variant="secondary" asChild>
            <a href="/empresa/conveniadas">Ver todas</a>
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {parceiros.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-4 rounded-2xl border border-ash-300 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-magenta-200 hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3">
                <Avatar fallback={p.name[0]} size="sm" />
                <span>
                  <span className="block text-sm font-semibold text-charcoal-500">{p.name}</span>
                  <span className="text-xs text-charcoal-200">{p.category}</span>
                </span>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-ash-200 pt-3 text-[13px] font-semibold">
                <span className="text-success-700">
                  {p.vagasAbertas} {p.vagasAbertas === 1 ? "vaga aberta" : "vagas abertas"}
                </span>
                <a
                  href={p.href}
                  className="inline-flex items-center gap-1 text-magenta-700 hover:text-magenta-800"
                >
                  Ver perfil <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =================== STATS (faixa escura) =================== */}
      <section className="relative overflow-hidden bg-charcoal-500 text-white">
        <div
          aria-hidden
          className="absolute -right-24 top-0 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(180,54,91,0.6), transparent 68%)" }}
        />
        <div className="relative mx-auto grid max-w-container gap-10 px-6 py-20 md:grid-cols-4 md:px-gutter">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-editorial text-[clamp(1.9rem,3.5vw,2.75rem)] font-semibold leading-none text-white">
                {s.value}
              </p>
              <p className="mt-3 text-sm text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =================== SOBRE (composição) =================== */}
      <section className="mx-auto grid max-w-container items-center gap-16 px-6 py-24 md:px-gutter md:py-32 lg:grid-cols-2 lg:gap-20">
        {/* Composição: mesmo profissional em três enquadramentos */}
        <div className="relative mx-auto h-[440px] w-full max-w-md lg:h-[520px] lg:max-w-none">
          <div
            aria-hidden
            className="absolute -left-4 -top-4 h-24 w-24 rounded-2xl bg-magenta-100"
          />
          <div
            aria-hidden
            className="absolute bottom-8 right-0 h-20 w-20 rounded-2xl bg-magenta-700/90"
          />
          <img
            src={emp1}
            alt="Profissional em ambiente de trabalho"
            className="absolute right-4 top-0 h-[66%] w-[62%] rounded-3xl object-cover shadow-2xl shadow-charcoal-500/25"
          />
          <img
            src={emp2}
            alt=""
            className="absolute bottom-0 left-0 h-[52%] w-[56%] rounded-2xl object-cover shadow-xl ring-4 ring-white"
          />
          <img
            src={emp3}
            alt=""
            className="absolute bottom-[20%] right-0 hidden h-[28%] w-[32%] rounded-2xl object-cover shadow-xl ring-4 ring-white md:block"
          />
        </div>
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700">
            Nossa história
          </p>
          <h2 className="font-editorial text-[clamp(1.9rem,3.6vw,3rem)] font-semibold leading-[1.03] tracking-[-0.015em] text-charcoal-500">
            A porta de entrada para a rede UCAM.
          </h2>
          <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-charcoal-400">
            {sobre.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <Button variant="secondary" className="mt-8" asChild>
            <a href={sobre.href}>{sobre.ctaLabel}</a>
          </Button>
        </div>
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
              Perguntas de empresas
            </h2>
            <p className="mt-5 text-lg text-charcoal-400">
              Documentação, convênio, prazos e gestão de estagiários.
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
            Seja parceiro
          </p>
          <h2 className="relative max-w-2xl font-editorial text-[clamp(1.75rem,3.5vw,2.75rem)] font-semibold leading-[1.05] tracking-[-0.015em]">
            Conecte sua empresa aos melhores talentos da UCAM.
          </h2>
          <div className="relative mt-8 flex flex-wrap gap-4">
            <Button size="lg">Cadastrar minha empresa</Button>
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
