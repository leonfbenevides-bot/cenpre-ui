import { EditorialPageHero } from "../components/EditorialPageHero";
import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialCTA } from "../components/EditorialCTA";
import { Button } from "../components/Button";
import { StepCard } from "../components/StepCard";
import { Card } from "../components/Card";
import { AccordionList } from "../components/Accordion";
import { ArrowRightIcon, ClipboardListIcon, PenLineIcon, ClockIcon } from "../components/Icons";
import type { CadastroConvenioContent } from "../content/types";
import { PageShell, Breadcrumb, HeroPill, rotas } from "./shared";
import ctaImg from "../assets/hero-student-2.webp";

export interface CadastroConvenioRedesignProps {
  content: CadastroConvenioContent;
}

/**
 * PILOTO — versão "Editorial Aspiracional" de Cadastro de Convênio. Mesmo
 * conteúdo/props da versão fiel ao Figma (`CadastroConvenio.tsx`).
 */
export function CadastroConvenioRedesign({ content }: CadastroConvenioRedesignProps) {
  const { hero, intro, passos, documentos, faq } = content;
  return (
    <PageShell platformCta={false}>
      <EditorialPageHero
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

      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <EditorialHeading title={intro.title} subtitle={intro.description} />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {passos.map((p, i) => (
            <StepCard key={p.title} number={i + 1} title={p.title} description={p.description} />
          ))}
        </div>
      </section>

      {/* Documentos e dados necessários */}
      <section className="bg-ash-100/60 py-24">
        <div className="mx-auto max-w-container px-6 md:px-gutter">
          <EditorialHeading
            eyebrow={documentos.eyebrow}
            title={documentos.title}
            subtitle={documentos.subtitle}
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {documentos.itens.map((d) => (
              <Card
                key={d.title}
                className="shadow-card transition-all hover:-translate-y-0.5 hover:border-magenta-300 hover:shadow-card-hover"
              >
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

      {/* FAQ em duas colunas */}
      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <div className="grid gap-10 md:grid-cols-[minmax(0,380px)_1fr]">
          <div>
            <EditorialHeading eyebrow={faq.eyebrow} title={faq.title} subtitle={faq.description} />
            <a
              href={rotas.plataforma}
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800"
            >
              {faq.ctaLabel} <ArrowRightIcon size={15} />
            </a>
          </div>
          <AccordionList items={faq.itens} />
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 pb-20 md:px-gutter">
        <EditorialCTA
          eyebrow="Comece agora"
          title="Formalize o convênio da sua empresa em poucos passos."
          image={ctaImg}
          actions={
            <>
              <Button size="lg">Cadastrar minha empresa</Button>
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
