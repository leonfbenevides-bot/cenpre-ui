import { Avatar } from "./Avatar";
import { Tag } from "./Tag";
import { Button } from "./Button";
import { MapPinIcon, ArrowRightIcon, BuildingIcon } from "./Icons";
import { cn } from "@/lib/cn";

export interface JobCardProps {
  title: string;
  company: string;
  /** Área (ex.: Marketing). */
  area?: string;
  /** Fonte da vaga (ex.: CENPRE, NUBE). */
  source?: string;
  /** Modalidade (ex.: Estágio, Estágio obrigatório). */
  modality?: string;
  location: string;
  /** Bolsa/salário (ex.: "R$ 1.000,00 + Benefícios"). */
  salary?: string;
  /** URL do logo da empresa. */
  logoSrc?: string;
  /** Texto do botão. @default "Ver vaga" */
  actionLabel?: string;
  /** Link (abre a plataforma/portal). */
  href?: string;
  onAction?: () => void;
  className?: string;
}

/**
 * Card de vaga. Avatar da empresa + tags (área/fonte/modalidade) + título +
 * empresa + localização + bolsa + ação. Responsivo (usar em grid ou lista).
 */
export function JobCard({
  title,
  company,
  area,
  source,
  modality,
  location,
  salary,
  logoSrc,
  actionLabel = "Ver vaga",
  href,
  onAction,
  className,
}: JobCardProps) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-3 rounded-card border border-ash-300 bg-white p-5 shadow-card",
        "transition-[color,background-color,border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-magenta-300 hover:shadow-card-hover",
        className,
      )}
    >
      <Avatar src={logoSrc} alt={company} icon={<BuildingIcon size={22} />} />
      <div className="flex flex-wrap items-center gap-1.5">
        {area && <Tag tone="neutral" size="sm">{area}</Tag>}
        {source && <Tag tone={source.toUpperCase() === "CENPRE" ? "brand" : "accent"} size="sm">{source}</Tag>}
        {modality && <Tag tone="neutral" size="sm">{modality}</Tag>}
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-[15px] font-semibold text-charcoal-500">{title}</h3>
        <p className="text-[13px] text-charcoal-300">{company}</p>
      </div>
      <p className="flex items-center gap-1.5 text-[13px] text-charcoal-300">
        <MapPinIcon size={14} className="shrink-0 text-charcoal-100" />
        {location}
      </p>
      <div className="mt-auto flex flex-col gap-3 pt-1">
        {salary && <p className="text-[13px] font-semibold text-magenta-700">{salary}</p>}
        <Button
          size="sm"
          className="self-start"
          onClick={() => {
            if (onAction) onAction();
            else if (href) window.location.href = href;
          }}
          rightIcon={<ArrowRightIcon size={16} />}
        >
          {actionLabel}
        </Button>
      </div>
    </div>
  );
}
