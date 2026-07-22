import { HandshakeIcon, SparklesIcon, ClipboardListIcon, FaqIcon } from "../components/Icons";
import type { EmpresaContent } from "./types";
import { campos } from "./campos";
import heroEmpresaBg from "../assets/hero-empresa-bg.jpg";
import heroEmpresaModel from "../assets/hero-empresa-model.webp";

/**
 * Conteúdo da home Empresa — copy extraído do Figma UCAM SITE (frames
 * "Home - Empresa"). Contatos e notícias são compartilhados com a unidade.
 */
export const empresa: EmpresaContent = {
  hero: {
    image: heroEmpresaBg,
    foreground: heroEmpresaModel,
    title: "Conecte-se aos talentos UCAM e fortaleça sua marca empregadora",
    description:
      "Empresas parceiras têm acesso a estudantes e egressos qualificados, gestão simplificada de estágios e suporte especializado em todo o processo.",
    primaryLabel: "Cadastrar minha empresa",
    secondaryLabel: "Por que ser parceiro?",
  },

  // Números institucionais — mesmos da home do aluno (Figma mostra a faixa nas duas homes).
  numeros: campos.numeros,

  ofertas: [
    {
      icon: <HandshakeIcon size={22} />,
      title: "Convênios",
      description:
        "Lista de empresas conveniadas, processo de formalização e gestão do contrato de estágio com suporte do CENPRE.",
      cta: "Ver convênios",
      href: "#",
    },
    {
      icon: <SparklesIcon size={22} />,
      title: "Por que ser parceiro",
      description:
        "Benefícios exclusivos: captação de talentos, fortalecimento da marca empregadora e acesso à rede UCAM.",
      cta: "Saiba mais",
      href: "#",
    },
    {
      icon: <ClipboardListIcon size={22} />,
      title: "Cadastro de convênio",
      description:
        "Passo a passo para formalizar o convênio com a UCAM e começar a receber currículos e candidaturas.",
      cta: "Como funciona",
      href: "#",
    },
    {
      icon: <FaqIcon size={22} />,
      title: "Perguntas de empresas",
      description:
        "Dúvidas sobre documentação, assinatura, prazos e gestão de estagiários? As respostas estão aqui.",
      cta: "Ver FAQ",
      href: "#",
    },
  ],

  convenio: [
    {
      question: "1 - O que é o convênio? Qual o seu objetivo?",
      answer:
        "O convênio é o instrumento jurídico que formaliza a parceria entre a empresa e a UCAM, autorizando a empresa a receber estagiários. É regulado pela Lei Nº 11.788/2008 e estabelece as responsabilidades de cada parte durante o período de estágio.",
    },
    { question: "2 - Como cadastrar minha empresa" },
    { question: "3 - Quem deve assinar o convênio" },
    { question: "4 - Quais documentos são necessários" },
    { question: "5 - Prazo de homologação e liberação de vagas" },
  ],

  parceiros: [
    { name: "Tech Solutions", category: "Tecnologia", vagasAbertas: 4, href: "#" },
    { name: "Grupo ABC", category: "Indústria", vagasAbertas: 2, href: "#" },
    { name: "Hospital Regional", category: "Saúde", vagasAbertas: 3, href: "#" },
    { name: "StartupRJ", category: "Tecnologia", vagasAbertas: 1, href: "#" },
    { name: "Construtora Norte", category: "Indústria", vagasAbertas: 5, href: "#" },
    { name: "Escritório Menezes", category: "Educação", vagasAbertas: 2, href: "#" },
  ],
  categorias: ["Tecnologia", "Saúde", "Indústria", "Educação"],

  // Distintos da faixa "numeros" (que já cobre escala/tempo de mercado):
  // aqui o foco é o processo de convênio em si — custo, agilidade, suporte.
  stats: [
    { value: "Gratuito", label: "cadastro e convênio sem custo" },
    { value: "100% digital", label: "assinatura e gestão online" },
    { value: "5 dias úteis", label: "para homologação" },
    { value: "Suporte total", label: "do CENPRE" },
  ],

  sobre: {
    paragraphs: [
      "Seja bem-vindo ao CENPRE — Centro de Práticas Empresariais, o núcleo de carreiras e empregabilidade da Universidade, criado em 2001 com a missão de apoiar o desenvolvimento profissional de nossos alunos e ex-alunos, conectando talentos ao mercado de trabalho.",
      "Para as empresas, o CENPRE é a porta de entrada para a rede UCAM: convênios, divulgação de vagas, captação de estagiários e acompanhamento em todas as etapas do processo, com respaldo jurídico e agilidade na documentação.",
    ],
    ctaLabel: "Fique por dentro",
    href: "#",
  },

  noticias: campos.noticias,

  biblioteca: {
    formatos: ["Blog", "Vídeos", "Podcasts", "Workshops", "Artigos"],
    itens: [
      {
        formato: "Blog",
        author: "Plataforma",
        date: "10 mar 2025",
        title: "Como aproveitar a Plataforma CENPRE para captar talentos",
        excerpt: "Do cadastro à triagem de currículos: um guia prático para o RH da sua empresa.",
        tags: ["Plataforma", "RH"],
        href: "#",
      },
      {
        formato: "Blog",
        author: "Equipe CENPRE",
        date: "24 fev 2025",
        title: "Checklist de documentos: o que ter em mãos para iniciar o convênio",
        excerpt: "TCE, plano de atividades e seguro: organize a documentação e ganhe agilidade.",
        tags: ["Convênio", "Documentos"],
        href: "#",
      },
      {
        formato: "Blog",
        author: "Equipe CENPRE",
        date: "12 fev 2025",
        title: "Supervisão: o que sua empresa precisa saber sobre estagiários",
        excerpt: "O papel do supervisor, avaliações semestrais e boas práticas de acompanhamento.",
        tags: ["Estágio", "Gestão"],
        href: "#",
      },
    ],
  },

  faq: [
    {
      question: "Como cadastrar a minha empresa?",
      answer:
        'Acesse ucam-csm.symplicity.com, clique em "Cadastro de Empresas" e preencha os dados. Nossa equipe valida o cadastro e orienta os próximos passos.',
    },
    {
      question: "Como solicitar convênio?",
      answer:
        "Após o cadastro na plataforma, solicite o convênio pelo formulário próprio. A equipe do CENPRE acompanha a formalização e a assinatura do termo.",
    },
    {
      question: "Quem deve assinar o convênio?",
      answer:
        "O Termo de Convênio deve ser assinado pelo representante legal da empresa e pelo responsável da UCAM/CENPRE.",
    },
  ],

  contato: campos.contato,
};
