import { Header } from "../components/Header";
import { HeroBanner } from "../components/HeroBanner";
import { Carousel } from "../components/Carousel";
import { PlatformCTA } from "../components/PlatformCTA";
import { Footer } from "../components/Footer";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { IconChip } from "../components/IconChip";
import { FeatureCard } from "../components/FeatureCard";
import { JobCard } from "../components/JobCard";
import { NewsCard } from "../components/NewsCard";
import { AccordionList } from "../components/Accordion";
import { SectionHeading } from "../components/SectionHeading";
import {
  BriefcaseIcon, BuildingIcon, UsersIcon, ShieldCheckIcon, GraduationCapIcon,
  FileTextIcon, SparklesIcon, ArrowRightIcon, ClockIcon,
} from "../components/Icons";
import type { ReactNode } from "react";
import heroOffice from "../assets/hero-office.jpg";
import platformIllustration from "../assets/platform-illustration.png";

const Brand = (
  <span className="flex items-center gap-2">
    <span className="grid h-7 w-7 place-items-center rounded-[7px] bg-magenta-700 text-xs font-extrabold text-white">C</span>
    <span className="flex flex-col leading-none">
      <span className="text-magenta-800">CENPRE</span>
      <span className="text-[10px] font-medium text-charcoal-100">Centro de Práticas Empresariais</span>
    </span>
  </span>
);

const nav = [
  { label: "Início", href: "#" }, { label: "Alunos e Egressos", href: "#" },
  { label: "Empresa", href: "#" }, { label: "Vagas", href: "#" }, { label: "Conteúdos", href: "#" },
];

const kpis = [
  { icon: <ShieldCheckIcon size={22} />, title: "Desde 2001", description: "Mais de 20 anos de atuação em carreiras e empregabilidade na UCAM." },
  { icon: <BuildingIcon size={22} />, title: "+ de 600 empresas", description: "Rede de instituições que oferecem estágio e emprego aos nossos alunos." },
  { icon: <UsersIcon size={22} />, title: "Milhares de alunos", description: "Estudantes e egressos conectados ao mercado de trabalho." },
  { icon: <BriefcaseIcon size={22} />, title: "Plataforma própria", description: "Vagas, convênios e conteúdos reunidos em um só ambiente digital." },
];

const topics: { icon: ReactNode; title: string; description: string; cta: string }[] = [
  { icon: <GraduationCapIcon size={22} />, title: "Orientações de estágio", description: "Estágio obrigatório e não obrigatório, documentos, certificados e prazos e orientações por curso.", cta: "Saiba mais" },
  { icon: <BriefcaseIcon size={22} />, title: "Vagas e oportunidades", description: "Acesso a vagas, estágios, empregos e oportunidades por meio da plataforma CENPRE e parceiros.", cta: "Saiba mais" },
  { icon: <FileTextIcon size={22} />, title: "Currículo e carreira", description: "Cadastro, orientação profissional e atualização na criação de currículo para novas oportunidades.", cta: "Saiba mais" },
  { icon: <SparklesIcon size={22} />, title: "Ainda com dúvidas?", description: "Nossa equipe está pronta para te ajudar em qualquer etapa do processo.", cta: "Fale com a gente" },
];

const jobs = [
  { area: "Marketing", source: "CENPRE", modality: "Estágio não obrigatório", title: "CRD — Centro de Referência Digital", company: "Marketing", location: "Rio de Janeiro | RJ", salary: "R$ 1.000,00 + Benefícios" },
  { area: "Administração", source: "CENPRE", modality: "Estágio obrigatório", title: "Tribunal de Justiça do Estado do RJ", company: "Administração", location: "Rio de Janeiro | RJ", salary: "R$ 1.000,00 + Benefícios" },
  { area: "Saúde", source: "CENPRE", modality: "Estágio não obrigatório", title: "Hospital Universitário Pedro Ernesto", company: "Saúde", location: "Rio de Janeiro | RJ", salary: "R$ 900,00 + Benefícios" },
];

const features = [
  { icon: <ClockIcon size={22} />, title: "Acompanhamento em cada etapa", description: "Do cadastro à efetivação, com orientação e gestão de documentos." },
  { icon: <ShieldCheckIcon size={22} />, title: "Processos seguros", description: "Convênios, TCE e documentação com respaldo da Lei 11.788/2008." },
  { icon: <UsersIcon size={22} />, title: "Rede de parceiros", description: "Centrais de estágio e empresas conveniadas por todo o estado." },
];

const news = [
  { author: "André Pacheco", date: "19 nov 2024", title: "Ciclo de Estudo PCL 2024.2", excerpt: "O ciclo reuniu estudantes de diferentes cursos em encontros voltados ao desenvolvimento acadêmico.", tags: ["Estudo", "UCAM"] },
  { author: "Equipe CENPRE", date: "05 mar 2025", title: "5 erros comuns no currículo que afastam recrutadores", excerpt: "Identifique os deslizes mais frequentes e saiba como corrigir antes da próxima candidatura.", tags: ["Currículo", "Carreira"] },
  { author: "Equipe CENPRE", date: "18 fev 2025", title: "Estágio obrigatório x não obrigatório", excerpt: "Carga horária, bolsa-auxílio e documentação têm regras diferentes entre as modalidades.", tags: ["Estágio", "Orientação"] },
];

const faq = [
  { question: "Como minha empresa pode firmar um convênio com a UCAM?", answer: "O convênio é opcional. Basta preencher o cadastro de convênio e nossa equipe acompanha a formalização." },
  { question: "Como publicar vagas de estágio na plataforma CENPRE?", answer: "Após o cadastro, sua empresa publica vagas, recebe currículos e conduz a seleção pela própria plataforma." },
  { question: "Quais são as obrigações da empresa no contrato de estágio?", answer: "Bolsa-auxílio e auxílio-transporte, seguro contra acidentes e a avaliação semestral do estagiário, conforme a Lei 11.788/2008." },
];

function TopicCard({ icon, title, description, cta }: { icon: ReactNode; title: string; description: string; cta: string }) {
  return (
    <Card interactive className="flex flex-col gap-3">
      <IconChip>{icon}</IconChip>
      <h3 className="text-base font-semibold text-charcoal-500">{title}</h3>
      <p className="flex-1 text-[13px] leading-relaxed text-charcoal-400">{description}</p>
      <a href="#" className="inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800">
        {cta} <ArrowRightIcon size={15} />
      </a>
    </Card>
  );
}

function Testimonial({ name, course, quote }: { name: string; course: string; quote: string }) {
  return (
    <div className="flex h-full flex-col gap-4 rounded-card border border-ash-300 bg-white p-7 shadow-card">
      <p className="text-[15px] leading-relaxed text-charcoal-400">“{quote}”</p>
      <div className="mt-auto flex items-center gap-3">
        <span className="grid h-11 w-11 place-items-center rounded-full bg-magenta-100 text-sm font-bold text-magenta-700">
          {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
        </span>
        <span className="text-sm">
          <span className="block font-semibold text-charcoal-500">{name}</span>
          <span className="text-charcoal-100">{course}</span>
        </span>
      </div>
    </div>
  );
}

/**
 * Página "Template - Unidade" (home do produto) montada a partir da lib CENPRE UI,
 * espelhando o Figma: Header · HeroBanner · KPIs · [conteúdo] · PlatformCTA · Footer.
 */
export function TemplateUnidade() {
  return (
    <div className="bg-white">
      <Header brand={Brand} navItems={nav} ctaLabel="Acessar plataforma" />

      <main>
        <section className="mx-auto max-w-container px-6 py-10 md:px-[72px]">
          <Carousel
            ariaLabel="Destaques"
            slides={[
              <HeroBanner
                image={heroOffice}
                brand={Brand}
                title="Conectando você ao seu futuro profissional."
                description="O CENPRE reúne oportunidades, orientações de estágio, documentos, convênios e conteúdos para aproximar alunos, egressos e empresas do mercado de trabalho."
                actions={
                  <>
                    <Button className="bg-white text-magenta-900 hover:bg-ash-100">Tenho interesse!</Button>
                    <Button variant="ghost" className="border border-white/45 text-white hover:bg-white/10 hover:text-white">Saber mais</Button>
                  </>
                }
              />,
            ]}
          />
        </section>

        {/* KPIs */}
        <section className="mx-auto max-w-content px-6 py-14 md:px-[72px]">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {kpis.map((k) => <FeatureCard key={k.title} icon={k.icon} title={k.title} description={k.description} />)}
          </div>
        </section>

        {/* Como conectamos */}
        <section className="mx-auto max-w-content px-6 py-14 md:px-[72px]">
          <SectionHeading align="center" className="mx-auto" eyebrow="Entenda o impacto"
            title="Entenda como conectamos talentos e oportunidades"
            subtitle="Uma jornada integrada entre alunos, egressos e empresas por meio de estágios, vagas, convênios e suporte." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t) => <TopicCard key={t.title} {...t} />)}
          </div>
        </section>

        {/* Painel de vagas */}
        <section className="bg-ash-100 py-16">
          <div className="mx-auto max-w-content px-6 md:px-[72px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Oportunidades" title="Painel de vagas"
                subtitle="Estágios e empregos do CENPRE e de centrais parceiras." />
              <Button variant="secondary" asChild><a href="#">Ver todas as vagas</a></Button>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {jobs.map((j) => <JobCard key={j.title} {...j} actionLabel="Tenho interesse" href="#" />)}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mx-auto max-w-content px-6 py-16 md:px-[72px]">
          <SectionHeading eyebrow="Depoimentos" title="Histórias de quem já passou pelo CENPRE" />
          <div className="mt-8">
            <Carousel ariaLabel="Depoimentos" slides={[
              <div className="grid gap-5 md:grid-cols-3">
                <Testimonial name="Rafael de Almeida" course="Administração" quote="Consegui o estágio em menos de um mês. O suporte na documentação fez toda a diferença." />
                <Testimonial name="Andressa Benevenutto" course="Direito" quote="Através do CENPRE, fechei convênio com um escritório de referência na cidade." />
                <Testimonial name="Marcos Silva Pereira" course="Administração" quote="Fui efetivado antes mesmo de terminar o curso, com segurança para negociar." />
              </div>,
            ]} />
          </div>
        </section>

        {/* Por que escolher o CENPRE */}
        <section className="bg-ash-100 py-16">
          <div className="mx-auto max-w-content px-6 md:px-[72px]">
            <SectionHeading align="center" className="mx-auto" eyebrow="Por que o CENPRE"
              title="Motivos para escolher o CENPRE" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {features.map((f) => <FeatureCard key={f.title} {...f} />)}
            </div>
          </div>
        </section>

        {/* Últimas notícias */}
        <section className="mx-auto max-w-content px-6 py-16 md:px-[72px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Conteúdos" title="Últimas notícias" />
            <Button variant="secondary" asChild><a href="#">Ver todos</a></Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {news.map((n) => <NewsCard key={n.title} {...n} href="#" />)}
          </div>
        </section>

        {/* FAQ geral */}
        <section className="mx-auto max-w-prose px-6 py-16">
          <SectionHeading align="center" className="mx-auto mb-8" eyebrow="Dúvidas" title="Perguntas frequentes sobre o CENPRE" />
          <AccordionList items={faq} />
        </section>

        {/* CTA - Plataforma CENPRE */}
        <section className="mx-auto max-w-container px-6 py-10 md:px-[72px]">
          <PlatformCTA
            title="Mais do que uma plataforma completa, nós acompanhamos todas as etapas."
            primaryLabel="Acessar a plataforma" secondaryLabel="Fale conosco" trust="Processos 100% seguros"
            media={<img src={platformIllustration} alt="Plataforma CENPRE — painel de oportunidades" className="pointer-events-none absolute right-0 top-6 w-[112%] max-w-none" />}
          />
        </section>
      </main>

      <Footer
        brand={<span className="text-lg font-bold text-white">CENPRE</span>}
        columns={[
          { title: "Aluno / Egresso", links: [{ label: "Estágio", href: "#" }, { label: "Currículo", href: "#" }, { label: "Vagas e oportunidades", href: "#" }, { label: "Convênios", href: "#" }] },
          { title: "Empresa", links: [{ label: "Por que ser parceiro", href: "#" }, { label: "Cadastro de convênio", href: "#" }, { label: "Empresas conveniadas", href: "#" }, { label: "Perguntas de empresas", href: "#" }] },
          { title: "Institucional", links: [{ label: "Sobre nós", href: "#" }, { label: "Biblioteca de conteúdos", href: "#" }, { label: "Perguntas frequentes", href: "#" }, { label: "Plataforma CENPRE", href: "#" }] },
        ]}
        contact={<>atendimento.cenpre@ucam-campos.br<br /><br /><span className="text-ash-600">Equipe de convênio</span><br />convenio.estagio@ucam-campos.br<br />(22) 2726-2419 · WhatsApp (22) 99618-0786</>}
        legal="© 2026 CENPRE Carreiras · Universidade Candido Mendes. Todos os direitos reservados."
      />
    </div>
  );
}
