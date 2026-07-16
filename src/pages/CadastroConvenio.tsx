import { PageHero } from "../components/PageHero";
import { StepCard } from "../components/StepCard";
import { SectionHeading } from "../components/SectionHeading";
import type { CadastroConvenioContent } from "../content/types";
import { PageShell, Breadcrumb, ContactLines } from "./shared";

export interface CadastroConvenioProps {
  content: CadastroConvenioContent;
}

/**
 * Subpágina Empresa — Cadastro de Convênio: hero · 6 passos (StepCards) ·
 * contatos da equipe de convênios.
 */
export function CadastroConvenio({ content }: CadastroConvenioProps) {
  const { hero, intro, passos, duvidas } = content;
  return (
    <PageShell>
      <PageHero breadcrumb={<Breadcrumb trail={hero.breadcrumb} />} title={hero.title} subtitle={hero.subtitle} />

      <section className="mx-auto max-w-content px-6 py-14 md:px-[72px]">
        <SectionHeading title={intro.title} subtitle={intro.description} />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {passos.map((p, i) => <StepCard key={p.title} number={i + 1} title={p.title} description={p.description} />)}
        </div>
      </section>

      <section className="bg-ash-100 py-14">
        <div className="mx-auto max-w-content px-6 md:px-[72px]">
          <SectionHeading title={duvidas.title} />
          <div className="mt-6">
            <ContactLines />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
