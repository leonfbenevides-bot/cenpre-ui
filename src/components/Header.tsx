import { useState, type ReactNode } from "react";
import { Button } from "./Button";
import { cn } from "@/lib/cn";

export interface NavItem {
  label: string;
  href: string;
}

export interface HeaderProps {
  /** Logo/marca (ReactNode) à esquerda. */
  brand?: ReactNode;
  navItems: NavItem[];
  ctaLabel?: string;
  ctaHref?: string;
  /** Slot opcional (ex.: seletor de perfil Aluno/Empresa). */
  aside?: ReactNode;
  className?: string;
}

/**
 * Header/navbar do produto. Nav horizontal no desktop, menu hambúrguer no mobile.
 */
export function Header({
  brand,
  navItems,
  ctaLabel = "Acessar plataforma",
  ctaHref,
  aside,
  className,
}: HeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cn("sticky top-0 z-40 border-b border-ash-200 bg-white", className)}>
      <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-6 px-6 md:px-gutter">
        <div className="flex items-center gap-2 font-bold text-magenta-800">
          {brand ?? "CENPRE"}
        </div>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-charcoal-300 transition-colors hover:text-magenta-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          {aside}
          {ctaHref ? (
            <Button asChild size="sm">
              <a href={ctaHref}>{ctaLabel}</a>
            </Button>
          ) : (
            <Button size="sm">{ctaLabel}</Button>
          )}
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden>
            <span className="h-0.5 w-6 bg-charcoal-500" />
            <span className="h-0.5 w-6 bg-charcoal-500" />
            <span className="h-0.5 w-6 bg-charcoal-500" />
          </span>
        </button>
      </div>

      {open && (
        <div className="border-t border-ash-200 bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3" aria-label="Menu">
            {aside && <div className="pb-2">{aside}</div>}
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-charcoal-400">
                {item.label}
              </a>
            ))}
            <Button size="sm" fullWidth className="mt-2" {...(ctaHref ? { asChild: true } : {})}>
              {ctaHref ? <a href={ctaHref}>{ctaLabel}</a> : ctaLabel}
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
