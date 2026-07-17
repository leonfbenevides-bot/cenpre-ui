import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Texto de apoio abaixo do campo. */
  hint?: ReactNode;
  /** Mensagem de erro (ativa o estado de erro). */
  error?: string;
  leftIcon?: ReactNode;
}

/**
 * Campo de texto rotulado. Estados: default, focus (anel), disabled, error.
 * Acessível: `label` associado por `htmlFor`, `aria-invalid`/`aria-describedby`.
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { label, hint, error, leftIcon, id, className, disabled, ...props },
  ref,
) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const describedBy = error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={inputId} className="text-[13px] font-semibold text-charcoal-500">
          {label}
        </label>
      )}
      <div
        className={cn(
          "flex items-center gap-2 rounded-chip border bg-white px-3.5 py-2.5 shadow-card transition-[border-color,box-shadow]",
          "focus-within:border-magenta-500 focus-within:ring-2 focus-within:ring-magenta-500/20",
          error ? "border-magenta-600 focus-within:border-magenta-600 focus-within:ring-magenta-600/20" : "border-ash-400",
          disabled && "bg-ash-100 opacity-60 shadow-none",
        )}
      >
        {leftIcon && <span className="shrink-0 text-charcoal-200" aria-hidden>{leftIcon}</span>}
        <input
          ref={ref}
          id={inputId}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            "w-full bg-transparent text-[14px] text-charcoal-500 outline-none placeholder:text-charcoal-200 focus-visible:shadow-none",
            className,
          )}
          {...props}
        />
      </div>
      {error ? (
        <p id={`${inputId}-error`} className="text-xs text-magenta-700">
          {error}
        </p>
      ) : hint ? (
        <p id={`${inputId}-hint`} className="text-xs text-charcoal-200">
          {hint}
        </p>
      ) : null}
    </div>
  );
});
