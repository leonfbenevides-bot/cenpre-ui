import { Tag } from "./Tag";
import { cn } from "@/lib/cn";

export interface NewsCardProps {
  /** URL da imagem de capa. */
  image?: string;
  imageAlt?: string;
  author: string;
  /** Data já formatada (ex.: "19 nov 2024"). */
  date: string;
  title: string;
  excerpt: string;
  /** Categorias/tags (ex.: ["Estudo", "UCAM"]). */
  tags?: string[];
  href?: string;
  className?: string;
}

/**
 * Card de notícia/artigo (seção "Últimas notícias" e biblioteca de conteúdos):
 * capa + autor·data + título + resumo + tags. Ideal dentro de um `Carousel`
 * ou em grade. O card inteiro é clicável quando `href` é passado.
 */
export function NewsCard({
  image,
  imageAlt = "",
  author,
  date,
  title,
  excerpt,
  tags,
  href,
  className,
}: NewsCardProps) {
  const Comp = href ? "a" : "div";
  return (
    <Comp
      {...(href ? { href } : {})}
      className={cn(
        "group flex h-full flex-col gap-3 rounded-card no-underline transition-transform hover:-translate-y-0.5",
        className,
      )}
    >
      <div className="overflow-hidden rounded-chip bg-ash-200">
        {image ? (
          <img
            src={image}
            alt={imageAlt}
            className="aspect-[16/10] w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        ) : (
          <div className="aspect-[16/10] w-full" aria-hidden />
        )}
      </div>
      <p className="text-xs text-charcoal-200">
        {author} · {date}
      </p>
      <h3 className="text-base font-semibold leading-snug text-charcoal-500 group-hover:text-magenta-700">
        {title}
      </h3>
      <p className="text-[13px] leading-relaxed text-charcoal-400">{excerpt}</p>
      {tags && tags.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {tags.map((t) => (
            <Tag key={t} tone="neutral" size="sm">
              {t}
            </Tag>
          ))}
        </div>
      )}
    </Comp>
  );
}
