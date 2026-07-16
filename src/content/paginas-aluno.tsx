import {
  GraduationCapIcon, BriefcaseIcon, FileTextIcon, ClipboardListIcon, ClockIcon, CheckIcon,
} from "../components/Icons";
import type { OrientacoesContent, CurriculoContent } from "./types";

/** Subpágina Aluno — Orientações de Estágio (copy do Figma UCAM SITE). */
export const orientacoes: OrientacoesContent = {
  hero: {
    title: "Orientações de Estágio",
    subtitle: "Tudo o que você precisa saber sobre estágio obrigatório, não obrigatório e os documentos necessários em cada etapa.",
    breadcrumb: ["Alunos e Egressos", "Orientações de Estágio"],
  },

  lei: {
    label: "Lei Nº 11.788/2008",
    text: "Lei do Estágio: define direitos e deveres do estagiário, da empresa e da instituição de ensino.",
  },

  escolas: [
    { icon: <GraduationCapIcon size={20} />, nome: "Escola de Saúde", cursos: "Biomedicina · Educação Física · Estética e Cosmética · Fisioterapia · Nutrição", badge: "Em produção", href: "#" },
    { icon: <FileTextIcon size={20} />, nome: "Escola de Educação e Humanidades", cursos: "Pedagogia · Letras · Psicologia · História · Geografia · Filosofia", badge: "Em produção", href: "#" },
    { icon: <BriefcaseIcon size={20} />, nome: "Escola de Gestão", cursos: "Administração · Ciências Contábeis · Ciências Econômicas · Recursos Humanos", badge: "Em produção", href: "#" },
    { icon: <ClipboardListIcon size={20} />, nome: "Escola de Engenharia e Tecnologia", cursos: "Engenharia Civil · Engenharia de Produção · Sistemas de Informação · Análise e Desenvolvimento", badge: "Em produção", href: "#" },
    { icon: <GraduationCapIcon size={20} />, nome: "Escola Jurídica", cursos: "Direito", badge: "Em produção", href: "#" },
  ],

  etapas: [
    {
      label: "Início",
      icon: <ClipboardListIcon size={18} />,
      items: [
        "Manual do estágio",
        "Emissão do Termo de Compromisso (TCE)",
        "Cadastro do TCE (modelo externo)",
        "Declaração de matrícula",
        "Plano de atividades aprovado",
      ],
    },
    {
      label: "Durante",
      icon: <ClockIcon size={18} />,
      items: ["Emissão de termo aditivo (alterações)", "Relatório de acompanhamento semestral"],
    },
    {
      label: "Encerramento",
      icon: <CheckIcon size={18} />,
      items: ["Emissão de termo de rescisão", "Avaliação final do estágio"],
    },
  ],
};

/** Subpágina Aluno — Currículo (fluxos da Plataforma CENPRE/Symplicity). */
export const curriculo: CurriculoContent = {
  hero: {
    title: "Currículo",
    subtitle: "Cadastre ou atualize seu currículo na Plataforma CENPRE. Candidate-se a apenas alguns cliques das melhores vagas de estágio e emprego.",
    breadcrumb: ["Alunos e Egressos", "Currículo"],
  },

  intro: {
    eyebrow: "Currículo e carreira",
    title: "Escolha como quer começar",
    description: "Se já tem um currículo pronto, basta fazer o upload. Se ainda não tem, a própria plataforma permite criar um do zero em poucos minutos.",
  },

  caminhos: [
    {
      badge: "Upload do arquivo",
      title: "Já tenho currículo",
      steps: [
        "Na página inicial da Plataforma, clique em \"Adicionar um Currículo\".",
        "Clique em \"Meus documentos\" e depois em \"Adicionar Novo\".",
        "No campo \"Etiqueta\", dê um nome ao arquivo (sugestão: seu nome + CV).",
        "Escolha o tipo de documento \"Currículo\", selecione o arquivo e clique em \"Enviar\".",
        "Opcional: marque \"Visível às empresas\" para aparecer nas buscas de recrutadores.",
        "Seu currículo ficará disponível em \"Meus documentos\".",
      ],
    },
    {
      badge: "Criação na plataforma",
      title: "Não tenho currículo",
      steps: [
        "Na página inicial da Plataforma, clique em \"Adicionar um Currículo\".",
        "Clique em \"Criar do zero\" e depois em \"Salvar e Continuar\".",
        "Em \"Personalizar suas seções\", escolha o que seu currículo vai mostrar.",
        "Preencha cada seção: formação, experiências, habilidades e idiomas.",
        "Revise o layout no botão \"Visualizar PDF\" e ajuste o que for preciso.",
        "Ao finalizar, o documento é salvo em \"Meus documentos\" e já pode ser usado em candidaturas.",
      ],
    },
  ],

  dicas: {
    title: "Dicas para um bom currículo",
    items: [
      "Inclua objetivo profissional claro e direto.",
      "Liste experiências em ordem cronológica inversa (mais recente primeiro).",
      "Mostre habilidades técnicas e idiomas com nível de proficiência.",
      "Evite incluir foto, CPF, RG ou endereço completo.",
      "Mantenha o arquivo em formato PDF e até 2 páginas.",
    ],
  },
};
