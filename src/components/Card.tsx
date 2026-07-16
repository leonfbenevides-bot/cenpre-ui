import type { ElementType, HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType;
  /** Padding interno. @default "md" */
  padding?: "none" | "sm" | "md" | "lg";
  /** Realce ao passar o mouse (para cards clicáveis). */
  interactive?: boolean;
}

const paddings = {
  none: "",
  sm: "p-5",
  md: "p-6",
  lg: "p-8",
};

/**
 * Container base de card: fundo claro (ash-100), borda (ash-300), radius 16.
 * Base para FeatureCard, StepCard, DocCard, JobCard, etc.
 */
export function Card({
  as: Comp = "div",
  padding = "md",
  interactive,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <Comp
      className={cn(
        "rounded-card border border-ash-300 bg-white shadow-card",
        paddings[padding],
        interactive &&
          "transition-[color,border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-magenta-300 hover:shadow-card-hover",
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
