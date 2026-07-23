import {
  BriefcaseIcon,
  UsersIcon,
  GraduationCapIcon,
  FileTextIcon,
  SparklesIcon,
  WalletIcon,
  HandshakeIcon,
} from "../components/Icons";
import {
  Headphones,
  Send,
  Award,
  ListChecks,
  CheckCircle2,
  Building2,
  LayoutGrid,
  Headset,
} from "lucide-react";
import { rotas } from "../pages/shared";
import heroAlunoBg from "../assets/hero-aluno-bg.jpg";
import heroAlunoModel from "../assets/hero-aluno-model.webp";
import guiaEstagioEquipe from "../assets/blog-plataforma-captar-talentos.jpg";
import newsCiclo from "../assets/news-1.jpg";
import newsCurriculo from "../assets/news-2.jpg";
import newsEstagio from "../assets/news-3.jpg";
import blogPlataformaDiaADia from "../assets/blog-plataforma-dia-a-dia.jpg";
import blogChecklistDocumentos from "../assets/blog-checklist-documentos.jpg";
import blogCurriculoRecrutadores from "../assets/blog-curriculo-recrutadores.jpg";
import depoimentoRafael from "../assets/avatars/depoimento-rafael.png";
import depoimentoAndressa from "../assets/avatars/depoimento-andressa.png";
import depoimentoMarcos from "../assets/avatars/depoimento-marcos.png";
import depoimentoAdriana from "../assets/avatars/depoimento-adriana.png";
import logoAmbev from "../assets/logos/ambev.webp";
import logoBancoBgm from "../assets/logos/banco-bgm.png";
import logoBodytech from "../assets/logos/bodytech.jpg";
import logoCsn from "../assets/logos/csn.png";
import logoDasa from "../assets/logos/dasa.jpg";
import logoEditoraGlobo from "../assets/logos/editora-globo.jpg";
import logoFgv from "../assets/logos/fgv.png";
import logoHalliburton from "../assets/logos/halliburton.png";
import logoNovaFriburgo from "../assets/logos/nova-friburgo.png";
import logoPortoDoAcu from "../assets/logos/porto-do-acu.webp";
import logoPrefeituraRioSaude from "../assets/logos/prefeitura-rio-saude.png";
import logoSodexo from "../assets/logos/sodexo.png";
import logoTranspetro from "../assets/logos/transpetro.jpg";
import logoUnimedCampos from "../assets/logos/unimed-campos.png";
import logoVale from "../assets/logos/vale.jpg";
import type { UnidadeContent } from "./types";

/**
 * Conteúdo da unidade Campos dos Goytacazes — exemplo canônico do modelo
 * multi-unidade. Novas unidades: copie este arquivo e ajuste os dados.
 */
export const campos: UnidadeContent = {
  unidade: "Campos dos Goytacazes",

  hero: {
    image: heroAlunoBg,
    foreground: heroAlunoModel,
    title: "Conectando você ao seu futuro profissional.",
    description:
      "O CENPRE reúne oportunidades, orientações de estágio, documentos, convênios e conteúdos para aproximar alunos, egressos e empresas do mercado de trabalho.",
  },

  numeros: {
    eyebrow: "O CENPRE em números",
    title: "Desenvolvendo, orientando, gerindo e recrutando.",
    primaryLabel: "Veja as oportunidades",
    secondaryLabel: "Acessar a Plataforma",
    stats: [
      { value: "+ de 5.000", label: "alunos inseridos no mercado" },
      { value: "+ de 600", label: "empresas parceiras conveniadas" },
      { value: "Desde 2001", label: "conectando aluno e oportunidade" },
      { value: "+ de 98%", label: "de satisfação e sucesso" },
    ],
  },

  topicos: [
    {
      icon: <GraduationCapIcon size={22} />,
      title: "Orientações de estágio",
      description:
        "Estágio obrigatório e não obrigatório, documentos, certificados e prazos e orientações por curso.",
      cta: "Saiba mais",
      href: rotas.orientacoesEstagio,
    },
    {
      icon: <BriefcaseIcon size={22} />,
      title: "Vagas e oportunidades",
      description:
        "Acesso a vagas, estágios, empregos e oportunidades por meio da plataforma CENPRE e parceiros.",
      cta: "Saiba mais",
      href: rotas.vagas,
    },
    {
      icon: <FileTextIcon size={22} />,
      title: "Currículo e carreira",
      description:
        "Cadastro, orientação profissional e atualização na criação de currículo para novas oportunidades.",
      cta: "Saiba mais",
      href: rotas.curriculo,
    },
    {
      icon: <SparklesIcon size={22} />,
      title: "Ainda com dúvidas?",
      description: "Nossa equipe está pronta para te ajudar em qualquer etapa do processo.",
      cta: "Fale com a gente",
      href: "mailto:atendimento.cenpre@ucam-campos.br",
    },
  ],

  /** Diagrama "jornada" — Figma: hub CENPRE com 7 nós de cada lado (Aluno × Empresa). */
  jornada: {
    aluno: {
      label: "Aluno",
      nos: [
        { icon: <WalletIcon size={20} />, label: "Cadastro" },
        { icon: <SparklesIcon size={20} />, label: "Oportunidades" },
        { icon: <Headphones size={20} />, label: "Suporte" },
        { icon: <Send size={20} />, label: "Candidaturas" },
        { icon: <BriefcaseIcon size={20} />, label: "Estágio" },
        { icon: <FileTextIcon size={20} />, label: "Currículo" },
        { icon: <Award size={20} />, label: "Certificados" },
      ],
    },
    empresa: {
      label: "Empresa",
      nos: [
        { icon: <WalletIcon size={20} />, label: "Cadastro" },
        { icon: <HandshakeIcon size={20} />, label: "Convênio" },
        { icon: <Headphones size={20} />, label: "Suporte" },
        { icon: <UsersIcon size={20} />, label: "Talentos" },
        { icon: <ListChecks size={20} />, label: "Seleção" },
        { icon: <FileTextIcon size={20} />, label: "Documentos" },
        { icon: <CheckCircle2 size={20} />, label: "Avaliação" },
      ],
    },
  },

  guiaEstagio: {
    eyebrow: "GUIA COMPLETO",
    title: "Entenda como o estágio funciona",
    ctaLabel: "Quero Saber mais",
    itens: [
      {
        question: "1 - O que é o estágio? Qual o seu objetivo?",
        answer:
          "O estágio é um ato educativo supervisionado, desenvolvido no ambiente de trabalho, que visa à preparação do estudante para o exercício profissional. Seu principal objetivo é proporcionar a aplicação prática dos conhecimentos adquiridos no curso, contribuindo para o desenvolvimento de competências, habilidades e atitudes necessárias à formação profissional, além de promover a integração entre teoria e prática.",
        legislacao: {
          label: "LEGISLAÇÃO DO ESTÁGIO",
          titulo: "Lei Nº 11.788 de 25 de setembro de 2008",
          texto:
            "O estágio é fundamental para a formação de sua identidade profissional. Para aproveitar esta experiência com responsabilidade, confira aqui os direitos e deveres do estagiário:",
          linkLabel: "Acessar o link",
        },
      },
      {
        question: "2 - Qual a diferença entre estágio obrigatório e não obrigatório?",
        answer:
          "O obrigatório faz parte da matriz curricular e é requisito para concluir o curso. O não obrigatório é opcional e complementa a formação. Os dois exigem formalização pelo Termo de Compromisso de Estágio (TCE).",
      },
      {
        question: "3 - Como formalizar o meu estágio?",
        answer:
          "Pela celebração do TCE, assinado pelo estudante, pela empresa concedente e pela UCAM/CENPRE. O estágio só começa após a aprovação do Plano de Atividades e a assinatura de todas as partes.",
      },
      {
        question: "4 - Quais documentos são necessários em cada etapa?",
        answer:
          "No início: TCE, Plano de Atividades e seguro contra acidentes. Durante: Relatório de Acompanhamento e, se houver mudanças, Termo Aditivo. No encerramento: Termo de Realização de Estágio e Avaliação do Estagiário.",
      },
    ],
    imagem: guiaEstagioEquipe,
  },

  vagasFontes: ["CENPRE", "NUBE", "Outros parceiros"],
  vagas: [
    {
      area: "Marketing",
      source: "CENPRE",
      modality: "Estágio não obrigatório",
      title: "CRD — Centro de Referência Digital",
      company: "Marketing",
      location: "Rio de Janeiro | RJ",
      salary: "R$ 1.000,00 + Benefícios",
      href: rotas.plataforma,
    },
    {
      area: "Marketing",
      source: "CENPRE",
      modality: "Estágio não obrigatório",
      title: "Tribunal de Justiça do Estado do Rio de Janeiro",
      company: "Administração",
      location: "Rio de Janeiro | RJ",
      salary: "R$ 1.000,00 + Benefícios",
      href: rotas.plataforma,
    },
    {
      area: "Saúde",
      source: "CENPRE",
      modality: "Estágio obrigatório",
      title: "Hospital Universitário Pedro Ernesto",
      company: "Saúde",
      location: "Rio de Janeiro | RJ",
      salary: "R$ 900,00 + Benefícios",
      href: rotas.plataforma,
    },
    {
      area: "Administração",
      source: "NUBE",
      modality: "Estágio não obrigatório",
      title: "Secretaria Municipal de Educação",
      company: "Administração",
      location: "Campos dos Goytacazes | RJ",
      salary: "R$ 800,00 + VT",
      href: rotas.plataforma,
    },
    {
      area: "Engenharia",
      source: "CENPRE",
      modality: "Estágio obrigatório",
      title: "Construtora Atlântica",
      company: "Engenharia",
      location: "Campos dos Goytacazes | RJ",
      salary: "R$ 1.100,00 + Benefícios",
      href: rotas.plataforma,
    },
    {
      area: "Educação",
      source: "NUBE",
      modality: "Estágio não obrigatório",
      title: "Escola Técnica Estadual",
      company: "Educação",
      location: "Campos dos Goytacazes | RJ",
      salary: "R$ 700,00 + Benefícios",
      href: rotas.plataforma,
    },
  ],

  depoimentos: [
    {
      name: "Rafael de Almeida",
      course: "Administração",
      titulo: "Consegui o estágio em menos de um mês!",
      quote:
        "A plataforma do CENPRE me ajudou a encontrar uma vaga que combinava exatamente com o que eu buscava. O suporte na documentação.",
      foto: depoimentoRafael,
      rating: 5,
    },
    {
      name: "Andressa Benevenutto",
      course: "Direito",
      titulo: "O CENPRE abriu portas que eu não imaginava.",
      quote:
        "Através do CENPRE, fechei convênio com um escritório de referência na cidade. A orientação sobre o termo de compromisso foi essencial.",
      foto: depoimentoAndressa,
      rating: 5,
    },
    {
      name: "Marcos Silva Pereira",
      course: "Administração",
      titulo: "Fui efetivado antes mesmo de terminar o curso!",
      quote:
        "O acompanhamento do CENPRE durante o estágio me deu segurança para negociar minha efetivação com a empresa.",
      foto: depoimentoMarcos,
      rating: 5,
    },
    {
      name: "Adriana Machado F.",
      course: "Engenharia Civil",
      titulo: "Currículo revisado, vaga garantida.",
      quote:
        "Com as dicas de currículo do CENPRE, consegui destacar minhas experiências e fui chamada para entrevista na primeira semana.",
      foto: depoimentoAdriana,
      rating: 5,
    },
  ],

  /** Figma: faixa magenta-800, 4 cards (não 3), copy diferente do "motivos" das subpáginas. */
  motivos: [
    {
      icon: <Award size={22} />,
      title: "Mais de 20 anos de experiência",
      description: "Referência em carreiras e empregabilidade desde 2001.",
    },
    {
      icon: <Building2 size={22} />,
      title: "+ de 600 empresas parceiras",
      description: "Conexão direta entre talentos e oportunidades reais.",
    },
    {
      icon: <LayoutGrid size={22} />,
      title: "Plataforma de vagas própria",
      description: "Currículo, vagas, documentos e convênios em um só lugar.",
    },
    {
      icon: <Headset size={22} />,
      title: "Suporte em todas as etapas",
      description: "Equipe dedicada do cadastro à efetivação.",
    },
  ],

  logosParceiros: {
    titulo: "Nossos alunos já trabalham em empresas como:",
    logos: [
      { nome: "Ambev", src: logoAmbev },
      { nome: "Banco BGM", src: logoBancoBgm },
      { nome: "Bodytech", src: logoBodytech },
      { nome: "CSN", src: logoCsn },
      { nome: "DASA", src: logoDasa },
      { nome: "Editora Globo", src: logoEditoraGlobo },
      { nome: "FGV", src: logoFgv },
      { nome: "Halliburton", src: logoHalliburton },
      { nome: "Prefeitura de Nova Friburgo", src: logoNovaFriburgo },
      { nome: "Porto do Açu", src: logoPortoDoAcu },
      { nome: "Prefeitura Rio Saúde", src: logoPrefeituraRioSaude },
      { nome: "Sodexo", src: logoSodexo },
      { nome: "Transpetro", src: logoTranspetro },
      { nome: "Unimed Campos", src: logoUnimedCampos },
      { nome: "Vale", src: logoVale },
    ],
  },

  plataformaFeatures: {
    eyebrow: "PLATAFORMA CENPRE CARREIRAS",
    title: "Tudo o que você precisa em um só lugar",
    description:
      "A Plataforma CENPRE Carreiras é o ambiente digital que centraliza oportunidades, serviços e a gestão de estágios — conectando você ao mercado de trabalho em poucos cliques.",
    modulos: [
      {
        icon: <BriefcaseIcon size={22} />,
        title: "Vagas e oportunidades",
        description: "Estágios e empregos do CENPRE e de parceiros.",
      },
      {
        icon: <FileTextIcon size={22} />,
        title: "Currículo",
        description: "Crie ou envie o seu e fique visível a empresas.",
      },
      {
        icon: <ListChecks size={22} />,
        title: "Documentos de estágio",
        description: "Emita TCE, termos e relatórios online.",
      },
      {
        icon: <HandshakeIcon size={22} />,
        title: "Convênios",
        description: "Consulte as instituições conveniadas.",
      },
      {
        icon: <CheckCircle2 size={22} />,
        title: "Acompanhamento",
        description: "Siga candidaturas e a gestão do estágio.",
      },
    ],
    comoComecar: {
      titulo: "COMO COMEÇAR",
      passos: [
        {
          titulo: "Acesse e crie seu perfil",
          descricao: "Entre na plataforma e complete os seus dados.",
        },
        {
          titulo: "Cadastre seu currículo",
          descricao: "Envie ou monte o seu no Banco de Currículos.",
        },
        { titulo: "Candidate-se às vagas", descricao: "Aplique e acompanhe todo o processo." },
      ],
    },
    documentosNecessarios: {
      titulo: "Documentos necessários",
      itens: [
        "Currículo atualizado",
        "Documento de identificação (RG e CPF)",
        "Comprovante de matrícula (para estágio)",
      ],
      ctaLabel: "Acessar a plataforma",
    },
  },

  ticker: [
    "Universidade e mercado",
    "Futuro profissional",
    "Orientação de carreira",
    "Talentos UCAM",
    "Alunos e egressos",
    "Banco de currículos",
  ],

  sobreNosResumo: {
    eyebrow: "NOSSA HISTÓRIA",
    paragraphs: [
      "Seja bem-vindo ao CENPRE – Centro de Práticas Empresariais, o núcleo de carreiras e empregabilidade da Universidade, criado em 2001 com a missão de apoiar o desenvolvimento profissional de nossos alunos e ex-alunos, conectando talentos ao mercado de trabalho.",
      "Por meio de parcerias com instituições públicas e privadas, promovemos oportunidades de estágio e emprego, aproximando nossos estudantes das melhores experiências profissionais e auxiliando organizações na identificação de talentos para seus negócios.",
      "O CENPRE é a referência para todas as ações relacionadas a estágios, oferecendo suporte na gestão e acompanhamento da documentação necessária para a formalização das atividades acadêmico-profissionais.",
      "E não para por aí! O CENPRE promove palestras, conteúdos, eventos e iniciativas voltadas ao universo profissional, proporcionando mais aprendizado, networking e oportunidades para o desenvolvimento de carreira.",
      "Agora, contamos também com a Plataforma CENPRE Carreiras: um ambiente digital que centraliza oportunidades, serviços e a gestão de estágios, fortalecendo a conexão entre nossos talentos e o mercado de trabalho.",
    ],
    ctaLabel: "Conheça nossa história",
    href: "/institucional/sobre-nos",
  },

  noticias: [
    {
      author: "André Pacheco",
      date: "19 nov 2024",
      title: "Ciclo de Estudo PCL 2024.2",
      excerpt:
        "O ciclo reuniu estudantes de diferentes cursos em encontros voltados ao desenvolvimento acadêmico.",
      tags: ["Estudo", "UCAM"],
      href: rotas.artigo,
      image: newsCiclo,
    },
    {
      author: "Equipe CENPRE",
      date: "05 mar 2025",
      title: "5 erros comuns no currículo que afastam recrutadores",
      excerpt:
        "Identifique os deslizes mais frequentes e saiba como corrigir antes da próxima candidatura.",
      tags: ["Currículo", "Carreira"],
      href: rotas.artigo,
      image: newsCurriculo,
    },
    {
      author: "Equipe CENPRE",
      date: "18 fev 2025",
      title: "Estágio obrigatório x não obrigatório",
      excerpt:
        "Carga horária, bolsa-auxílio e documentação têm regras diferentes entre as modalidades.",
      tags: ["Estágio", "Orientação"],
      href: rotas.artigo,
      image: newsEstagio,
    },
  ],

  bibliotecaResumo: {
    eyebrow: "Aprenda com a gente",
    title: "Biblioteca de Conteúdos",
    verMaisLabel: "Ver mais no blog",
    formatos: ["Blog", "Vídeos", "Podcasts", "Webinars", "Artigos"],
    itens: [
      {
        formato: "Blog",
        author: "Plataforma",
        date: "10 de fev. de 2025",
        title: "Como aproveitar a Plataforma CENPRE Carreiras no dia a dia",
        excerpt:
          "Cadastro de currículo, busca de vagas e acompanhamento de candidaturas em um só lugar.",
        tags: ["Plataforma"],
        href: rotas.artigo,
        image: blogPlataformaDiaADia,
      },
      {
        formato: "Blog",
        author: "Estágio",
        date: "24 de jan. de 2025",
        title: "Checklist de documentos: o que levar antes de iniciar o estágio",
        excerpt:
          "TCE, termo de compromisso e seguro contra acidentes — confira o que é exigido antes do primeiro dia.",
        tags: ["Estágio"],
        href: rotas.artigo,
        image: blogChecklistDocumentos,
      },
      {
        formato: "Blog",
        author: "Carreira",
        date: "08 de jan. de 2025",
        title: "Currículo: o que recrutadores realmente olham primeiro",
        excerpt:
          "Os pontos que mais pesam na triagem, segundo quem recebe centenas de currículos por vaga.",
        tags: ["Carreira"],
        href: rotas.artigo,
        image: blogCurriculoRecrutadores,
      },
    ],
  },

  faqIntro: {
    title: "Perguntas Frequentes sobre o CENPRE",
    description: "Tire suas dúvidas sobre estágio, documentos e bolsa-auxílio.",
    ctaLabel: "Saber mais sobre",
    href: "/aluno/orientacoes-de-estagio#faq",
  },
  faq: [
    {
      question: "Como faço para encontrar vagas de estágio?",
      answer:
        "Acesse o Painel de Vagas ou a Plataforma CENPRE Carreiras: lá você filtra por área, modalidade e fonte (CENPRE, NUBE ou outros parceiros) e se candidata em poucos cliques.",
    },
    {
      question: "Como funciona o Termo de Compromisso de Estágio (TCE)?",
      answer:
        "O TCE formaliza a relação de estágio entre você, a empresa concedente e a UCAM/CENPRE, conforme a Lei nº 11.788/2008. O estágio só começa após a assinatura das três partes.",
    },
    {
      question: "Qual a diferença entre estágio obrigatório e não obrigatório?",
      answer:
        "O obrigatório faz parte da matriz curricular e é requisito para concluir o curso; o não obrigatório é opcional e complementa a formação. Os dois exigem TCE.",
    },
  ],

  contato: {
    emailGeral: "atendimento.cenpre@ucam-campos.br",
    emailConvenio: "convenio.estagio@ucam-campos.br",
    telefone: "(22) 2726-2419",
    whatsapp: "(22) 99618-0786",
  },
};
