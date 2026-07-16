import type { ReactNode } from "react";
import { Card } from "../components/Card";
import { IconChip } from "../components/IconChip";
import { Footer } from "../components/Footer";
import { ArrowRightIcon } from "../components/Icons";
import type { UnidadeContent } from "../content/types";

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

/** Footer padrão do produto, com contatos vindos do content model. */
export function SiteFooter({ contato }: { contato: UnidadeContent["contato"] }) {
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
