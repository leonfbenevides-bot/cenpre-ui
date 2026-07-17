import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { NewsCard } from "../components/NewsCard";
import { SectionHeading } from "../components/SectionHeading";
import { Button } from "../components/Button";
import { ImageIcon } from "lucide-react";
import type { ArtigoContent } from "../content/types";
import { PageShell, Breadcrumb } from "./shared";

export interface ArtigoProps {
  content: ArtigoContent;
}

/**
 * Página de artigo/notícia: hero escuro (tags · título · autor · leitura) ·
 * capa · corpo com citações · compartilhar · autor · categorias · relacionados.
 */
export function Artigo({ content }: ArtigoProps) {
  const { breadcrumb, tags, title, author, date, readTime, cover, body, autor, categorias, relacionados } = content;
  return (
    <PageShell>
      {/* Hero escuro */}
      <section className="bg-charcoal-500">
        <div className="mx-auto flex max-w-prose flex-col gap-5 px-6 py-12 md:py-16">
          <Breadcrumb trail={breadcrumb} />
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => <Tag key={t.label} tone={t.tone} size="sm" className="uppercase">{t.label}</Tag>)}
          </div>
          <h1 className="font-display text-3xl font-semibold leading-[1.15] text-white md:text-4xl">{title}</h1>
          <p className="text-sm text-ash-400">
            <span className="font-semibold text-white">{author}</span> · {date} · {readTime}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-prose px-6 py-10">
        {/* Capa */}
        <div className="overflow-hidden rounded-card bg-gradient-to-br from-ash-200 to-ash-300">
          {cover ? (
            <img src={cover} alt="" className="aspect-[16/9] w-full object-cover" />
          ) : (
            <div className="grid aspect-[16/9] w-full place-items-center text-charcoal-200">
              <span className="flex flex-col items-center gap-2 text-xs"><ImageIcon size={22} aria-hidden />Imagem de capa do artigo</span>
            </div>
          )}
        </div>

        {/* Corpo */}
        <div className="mt-8 flex flex-col gap-6">
          {body.map((b) =>
            b.type === "quote" ? (
              <blockquote key={b.text.slice(0, 24)} className="border-l-4 border-magenta-700 bg-magenta-100/50 px-5 py-4 text-[15px] leading-relaxed text-charcoal-500">
                “{b.text}”{b.cite && <footer className="mt-1 text-sm text-charcoal-300">— {b.cite}</footer>}
              </blockquote>
            ) : (
              <p key={b.text.slice(0, 24)} className="text-[16px] leading-relaxed text-charcoal-400">{b.text}</p>
            ),
          )}
        </div>

        {/* Compartilhar */}
        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-ash-200 pt-6">
          <span className="text-sm font-medium text-charcoal-300">Compartilhar:</span>
          <Button size="xs" variant="secondary">LinkedIn</Button>
          <Button size="xs" variant="secondary">WhatsApp</Button>
          <Button size="xs" variant="secondary">Copiar link</Button>
        </div>

        {/* Autor e categorias */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card padding="sm" className="bg-ash-100">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-charcoal-200">Sobre o autor</p>
            <h2 className="mt-2 text-base font-semibold text-charcoal-500">{autor.nome}</h2>
            <p className="mt-1 text-[13px] leading-relaxed text-charcoal-400">{autor.bio}</p>
          </Card>
          <Card padding="sm" className="bg-ash-100">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-charcoal-200">Categorias</p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {categorias.map((c) => <Tag key={c} tone="neutral" size="sm">{c}</Tag>)}
            </div>
          </Card>
        </div>
      </article>

      {/* Relacionados */}
      <section className="bg-ash-100 py-14">
        <div className="mx-auto max-w-content px-6 md:px-gutter">
          <SectionHeading title="Conteúdos relacionados" />
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relacionados.map((n) => <NewsCard key={n.title} {...n} />)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
