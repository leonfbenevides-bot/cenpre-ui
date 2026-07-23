import {
  BriefcaseIcon,
  FileTextIcon,
  ClipboardListIcon,
  ClockIcon,
  CheckIcon,
  HandHeartIcon,
  LandmarkIcon,
} from "../components/Icons";
import type { OrientacoesContent, CurriculoContent } from "./types";

/** Subpágina Aluno — Orientações de Estágio (copy do Figma UCAM SITE). */
export const orientacoes: OrientacoesContent = {
  hero: {
    title: "Orientações de Estágio",
    subtitle:
      "Tudo o que você precisa saber sobre estágio obrigatório, não obrigatório e os documentos necessários em cada etapa.",
    breadcrumb: ["Alunos e Egressos", "Orientações de Estágio"],
  },

  lei: {
    label: "Lei Nº 11.788/2008",
    text: "Lei do Estágio: define direitos e deveres do estagiário, da empresa e da instituição de ensino.",
  },

  tiposEstagio: {
    eyebrow: "Tipos de estágio",
    title: "Obrigatório ou não obrigatório?",
    tabs: [
      {
        label: "Estágio Obrigatório",
        text: "O Estágio Obrigatório é aquele definido no projeto pedagógico do curso como requisito para aprovação e obtenção do diploma. Período, carga horária e condições variam por escola e curso — consulte as condicionalidades da sua escola abaixo.",
      },
      {
        label: "Estágio Não Obrigatório",
        text: "O Estágio Não Obrigatório é uma atividade acadêmica opcional para estudantes com matrícula ativa na UCAM, que complementa a formação por meio da vivência prática. Sua formalização é obrigatória e feita pelo Termo de Compromisso de Estágio (TCE), assinado por todas as partes.",
      },
    ],
  },

  // Cursos com estágio obrigatório por área — fonte: levantamento do CENPRE (13/07/2026).
  // Demais cursos de cada área (não listados aqui) não têm estágio obrigatório; o
  // não obrigatório continua fortemente recomendado nesses casos.
  escolas: [
    {
      icon: <HandHeartIcon size={20} />,
      nome: "Área da Saúde",
      cursos: "Biomedicina · Educação Física · Fisioterapia · Nutrição",
      href: "#",
    },
    {
      icon: <FileTextIcon size={20} />,
      nome: "Área de Educação e Humanidades",
      cursos:
        "Pedagogia · Letras – Inglês · Letras – Português · História · Jornalismo · Serviço Social",
      href: "#",
    },
    {
      icon: <BriefcaseIcon size={20} />,
      nome: "Área de Gestão",
      cursos: "Administração · Ciências Contábeis",
      href: "#",
    },
    {
      icon: <ClipboardListIcon size={20} />,
      nome: "Área de Engenharia e Tecnologia",
      cursos:
        "Engenharia Civil · Engenharia da Computação · Engenharia de Produção · Engenharia Elétrica · Engenharia Mecânica",
      href: "#",
    },
    {
      icon: <LandmarkIcon size={20} />,
      nome: "Área Jurídica",
      cursos: "Direito (a partir do 7º período, nos Núcleos de Práticas Jurídicas ou no FUCAM)",
      href: "#",
    },
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

  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Estágio não obrigatório: tudo o que você precisa saber",
    description:
      "Reunimos as respostas para as principais dúvidas da sua jornada de estágio, do começo ao encerramento.",
    grupos: [
      {
        titulo: "Começando o estágio",
        subtitulo: "Quero estagiar. O que preciso saber antes de começar?",
        itens: [
          {
            question: "Quem pode realizar estágio não obrigatório?",
            answer:
              "Estudantes regularmente matriculados na UCAM, com matrícula ativa e frequência regular. Cursos da área da Saúde a partir do 2º período e aprovados em Bioética; demais cursos a partir do 1º período.",
          },
          {
            question: "O estágio precisa estar relacionado ao meu curso?",
            answer:
              "Sim. As atividades devem estar ligadas à sua área de formação. O Plano de Atividades é analisado pelo CENPRE e só são aprovados estágios compatíveis com os objetivos do curso.",
          },
          {
            question: "Posso realizar mais de um estágio ao mesmo tempo?",
            answer:
              "Sim, desde que as jornadas sejam compatíveis entre si e com as atividades acadêmicas. O total não pode ultrapassar 6h diárias e 30h semanais, e os horários não podem coincidir.",
          },
        ],
      },
      {
        titulo: "Formalização do estágio",
        subtitulo: "Como regularizar meu estágio junto à UCAM?",
        itens: [
          {
            question: "De quem é a responsabilidade pela formalização?",
            answer:
              "Do estudante, que deve garantir que toda a documentação seja apresentada e aprovada antes do início das atividades.",
          },
          {
            question: "Como formalizar o estágio não obrigatório?",
            answer:
              "Pela celebração do Termo de Compromisso de Estágio (TCE), assinado pelo estudante, pela empresa concedente e pela UCAM/CENPRE. O estágio só inicia após a aprovação e a assinatura de todas as partes.",
          },
          {
            question: "O que é o Termo de Compromisso de Estágio (TCE)?",
            answer:
              "É o documento que formaliza a relação de estágio (Lei nº 11.788/2008), definindo atividades, jornada, vigência, supervisão e os direitos e deveres das partes. O Plano de Atividades normalmente integra o TCE.",
          },
          {
            question: "Como solicitar a assinatura do TCE?",
            answer:
              'Acesse a Plataforma CENPRE Carreiras e selecione o módulo "Estágio". Você pode emitir o TCE na plataforma ou fazer upload do modelo já assinado pela concedente. A equipe do CENPRE e o Orientador do curso analisam e assinam.',
          },
          {
            question: "Quando o estágio pode iniciar?",
            answer:
              "Após a formalização completa: assinatura do TCE pelas três partes, aprovação do Plano de Atividades e contratação do seguro contra acidentes pessoais pela concedente.",
          },
          {
            question: "É possível formalizar com data retroativa?",
            answer:
              "Em caráter excepcional, sim — desde que solicitado em até 15 dias corridos do início das atividades, com a Declaração de Realização de Atividades assinada e carimbada pela concedente.",
          },
        ],
      },
      {
        titulo: "Direitos e benefícios do estagiário",
        subtitulo: "Quais são meus direitos durante o estágio?",
        itens: [
          {
            question: "O estágio não obrigatório deve ser remunerado?",
            answer:
              "Sim. São obrigatórios bolsa-auxílio e auxílio-transporte (Lei nº 11.788/2008). Os valores são definidos pela concedente e constam no TCE. A lei não prevê estágio não obrigatório sem remuneração.",
          },
          {
            question: "Tenho redução de jornada em dias de prova?",
            answer:
              "Sim. Nos dias de prova a carga horária pode ser reduzida à metade. Basta apresentar o calendário de provas ou uma declaração do período avaliativo à concedente.",
          },
          {
            question: "Tenho direito a recesso?",
            answer:
              "Sim. Em estágios de duração igual ou superior a 1 ano, são assegurados 30 dias de recesso, preferencialmente nas férias escolares. Para durações menores, o recesso é proporcional.",
          },
        ],
      },
      {
        titulo: "Jornada, vigência e renovação",
        subtitulo: "Como funciona a duração do meu estágio?",
        itens: [
          {
            question: "Qual a carga horária máxima?",
            answer: "Até 6 horas diárias e 30 horas semanais para estudantes do ensino superior.",
          },
          {
            question: "Qual o prazo máximo de permanência?",
            answer:
              "Até 2 anos na mesma concedente, consecutivos ou não. O limite não se aplica a estagiários com deficiência.",
          },
          {
            question: "É possível renovar o estágio?",
            answer:
              "Sim, por meio de Termo Aditivo (TA), solicitado antes do fim da vigência. É preciso matrícula ativa, TCE regularizado e a entrega dos Relatórios de Acompanhamento e da Avaliação do período anterior.",
          },
          {
            question: "O que fazer se mudarem as condições do estágio?",
            answer:
              "Qualquer alteração (atividades, jornada, vigência, supervisor, local ou bolsa) deve ser formalizada por Termo Aditivo, assinado pelas três partes. Alterações não formalizadas comprometem a regularidade do estágio.",
          },
        ],
      },
      {
        titulo: "Acompanhamento do estágio",
        subtitulo: "Quais documentos preciso entregar durante o estágio?",
        itens: [
          {
            question: "Preciso apresentar relatórios durante o estágio?",
            answer:
              "Sim. O estudante apresenta o Relatório de Acompanhamento de Estágio no máximo a cada 6 meses; a empresa concedente envia a Avaliação do Estagiário no mesmo período.",
          },
          {
            question: "Como emitir o Relatório de Acompanhamento?",
            answer:
              'Na Plataforma CENPRE Carreiras, módulo "Estágio", preenchendo as informações solicitadas. O manual está na Biblioteca de Conteúdos.',
          },
          {
            question: "Qual a periodicidade de entrega?",
            answer:
              "O Relatório e a Avaliação devem ser entregues pelo menos a cada 6 meses durante toda a vigência e também ao final do estágio.",
          },
        ],
      },
      {
        titulo: "Aproveitamento acadêmico",
        subtitulo: "Como aproveitar meu estágio para fins acadêmicos?",
        itens: [
          {
            question: "Posso aproveitar como estágio obrigatório?",
            answer:
              "Em alguns cursos, sim. Depende da análise da Coordenação de Estágio e do atendimento aos requisitos do Projeto Pedagógico do Curso. Consulte o CENPRE.",
          },
          {
            question: "Posso validar como Horas PAC?",
            answer:
              "Sim, conforme as regras do curso. Abra o requerimento no Portal do Aluno anexando o TCE e o Termo de Realização de Estágio (TRE).",
          },
        ],
      },
      {
        titulo: "Encerramento do estágio",
        subtitulo: "Meu estágio terminou. O que devo fazer?",
        itens: [
          {
            question: "O estágio pode ser encerrado antes do término?",
            answer:
              "Sim, por iniciativa do estudante, da concedente ou por situações como conclusão/trancamento do curso, perda da matrícula ou descumprimento do TCE. O encerramento é formalizado junto ao CENPRE.",
          },
          {
            question: "Como formalizar o encerramento antecipado?",
            answer:
              'Pela emissão do Termo de Distrato na Plataforma CENPRE Carreiras (módulo "Estágio"). O estudante ainda entrega o último Relatório e solicita à concedente a Avaliação e o Termo de Realização de Estágio (TRE).',
          },
          {
            question: "O estágio finalizou no prazo, o que fazer?",
            answer:
              "Na finalização da data prevista no TCE/TA não há Termo de Distrato. Basta a última entrega do Relatório de Acompanhamento e a Avaliação do Estagiário pela concedente.",
          },
          {
            question: "O que é o Termo de Realização de Estágio (TRE)?",
            answer:
              "Documento emitido pela concedente que comprova a realização do estágio (período, atividades e carga horária). Guarde-o: pode ser exigido para fins acadêmicos, profissionais e Horas PAC.",
          },
        ],
      },
    ],
  },
};

/** Subpágina Aluno — Currículo (fluxos da Plataforma CENPRE/Symplicity). */
export const curriculo: CurriculoContent = {
  hero: {
    title: "Currículo",
    subtitle:
      "Cadastre ou atualize seu currículo na Plataforma CENPRE. Candidate-se a apenas alguns cliques das melhores vagas de estágio e emprego.",
    breadcrumb: ["Alunos e Egressos", "Currículo"],
  },

  intro: {
    eyebrow: "Currículo e carreira",
    title: "Escolha como quer começar",
    description:
      "Se já tem um currículo pronto, basta fazer o upload. Se ainda não tem, a própria plataforma permite criar um do zero em poucos minutos.",
  },

  dica: "Dica: um currículo atualizado aumenta em até 3x suas chances de ser chamado para entrevista.",

  caminhos: [
    {
      badge: "Upload do arquivo",
      title: "Já tenho currículo",
      steps: [
        'Na página inicial da Plataforma, clique em "Adicionar um Currículo".',
        'Clique em "Meus documentos" e depois em "Adicionar Novo".',
        'No campo "Etiqueta", dê um nome ao arquivo (sugestão: seu nome + CV).',
        'Escolha o tipo de documento "Currículo", selecione o arquivo e clique em "Enviar".',
        'Opcional: marque "Visível às empresas" para aparecer nas buscas de recrutadores.',
        'Seu currículo ficará disponível em "Meus documentos".',
      ],
    },
    {
      badge: "Criação na plataforma",
      title: "Não tenho currículo",
      steps: [
        'Na página inicial da Plataforma, clique em "Adicionar um Currículo".',
        'Clique em "Criar do zero" e depois em "Salvar e Continuar".',
        'Em "Personalizar suas seções", escolha o que seu currículo vai mostrar.',
        "Preencha cada seção: formação, experiências, habilidades e idiomas.",
        'Revise o layout no botão "Visualizar PDF" e ajuste o que for preciso.',
        'Ao finalizar, o documento é salvo em "Meus documentos" e já pode ser usado em candidaturas.',
      ],
    },
  ],

  faq: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas sobre o currículo",
    itens: [
      {
        question: "1 - Posso ter mais de um currículo cadastrado?",
        answer:
          'Sim. Você pode manter vários documentos em "Meus documentos" e escolher qual enviar em cada candidatura.',
      },
      {
        question: "2 - Como edito meu currículo depois de enviado?",
        answer:
          'Acesse "Meus documentos" na Plataforma, selecione o currículo desejado e escolha a opção de editar. As alterações ficam disponíveis imediatamente.',
      },
      {
        question: "3 - O que é o livro de currículos?",
        answer:
          "É um banco de currículos visível para empresas parceiras da UCAM. Aderir aumenta suas chances de ser encontrado para vagas de estágio e emprego.",
      },
    ],
  },

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
