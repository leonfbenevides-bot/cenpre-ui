import { PageHero } from "../components/PageHero";
import { Card } from "../components/Card";
import { SectionHeading } from "../components/SectionHeading";
import type { ParceiroContent } from "../content/types";
import { PageShell, Breadcrumb } from "./shared";

export interface PorQueSerParceiroProps {
  content: ParceiroContent;
}

/**
 * Subpágina Empresa — Por que ser parceiro: hero · benefícios numerados (01–06).
 */
export function PorQueSerParceiro({ content }: PorQueSerParceiroProps) {
  const { hero, intro, beneficios } = content;
  return (
    <PageShell>
      <PageHero breadcrumb={<Breadcrumb trail={hero.breadcrumb} />} title={hero.title} subtitle={hero.subtitle} />

      <section className="mx-auto max-w-content px-6 py-14 md:px-[72px]">
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} subtitle={intro.description} />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {beneficios.map((b, i) => (
            <Card key={b.title} className="flex gap-4">
              <span className="font-display text-xl font-semibold text-magenta-700" aria-hidden>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span>
                <h3 className="text-base font-semibold text-charcoal-500">{b.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-charcoal-400">{b.description}</p>
              </span>
            </Card>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
