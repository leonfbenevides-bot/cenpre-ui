import { PageHero } from "../components/PageHero";
import { Card } from "../components/Card";
import { SectionHeading } from "../components/SectionHeading";
import { CheckIcon } from "../components/Icons";
import { cn } from "@/lib/cn";
import type { CurriculoContent } from "../content/types";
import { PageShell, Breadcrumb } from "./shared";

function Caminho({ badge, title, steps, tone }: CurriculoContent["caminhos"][number] & { tone: "brand" | "neutral" }) {
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

export interface CurriculoProps {
  content: CurriculoContent;
}

/**
 * Subpágina Aluno — Currículo: hero · dois caminhos (upload × criação na
 * plataforma) com passos numerados · dicas para um bom currículo.
 */
export function Curriculo({ content }: CurriculoProps) {
  const { hero, intro, caminhos, dicas } = content;
  return (
    <PageShell>
      <PageHero breadcrumb={<Breadcrumb trail={hero.breadcrumb} />} title={hero.title} subtitle={hero.subtitle} />

      <section className="mx-auto max-w-content px-6 py-14 md:px-[72px]">
        <SectionHeading eyebrow={intro.eyebrow} title={intro.title} subtitle={intro.description} />
        <div className="mt-8 grid items-start gap-5 md:grid-cols-2">
          {caminhos.map((c, i) => <Caminho key={c.title} {...c} tone={i === 0 ? "brand" : "neutral"} />)}
        </div>
      </section>

      {/* Dicas */}
      <section className="bg-ash-100 py-14">
        <div className="mx-auto max-w-content px-6 md:px-[72px]">
          <SectionHeading title={dicas.title} />
          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {dicas.items.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-[15px] text-charcoal-400">
                <CheckIcon size={18} className="mt-0.5 shrink-0 text-magenta-700" aria-hidden />
                {d}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </PageShell>
  );
}
