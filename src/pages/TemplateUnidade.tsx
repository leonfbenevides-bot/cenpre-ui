import { Header } from "../components/Header";
import { HeroBanner } from "../components/HeroBanner";
import { Carousel } from "../components/Carousel";
import { PlatformCTA } from "../components/PlatformCTA";
import { Button } from "../components/Button";
import { FeatureCard } from "../components/FeatureCard";
import { JobCard } from "../components/JobCard";
import { NewsCard } from "../components/NewsCard";
import { AccordionList } from "../components/Accordion";
import { SectionHeading } from "../components/SectionHeading";
import { AudienceSwitcher } from "../components/AudienceSwitcher";
import { FileTextIcon, SearchIcon, UsersIcon, BuildingIcon } from "../components/Icons";
import type { UnidadeContent } from "../content/types";
import { Brand, BrandOnDark, nav, rotas, TopicCard, SiteFooter } from "./shared";
import platformIllustration from "../assets/platform-illustration.png";

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
          <span className="text-charcoal-200">{course}</span>
        </span>
      </div>
    </div>
  );
}

export interface TemplateUnidadeProps {
  /** Conteúdo da unidade (ver `src/content/types.ts`; exemplo em `src/content/campos.tsx`). */
  content: UnidadeContent;
}

/**
 * Página "Template - Unidade" (home do produto) montada a partir da lib CENPRE UI,
 * espelhando o Figma: Header · HeroBanner · KPIs · [conteúdo] · PlatformCTA · Footer.
 *
 * O copy global (títulos de seção) vive aqui; tudo que varia por unidade vem de
 * `content` — uma nova unidade é um novo arquivo em `src/content/`, sem duplicar JSX.
 */
export function TemplateUnidade({ content }: TemplateUnidadeProps) {
  const { hero, numeros, topicos, vagas, depoimentos, motivos, noticias, faq, contato } = content;
  return (
    <div className="bg-white">
      <Header brand={Brand} navItems={nav} ctaLabel="Acessar plataforma" />

      <main>
        <section className="mx-auto max-w-container px-6 py-10 md:px-gutter">
          <Carousel
            ariaLabel="Destaques"
            slides={[
              <HeroBanner
                as="h1"
                image={hero.image}
                brand={BrandOnDark}
                title={hero.title}
                description={hero.description}
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

        {/* O CENPRE em números */}
        <section className="mx-auto max-w-content px-6 py-14 md:px-gutter">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow={numeros.eyebrow} title={numeros.title} className="max-w-xl" />
            <div className="flex flex-wrap gap-3">
              <Button variant="secondary" className="border-magenta-200 bg-magenta-100 text-magenta-700 hover:bg-magenta-200" leftIcon={<FileTextIcon size={16} />}>
                {numeros.primaryLabel}
              </Button>
              <Button variant="secondary" leftIcon={<SearchIcon size={16} />}>{numeros.secondaryLabel}</Button>
            </div>
          </div>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {numeros.stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-2xl font-semibold text-magenta-700 md:text-3xl">{s.value}</p>
                <p className="mt-1.5 text-sm text-charcoal-300">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Como conectamos */}
        <section className="mx-auto max-w-content px-6 py-14 md:px-gutter">
          <SectionHeading align="center" className="mx-auto" eyebrow="Entenda o impacto"
            title="Entenda como conectamos talentos e oportunidades"
            subtitle="Uma jornada integrada entre alunos, egressos e empresas por meio de estágios, vagas, convênios e suporte." />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {topicos.map((t) => <TopicCard key={t.title} {...t} />)}
          </div>
        </section>

        {/* Painel de vagas */}
        <section className="bg-ash-100 py-16">
          <div className="mx-auto max-w-content px-6 md:px-gutter">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Oportunidades" title="Painel de vagas"
                subtitle="Estágios e empregos do CENPRE e de centrais parceiras." />
              <Button variant="secondary" asChild><a href={rotas.vagas}>Ver todas as vagas</a></Button>
            </div>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {vagas.map((j) => <JobCard key={j.title} {...j} actionLabel="Tenho interesse" />)}
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section className="mx-auto max-w-content px-6 py-16 md:px-gutter">
          <SectionHeading eyebrow="Depoimentos" title="Histórias de quem já passou pelo CENPRE" />
          <div className="mt-8">
            <Carousel ariaLabel="Depoimentos" slides={[
              <div className="grid gap-5 md:grid-cols-3">
                {depoimentos.map((d) => <Testimonial key={d.name} {...d} />)}
              </div>,
            ]} />
          </div>
        </section>

        {/* Por que escolher o CENPRE */}
        <section className="bg-ash-100 py-16">
          <div className="mx-auto max-w-content px-6 md:px-gutter">
            <SectionHeading align="center" className="mx-auto" eyebrow="Por que o CENPRE"
              title="Motivos para escolher o CENPRE" />
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {motivos.map((f) => <FeatureCard key={f.title} {...f} />)}
            </div>
          </div>
        </section>

        {/* Últimas notícias */}
        <section className="mx-auto max-w-content px-6 py-16 md:px-gutter">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Conteúdos" title="Últimas notícias" />
            <Button variant="secondary" asChild><a href={rotas.conteudos}>Ver todos</a></Button>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {noticias.map((n) => <NewsCard key={n.title} {...n} />)}
          </div>
        </section>

        {/* FAQ geral */}
        <section className="mx-auto max-w-prose px-6 py-16">
          <SectionHeading align="center" className="mx-auto mb-8" eyebrow="Dúvidas" title="Perguntas frequentes sobre o CENPRE" />
          <AccordionList items={faq} />
        </section>

        {/* CTA - Plataforma CENPRE */}
        <section className="mx-auto max-w-container px-6 py-10 md:px-gutter">
          <PlatformCTA
            title="Mais do que uma plataforma completa, nós acompanhamos todas as etapas."
            primaryLabel="Acessar a plataforma" secondaryLabel="Fale conosco" trust="Processos 100% seguros"
            media={<img src={platformIllustration} alt="Plataforma CENPRE — painel de oportunidades" className="pointer-events-none absolute right-0 top-6 w-[112%] max-w-none" />}
          />
        </section>
      </main>

      <SiteFooter contato={contato} />

      <AudienceSwitcher
        value="aluno"
        options={[
          { value: "aluno", label: "Sou um aluno ou Egresso", icon: <UsersIcon size={16} />, href: "#" },
          { value: "empresa", label: "Sou uma empresa", icon: <BuildingIcon size={16} />, href: "#" },
        ]}
      />
    </div>
  );
}
