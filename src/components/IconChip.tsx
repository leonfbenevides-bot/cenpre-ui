import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export type IconChipSize = "sm" | "md" | "lg";
export type IconChipTone = "brand" | "neutral";

export interface IconChipProps {
  children: ReactNode;
  size?: IconChipSize;
  tone?: IconChipTone;
  className?: string;
}

const sizes: Record<IconChipSize, string> = {
  sm: "h-9 w-9 rounded-[8px]",
  md: "h-11 w-11 rounded-[10px]",
  lg: "h-12 w-12 rounded-[12px]",
};

const tones: Record<IconChipTone, string> = {
  brand: "bg-magenta-100 text-magenta-700 ring-1 ring-inset ring-magenta-200",
  neutral: "bg-ash-200 text-charcoal-300 ring-1 ring-inset ring-ash-300",
};

/**
 * Quadrado arredondado com ícone. Base visual de módulos, passos, documentos
 * e cabeçalhos de card. Passe o ícone (24px) como `children`.
 */
export function IconChip({ children, size = "md", tone = "brand", className }: IconChipProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center",
        sizes[size],
        tones[tone],
        className,
      )}
      aria-hidden
    >
      {children}
    </div>
  );
}
