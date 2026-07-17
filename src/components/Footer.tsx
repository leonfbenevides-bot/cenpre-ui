import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface FooterProps {
  brand?: ReactNode;
  columns: FooterColumn[];
  /** Bloco de contato (e-mail, telefone, WhatsApp). */
  contact?: ReactNode;
  /** Linha inferior (copyright). */
  legal?: ReactNode;
  className?: string;
}

/**
 * Rodapé do produto: marca + colunas de navegação + contato + linha legal.
 */
export function Footer({ brand, columns, contact, legal, className }: FooterProps) {
  return (
    <footer className={cn("bg-charcoal-500 text-ash-300", className)}>
      <div className="mx-auto max-w-container px-6 py-14 md:px-gutter">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:[grid-template-columns:1.4fr_1fr_1fr_1fr_1.4fr]">
          <div className="flex flex-col items-start gap-4">
            <div className="text-lg font-bold text-white">{brand ?? "CENPRE"}</div>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ash-400">{col.title}</h3>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-ash-300 transition-colors hover:text-white">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {contact && (
            <div className="flex flex-col gap-3">
              <h3 className="text-xs font-semibold uppercase tracking-wide text-ash-400">Contato</h3>
              <div className="text-sm leading-relaxed text-ash-400">{contact}</div>
            </div>
          )}
        </div>
        {legal && <div className="mt-12 border-t border-white/10 pt-6 text-xs text-ash-400">{legal}</div>}
      </div>
    </footer>
  );
}
