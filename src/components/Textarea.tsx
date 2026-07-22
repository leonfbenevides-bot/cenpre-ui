import { forwardRef, useId, type TextareaHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: ReactNode;
  error?: string;
}

/**
 * Área de texto rotulada (ex.: campo "Mensagem" do formulário de contato).
 * Mesmos estados e acessibilidade do `Input`.
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, hint, error, id, className, disabled, rows = 4, ...props },
  ref,
) {
  const autoId = useId();
  const fieldId = id ?? autoId;
  const describedBy = error ? `${fieldId}-error` : hint ? `${fieldId}-hint` : undefined;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={fieldId} className="text-[13px] font-semibold text-charcoal-500">
          {label}
        </label>
      )}
      <div
        className={cn(
          "rounded-chip border bg-white px-3.5 py-2.5 shadow-card transition-[border-color,box-shadow]",
          "focus-within:border-magenta-500 focus-within:ring-2 focus-within:ring-magenta-500/20",
          error
            ? "border-magenta-600 focus-within:border-magenta-600 focus-within:ring-magenta-600/20"
            : "border-ash-400",
          disabled && "bg-ash-100 opacity-60 shadow-none",
        )}
      >
        <textarea
          ref={ref}
          id={fieldId}
          rows={rows}
          disabled={disabled}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          className={cn(
            "w-full resize-y bg-transparent text-[14px] text-charcoal-500 outline-none placeholder:text-charcoal-200 focus-visible:shadow-none",
            className,
          )}
          {...props}
        />
      </div>
      {error ? (
        <p id={`${fieldId}-error`} className="text-xs text-magenta-700">
          {error}
        </p>
      ) : hint ? (
        <p id={`${fieldId}-hint`} className="text-xs text-charcoal-200">
          {hint}
        </p>
      ) : null}
    </div>
  );
});
