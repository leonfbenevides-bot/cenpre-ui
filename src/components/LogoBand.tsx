import { cn } from "@/lib/cn";

export interface LogoBandItem {
  name: string;
  /** URL do logo (opcional). Sem imagem, mostra o nome como wordmark. */
  src?: string;
  href?: string;
}

export interface LogoBandProps {
  items: LogoBandItem[];
  className?: string;
}

/**
 * Faixa de logos de parceiros (Centrais de Estágio: CIEE, NUBE, Agiel…).
 * Sem imagem, renderiza o nome estilizado como wordmark em tom neutro.
 */
export function LogoBand({ items, className }: LogoBandProps) {
  return (
    <div className={cn("flex flex-wrap gap-4", className)}>
      {items.map((item) => {
        const content = item.src ? (
          <img src={item.src} alt={item.name} className="h-6 w-auto object-contain" />
        ) : (
          <span className="text-lg font-semibold text-charcoal-400">{item.name}</span>
        );
        const chipClass =
          "flex items-center rounded-card border border-ash-300 bg-ash-100 px-7 py-4.5 transition-colors hover:bg-white";
        return item.href ? (
          <a
            key={item.name}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className={chipClass}
            aria-label={item.name}
          >
            {content}
          </a>
        ) : (
          <div key={item.name} className={chipClass}>
            {content}
          </div>
        );
      })}
    </div>
  );
}
