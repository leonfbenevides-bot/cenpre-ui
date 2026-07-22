import { useState, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps {
  /** URL do logo/foto da empresa. Se ausente (ou se falhar ao carregar),
   *  cai para `fallback` (iniciais) ou `icon` (ícone default de empresa). */
  src?: string;
  alt?: string;
  /** Iniciais exibidas quando não há imagem. */
  fallback?: string;
  /** Ícone default (ex.: prédio) exibido quando não há imagem nem iniciais. */
  icon?: ReactNode;
  size?: AvatarSize;
  className?: string;
}

const sizes: Record<AvatarSize, string> = {
  sm: "h-9 w-9 text-xs rounded-[8px]",
  md: "h-11 w-11 text-sm rounded-[10px]",
  lg: "h-14 w-14 text-base rounded-[12px]",
};

/**
 * Avatar/logo de empresa (JobCard, lista de vagas). Dinâmica marca × fallback:
 * mostra o **logo da empresa** sobre fundo branco quando há `src` válido; se o
 * `src` faltar ou falhar ao carregar, cai para as **iniciais** ou para o
 * **ícone default de empresa** sobre o fundo suave da marca.
 */
export function Avatar({ src, alt = "", fallback, icon, size = "md", className }: AvatarProps) {
  const [imgError, setImgError] = useState(false);
  const showImg = Boolean(src) && !imgError;

  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden font-semibold",
        showImg ? "border border-ash-300 bg-white" : "bg-magenta-100 text-magenta-700",
        sizes[size],
        className,
      )}
    >
      {showImg ? (
        <img
          src={src}
          alt={alt}
          onError={() => setImgError(true)}
          className="h-full w-full object-contain p-1.5"
        />
      ) : fallback ? (
        <span aria-hidden>{fallback.slice(0, 2).toUpperCase()}</span>
      ) : (
        <span aria-hidden className="text-magenta-700">
          {icon}
        </span>
      )}
    </div>
  );
}
