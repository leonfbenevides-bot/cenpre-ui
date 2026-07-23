import { EditorialPageHero } from "../components/EditorialPageHero";
import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialCTA } from "../components/EditorialCTA";
import { Button } from "../components/Button";
import { DocCard } from "../components/DocCard";
import { Tag } from "../components/Tag";
import { Card } from "../components/Card";
import { TabsPills } from "../components/Tabs";
import { AccordionList } from "../components/Accordion";
import { FileTextIcon, LandmarkIcon, SchoolIcon, ClipboardListIcon } from "../components/Icons";
import type { OrientacoesContent } from "../content/types";
import { PageShell, Breadcrumb, HeroPill } from "./shared";

export interface OrientacoesEstagioRedesignProps {
  content: OrientacoesContent;
}

/**
 * PILOTO — versão "Editorial Aspiracional" de Orientações de Estágio.
 * Mesmo conteúdo/props da versão fiel ao Figma (`OrientacoesEstagio.tsx`),
 * só a casca visual muda (hero tipográfico, EditorialHeading, EditorialCTA).
 */
export function OrientacoesEstagioRedesign({ content }: OrientacoesEstagioRedesignProps) {
  const { hero, lei, tiposEstagio, escolas, etapas, faq } = content;
  return (
    <PageShell platformCta={false}>
      <EditorialPageHero
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
        <p className="mx-auto flex max-w-container flex-wrap items-center gap-2 px-6 py-4 text-sm text-charcoal-400 md:px-gutter">
          <FileTextIcon size={16} className="shrink-0 text-magenta-700" aria-hidden />
          <strong className="text-magenta-800">{lei.label}</strong> {lei.text}
        </p>
      </section>

      {/* Tipos de estágio */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <EditorialHeading eyebrow={tiposEstagio.eyebrow} title={tiposEstagio.title} />
        <div className="mt-8">
          <TabsPills
            items={tiposEstagio.tabs.map((t, i) => ({
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
      <section className="bg-ash-100/60 py-24">
        <div className="mx-auto max-w-container px-6 md:px-gutter">
          <EditorialHeading
            eyebrow="Estágio obrigatório"
            title="Por escola e curso"
            subtitle="O estágio obrigatório é definido no projeto pedagógico do curso. Clique na sua escola para ver as condicionalidades."
          />
          <ul className="mt-10 flex flex-col gap-3">
            {escolas.map((e) => (
              <li key={e.nome}>
                <a
                  href={e.href}
                  className="group flex items-center gap-4 rounded-card border border-ash-200 bg-white px-5 py-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-magenta-300 hover:shadow-card-hover"
                >
                  <span
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-chip bg-magenta-100 text-magenta-700"
                    aria-hidden
                  >
                    {e.icon}
                  </span>
                  <span className="flex-1">
                    <span className="block text-sm font-semibold text-charcoal-500 group-hover:text-magenta-700">
                      {e.nome}
                    </span>
                    <span className="text-[13px] text-charcoal-200">{e.cursos}</span>
                  </span>
                  {e.badge && (
                    <Tag tone="brand" size="sm" className="shrink-0">
                      {e.badge}
                    </Tag>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Documentos por etapa */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <EditorialHeading eyebrow="Documentos" title="O que você precisa em cada etapa" />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {etapas.map((et) => (
            <DocCard key={et.label} label={et.label} icon={et.icon} items={et.items} />
          ))}
        </div>
      </section>

      {/* FAQ agrupada — estágio não obrigatório */}
      <section className="bg-ash-100/60 py-24">
        <div className="mx-auto max-w-container px-6 md:px-gutter">
          <EditorialHeading
            eyebrow={faq.eyebrow}
            title={faq.title}
            subtitle={faq.description}
            className="max-w-2xl"
          />
          <div className="mt-10 flex flex-col gap-6">
            {faq.grupos.map((g) => (
              <Card key={g.titulo} className="border-ash-200 bg-white">
                <h3 className="font-editorial text-xl font-semibold text-charcoal-500">
                  {g.titulo}
                </h3>
                <p className="mt-1 text-sm font-medium text-magenta-700">{g.subtitulo}</p>
                <AccordionList className="mt-2" items={g.itens} />
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 py-20 md:px-gutter">
        <EditorialCTA
          eyebrow="Comece agora"
          title="Dúvidas sobre o seu estágio? Fale com o CENPRE."
          actions={
            <>
              <Button size="lg">Acessar a plataforma</Button>
              <Button
                size="lg"
                variant="ghost"
                className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Fale com a gente
              </Button>
            </>
          }
        />
      </section>
    </PageShell>
  );
}
