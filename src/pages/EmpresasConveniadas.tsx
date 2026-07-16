import { PageHero } from "../components/PageHero";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { SectionHeading } from "../components/SectionHeading";
import { SearchIcon, ClockIcon } from "../components/Icons";
import type { ConveniadasContent } from "../content/types";
import { PageShell, Breadcrumb, ContactLines } from "./shared";

export interface EmpresasConveniadasProps {
  content: ConveniadasContent;
}

/**
 * Subpágina Empresa — Empresas conveniadas: hero · busca (lista em construção)
 * · indicação de nova empresa com contatos da equipe de convênios.
 */
export function EmpresasConveniadas({ content }: EmpresasConveniadasProps) {
  const { hero, aviso, indicacao } = content;
  return (
    <PageShell>
      <PageHero breadcrumb={<Breadcrumb trail={hero.breadcrumb} />} title={hero.title} subtitle={hero.subtitle} />

      <section className="mx-auto max-w-content px-6 py-14 md:px-[72px]">
        <SectionHeading title="Lista de empresas conveniadas" />
        <div className="mt-6 max-w-xl">
          <Input aria-label="Buscar empresa conveniada" placeholder="Buscar empresa conveniada..." leftIcon={<SearchIcon size={16} />} />
        </div>
        <Card className="mt-6 flex max-w-xl flex-col items-center gap-2 bg-ash-100 text-center">
          <ClockIcon size={22} className="text-charcoal-100" aria-hidden />
          <h3 className="text-base font-semibold text-charcoal-500">{aviso.title}</h3>
          <p className="text-sm leading-relaxed text-charcoal-400">{aviso.text}</p>
        </Card>
      </section>

      <section className="bg-ash-100 py-14">
        <div className="mx-auto max-w-content px-6 md:px-[72px]">
          <SectionHeading title={indicacao.title} subtitle={indicacao.text} />
          <div className="mt-6">
            <ContactLines />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
