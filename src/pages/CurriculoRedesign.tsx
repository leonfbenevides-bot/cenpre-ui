import { EditorialPageHero } from "../components/EditorialPageHero";
import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialCTA } from "../components/EditorialCTA";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { AccordionList } from "../components/Accordion";
import { CheckIcon, SparklesIcon, UploadIcon, FileTextIcon } from "../components/Icons";
import { cn } from "@/lib/cn";
import type { CurriculoContent } from "../content/types";
import { PageShell, Breadcrumb, HeroPill } from "./shared";
import ctaImg from "../assets/hero-empresa-model.webp";

function Caminho({
  badge,
  title,
  steps,
  tone,
}: CurriculoContent["caminhos"][number] & { tone: "brand" | "neutral" }) {
  return (
    <Card padding="none" className="overflow-hidden">
      <p
        className={cn(
          "px-6 py-2.5 text-[12px] font-semibold uppercase tracking-[0.12em]",
          tone === "brand" ? "bg-magenta-700 text-white" : "bg-charcoal-500 text-white",
        )}
      >
        {badge}
      </p>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-charcoal-500">{title}</h3>
        <ol className="mt-4 flex flex-col gap-3">
          {steps.map((s, i) => (
            <li key={s} className="flex gap-3 text-[14px] leading-relaxed text-charcoal-400">
              <span
                className="grid h-6 w-6 shrink-0 place-items-center rounded-pill bg-magenta-100 text-xs font-bold text-magenta-700"
                aria-hidden
              >
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </div>
    </Card>
  );
}

export interface CurriculoRedesignProps {
  content: CurriculoContent;
}

/**
 * PILOTO — versão "Editorial Aspiracional" de Currículo. Mesmo conteúdo/props
 * da versão fiel ao Figma (`Curriculo.tsx`), só a casca visual muda.
 */
export function CurriculoRedesign({ content }: CurriculoRedesignProps) {
  const { hero, intro, dica, caminhos, faq, dicas } = content;
  return (
    <PageShell platformCta={false}>
      <EditorialPageHero
        breadcrumb={<Breadcrumb trail={hero.breadcrumb} />}
        title={hero.title}
        subtitle={hero.subtitle}
        pills={
          <>
            <HeroPill icon={<UploadIcon size={15} />}>Upload rápido</HeroPill>
            <HeroPill icon={<SparklesIcon size={15} />}>Criação do zero</HeroPill>
            <HeroPill icon={<FileTextIcon size={15} />}>PDF, HTML ou Doc</HeroPill>
          </>
        }
      />

      <section className="mx-auto max-w-container px-6 pt-24 md:px-gutter">
        <EditorialHeading
          eyebrow={intro.eyebrow}
          title={intro.title}
          subtitle={intro.description}
        />
      </section>

      {/* Faixa de dica */}
      <section className="mx-auto max-w-container px-6 pt-10 md:px-gutter">
        <p className="flex items-center gap-3 rounded-chip bg-magenta-100 px-5 py-4 text-sm font-semibold text-charcoal-500">
          <SparklesIcon size={18} className="shrink-0 text-magenta-700" aria-hidden />
          {dica}
        </p>
      </section>

      <section className="mx-auto max-w-container px-6 py-12 md:px-gutter">
        <div className="grid items-start gap-6 md:grid-cols-2">
          {caminhos.map((c, i) => (
            <Caminho key={c.title} {...c} tone={i === 0 ? "brand" : "neutral"} />
          ))}
        </div>
      </section>

      {/* FAQ do currículo */}
      <section className="mx-auto max-w-container px-6 pb-24 md:px-gutter">
        <EditorialHeading eyebrow={faq.eyebrow} title={faq.title} />
        <AccordionList className="mt-6" items={faq.itens} />
      </section>

      {/* Dicas */}
      <section className="bg-ash-100/60 py-24">
        <div className="mx-auto max-w-container px-6 md:px-gutter">
          <EditorialHeading title={dicas.title} />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {dicas.items.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-[15px] text-charcoal-400">
                <CheckIcon size={18} className="mt-0.5 shrink-0 text-magenta-700" aria-hidden />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 py-20 md:px-gutter">
        <EditorialCTA
          eyebrow="Comece agora"
          title="Pronto para montar um currículo que se destaca?"
          image={ctaImg}
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
