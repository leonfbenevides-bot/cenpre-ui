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

/**
 * Conteúdo da home do público Empresa (jornada "Sou uma empresa").
 * Exemplo canônico em `src/content/empresa.tsx`.
 */
export interface EmpresaContent {
  hero: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  /** Cards "Tudo que sua empresa precisa em um só lugar". */
  ofertas: { icon: ReactNode; title: string; description: string; cta: string; href: string }[];
  /** Accordion "Entenda como funciona o convênio" (1 a 5). */
  convenio: { question: string; answer?: string }[];
  /** Empresas conveniadas em destaque (busca/filtro client-side na página). */
  parceiros: { name: string; category: string; vagasAbertas: number; href: string }[];
  /** Categorias dos filtros de parceiros (sem "Todas", que a página adiciona). */
  categorias: string[];
  /** Faixa escura de números. */
  stats: { value: string; label: string }[];
  sobre: { paragraphs: string[]; ctaLabel: string; href: string };
  noticias: UnidadeContent["noticias"];
  /** Biblioteca de conteúdos: pills de formato + itens por formato. */
  biblioteca: { formatos: string[]; itens: (UnidadeContent["noticias"][number] & { formato: string })[] };
  faq: { question: string; answer: string }[];
  contato: UnidadeContent["contato"];
}
