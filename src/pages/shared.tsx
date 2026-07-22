import type { ReactNode } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { IconChip } from "../components/IconChip";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PlatformCTA } from "../components/PlatformCTA";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowRightIcon, ChevronRightIcon, FileTextIcon, SearchIcon } from "../components/Icons";
import { StepCard } from "../components/StepCard";
import { AccordionList } from "../components/Accordion";
import {
  PenLine,
  Video,
  Mic,
  MonitorPlay,
  FileText,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import type { UnidadeContent } from "../content/types";
import platformIllustration from "../assets/platform-illustration.png";
import { cn } from "@/lib/cn";

/**
 * Mapa de rotas do site (placeholder até o app definir o roteamento real).
 * Use estas constantes em vez de `href="#"` — documentam o destino pretendido.
 */
export const rotas = {
  inicio: "/",
  homeEmpresa: "/empresa",
  vagas: "/vagas",
  conteudos: "/conteudos",
  biblioteca: "/conteudos/biblioteca",
  cadastroConvenio: "/empresa/cadastro-de-convenio",
  plataforma: "https://ucam-csm.symplicity.com/",
} as const;

/** Marca CENPRE usada no Header/HeroBanner de todas as páginas. */
export const Brand = (
  <span className="flex items-center gap-2">
    <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-magenta-700 text-xs font-extrabold text-white">
      C
    </span>
    <span className="flex flex-col leading-none">
      <span className="text-magenta-800">CENPRE</span>
      <span className="text-[10px] font-medium text-charcoal-300">
        Centro de Práticas Empresariais
      </span>
    </span>
  </span>
);

/** Variante da marca para fundos escuros (HeroBanner) — texto claro, contraste AA. */
export const BrandOnDark = (
  <span className="flex items-center gap-2">
    <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-magenta-700 text-xs font-extrabold text-white">
      C
    </span>
    <span className="flex flex-col leading-none">
      <span className="text-white">CENPRE</span>
      <span className="text-[10px] font-medium text-ash-300">Centro de Práticas Empresariais</span>
    </span>
  </span>
);

/** Navegação principal do produto (igual em todas as páginas). */
export const nav = [
  { label: "Início", href: "#" },
  { label: "Alunos e Egressos", href: "#" },
  { label: "Empresa", href: "#" },
  { label: "Vagas", href: "#" },
  { label: "Conteúdos", href: "#" },
];

export interface TopicCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  href: string;
}

/** Card de tópico/atalho: ícone + título + descrição + link com seta. */
export function TopicCard({ icon, title, description, cta, href }: TopicCardProps) {
  return (
    <Card interactive className="flex flex-col gap-3">
      <IconChip>{icon}</IconChip>
      <h3 className="text-base font-semibold text-charcoal-500">{title}</h3>
      <p className="flex-1 text-[13px] leading-relaxed text-charcoal-400">{description}</p>
      <a
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800"
      >
        {cta} <ArrowRightIcon size={15} />
      </a>
    </Card>
  );
}

/**
 * Faixa "O CENPRE em números" — eyebrow + título display + 2 CTAs + 4 números
 * magenta. Igual nas duas homes (aluno e empresa); os dados vêm do content model.
 */
export function NumerosSection({ numeros }: { numeros: UnidadeContent["numeros"] }) {
  return (
    <section className="mx-auto max-w-content px-6 py-14 md:px-gutter">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading eyebrow={numeros.eyebrow} title={numeros.title} className="max-w-xl" />
        <div className="flex flex-wrap gap-3">
          <Button
            variant="secondary"
            className="border-magenta-200 bg-magenta-100 text-magenta-700 hover:bg-magenta-200"
            leftIcon={<FileTextIcon size={16} />}
          >
            {numeros.primaryLabel}
          </Button>
          <Button variant="secondary" leftIcon={<SearchIcon size={16} />}>
            {numeros.secondaryLabel}
          </Button>
        </div>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {numeros.stats.map((s) => (
          <div key={s.label}>
            <p className="font-display text-2xl font-semibold text-magenta-700 md:text-3xl">
              {s.value}
            </p>
            <p className="mt-1.5 text-sm text-charcoal-300">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Faixa contínua que rola sozinha (a lista é duplicada por baixo do capô para
 * o loop fechar sem salto) — pausa no hover, respeita `prefers-reduced-motion`.
 */
export function Marquee({
  children,
  durationSeconds = 32,
  className,
}: {
  children: ReactNode;
  durationSeconds?: number;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden", className)}>
      <div
        className="flex w-max animate-marquee items-center hover:[animation-play-state:paused] motion-reduce:animate-none"
        style={{ animationDuration: `${durationSeconds}s` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

/** Faixa de palavras-chave entre "logos parceiras" e "Sobre nós" (Figma: "blocks"). */
export function KeywordTicker({ items }: { items: string[] }) {
  return (
    <div className="border-y border-ash-300 bg-white py-6">
      <Marquee durationSeconds={26}>
        {items.map((item) => (
          <span key={item} className="flex items-center gap-x-6 pr-6">
            <span className="whitespace-nowrap font-display text-lg font-medium uppercase tracking-[0.08em] text-charcoal-400 md:text-xl">
              {item}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-magenta-500" aria-hidden />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

/**
 * Seção "Tudo o que você precisa em um só lugar" (Plataforma CENPRE Carreiras):
 * módulos + "como começar" (StepCards) + documentos necessários com CTA.
 */
export function PlataformaFeaturesSection({
  content,
}: {
  content: UnidadeContent["plataformaFeatures"];
}) {
  const { eyebrow, title, description, modulos, comoComecar, documentosNecessarios } = content;
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-content px-6 md:px-gutter">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={eyebrow} title={title} className="max-w-xl" />
          <p className="max-w-md text-[15px] leading-relaxed text-charcoal-300">{description}</p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {modulos.map((m) => (
            <div
              key={m.title}
              className="flex flex-col gap-3 rounded-card border border-ash-300 p-6"
            >
              <span
                className="grid h-11 w-11 place-items-center rounded-chip bg-magenta-100 text-magenta-700"
                aria-hidden
              >
                {m.icon}
              </span>
              <h3 className="text-base font-semibold text-charcoal-500">{m.title}</h3>
              <p className="text-[13px] leading-relaxed text-charcoal-400">{m.description}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.16em] text-magenta-700">
          {comoComecar.titulo}
        </p>
        <div className="mt-4 grid gap-5 md:grid-cols-3">
          {comoComecar.passos.map((p, i) => (
            <StepCard key={p.titulo} number={i + 1} title={p.titulo} description={p.descricao} />
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-6 rounded-card bg-ash-100 p-6">
          <div>
            <h3 className="text-base font-semibold text-charcoal-500">
              {documentosNecessarios.titulo}
            </h3>
            <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-2">
              {documentosNecessarios.itens.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm text-charcoal-400">
                  <span className="text-magenta-700" aria-hidden>
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Button className="shrink-0">{documentosNecessarios.ctaLabel}</Button>
        </div>
      </div>
    </section>
  );
}

/**
 * FAQ em duas colunas (Figma home): título + descrição + CTA à esquerda,
 * accordion à direita. Mesmo padrão usado em `CadastroConvenio`.
 */
export function FaqTwoColumn({
  intro,
  items,
}: {
  intro: UnidadeContent["faqIntro"];
  items: UnidadeContent["faq"];
}) {
  return (
    <section className="mx-auto max-w-content px-6 py-16 md:px-gutter">
      <div className="grid gap-10 md:grid-cols-[minmax(0,320px)_1fr]">
        <div>
          <h2 className="font-display text-[28px] font-semibold leading-tight text-charcoal-500">
            {intro.title}
          </h2>
          <p className="mt-3 text-[15px] leading-relaxed text-charcoal-300">{intro.description}</p>
          <a
            href={intro.href}
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800"
          >
            {intro.ctaLabel} <ArrowRightIcon size={15} />
          </a>
        </div>
        <AccordionList items={items} />
      </div>
    </section>
  );
}

/** Contador "N DE M" + setas prev/next (Figma: cabeçalho de Depoimentos e Últimas notícias). */
export function CarouselCounter({
  page,
  totalPages,
  onPrev,
  onNext,
}: {
  page: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-[15px] font-medium uppercase text-charcoal-200">
        {page} de {totalPages}
      </span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onPrev}
          disabled={totalPages <= 1}
          aria-label="Anterior"
          className="grid h-9 w-9 place-items-center rounded-pill border border-ash-300 text-charcoal-400 transition-colors hover:bg-ash-100 disabled:pointer-events-none disabled:opacity-40"
        >
          <span className="rotate-180">
            <ArrowRightIcon size={16} />
          </span>
        </button>
        <button
          type="button"
          onClick={onNext}
          disabled={totalPages <= 1}
          aria-label="Próximo"
          className="grid h-9 w-9 place-items-center rounded-pill border border-ash-300 text-charcoal-400 transition-colors hover:bg-ash-100 disabled:pointer-events-none disabled:opacity-40"
        >
          <ArrowRightIcon size={16} />
        </button>
      </div>
    </div>
  );
}

const formatoIcons: Record<string, ReactNode> = {
  Blog: <PenLine size={15} />,
  Vídeos: <Video size={15} />,
  Podcasts: <Mic size={15} />,
  Webinars: <MonitorPlay size={15} />,
  Workshops: <MonitorPlay size={15} />,
  Artigos: <FileText size={15} />,
};

/** Label de pill da Biblioteca de Conteúdos: ícone do formato + nome. */
export function FormatoPillLabel({ formato }: { formato: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      {formatoIcons[formato] && <span aria-hidden>{formatoIcons[formato]}</span>}
      {formato}
    </span>
  );
}

/**
 * Empty state de uma aba de formato sem conteúdo ainda — ícone do formato num
 * círculo, título e descrição, dentro de um contorno tracejado. Substitui a
 * frase solta "Conteúdos de X em breve." pelas abas vazias da Biblioteca.
 */
export function FormatoEmptyState({ formato }: { formato: string }) {
  return (
    <div className="flex flex-col items-center gap-4 rounded-3xl border-2 border-dashed border-ash-300 bg-white/60 px-6 py-16 text-center">
      <span
        className="grid h-14 w-14 place-items-center rounded-full bg-magenta-100 text-magenta-700"
        aria-hidden
      >
        {formatoIcons[formato] ? (
          <span className="[&>svg]:h-6 [&>svg]:w-6">{formatoIcons[formato]}</span>
        ) : (
          <Sparkles size={22} />
        )}
      </span>
      <div>
        <p className="text-base font-semibold text-charcoal-500">
          Conteúdos de {formato.toLowerCase()} em breve
        </p>
        <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-charcoal-300">
          Estamos preparando este formato. Enquanto isso, dá uma olhada nos outros conteúdos
          disponíveis.
        </p>
      </div>
    </div>
  );
}

/**
 * Card compacto de notícia (linha com thumb pequena) — versão reduzida do
 * `NewsCard`, para a lista "Últimas notícias" ao lado da Biblioteca de
 * Conteúdos, sem disputar destaque com a grade principal.
 */
export function CompactNewsCard({
  image,
  imageAlt = "",
  date,
  title,
  href,
  className,
}: {
  image?: string;
  imageAlt?: string;
  date: string;
  title: string;
  href?: string;
  className?: string;
}) {
  const Comp = href ? "a" : "div";
  return (
    <Comp
      {...(href ? { href } : {})}
      className={cn("group flex items-center gap-4 no-underline", className)}
    >
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-ash-200">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full" aria-hidden />
        )}
      </div>
      <div className="min-w-0">
        <p className="text-xs text-charcoal-200">{date}</p>
        <p className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-charcoal-500 group-hover:text-magenta-700">
          {title}
        </p>
      </div>
    </Comp>
  );
}

/**
 * Pill do `PageHero` (fundo magenta): borda clara translúcida + ícone + label.
 * Ex.: "Upload rápido", "PDF, HTML ou Doc" no hero da Currículo (Figma).
 */
export function HeroPill({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-pill border border-white/30 bg-white/10 px-3 py-1.5 text-[13px] font-medium text-white">
      {icon && <span aria-hidden>{icon}</span>}
      {children}
    </span>
  );
}

/** Breadcrumb das subpáginas: "Início › ..." (para o `breadcrumb` do PageHero). */
export function Breadcrumb({ trail }: { trail: string[] }) {
  return (
    <span className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/70">
      <a href={rotas.inicio} className="hover:text-white">
        Início
      </a>
      {trail.map((item, i) => (
        <span key={item} className="flex items-center gap-1.5">
          <ChevronRightIcon size={13} aria-hidden />
          <span className={i === trail.length - 1 ? "text-white" : undefined}>{item}</span>
        </span>
      ))}
    </span>
  );
}

/** Seção de encerramento com o CTA da Plataforma CENPRE (igual em todas as páginas). */
export function PlatformSection() {
  return (
    <section className="mx-auto max-w-container px-6 py-10 md:px-gutter">
      <PlatformCTA
        title="Mais do que uma plataforma completa, nós acompanhamos todas as etapas."
        primaryLabel="Acessar a plataforma"
        secondaryLabel="Fale conosco"
        trust="Processos 100% seguros"
        media={
          <img
            src={platformIllustration}
            alt="Plataforma CENPRE — painel de oportunidades"
            className="pointer-events-none absolute right-0 top-6 w-[112%] max-w-none"
          />
        }
      />
    </section>
  );
}

export interface PageShellProps {
  children: ReactNode;
  /** Contatos do footer; por padrão os da unidade Campos. */
  contato?: UnidadeContent["contato"];
  /** Renderiza a seção da Plataforma antes do footer. @default true */
  platformCta?: boolean;
}

/** Casca padrão das subpáginas: Header · conteúdo · PlatformCTA · Footer. */
export function PageShell({ children, contato, platformCta = true }: PageShellProps) {
  return (
    <div className="bg-white">
      <Header brand={Brand} navItems={nav} ctaLabel="Acessar plataforma" />
      <main>
        {children}
        {platformCta && <PlatformSection />}
      </main>
      <SiteFooter contato={contato} />
    </div>
  );
}

const contatoPadrao: UnidadeContent["contato"] = {
  emailGeral: "atendimento.cenpre@ucam-campos.br",
  emailConvenio: "convenio.estagio@ucam-campos.br",
  telefone: "(22) 2726-2419",
  whatsapp: "(22) 99618-0786",
};

/** Linhas de contato da equipe de convênios (e-mail, telefone, WhatsApp). */
export function ContactLines({ contato = contatoPadrao }: { contato?: UnidadeContent["contato"] }) {
  return (
    <ul className="flex flex-col gap-2 text-[15px] text-charcoal-400">
      <li>
        <a
          href={`mailto:${contato.emailConvenio}`}
          className="font-medium text-magenta-700 hover:text-magenta-800"
        >
          {contato.emailConvenio}
        </a>
      </li>
      <li>{contato.telefone}</li>
      <li>WhatsApp: {contato.whatsapp}</li>
    </ul>
  );
}

/** Footer padrão do produto, com contatos vindos do content model. */
export function SiteFooter({ contato = contatoPadrao }: { contato?: UnidadeContent["contato"] }) {
  return (
    <Footer
      brand={<span className="text-lg font-bold text-white">CENPRE</span>}
      brandAction={
        <a
          href={rotas.plataforma}
          className="inline-flex items-center gap-2 rounded-chip border border-white/25 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Acessar UCAM portal
        </a>
      }
      social={
        <>
          <a href={rotas.inicio} aria-label="Instagram" className="text-ash-400 hover:text-white">
            <Instagram size={18} />
          </a>
          <a href={rotas.inicio} aria-label="X (Twitter)" className="text-ash-400 hover:text-white">
            <Twitter size={18} />
          </a>
          <a href={rotas.inicio} aria-label="LinkedIn" className="text-ash-400 hover:text-white">
            <Linkedin size={18} />
          </a>
          <a href={rotas.inicio} aria-label="YouTube" className="text-ash-400 hover:text-white">
            <Youtube size={18} />
          </a>
          <a
            href={rotas.plataforma}
            aria-label="WhatsApp"
            className="text-ash-400 hover:text-white"
          >
            <MessageCircle size={18} />
          </a>
        </>
      }
      columns={[
        {
          title: "Aluno / Egresso",
          links: [
            { label: "Estágio", href: "#" },
            { label: "Currículo", href: "#" },
            { label: "Vagas e oportunidades", href: "#" },
            { label: "Convênios", href: "#" },
          ],
        },
        {
          title: "Empresa",
          links: [
            { label: "Por que ser parceiro", href: "#" },
            { label: "Cadastro de convênio", href: "#" },
            { label: "Empresas conveniadas", href: "#" },
            { label: "Perguntas de empresas", href: "#" },
          ],
        },
        {
          title: "Institucional",
          links: [
            { label: "Sobre nós", href: "#" },
            { label: "Biblioteca de conteúdos", href: "#" },
            { label: "Perguntas frequentes", href: "#" },
            { label: "Plataforma CENPRE", href: "#" },
          ],
        },
      ]}
      contact={
        <>
          {contato.emailGeral}
          <br />
          <br />
          <span className="text-ash-400">Equipe de convênio</span>
          <br />
          {contato.emailConvenio}
          <br />
          {contato.telefone} · WhatsApp {contato.whatsapp}
        </>
      }
      legal="© 2026 CENPRE Carreiras · Universidade Candido Mendes. Todos os direitos reservados."
    />
  );
}
