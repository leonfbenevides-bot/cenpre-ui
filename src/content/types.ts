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
  /** Faixa "O CENPRE EM NÚMEROS" (título + CTAs + 4 números magenta). */
  numeros: {
    eyebrow: string;
    title: string;
    primaryLabel: string;
    secondaryLabel: string;
    stats: { value: string; label: string }[];
  };
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

/** Hero padrão das subpáginas (PageHero magenta com breadcrumb). */
export interface SubHero {
  title: string;
  subtitle: string;
  /** Trilha após "Início" (ex.: ["Alunos e Egressos", "Currículo"]). */
  breadcrumb: string[];
}

export interface OrientacoesContent {
  hero: SubHero;
  /** Faixa da Lei do Estágio abaixo do hero. */
  lei: { label: string; text: string };
  /** Tabs "Obrigatório ou não obrigatório?" (pills + painel de texto). */
  tiposEstagio: {
    eyebrow: string;
    title: string;
    tabs: { label: string; text: string }[];
  };
  escolas: { icon: ReactNode; nome: string; cursos: string; badge?: string; href: string }[];
  /** DocCards "O que você precisa em cada etapa". */
  etapas: { label: string; icon: ReactNode; items: string[] }[];
  /** FAQ agrupada "Estágio não obrigatório: tudo o que você precisa saber". */
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    grupos: { titulo: string; subtitulo: string; itens: { question: string; answer: string }[] }[];
  };
}

export interface CurriculoContent {
  hero: SubHero;
  intro: { eyebrow: string; title: string; description: string };
  /** Faixa de dica logo após a intro. */
  dica: string;
  /** Colunas "Já tenho currículo" / "Não tenho currículo" com passos numerados. */
  caminhos: { badge: string; title: string; steps: string[] }[];
  /** FAQ "Perguntas sobre o currículo". */
  faq: { eyebrow: string; title: string; itens: { question: string; answer: string }[] };
  dicas: { title: string; items: string[] };
}

export interface ConveniadasContent {
  hero: SubHero;
  aviso: { title: string; text: string };
  indicacao: { title: string; text: string };
}

export interface CadastroConvenioContent {
  hero: SubHero;
  intro: { title: string; description: string };
  passos: { title: string; description: string }[];
  /** Cards "Documentos e dados necessários". */
  documentos: {
    eyebrow: string;
    title: string;
    subtitle: string;
    itens: { icon: ReactNode; title: string; text: string }[];
  };
  /** FAQ em duas colunas (texto à esquerda, accordion à direita). */
  faq: {
    eyebrow: string;
    title: string;
    description: string;
    ctaLabel: string;
    itens: { question: string; answer: string }[];
  };
}

export interface ParceiroContent {
  hero: SubHero;
  intro: { eyebrow: string; title: string; description: string };
  beneficios: { title: string; description: string }[];
}

export interface VagasContent {
  hero: SubHero;
  /** Fontes dos filtros (sem "Todas", que a página adiciona). */
  fontes: string[];
  vagas: UnidadeContent["vagas"];
}

export interface ArtigoContent {
  breadcrumb: string[];
  tags: { label: string; tone: "brand" | "accent" | "neutral" }[];
  title: string;
  author: string;
  date: string;
  readTime: string;
  cover?: string;
  /** Corpo: parágrafos e citações na ordem de leitura. */
  body: { type: "p" | "quote"; text: string; cite?: string }[];
  autor: { nome: string; bio: string };
  categorias: string[];
  relacionados: UnidadeContent["noticias"];
}

export interface SobreNosContent {
  hero: SubHero;
  eyebrow: string;
  paragraphs: string[];
  ctaLabel: string;
  href: string;
}

export interface BibliotecaContent {
  hero: SubHero;
  formatos: string[];
  itens: (UnidadeContent["noticias"][number] & { formato: string })[];
}
