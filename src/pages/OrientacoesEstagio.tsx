import { PageHero } from "../components/PageHero";
import { DocCard } from "../components/DocCard";
import { Card } from "../components/Card";
import { TabsPills } from "../components/Tabs";
import { AccordionList } from "../components/Accordion";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { FileTextIcon, LandmarkIcon, SchoolIcon, ClipboardListIcon } from "../components/Icons";
import type { OrientacoesContent } from "../content/types";
import { PageShell, Breadcrumb, HeroPill } from "./shared";

export interface OrientacoesEstagioProps {
  content: OrientacoesContent;
}

/**
 * Subpágina Aluno — Orientações de Estágio: hero · faixa da Lei do Estágio ·
 * escolas e cursos (condicionalidades) · documentos por etapa (DocCards).
 */
export function OrientacoesEstagio({ content }: OrientacoesEstagioProps) {
  const { hero, lei, tiposEstagio, escolas, etapas, intramuros, faq } = content;
  return (
    <PageShell>
      <PageHero
        breadcrumb={<Breadcrumb trail={hero.breadcrumb} />}
        title={hero.title}
        subtitle={hero.subtitle}
        pills={
          <>
            <HeroPill icon={<LandmarkIcon size={15} />}>Lei 11.788/2008</HeroPill>
            <HeroPill icon={<SchoolIcon size={15} />}>Por escola e curso</HeroPill>
            <HeroPill icon={<ClipboardListIcon size={15} />}>Documentos por etapa</HeroPill>
          </>
        }
      />

      {/* Lei do Estágio */}
      <section className="border-b border-magenta-200 bg-magenta-100">
        <p className="mx-auto flex max-w-content flex-wrap items-center gap-2 px-6 py-4 text-sm text-charcoal-400 md:px-gutter">
          <FileTextIcon size={16} className="shrink-0 text-magenta-700" aria-hidden />
          <strong className="text-magenta-800">{lei.label}</strong> {lei.text}
        </p>
      </section>

      {/* Tipos de estágio */}
      <section className="mx-auto max-w-content px-6 pt-14 md:px-gutter">
        <SectionHeading eyebrow={tiposEstagio.eyebrow} title={tiposEstagio.title} />
        <div className="mt-5">
          <TabsPills
            items={tiposEstagio.tabs.map((t, i) => ({
              // valor sem espaços: o Radix usa isso em ids/aria-controls.
              value: `tipo-${i}`,
              label: t.label,
              content: (
                <Card className="mt-4 bg-ash-100 text-[15px] leading-relaxed text-charcoal-400">
                  {t.text}
                </Card>
              ),
            }))}
          />
        </div>
      </section>

      {/* Por escola e curso */}
      <section className="mx-auto max-w-content px-6 py-14 md:px-gutter">
        <SectionHeading
          eyebrow="Estágio obrigatório"
          title="Por escola e curso"
          subtitle="Cursos com estágio obrigatório em cada área. Demais cursos: consulte a coordenação do seu curso."
        />
        <ul className="mt-8 flex flex-col gap-3">
          {escolas.map((e) => (
            <li
              key={e.nome}
              className="flex items-center gap-4 rounded-card border border-ash-200 bg-ash-100 px-5 py-4"
            >
              <span
                className="grid h-10 w-10 shrink-0 place-items-center rounded-chip bg-magenta-100 text-magenta-700"
                aria-hidden
              >
                {e.icon}
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold text-charcoal-500">{e.nome}</span>
                <span className="text-[13px] text-charcoal-200">{e.cursos}</span>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Documentos por etapa */}
      <section className="bg-ash-100 py-16">
        <div className="mx-auto max-w-content px-6 md:px-gutter">
          <SectionHeading eyebrow="Documentos" title="O que você precisa em cada etapa" />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {etapas.map((et) => (
              <DocCard key={et.label} label={et.label} icon={et.icon} items={et.items} />
            ))}
          </div>
        </div>
      </section>

      {/* Estágio Intramuros */}
      <section className="bg-magenta-100/60 py-16">
        <div className="mx-auto max-w-content px-6 md:px-gutter">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow={intramuros.eyebrow}
              title={intramuros.title}
              subtitle={intramuros.description}
            />
            <Button
              variant="secondary"
              asChild
              className="border-magenta-700 text-magenta-700 hover:bg-white"
            >
              <a href="mailto:atendimento.cenpre@ucam-campos.br">{intramuros.ctaLabel}</a>
            </Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {intramuros.destaques.map((d) => (
              <Card key={d.title}>
                <span
                  className="grid h-11 w-11 place-items-center rounded-chip bg-magenta-100 text-magenta-700"
                  aria-hidden
                >
                  {d.icon}
                </span>
                <h3 className="mt-4 text-base font-semibold text-charcoal-500">{d.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-charcoal-400">{d.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ agrupada — estágio não obrigatório */}
      <section className="mx-auto max-w-content px-6 py-16 md:px-gutter">
        <SectionHeading
          eyebrow={faq.eyebrow}
          title={faq.title}
          subtitle={faq.description}
          className="max-w-2xl"
        />
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
