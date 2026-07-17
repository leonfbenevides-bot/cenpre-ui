import { PageHero } from "../components/PageHero";
import { DocCard } from "../components/DocCard";
import { Tag } from "../components/Tag";
import { Card } from "../components/Card";
import { TabsPills } from "../components/Tabs";
import { AccordionList } from "../components/Accordion";
import { SectionHeading } from "../components/SectionHeading";
import { FileTextIcon } from "../components/Icons";
import type { OrientacoesContent } from "../content/types";
import { PageShell, Breadcrumb } from "./shared";

export interface OrientacoesEstagioProps {
  content: OrientacoesContent;
}

/**
 * Subpágina Aluno — Orientações de Estágio: hero · faixa da Lei do Estágio ·
 * escolas e cursos (condicionalidades) · documentos por etapa (DocCards).
 */
export function OrientacoesEstagio({ content }: OrientacoesEstagioProps) {
  const { hero, lei, tiposEstagio, escolas, etapas, faq } = content;
  return (
    <PageShell>
      <PageHero breadcrumb={<Breadcrumb trail={hero.breadcrumb} />} title={hero.title} subtitle={hero.subtitle} />

      {/* Lei do Estágio */}
      <section className="border-b border-magenta-200 bg-magenta-100">
        <p className="mx-auto flex max-w-content flex-wrap items-center gap-2 px-6 py-4 text-sm text-charcoal-400 md:px-[72px]">
          <FileTextIcon size={16} className="shrink-0 text-magenta-700" aria-hidden />
          <strong className="text-magenta-800">{lei.label}</strong> {lei.text}
        </p>
      </section>

      {/* Tipos de estágio */}
      <section className="mx-auto max-w-content px-6 pt-14 md:px-[72px]">
        <SectionHeading eyebrow={tiposEstagio.eyebrow} title={tiposEstagio.title} />
        <div className="mt-5">
          <TabsPills
            items={tiposEstagio.tabs.map((t) => ({
              value: t.label,
              label: t.label,
              content: (
                <Card className="mt-4 bg-ash-100 text-[15px] leading-relaxed text-charcoal-400">{t.text}</Card>
              ),
            }))}
          />
        </div>
      </section>

      {/* Por escola e curso */}
      <section className="mx-auto max-w-content px-6 py-14 md:px-[72px]">
        <SectionHeading eyebrow="Estágio obrigatório" title="Por escola e curso"
          subtitle="O estágio obrigatório é definido no projeto pedagógico do curso. Clique na sua escola para ver as condicionalidades." />
        <ul className="mt-8 flex flex-col gap-3">
          {escolas.map((e) => (
            <li key={e.nome}>
              <a href={e.href} className="group flex items-center gap-4 rounded-card border border-ash-200 bg-ash-100 px-5 py-4 transition-colors hover:border-ash-300 hover:bg-ash-200">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-chip bg-magenta-100 text-magenta-700" aria-hidden>
                  {e.icon}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-charcoal-500 group-hover:text-magenta-700">{e.nome}</span>
                  <span className="text-[13px] text-charcoal-100">{e.cursos}</span>
                </span>
                {e.badge && <Tag tone="brand" size="sm" className="shrink-0">{e.badge}</Tag>}
              </a>
            </li>
          ))}
        </ul>
      </section>

      {/* Documentos por etapa */}
      <section className="bg-ash-100 py-16">
        <div className="mx-auto max-w-content px-6 md:px-[72px]">
          <SectionHeading eyebrow="Documentos" title="O que você precisa em cada etapa" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {etapas.map((et) => <DocCard key={et.label} label={et.label} icon={et.icon} items={et.items} />)}
          </div>
        </div>
      </section>

      {/* FAQ agrupada — estágio não obrigatório */}
      <section className="mx-auto max-w-content px-6 py-16 md:px-[72px]">
        <SectionHeading eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.description} className="max-w-2xl" />
        <div className="mt-8 flex flex-col gap-6">
          {faq.grupos.map((g) => (
            <Card key={g.titulo} className="border-ash-200 bg-ash-100/60">
              <h3 className="font-display text-xl font-semibold text-charcoal-500">{g.titulo}</h3>
              <p className="mt-1 text-sm font-medium text-magenta-700">{g.subtitulo}</p>
              <AccordionList className="mt-2" items={g.itens} />
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
