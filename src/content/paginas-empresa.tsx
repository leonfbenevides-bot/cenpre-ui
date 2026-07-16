import type { ConveniadasContent, CadastroConvenioContent, ParceiroContent } from "./types";

/** Subpágina Empresa — Empresas conveniadas (listagem em construção). */
export const conveniadas: ConveniadasContent = {
  hero: {
    title: "Empresas conveniadas",
    subtitle: "Consulte as empresas parceiras da UCAM ou indique uma nova empresa para convênio com o CENPRE.",
    breadcrumb: ["Empresa", "Convênios"],
  },
  aviso: {
    title: "Lista em construção",
    text: "A planilha completa das empresas conveniadas está sendo integrada à plataforma e estará disponível em breve com filtros por área de atuação, cidade e tipo de vaga.",
  },
  indicacao: {
    title: "Quer indicar uma empresa?",
    text: "Entre em contato direto com nossa equipe de convênios:",
  },
};

/** Subpágina Empresa — Cadastro de Convênio (6 passos). */
export const cadastroConvenio: CadastroConvenioContent = {
  hero: {
    title: "Cadastro de Convênio",
    subtitle: "Formalize o convênio entre sua empresa e o CENPRE em 6 passos simples. Nossa equipe acompanha todo o processo.",
    breadcrumb: ["Empresa", "Cadastro de Convênio"],
  },
  intro: {
    title: "Como funciona o cadastro",
    description: "É passo a passo para formalizar o convênio entre sua empresa e a UCAM.",
  },
  passos: [
    { title: "Cadastramento da empresa", description: "Realize o cadastro na Plataforma CENPRE Carreiras. Nosso time confere as informações preenchidas e libera o acesso." },
    { title: "Solicitação do Convênio de Estágio", description: "Na aba \"Estágio\", clique em \"Módulo de Estágio\" → \"Convênio\" → \"Novo Convênio\". Selecione o Responsável Legal e, em \"Campus\", a Universidade Candido Mendes. A vigência pode ser indeterminada." },
    { title: "Assinatura digital", description: "Após salvar, clique nos três pontinhos ao lado da vigência do convênio e selecione \"Assinar\". Informe o CPF do Responsável Legal e valide com o token enviado por e-mail." },
    { title: "Confirmação da assinatura", description: "Com CPF e senha cadastrados, finalize a assinatura digital do Responsável Legal indicado no contrato social ou atualizado na Receita." },
    { title: "Homologação em até 5 dias úteis", description: "Após a assinatura da empresa, a equipe do CENPRE homologa o convênio dentro deste prazo." },
    { title: "Empresa liberada para publicar vagas", description: "Com o convênio homologado, sua empresa já pode cadastrar vagas e acessar currículos na plataforma." },
  ],
  duvidas: { title: "Dúvidas? Fale com a equipe de convênios" },
};

/** Subpágina Empresa — Por que ser parceiro do CENPRE. */
export const parceiro: ParceiroContent = {
  hero: {
    title: "Por que ser parceiro do CENPRE?",
    subtitle: "Conecte sua empresa aos melhores talentos da UCAM. Acesso a currículos, suporte completo na formalização de estágios e fortalecimento da sua marca empregadora.",
    breadcrumb: ["Empresa", "Por que ser parceiro?"],
  },
  intro: {
    eyebrow: "Parcerias CENPRE",
    title: "Benefícios de ser empresa parceira",
    description: "O convênio com o CENPRE/UCAM vai além da contratação de estagiários — é uma parceria estratégica que aproxima sua empresa de um ecossistema acadêmico ativo, com mais de 20 anos de experiência em empregabilidade.",
  },
  beneficios: [
    { title: "Captação de talentos qualificados", description: "Acesso facilitado a estudantes e egressos qualificados nas áreas de Saúde, Direito, Engenharia, Gestão e Humanidades." },
    { title: "Suporte e facilidade na formalização", description: "O CENPRE cuida de toda a documentação do estágio: TCE, plano de atividades, relatórios e renovações." },
    { title: "Cumprimento da responsabilidade social", description: "Contribua diretamente com a formação de jovens profissionais e com o desenvolvimento da região." },
    { title: "Fortalecimento da marca empregadora", description: "Sua empresa em evidência na Plataforma CENPRE, vista por milhares de alunos e egressos conectados." },
    { title: "Projetos conjuntos com a universidade", description: "Possibilidade de eventos acadêmicos, cursos, treinamentos e parcerias em conjunto com a rede UCAM." },
    { title: "Aproximação com profissionais especializados", description: "Contato direto com professores e coordenadores de curso para capacitação e desenvolvimento de talentos." },
  ],
};
