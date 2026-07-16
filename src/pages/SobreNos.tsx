import { PageHero } from "../components/PageHero";
import { SectionHeading } from "../components/SectionHeading";
import { ArrowRightIcon } from "../components/Icons";
import type { SobreNosContent } from "../content/types";
import { PageShell, Breadcrumb } from "./shared";

export interface SobreNosProps {
  content: SobreNosContent;
}

/** Página institucional — Sobre nós: hero · história em duas colunas · contato. */
export function SobreNos({ content }: SobreNosProps) {
  const { hero, eyebrow, paragraphs, ctaLabel, href } = content;
  return (
    <PageShell>
      <PageHero breadcrumb={<Breadcrumb trail={hero.breadcrumb} />} title={hero.title} subtitle={hero.subtitle} />

      <section className="mx-auto max-w-content px-6 py-14 md:px-[72px]">
        <SectionHeading eyebrow={eyebrow} title="Nossa trajetória" />
        <div className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
          {paragraphs.map((p) => (
            <p key={p.slice(0, 24)} className="text-[15px] leading-relaxed text-charcoal-400">{p}</p>
          ))}
        </div>
        <a href={href} className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800">
          {ctaLabel} <ArrowRightIcon size={15} />
        </a>
      </section>
    </PageShell>
  );
}
