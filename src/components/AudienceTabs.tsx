import { UsersIcon, BuildingIcon } from "./Icons";
import { cn } from "@/lib/cn";

export type Audience = "aluno" | "empresa";

export interface AudienceTabsProps {
  /** Perfil ativo — define qual tab recebe o sublinhado magenta. */
  active: Audience;
  /** Destinos de cada tab. */
  alunoHref?: string;
  empresaHref?: string;
  className?: string;
}

const tabBase =
  "flex items-center gap-2 border-b-2 px-6 py-5 text-sm transition-colors md:text-[15px]";

/**
 * Seletor de perfil Aluno/Empresa — **barra full-width que divide as seções**
 * (padrão do Figma): uma linha atravessa a tela e as duas tabs ficam ao centro,
 * com a ativa sublinhada em magenta.
 */
export function AudienceTabs({
  active,
  alunoHref = "/",
  empresaHref = "/empresa",
  className,
}: AudienceTabsProps) {
  const tabs = [
    { key: "aluno" as const, label: "Sou um aluno ou Egresso", icon: UsersIcon, href: alunoHref },
    { key: "empresa" as const, label: "Sou uma empresa", icon: BuildingIcon, href: empresaHref },
  ];
  return (
    <div
      className={cn("border-y border-ash-300 bg-white", className)}
      role="tablist"
      aria-label="Perfil de navegação"
    >
      <div className="mx-auto flex max-w-container items-stretch justify-center">
        {tabs.map(({ key, label, icon: Icon, href }) => {
          const isActive = key === active;
          return (
            <a
              key={key}
              href={href}
              role="tab"
              aria-selected={isActive}
              className={cn(
                tabBase,
                isActive
                  ? "border-magenta-700 font-semibold text-magenta-700"
                  : "border-transparent font-medium text-charcoal-300 hover:text-magenta-700",
              )}
            >
              <Icon size={17} />
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
}
