import { PageHero } from "../components/PageHero";
import { NewsCard } from "../components/NewsCard";
import { TabsPills } from "../components/Tabs";
import type { BibliotecaContent } from "../content/types";
import { PageShell, Breadcrumb } from "./shared";

export interface BibliotecaConteudosProps {
  content: BibliotecaContent;
}

/**
 * Biblioteca de Conteúdos: hero · pills por formato (Blog, Vídeos, Podcasts,
 * Webinars, Artigos) · grade de cards. Formatos sem itens mostram aviso.
 */
export function BibliotecaConteudos({ content }: BibliotecaConteudosProps) {
  const { hero, formatos, itens } = content;
  return (
    <PageShell>
      <PageHero breadcrumb={<Breadcrumb trail={hero.breadcrumb} />} title={hero.title} subtitle={hero.subtitle} />

      <section className="mx-auto max-w-content px-6 py-12 md:px-[72px]">
        <TabsPills
          items={formatos.map((formato) => {
            const doFormato = itens.filter((i) => i.formato === formato);
            return {
              value: formato,
              label: formato,
              content: doFormato.length > 0 ? (
                <div className="grid gap-6 pt-6 md:grid-cols-3">
                  {doFormato.map((i) => <NewsCard key={i.title} {...i} />)}
                </div>
              ) : (
                <p className="pt-6 text-sm text-charcoal-100">Conteúdos de {formato.toLowerCase()} em breve.</p>
              ),
            };
          })}
        />
      </section>
    </PageShell>
  );
}
