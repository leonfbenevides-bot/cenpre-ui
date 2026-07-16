import {
  BriefcaseIcon, BuildingIcon, UsersIcon, ShieldCheckIcon, GraduationCapIcon,
  FileTextIcon, SparklesIcon, ClockIcon,
} from "../components/Icons";
import heroOffice from "../assets/hero-office.jpg";
import type { UnidadeContent } from "./types";

/**
 * Conteúdo da unidade Campos dos Goytacazes — exemplo canônico do modelo
 * multi-unidade. Novas unidades: copie este arquivo e ajuste os dados.
 */
export const campos: UnidadeContent = {
  unidade: "Campos dos Goytacazes",

  hero: {
    image: heroOffice,
    title: "Conectando você ao seu futuro profissional.",
    description:
      "O CENPRE reúne oportunidades, orientações de estágio, documentos, convênios e conteúdos para aproximar alunos, egressos e empresas do mercado de trabalho.",
  },

  kpis: [
    { icon: <ShieldCheckIcon size={22} />, title: "Desde 2001", description: "Mais de 20 anos de atuação em carreiras e empregabilidade na UCAM." },
    { icon: <BuildingIcon size={22} />, title: "+ de 600 empresas", description: "Rede de instituições que oferecem estágio e emprego aos nossos alunos." },
    { icon: <UsersIcon size={22} />, title: "Milhares de alunos", description: "Estudantes e egressos conectados ao mercado de trabalho." },
    { icon: <BriefcaseIcon size={22} />, title: "Plataforma própria", description: "Vagas, convênios e conteúdos reunidos em um só ambiente digital." },
  ],

  topicos: [
    { icon: <GraduationCapIcon size={22} />, title: "Orientações de estágio", description: "Estágio obrigatório e não obrigatório, documentos, certificados e prazos e orientações por curso.", cta: "Saiba mais", href: "#" },
    { icon: <BriefcaseIcon size={22} />, title: "Vagas e oportunidades", description: "Acesso a vagas, estágios, empregos e oportunidades por meio da plataforma CENPRE e parceiros.", cta: "Saiba mais", href: "#" },
    { icon: <FileTextIcon size={22} />, title: "Currículo e carreira", description: "Cadastro, orientação profissional e atualização na criação de currículo para novas oportunidades.", cta: "Saiba mais", href: "#" },
    { icon: <SparklesIcon size={22} />, title: "Ainda com dúvidas?", description: "Nossa equipe está pronta para te ajudar em qualquer etapa do processo.", cta: "Fale com a gente", href: "#" },
  ],

  vagas: [
    { area: "Marketing", source: "CENPRE", modality: "Estágio não obrigatório", title: "CRD — Centro de Referência Digital", company: "Marketing", location: "Rio de Janeiro | RJ", salary: "R$ 1.000,00 + Benefícios", href: "#" },
    { area: "Administração", source: "CENPRE", modality: "Estágio obrigatório", title: "Tribunal de Justiça do Estado do RJ", company: "Administração", location: "Rio de Janeiro | RJ", salary: "R$ 1.000,00 + Benefícios", href: "#" },
    { area: "Saúde", source: "CENPRE", modality: "Estágio não obrigatório", title: "Hospital Universitário Pedro Ernesto", company: "Saúde", location: "Rio de Janeiro | RJ", salary: "R$ 900,00 + Benefícios", href: "#" },
  ],

  depoimentos: [
    { name: "Rafael de Almeida", course: "Administração", quote: "Consegui o estágio em menos de um mês. O suporte na documentação fez toda a diferença." },
    { name: "Andressa Benevenutto", course: "Direito", quote: "Através do CENPRE, fechei convênio com um escritório de referência na cidade." },
    { name: "Marcos Silva Pereira", course: "Administração", quote: "Fui efetivado antes mesmo de terminar o curso, com segurança para negociar." },
  ],

  motivos: [
    { icon: <ClockIcon size={22} />, title: "Acompanhamento em cada etapa", description: "Do cadastro à efetivação, com orientação e gestão de documentos." },
    { icon: <ShieldCheckIcon size={22} />, title: "Processos seguros", description: "Convênios, TCE e documentação com respaldo da Lei 11.788/2008." },
    { icon: <UsersIcon size={22} />, title: "Rede de parceiros", description: "Centrais de estágio e empresas conveniadas por todo o estado." },
  ],

  noticias: [
    { author: "André Pacheco", date: "19 nov 2024", title: "Ciclo de Estudo PCL 2024.2", excerpt: "O ciclo reuniu estudantes de diferentes cursos em encontros voltados ao desenvolvimento acadêmico.", tags: ["Estudo", "UCAM"], href: "#" },
    { author: "Equipe CENPRE", date: "05 mar 2025", title: "5 erros comuns no currículo que afastam recrutadores", excerpt: "Identifique os deslizes mais frequentes e saiba como corrigir antes da próxima candidatura.", tags: ["Currículo", "Carreira"], href: "#" },
    { author: "Equipe CENPRE", date: "18 fev 2025", title: "Estágio obrigatório x não obrigatório", excerpt: "Carga horária, bolsa-auxílio e documentação têm regras diferentes entre as modalidades.", tags: ["Estágio", "Orientação"], href: "#" },
  ],

  faq: [
    { question: "Como minha empresa pode firmar um convênio com a UCAM?", answer: "O convênio é opcional. Basta preencher o cadastro de convênio e nossa equipe acompanha a formalização." },
    { question: "Como publicar vagas de estágio na plataforma CENPRE?", answer: "Após o cadastro, sua empresa publica vagas, recebe currículos e conduz a seleção pela própria plataforma." },
    { question: "Quais são as obrigações da empresa no contrato de estágio?", answer: "Bolsa-auxílio e auxílio-transporte, seguro contra acidentes e a avaliação semestral do estagiário, conforme a Lei 11.788/2008." },
  ],

  contato: {
    emailGeral: "atendimento.cenpre@ucam-campos.br",
    emailConvenio: "convenio.estagio@ucam-campos.br",
    telefone: "(22) 2726-2419",
    whatsapp: "(22) 99618-0786",
  },
};
