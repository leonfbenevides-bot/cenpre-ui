import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface AudienceOption {
  value: string;
  label: string;
  icon?: ReactNode;
  /** Se presente, a opção navega (renderiza `<a>`); senão dispara `onChange`. */
  href?: string;
}

export interface AudienceSwitcherProps {
  options: AudienceOption[];
  /** `value` da opção ativa. */
  value: string;
  onChange?: (value: string) => void;
  /** Flutua fixo na base da tela (padrão do design). @default true */
  floating?: boolean;
  className?: string;
}

/**
 * Seletor de perfil Aluno/Empresa (controle segmentado) — alterna entre as duas
 * jornadas da home. No Figma fica **inline no meio da página** (após "O CENPRE em
 * números"); passe `floating` para fixá-lo na base. Opção ativa em magenta-soft.
 */
export function AudienceSwitcher({
  options,
  value,
  onChange,
  floating = true,
  className,
}: AudienceSwitcherProps) {
  return (
    <nav
      aria-label="Perfil de navegação"
      className={cn(
        "z-50 flex max-w-[calc(100vw-24px)] items-center gap-1.5 rounded-pill border border-ash-200 bg-white p-1.5 shadow-card sm:gap-2",
        floating && "fixed bottom-5 left-1/2 -translate-x-1/2",
        className,
      )}
    >
      {options.map((opt) => {
        const active = opt.value === value;
        const classes = cn(
          "inline-flex items-center gap-1.5 whitespace-nowrap rounded-pill px-3 py-2 text-xs font-semibold transition-colors sm:gap-2 sm:px-4 sm:text-sm",
          active
            ? "border border-magenta-200 bg-magenta-100 text-magenta-700"
            : "text-charcoal-300 hover:bg-ash-100",
        );
        const content = (
          <>
            {opt.icon && (
              <span className="shrink-0" aria-hidden>
                {opt.icon}
              </span>
            )}
            {opt.label}
          </>
        );
        return opt.href ? (
          <a
            key={opt.value}
            href={opt.href}
            className={classes}
            aria-current={active ? "page" : undefined}
          >
            {content}
          </a>
        ) : (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange?.(opt.value)}
            aria-pressed={active}
            className={classes}
          >
            {content}
          </button>
        );
      })}
    </nav>
  );
}
