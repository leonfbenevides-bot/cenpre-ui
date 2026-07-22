import { PageHero } from "../components/PageHero";
import { StepCard } from "../components/StepCard";
import { Card } from "../components/Card";
import { AccordionList } from "../components/Accordion";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowRightIcon, ClipboardListIcon, PenLineIcon, ClockIcon } from "../components/Icons";
import type { CadastroConvenioContent } from "../content/types";
import { PageShell, Breadcrumb, HeroPill, rotas } from "./shared";

export interface CadastroConvenioProps {
  content: CadastroConvenioContent;
}

/**
 * Subpágina Empresa — Cadastro de Convênio, espelhando o Figma:
 * hero · 6 passos (StepCards) · documentos e dados necessários · FAQ em
 * duas colunas (texto + accordion).
 */
export function CadastroConvenio({ content }: CadastroConvenioProps) {
  const { hero, intro, passos, documentos, faq } = content;
  return (
    <PageShell>
      <PageHero
        breadcrumb={<Breadcrumb trail={hero.breadcrumb} />}
        title={hero.title}
        subtitle={hero.subtitle}
        pills={
          <>
            <HeroPill icon={<ClipboardListIcon size={15} />}>6 passos simples</HeroPill>
            <HeroPill icon={<PenLineIcon size={15} />}>Assinatura digital</HeroPill>
            <HeroPill icon={<ClockIcon size={15} />}>Até 5 dias úteis</HeroPill>
          </>
        }
      />

      <section className="mx-auto max-w-content px-6 py-14 md:px-gutter">
        <SectionHeading title={intro.title} subtitle={intro.description} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {passos.map((p, i) => (
            <StepCard key={p.title} number={i + 1} title={p.title} description={p.description} />
          ))}
        </div>
      </section>

      {/* Documentos e dados necessários */}
      <section className="mx-auto max-w-content px-6 pb-14 md:px-gutter">
        <SectionHeading
          eyebrow={documentos.eyebrow}
          title={documentos.title}
          subtitle={documentos.subtitle}
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {documentos.itens.map((d) => (
            <Card key={d.title} className="bg-ash-100">
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
      </section>

      {/* FAQ em duas colunas */}
      <section className="bg-ash-100 py-16">
        <div className="mx-auto grid max-w-content gap-10 px-6 md:grid-cols-[minmax(0,380px)_1fr] md:px-gutter">
          <div>
            <SectionHeading eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.description} />
            <a
              href={rotas.plataforma}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800"
            >
              {faq.ctaLabel} <ArrowRightIcon size={15} />
            </a>
          </div>
          <AccordionList items={faq.itens} />
        </div>
      </section>
    </PageShell>
  );
}
