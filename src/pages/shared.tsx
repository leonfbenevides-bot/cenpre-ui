import type { ReactNode } from "react";
import { Card } from "../components/Card";
import { IconChip } from "../components/IconChip";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { PlatformCTA } from "../components/PlatformCTA";
import { ArrowRightIcon, ChevronRightIcon } from "../components/Icons";
import { PenLine, Video, Mic, MonitorPlay, FileText } from "lucide-react";
import type { UnidadeContent } from "../content/types";
import platformIllustration from "../assets/platform-illustration.png";

/** Marca CENPRE usada no Header/HeroBanner de todas as páginas. */
export const Brand = (
  <span className="flex items-center gap-2">
    <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-magenta-700 text-xs font-extrabold text-white">C</span>
    <span className="flex flex-col leading-none">
      <span className="text-magenta-800">CENPRE</span>
      <span className="text-[10px] font-medium text-charcoal-100">Centro de Práticas Empresariais</span>
    </span>
  </span>
);

/** Navegação principal do produto (igual em todas as páginas). */
export const nav = [
  { label: "Início", href: "#" }, { label: "Alunos e Egressos", href: "#" },
  { label: "Empresa", href: "#" }, { label: "Vagas", href: "#" }, { label: "Conteúdos", href: "#" },
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
      <a href={href} className="inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800">
        {cta} <ArrowRightIcon size={15} />
      </a>
    </Card>
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

/** Breadcrumb das subpáginas: "Início › ..." (para o `breadcrumb` do PageHero). */
export function Breadcrumb({ trail }: { trail: string[] }) {
  return (
    <span className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/70">
      <a href="#" className="hover:text-white">Início</a>
      {trail.map((item, i) => (
        <span key={item} className="flex items-center gap-1.5">
          <ChevronRightIcon size={13} aria-hidden />
          {i === trail.length - 1 ? (
            <span className="text-white">{item}</span>
          ) : (
            <a href="#" className="hover:text-white">{item}</a>
          )}
        </span>
      ))}
    </span>
  );
}

/** Seção de encerramento com o CTA da Plataforma CENPRE (igual em todas as páginas). */
export function PlatformSection() {
  return (
    <section className="mx-auto max-w-container px-6 py-10 md:px-[72px]">
      <PlatformCTA
        title="Mais do que uma plataforma completa, nós acompanhamos todas as etapas."
        primaryLabel="Acessar a plataforma" secondaryLabel="Fale conosco" trust="Processos 100% seguros"
        media={<img src={platformIllustration} alt="Plataforma CENPRE — painel de oportunidades" className="pointer-events-none absolute right-0 top-6 w-[112%] max-w-none" />}
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
      <li><a href={`mailto:${contato.emailConvenio}`} className="font-medium text-magenta-700 hover:text-magenta-800">{contato.emailConvenio}</a></li>
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
      columns={[
        { title: "Aluno / Egresso", links: [{ label: "Estágio", href: "#" }, { label: "Currículo", href: "#" }, { label: "Vagas e oportunidades", href: "#" }, { label: "Convênios", href: "#" }] },
        { title: "Empresa", links: [{ label: "Por que ser parceiro", href: "#" }, { label: "Cadastro de convênio", href: "#" }, { label: "Empresas conveniadas", href: "#" }, { label: "Perguntas de empresas", href: "#" }] },
        { title: "Institucional", links: [{ label: "Sobre nós", href: "#" }, { label: "Biblioteca de conteúdos", href: "#" }, { label: "Perguntas frequentes", href: "#" }, { label: "Plataforma CENPRE", href: "#" }] },
      ]}
      contact={<>{contato.emailGeral}<br /><br /><span className="text-ash-600">Equipe de convênio</span><br />{contato.emailConvenio}<br />{contato.telefone} · WhatsApp {contato.whatsapp}</>}
      legal="© 2026 CENPRE Carreiras · Universidade Candido Mendes. Todos os direitos reservados."
    />
  );
}
