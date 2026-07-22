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
  "inline-flex items-center justify-center gap-2 rounded-chip font-semibold transition-[color,background-color,border-color,box-shadow] disabled:pointer-events-none disabled:border-transparent disabled:bg-ash-200 disabled:text-charcoal-200 disabled:shadow-none",
  {
    variants: {
      variant: {
        primary:
          "bg-magenta-700 text-white shadow-button hover:bg-magenta-800 hover:shadow-card active:bg-magenta-900 active:shadow-button",
        secondary:
          "border border-ash-300 bg-white text-charcoal-500 shadow-button hover:border-ash-400 hover:bg-ash-100 active:bg-ash-200",
        ghost: "bg-transparent text-magenta-700 hover:bg-magenta-100 active:bg-magenta-200",
        link: "bg-transparent p-0 text-magenta-700 underline-offset-4 hover:underline",
      },
      size: {
        // Alturas fixas (shadcn/Untitled UI). Use xs/sm em contextos compactos
        // (ações dentro de card, filtros, inline); md é o padrão dos CTAs.
        xs: "h-8 gap-1.5 px-3 text-xs",
        sm: "h-9 px-4 text-sm",
        md: "h-10 px-5 text-[15px]",
        lg: "h-11 px-6 text-base",
      },
      fullWidth: { true: "w-full" },
    },
    compoundVariants: [
      { variant: "link", size: ["xs", "sm", "md", "lg"], class: "h-auto px-0 py-0" },
    ],
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type ButtonVariant = NonNullable<VariantProps<typeof buttonVariants>["variant"]>;
export type ButtonSize = NonNullable<VariantProps<typeof buttonVariants>["size"]>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
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
      {leftIcon && (
        <span className="shrink-0" aria-hidden>
          {leftIcon}
        </span>
      )}
      <Slottable>{children}</Slottable>
      {rightIcon && (
        <span className="shrink-0" aria-hidden>
          {rightIcon}
        </span>
      )}
    </Comp>
  );
});
