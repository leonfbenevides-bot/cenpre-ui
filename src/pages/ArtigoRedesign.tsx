import { Card } from "../components/Card";
import { Tag } from "../components/Tag";
import { NewsCard } from "../components/NewsCard";
import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialCTA } from "../components/EditorialCTA";
import { Button } from "../components/Button";
import { ImageIcon } from "lucide-react";
import type { ArtigoContent } from "../content/types";
import { PageShell, Breadcrumb } from "./shared";
import ctaImg from "../assets/blog-curriculo-recrutadores.jpg";

export interface ArtigoRedesignProps {
  content: ArtigoContent;
}

/**
 * PILOTO — versão "Editorial Aspiracional" do Artigo. Mesmo conteúdo/props da
 * versão fiel ao Figma (`Artigo.tsx`) — hero escuro com tipografia Fraunces,
 * corpo idêntico, encerramento com EditorialCTA.
 */
export function ArtigoRedesign({ content }: ArtigoRedesignProps) {
  const {
    breadcrumb,
    tags,
    title,
    author,
    date,
    readTime,
    cover,
    body,
    autor,
    categorias,
    relacionados,
  } = content;
  return (
    <PageShell platformCta={false}>
      {/* Hero escuro editorial */}
      <section className="relative isolate overflow-hidden bg-charcoal-500 py-16 md:py-20">
        <div
          aria-hidden
          className="absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, rgba(180,54,91,0.55), transparent 70%)" }}
        />
        <div className="relative mx-auto flex max-w-prose flex-col gap-5 px-6">
          <Breadcrumb trail={breadcrumb} />
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <Tag key={t.label} tone={t.tone} size="sm" className="uppercase">
                {t.label}
              </Tag>
            ))}
          </div>
          <h1 className="font-editorial text-[clamp(1.9rem,4vw,3rem)] font-semibold leading-[1.08] tracking-[-0.015em] text-white">
            {title}
          </h1>
          <p className="text-sm text-ash-400">
            <span className="font-semibold text-white">{author}</span> · {date} · {readTime}
          </p>
        </div>
      </section>

      <article className="mx-auto max-w-prose px-6 py-12">
        {/* Capa */}
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-ash-200 to-ash-300 shadow-card">
          {cover ? (
            <img src={cover} alt="" className="aspect-[16/9] w-full object-cover" />
          ) : (
            <div className="grid aspect-[16/9] w-full place-items-center text-charcoal-200">
              <span className="flex flex-col items-center gap-2 text-xs">
                <ImageIcon size={22} aria-hidden />
                Imagem de capa do artigo
              </span>
            </div>
          )}
        </div>

        {/* Corpo */}
        <div className="mt-10 flex flex-col gap-6">
          {body.map((b) =>
            b.type === "quote" ? (
              <blockquote
                key={b.text.slice(0, 24)}
                className="border-l-4 border-magenta-700 bg-magenta-100/50 px-5 py-4 font-editorial text-lg leading-relaxed text-charcoal-500"
              >
                “{b.text}”
                {b.cite && <footer className="mt-1 text-sm text-charcoal-300">— {b.cite}</footer>}
              </blockquote>
            ) : (
              <p
                key={b.text.slice(0, 24)}
                className="text-[16px] leading-relaxed text-charcoal-400"
              >
                {b.text}
              </p>
            ),
          )}
        </div>

        {/* Compartilhar */}
        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-ash-200 pt-6">
          <span className="text-sm font-medium text-charcoal-300">Compartilhar:</span>
          <Button size="xs" variant="secondary">
            LinkedIn
          </Button>
          <Button size="xs" variant="secondary">
            WhatsApp
          </Button>
          <Button size="xs" variant="secondary">
            Copiar link
          </Button>
        </div>

        {/* Autor e categorias */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          <Card padding="sm" className="bg-ash-100">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-charcoal-200">
              Sobre o autor
            </p>
            <h2 className="mt-2 text-base font-semibold text-charcoal-500">{autor.nome}</h2>
            <p className="mt-1 text-[13px] leading-relaxed text-charcoal-400">{autor.bio}</p>
          </Card>
          <Card padding="sm" className="bg-ash-100">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-charcoal-200">
              Categorias
            </p>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {categorias.map((c) => (
                <Tag key={c} tone="neutral" size="sm">
                  {c}
                </Tag>
              ))}
            </div>
          </Card>
        </div>
      </article>

      {/* Relacionados */}
      <section className="bg-ash-100/60 py-24">
        <div className="mx-auto max-w-container px-6 md:px-gutter">
          <EditorialHeading title="Conteúdos relacionados" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {relacionados.map((n) => (
              <NewsCard key={n.title} {...n} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 py-20 md:px-gutter">
        <EditorialCTA
          eyebrow="Continue explorando"
          title="Mais conteúdos como esse na Biblioteca do CENPRE."
          image={ctaImg}
          imageAlt="Jovem lendo em uma livraria"
          actions={
            <Button size="lg" asChild>
              <a href="/conteudos/biblioteca">Ver biblioteca de conteúdos</a>
            </Button>
          }
        />
      </section>
    </PageShell>
  );
}
