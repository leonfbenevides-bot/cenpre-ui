import * as AccordionPrimitive from "@radix-ui/react-accordion";
import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ElementRef,
  type ReactNode,
} from "react";
import { PlusIcon, MinusIcon } from "./Icons";
import { cn } from "@/lib/cn";

/**
 * Accordion acessível (teclado + ARIA) sobre Radix, estilo shadcn.
 * API composável: `Accordion` > `AccordionItem` > `AccordionTrigger` + `AccordionContent`.
 * Para a FAQ do CENPRE, use o atalho `<AccordionList items={...} />`.
 */
export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = forwardRef<
  ElementRef<typeof AccordionPrimitive.Item>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(function AccordionItem({ className, ...props }, ref) {
  return (
    <AccordionPrimitive.Item ref={ref} className={cn("border-b border-ash-200", className)} {...props} />
  );
});

export const AccordionTrigger = forwardRef<
  ElementRef<typeof AccordionPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(function AccordionTrigger({ className, children, ...props }, ref) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "group flex flex-1 items-center justify-between gap-4 py-5 text-left text-[17px] font-semibold leading-snug text-charcoal-500 transition-colors hover:text-magenta-700 data-[state=open]:text-charcoal-500",
          className,
        )}
        {...props}
      >
        {children}
        <span
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-pill text-charcoal-100 transition-colors group-hover:text-magenta-700 group-data-[state=open]:bg-magenta-100 group-data-[state=open]:text-magenta-700"
          aria-hidden
        >
          <PlusIcon size={18} className="group-data-[state=open]:hidden" />
          <MinusIcon size={18} className="hidden group-data-[state=open]:block" />
        </span>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
});

export const AccordionContent = forwardRef<
  ElementRef<typeof AccordionPrimitive.Content>,
  ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(function AccordionContent({ className, children, ...props }, ref) {
  return (
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden text-[15px] leading-relaxed text-charcoal-400 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up"
      {...props}
    >
      <div className={cn("pb-5 pr-8", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
});

export interface AccordionListItem {
  /** id único; se ausente, usa o índice. */
  value?: string;
  question: ReactNode;
  answer: ReactNode;
}

export interface AccordionListProps {
  items: AccordionListItem[];
  /** "single" (um aberto por vez) ou "multiple". @default "single" */
  type?: "single" | "multiple";
  /** Permite fechar todos (apenas em single). @default true */
  collapsible?: boolean;
  className?: string;
}

/** Atalho para renderizar uma lista de perguntas/respostas (FAQ). */
export function AccordionList({ items, type = "single", collapsible = true, className }: AccordionListProps) {
  const common = { className: cn("w-full", className) };
  const content = items.map((item, i) => {
    const value = item.value ?? `item-${i}`;
    return (
      <AccordionItem key={value} value={value}>
        <AccordionTrigger>{item.question}</AccordionTrigger>
        <AccordionContent>{item.answer}</AccordionContent>
      </AccordionItem>
    );
  });
  return type === "single" ? (
    <Accordion type="single" collapsible={collapsible} {...common}>
      {content}
    </Accordion>
  ) : (
    <Accordion type="multiple" {...common}>
      {content}
    </Accordion>
  );
}
