import {
  Header,
  Footer,
  PageHero,
  Button,
  Tag,
  Input,
  Textarea,
  FeatureCard,
  StepCard,
  DocCard,
  JobCard,
  AccordionList,
  TabsPills,
  Pagination,
  LogoBand,
  ContactForm,
  PlatformCTA,
  Icons,
} from "./index";
import { useState } from "react";

/** Sub-cabeçalho de cada bloco do showcase. */
function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6 border-t border-ash-200 py-12">
      <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-magenta-700">{title}</h2>
      {children}
    </section>
  );
}

export function App() {
  const [page, setPage] = useState(1);

  const navItems = [
    { label: "Início", href: "#" },
    { label: "Estágio", href: "#" },
    { label: "Currículo", href: "#" },
    { label: "Vagas", href: "#" },
    { label: "Conteúdos", href: "#" },
  ];

  const faq = [
    {
      question: "Quem pode realizar estágio não obrigatório?",
      answer:
        "Estudantes regularmente matriculados na UCAM, com matrícula ativa e frequência regular. Cursos da área da Saúde a partir do 2º período; demais cursos a partir do 1º período.",
    },
    {
      question: "Como formalizar o meu estágio?",
      answer:
        "Pela celebração do Termo de Compromisso de Estágio (TCE), assinado pelo estudante, pela empresa concedente e pela UCAM/CENPRE.",
    },
    {
      question: "Quais são os meus direitos como estagiário?",
      answer:
        "No estágio não obrigatório: bolsa-auxílio e auxílio-transporte, jornada de até 6h diárias e 30h semanais, redução em dias de prova e recesso de 30 dias em estágios de 1 ano ou mais.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header
        brand={<span>CENPRE</span>}
        navItems={navItems}
        ctaLabel="Acessar plataforma"
        ctaHref="https://ucam-csm.symplicity.com"
      />

      <PageHero
        eyebrow="Design System"
        title="CENPRE UI — Biblioteca de componentes"
        subtitle="React + TypeScript + Tailwind. Tokens, primitivos e blocos prontos para o handoff de desenvolvimento."
        actions={
          <>
            <Button variant="secondary" className="bg-white text-magenta-800">Ver no Figma</Button>
            <Button className="bg-white/15 hover:bg-white/25">Documentação</Button>
          </>
        }
      />

      <main className="mx-auto max-w-content px-6 md:px-gutter">
        <Group title="Botões">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Primário</Button>
            <Button variant="secondary">Secundário</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button disabled>Desabilitado</Button>
            <Button size="sm">Small</Button>
            <Button size="lg" rightIcon={<Icons.ArrowRightIcon size={18} />}>Large</Button>
          </div>
        </Group>

        <Group title="Tags">
          <div className="flex flex-wrap items-center gap-2">
            <Tag>Marketing</Tag>
            <Tag tone="brand">CENPRE</Tag>
            <Tag tone="accent">NUBE</Tag>
            <Tag tone="neutral">Estágio</Tag>
          </div>
        </Group>

        <Group title="Formulário">
          <div className="grid max-w-xl gap-4">
            <Input label="Nome da Empresa" placeholder="Digite o nome da empresa" />
            <Input label="Email" type="email" placeholder="seu@email.com" hint="Usaremos para retornar o contato." />
            <Input label="Com erro" error="Campo obrigatório" placeholder="..." />
            <Textarea label="Mensagem" placeholder="Escreva a sua mensagem..." />
          </div>
        </Group>

        <Group title="Cards de destaque (módulos / números)">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard icon={<Icons.BriefcaseIcon />} title="Vagas e oportunidades" description="Estágios e empregos do CENPRE e de parceiros." />
            <FeatureCard icon={<Icons.BuildingIcon />} title="+ de 600 empresas parceiras" description="Rede de instituições que oferecem estágio e emprego." />
            <FeatureCard icon={<Icons.CheckIcon />} title="Suporte em todas as etapas" description="Do cadastro à efetivação, com orientação e gestão de documentos." />
          </div>
        </Group>

        <Group title="Passos">
          <div className="grid gap-4 md:grid-cols-3">
            <StepCard number={1} title="Acesse e crie seu perfil" description="Entre na plataforma e complete os seus dados." />
            <StepCard number={2} title="Cadastre seu currículo" description="Envie ou monte o seu no Banco de Currículos." />
            <StepCard number={3} title="Candidate-se às vagas" description="Aplique e acompanhe todo o processo." />
          </div>
        </Group>

        <Group title="Documentos por etapa">
          <div className="grid gap-5 md:grid-cols-3">
            <DocCard label="Início" icon={<Icons.BuildingIcon size={20} />} items={["Manual de estágio", "Emissão do TCE", "Declaração de matrícula", "Plano de atividades"]} />
            <DocCard label="Durante" icon={<Icons.BriefcaseIcon size={20} />} items={["Termo aditivo", "Relatório de acompanhamento"]} />
            <DocCard label="Encerramento" icon={<Icons.CheckIcon size={20} />} items={["Termo de rescisão", "Avaliação final"]} />
          </div>
        </Group>

        <Group title="Cards de vaga">
          <div className="grid gap-5 md:grid-cols-3">
            <JobCard area="Marketing" source="CENPRE" modality="Estágio" title="Assistente de Marketing Digital" company="Tech Solutions" location="Campos dos Goytacazes, RJ" salary="R$ 1.000,00 + Benefícios" />
            <JobCard area="Saúde" source="NUBE" modality="Estágio" title="Estágio em Nutrição" company="Hospital Regional" location="Campos dos Goytacazes, RJ" salary="R$ 900,00 + Benefícios" />
            <JobCard area="Direito" source="CENPRE" modality="Estágio" title="Estágio Jurídico" company="Escritório Menezes" location="Campos dos Goytacazes, RJ" salary="R$ 1.200,00" />
          </div>
          <Pagination page={page} totalPages={10} onPageChange={setPage} />
        </Group>

        <Group title="Tabs">
          <TabsPills
            items={[
              { value: "obrig", label: "Estágio Obrigatório", content: <p className="text-charcoal-400">Parte da matriz curricular, requisito para concluir o curso.</p> },
              { value: "nao", label: "Estágio Não Obrigatório", content: <p className="text-charcoal-400">Atividade opcional que complementa a formação.</p> },
            ]}
          />
        </Group>

        <Group title="Accordion (FAQ)">
          <div className="max-w-3xl">
            <AccordionList items={faq} />
          </div>
        </Group>

        <Group title="Faixa de logos (parceiros)">
          <LogoBand
            items={["CIEE", "NUBE", "Agiel", "ABRE", "CIDE", "IEL", "Universia"].map((name) => ({ name, href: "#" }))}
          />
        </Group>

        <Group title="Formulário de contato">
          <ContactForm
            title="Dúvidas sobre o cadastro?"
            description="A equipe do CENPRE apoia a sua empresa em cada etapa do cadastro e da formalização do convênio."
            contactLines={
              <>
                E-mail: convenio.estagio@ucam-campos.br
                <br />
                Telefone: (22) 2726-2419 · WhatsApp: (22) 99618-0786
              </>
            }
          />
        </Group>

        <Group title="CTA da Plataforma">
          <PlatformCTA
            title="Mais do que uma plataforma completa, nós acompanhamos todas as etapas."
            description="Vagas, currículo, documentos e convênios em um só lugar."
            primaryHref="https://ucam-csm.symplicity.com"
          />
        </Group>
      </main>

      <Footer
        brand="CENPRE"
        contact={
          <>
            atendimento.cenpre@ucam-campos.br
            <br />
            (22) 2726-2419 · WhatsApp (22) 99618-0786
          </>
        }
        columns={[
          { title: "Aluno/Egresso", links: [{ label: "Estágio", href: "#" }, { label: "Currículo", href: "#" }, { label: "Vagas", href: "#" }] },
          { title: "Empresa", links: [{ label: "Por que ser parceiro", href: "#" }, { label: "Cadastro de convênio", href: "#" }] },
          { title: "Institucional", links: [{ label: "Sobre nós", href: "#" }, { label: "Perguntas frequentes", href: "#" }] },
        ]}
        legal="© 2026 CENPRE Carreiras · Universidade Candido Mendes."
      />
    </div>
  );
}
