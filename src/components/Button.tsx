import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

/**
 * Variants do botão no padrão shadcn/ui (CVA).
 * - variant: primary | secondary | ghost | link
 * - size: sm | md | lg
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold rounded-chip transition-[color,background-color,border-color,box-shadow] disabled:pointer-events-none disabled:border-transparent disabled:bg-ash-200 disabled:text-charcoal-100 disabled:shadow-none",
  {
    variants: {
      variant: {
        primary: "bg-magenta-700 text-white shadow-button hover:bg-magenta-800 hover:shadow-card active:bg-magenta-900 active:shadow-button",
        secondary:
          "bg-white text-charcoal-500 border border-ash-300 shadow-button hover:bg-ash-100 hover:border-ash-400 active:bg-ash-200",
        ghost: "bg-transparent text-magenta-700 hover:bg-magenta-100 active:bg-magenta-200",
        link: "bg-transparent text-magenta-700 underline-offset-4 hover:underline p-0",
      },
      size: {
        // Alturas fixas (shadcn/Untitled UI). Use xs/sm em contextos compactos
        // (ações dentro de card, filtros, inline); md é o padrão dos CTAs.
        xs: "h-8 text-xs px-3 gap-1.5",
        sm: "h-9 text-sm px-4",
        md: "h-10 text-[15px] px-5",
        lg: "h-11 text-base px-6",
      },
      fullWidth: { true: "w-full" },
    },
    compoundVariants: [{ variant: "link", size: ["xs", "sm", "md", "lg"], class: "h-auto px-0 py-0" }],
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  /** Renderiza o filho como raiz (ex.: `<a>`), herdando os estilos. Padrão shadcn. */
  asChild?: boolean;
}

/**
 * Botão base. Estados: default, hover, active, focus-visible (anel global), disabled.
 * Use `asChild` para transformar em link mantendo o estilo:
 * `<Button asChild><a href="/x">Ir</a></Button>`.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant, size, fullWidth, leftIcon, rightIcon, asChild, className, children, type, ...props },
  ref,
) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      ref={ref}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...(asChild ? {} : { type: type ?? "button" })}
      {...props}
    >
      {leftIcon && <span className="shrink-0" aria-hidden>{leftIcon}</span>}
      <Slottable>{children}</Slottable>
      {rightIcon && <span className="shrink-0" aria-hidden>{rightIcon}</span>}
    </Comp>
  );
});
