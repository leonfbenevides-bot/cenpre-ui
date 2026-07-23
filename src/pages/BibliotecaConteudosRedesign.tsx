import { EditorialPageHero } from "../components/EditorialPageHero";
import { EditorialCTA } from "../components/EditorialCTA";
import { Button } from "../components/Button";
import { NewsCard } from "../components/NewsCard";
import { TabsPills } from "../components/Tabs";
import type { BibliotecaContent } from "../content/types";
import { PageShell, Breadcrumb, FormatoPillLabel, FormatoEmptyState, rotas } from "./shared";

export interface BibliotecaConteudosRedesignProps {
  content: BibliotecaContent;
}

/**
 * PILOTO — versão "Editorial Aspiracional" da Biblioteca de Conteúdos. Mesmo
 * conteúdo/props da versão fiel ao Figma (`BibliotecaConteudos.tsx`).
 */
export function BibliotecaConteudosRedesign({ content }: BibliotecaConteudosRedesignProps) {
  const { hero, formatos, itens } = content;
  return (
    <PageShell platformCta={false}>
      <EditorialPageHero
        breadcrumb={<Breadcrumb trail={hero.breadcrumb} />}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="mx-auto max-w-container px-6 py-16 md:px-gutter">
        <h2 className="sr-only">Conteúdos por formato</h2>
        <TabsPills
          items={formatos.map((formato) => {
            const doFormato = itens.filter((i) => i.formato === formato);
            return {
              value: formato,
              label: <FormatoPillLabel formato={formato} />,
              content:
                doFormato.length > 0 ? (
                  <div className="grid gap-6 pt-6 md:grid-cols-3">
                    {doFormato.map((i) => (
                      <NewsCard key={i.title} {...i} />
                    ))}
                  </div>
                ) : (
                  <div className="pt-6">
                    <FormatoEmptyState formato={formato} />
                  </div>
                ),
            };
          })}
        />
      </section>

      <section className="mx-auto max-w-container px-6 py-20 md:px-gutter">
        <EditorialCTA
          eyebrow="Plataforma CENPRE"
          title="Mais do que uma plataforma completa, nós acompanhamos todas as etapas."
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
                <a href="mailto:atendimento.cenpre@ucam-campos.br">Fale conosco</a>
              </Button>
            </>
          }
        />
      </section>
    </PageShell>
  );
}
