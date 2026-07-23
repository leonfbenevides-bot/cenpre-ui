import { EditorialPageHero } from "../components/EditorialPageHero";
import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialCTA } from "../components/EditorialCTA";
import { Button } from "../components/Button";
import { ArrowRightIcon } from "../components/Icons";
import type { SobreNosContent } from "../content/types";
import { PageShell, Breadcrumb, rotas } from "./shared";

export interface SobreNosRedesignProps {
  content: SobreNosContent;
}

/**
 * PILOTO — versão "Editorial Aspiracional" de Sobre nós. Mesmo conteúdo/props
 * da versão fiel ao Figma (`SobreNos.tsx`).
 */
export function SobreNosRedesign({ content }: SobreNosRedesignProps) {
  const { hero, eyebrow, paragraphs, ctaLabel, href } = content;
  return (
    <PageShell platformCta={false}>
      <EditorialPageHero
        breadcrumb={<Breadcrumb trail={hero.breadcrumb} />}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <EditorialHeading eyebrow={eyebrow} title="Nossa trajetória" />
        <div className="mt-10 grid gap-x-12 gap-y-6 md:grid-cols-2">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-[15px] leading-relaxed text-charcoal-400">
              {p}
            </p>
          ))}
        </div>
        <a
          href={href}
          className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800"
        >
          {ctaLabel} <ArrowRightIcon size={15} />
        </a>
      </section>

      <section className="mx-auto max-w-container px-6 pb-20 md:px-gutter">
        <EditorialCTA
          eyebrow="Faça parte dessa história"
          title="Alunos, egressos e empresas — juntos, movemos o mercado de trabalho."
          actions={
            <>
              <Button size="lg" asChild>
                <a href={rotas.plataforma}>Acessar a plataforma</a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="mailto:atendimento.cenpre@ucam-campos.br">Fale com a gente</a>
              </Button>
            </>
          }
        />
      </section>
    </PageShell>
  );
}
