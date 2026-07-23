import { EditorialPageHero } from "../components/EditorialPageHero";
import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialCTA } from "../components/EditorialCTA";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { ShieldCheckIcon, HandHeartIcon } from "../components/Icons";
import type { ParceiroContent } from "../content/types";
import { PageShell, Breadcrumb, HeroPill } from "./shared";

export interface PorQueSerParceiroRedesignProps {
  content: ParceiroContent;
}

/**
 * PILOTO — versão "Editorial Aspiracional" de Por que ser Parceiro. Mesmo
 * conteúdo/props da versão fiel ao Figma (`PorQueSerParceiro.tsx`).
 */
export function PorQueSerParceiroRedesign({ content }: PorQueSerParceiroRedesignProps) {
  const { hero, intro, beneficios } = content;
  return (
    <PageShell platformCta={false}>
      <EditorialPageHero
        breadcrumb={<Breadcrumb trail={hero.breadcrumb} />}
        title={hero.title}
        subtitle={hero.subtitle}
        pills={
          <>
            <HeroPill icon={<ShieldCheckIcon size={15} />}>Sem custo de adesão</HeroPill>
            <HeroPill icon={<HandHeartIcon size={15} />}>Suporte dedicado</HeroPill>
          </>
        }
      />

      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <EditorialHeading
          eyebrow={intro.eyebrow}
          title={intro.title}
          subtitle={intro.description}
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {beneficios.map((b, i) => (
            <Card
              key={b.title}
              className="flex gap-4 shadow-card transition-all hover:-translate-y-0.5 hover:border-magenta-300 hover:shadow-card-hover"
            >
              <span className="font-editorial text-xl font-semibold text-magenta-700" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <h3 className="text-base font-semibold text-charcoal-500">{b.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-charcoal-400">
                  {b.description}
                </p>
              </span>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 pb-20 md:px-gutter">
        <EditorialCTA
          eyebrow="Seja parceiro"
          title="Fortaleça sua marca entre os talentos UCAM."
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
