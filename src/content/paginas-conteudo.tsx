import type { VagasContent, ArtigoContent, SobreNosContent, BibliotecaContent } from "./types";
import { campos } from "./campos";
import { empresa } from "./empresa";
import blogPlataformaDiaADia from "../assets/blog-plataforma-dia-a-dia.jpg";
import blogChecklistDocumentos from "../assets/blog-checklist-documentos.jpg";
import blogCurriculoRecrutadores from "../assets/blog-curriculo-recrutadores.jpg";

/** Painel de vagas — listagem com busca e filtro por fonte. */
export const vagas: VagasContent = {
  hero: {
    title: "Vagas e Oportunidades",
    subtitle: "Estágios, empregos e oportunidades disponíveis via plataforma CENPRE e parceiros.",
    breadcrumb: ["Vagas e Oportunidades"],
  },
  fontes: ["CENPRE", "NUBE", "Outros parceiros"],
  vagas: [
    ...campos.vagas,
    {
      area: "Direito",
      source: "NUBE",
      modality: "Estágio não obrigatório",
      title: "Escritório Menezes Advocacia",
      company: "Direito",
      location: "Campos dos Goytacazes | RJ",
      salary: "R$ 1.200,00 + Benefícios",
      href: "#",
    },
    {
      area: "Tecnologia",
      source: "NUBE",
      modality: "Estágio não obrigatório",
      title: "Tech Solutions — Suporte N1",
      company: "Tecnologia",
      location: "Remoto",
      salary: "R$ 1.100,00 + Benefícios",
      href: "#",
    },
    {
      area: "Engenharia",
      source: "Outros parceiros",
      modality: "Estágio obrigatório",
      title: "Construtora Norte — Obras",
      company: "Engenharia",
      location: "Campos dos Goytacazes | RJ",
      salary: "R$ 950,00 + Benefícios",
      href: "#",
    },
    {
      area: "Educação",
      source: "CENPRE",
      modality: "Estágio obrigatório",
      title: "Colégio Candido Mendes",
      company: "Educação",
      location: "Campos dos Goytacazes | RJ",
      salary: "R$ 800,00 + Benefícios",
      href: "#",
    },
    {
      area: "Saúde",
      source: "NUBE",
      modality: "Estágio não obrigatório",
      title: "Clínica Vida — Fisioterapia",
      company: "Saúde",
      location: "Macaé | RJ",
      salary: "R$ 1.000,00 + Benefícios",
      href: "#",
    },
    {
      area: "Administração",
      source: "Outros parceiros",
      modality: "Emprego",
      title: "Grupo ABC — Analista Júnior",
      company: "Administração",
      location: "Campos dos Goytacazes | RJ",
      salary: "A combinar",
      href: "#",
    },
  ],
};

/** Página de artigo — exemplo com o conteúdo "Ciclo de Estudo PCL 2024.2". */
export const artigoExemplo: ArtigoContent = {
  breadcrumb: ["Conteúdos", "Artigos"],
  tags: [
    { label: "Estudo", tone: "brand" },
    { label: "UCAM", tone: "accent" },
  ],
  title: "Ciclo de Estudo PCL 2024.2: Preparo, prática e impacto na formação acadêmica",
  author: "André Pacheco",
  date: "19 de novembro de 2024",
  readTime: "5 min de leitura",
  body: [
    {
      type: "p",
      text: "O Ciclo de Estudo PCL 2024.2 reuniu estudantes de diferentes cursos da UCAM em uma série de encontros voltados ao desenvolvimento acadêmico e profissional. Ao longo do semestre, os participantes aprofundaram conteúdos curriculares, praticaram metodologias ativas e fortaleceram competências essenciais para o mercado de trabalho.",
    },
    {
      type: "quote",
      text: "A experiência do ciclo foi transformadora. Consegui conectar a teoria com situações reais do meu futuro campo profissional.",
      cite: "Estudante de Administração",
    },
    {
      type: "p",
      text: "Programado para atender as necessidades identificadas no perfil dos alunos, o ciclo contou com especialistas convidados, dinâmicas em grupo e produção de trabalhos aplicados. O resultado foi visível tanto no engajamento dos estudantes quanto nos indicadores de desempenho ao final do período letivo.",
    },
    {
      type: "p",
      text: "O CENPRE acompanhou as iniciativas, orientando os participantes sobre oportunidades de estágio, criação de currículo e conexão com empresas parceiras. Muitos dos alunos que participaram do ciclo já relatam maior segurança na hora de buscar o primeiro emprego ou estágio.",
    },
  ],
  autor: {
    nome: "André Pacheco",
    bio: "Coordenador de conteúdo do CENPRE, especialista em desenvolvimento profissional e carreiras universitárias.",
  },
  categorias: ["Estudo", "UCAM", "Carreira", "Estágio", "Mercado de trabalho"],
  relacionados: campos.noticias,
};

/** Página institucional — Sobre nós. */
export const sobreNos: SobreNosContent = {
  hero: {
    title: "Sobre nós",
    subtitle:
      "Conheça o CENPRE — Centro de Práticas Empresariais, o núcleo de carreiras e empregabilidade da Universidade Candido Mendes.",
    breadcrumb: ["Institucional", "Sobre nós"],
  },
  eyebrow: "Nossa história",
  paragraphs: [
    "Seja bem-vindo ao CENPRE – Centro de Práticas Empresariais, o núcleo de carreiras e empregabilidade da Universidade, criado em 2001 com a missão de apoiar o desenvolvimento profissional de nossos alunos e ex-alunos, conectando talentos ao mercado de trabalho.",
    "Por meio de parcerias com instituições públicas e privadas, promovemos oportunidades de estágio e emprego, aproximando nossos estudantes das melhores experiências profissionais e auxiliando organizações na identificação de talentos para seus negócios.",
    "O CENPRE é a referência para todas as ações relacionadas a estágios, oferecendo suporte na gestão e acompanhamento da documentação necessária para a formalização das atividades acadêmico-profissionais.",
    "E não para por aí! O CENPRE promove palestras, conteúdos, eventos e iniciativas voltadas ao universo profissional, proporcionando mais aprendizado, networking e oportunidades para o desenvolvimento de carreira.",
    "Agora, contamos também com a Plataforma CENPRE Carreiras: um ambiente digital que centraliza oportunidades, serviços e a gestão de estágios, fortalecendo a conexão entre nossos talentos e o mercado de trabalho.",
  ],
  ctaLabel: "Fazer contato",
  href: "#",
};

/** Biblioteca de conteúdos — listagem com pills por formato. */
export const biblioteca: BibliotecaContent = {
  hero: {
    title: "Biblioteca de Conteúdos",
    subtitle:
      "Artigos, vídeos, podcasts e materiais para apoiar sua jornada de carreira, do primeiro currículo à efetivação.",
    breadcrumb: ["Conteúdos", "Biblioteca"],
  },
  formatos: ["Blog", "Vídeos", "Podcasts", "Webinars", "Artigos"],
  itens: [
    {
      formato: "Blog",
      author: "Plataforma",
      date: "10 fev 2025",
      title: "Como aproveitar a Plataforma CENPRE Carreiras no dia a dia",
      excerpt:
        "Cadastro de currículo, busca de vagas e acompanhamento de candidaturas em um só lugar.",
      tags: ["Plataforma"],
      href: "#",
      image: blogPlataformaDiaADia,
    },
    {
      formato: "Blog",
      author: "Estágio",
      date: "24 jan 2025",
      title: "Checklist de documentos: o que levar antes de iniciar o estágio",
      excerpt:
        "TCE, termo de compromisso e seguro contra acidentes — confira o que é exigido antes do primeiro dia.",
      tags: ["Estágio"],
      href: "#",
      image: blogChecklistDocumentos,
    },
    {
      formato: "Blog",
      author: "Carreira",
      date: "08 jan 2025",
      title: "Currículo: o que recrutadores realmente olham primeiro",
      excerpt:
        "Os pontos que mais pesam na triagem, segundo quem recebe centenas de currículos por vaga.",
      tags: ["Carreira"],
      href: "#",
      image: blogCurriculoRecrutadores,
    },
    ...empresa.biblioteca.itens,
  ],
};
