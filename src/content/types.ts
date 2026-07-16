import type { ReactNode } from "react";

/**
 * Conteúdo variável por unidade/polo do portal CENPRE.
 *
 * A página `TemplateUnidade` recebe um `UnidadeContent` e renderiza a home da
 * unidade. Para criar uma nova unidade, copie `campos.tsx` para
 * `src/content/<unidade>.tsx`, ajuste os dados e monte a rota — nenhum JSX de
 * página precisa ser duplicado. O copy global (títulos de seção, eyebrows)
 * mora no template; aqui fica só o que muda de unidade para unidade.
 */
export interface UnidadeContent {
  /** Nome da unidade (ex.: "Campos dos Goytacazes"). */
  unidade: string;
  hero: {
    /** Imagem de fundo do banner (import de `src/assets`). */
    image: string;
    title: string;
    description: string;
  };
  /** Números/da prova social (Desde 2001, +600 empresas…). */
  kpis: { icon: ReactNode; title: string; description: string }[];
  /** Tópicos "como conectamos" (orientações, vagas, currículo, dúvidas). */
  topicos: { icon: ReactNode; title: string; description: string; cta: string; href: string }[];
  /** Vagas em destaque no painel (a lista completa vive na plataforma). */
  vagas: {
    area: string;
    source: string;
    modality: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    href: string;
  }[];
  depoimentos: { name: string; course: string; quote: string }[];
  /** Motivos para escolher o CENPRE. */
  motivos: { icon: ReactNode; title: string; description: string }[];
  noticias: {
    author: string;
    date: string;
    title: string;
    excerpt: string;
    tags: string[];
    href: string;
    /** Capa 16:10; sem ela o card mostra um placeholder neutro. */
    image?: string;
  }[];
  faq: { question: string; answer: string }[];
  contato: {
    emailGeral: string;
    emailConvenio: string;
    telefone: string;
    whatsapp: string;
  };
}
