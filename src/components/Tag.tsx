import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const tagVariants = cva(
  "inline-flex items-center rounded-pill font-medium leading-none whitespace-nowrap",
  {
    variants: {
      tone: {
        neutral: "bg-ash-200 text-charcoal-300",
        brand: "bg-magenta-100 text-magenta-700",
        accent: "bg-ash-100 text-charcoal-200 border border-ash-300",
      },
      size: {
        sm: "text-[11px] px-2 py-0.5",
        md: "text-xs px-2.5 py-1",
      },
    },
    defaultVariants: { tone: "neutral", size: "md" },
  },
);

export type TagTone = NonNullable<VariantProps<typeof tagVariants>["tone"]>;
export type TagSize = NonNullable<VariantProps<typeof tagVariants>["size"]>;

export interface TagProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {
  children: ReactNode;
}

/**
 * Tag / badge (pílula). Usada em cards de vaga (área, fonte, modalidade),
 * eyebrows e status. Para fontes parceiras (CIEE/NUBE) use `tone="accent"`.
 */
export function Tag({ tone, size, className, children, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ tone, size }), className)} {...props}>
      {children}
    </span>
  );
}
