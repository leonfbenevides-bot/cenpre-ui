import { EditorialPageHero } from "../components/EditorialPageHero";
import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialCTA } from "../components/EditorialCTA";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { SearchIcon, ClockIcon } from "../components/Icons";
import type { ConveniadasContent } from "../content/types";
import { PageShell, Breadcrumb, ContactLines } from "./shared";

export interface EmpresasConveniadasRedesignProps {
  content: ConveniadasContent;
}

/**
 * PILOTO — versão "Editorial Aspiracional" de Empresas Conveniadas. Mesmo
 * conteúdo/props da versão fiel ao Figma (`EmpresasConveniadas.tsx`).
 */
export function EmpresasConveniadasRedesign({ content }: EmpresasConveniadasRedesignProps) {
  const { hero, aviso, indicacao } = content;
  return (
    <PageShell platformCta={false}>
      <EditorialPageHero
        breadcrumb={<Breadcrumb trail={hero.breadcrumb} />}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <EditorialHeading title="Lista de empresas conveniadas" />
        <div className="mt-8 max-w-xl">
          <Input
            aria-label="Buscar empresa conveniada"
            placeholder="Buscar empresa conveniada..."
            leftIcon={<SearchIcon size={16} />}
          />
        </div>
        <Card className="mt-6 flex max-w-xl flex-col items-center gap-2 bg-ash-100 text-center">
          <ClockIcon size={22} className="text-charcoal-200" aria-hidden />
          <h3 className="text-base font-semibold text-charcoal-500">{aviso.title}</h3>
          <p className="text-sm leading-relaxed text-charcoal-400">{aviso.text}</p>
        </Card>
      </section>

      <section className="bg-ash-100/60 py-24">
        <div className="mx-auto max-w-container px-6 md:px-gutter">
          <EditorialHeading title={indicacao.title} subtitle={indicacao.text} />
          <div className="mt-8">
            <ContactLines />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 py-20 md:px-gutter">
        <EditorialCTA
          eyebrow="Seja parceiro"
          title="Sua empresa ainda não é conveniada? Vamos mudar isso."
          actions={
            <>
              <Button size="lg">Cadastrar minha empresa</Button>
              <Button
                size="lg"
                variant="ghost"
                className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Por que ser parceiro?
              </Button>
            </>
          }
        />
      </section>
    </PageShell>
  );
}
