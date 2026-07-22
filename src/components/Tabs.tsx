import * as TabsPrimitive from "@radix-ui/react-tabs";
import { forwardRef, type ComponentPropsWithoutRef, type ElementRef, type ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Tabs acessíveis (teclado + ARIA) sobre Radix, estilo shadcn, com o visual
 * de "pílulas" do CENPRE (ativa = magenta, inativa = neutra).
 * API composável ou atalho `<TabsPills items={...} />`.
 */
export const Tabs = TabsPrimitive.Root;

export const TabsList = forwardRef<
  ElementRef<typeof TabsPrimitive.List>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(function TabsList({ className, ...props }, ref) {
  return (
    <TabsPrimitive.List
      ref={ref}
      className={cn("inline-flex flex-wrap items-center gap-2", className)}
      {...props}
    />
  );
});

export const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(function TabsTrigger({ className, ...props }, ref) {
  return (
    <TabsPrimitive.Trigger
      ref={ref}
      className={cn(
        "inline-flex items-center gap-2 rounded-pill px-5 py-2.5 text-sm font-medium transition-[color,background-color,box-shadow]",
        "text-charcoal-300 hover:bg-ash-100 hover:text-charcoal-500",
        "data-[state=active]:bg-magenta-700 data-[state=active]:text-white data-[state=active]:shadow-card hover:data-[state=active]:bg-magenta-700",
        className,
      )}
      {...props}
    />
  );
});

export const TabsContent = forwardRef<
  ElementRef<typeof TabsPrimitive.Content>,
  ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(function TabsContent({ className, ...props }, ref) {
  return <TabsPrimitive.Content ref={ref} className={cn("mt-6", className)} {...props} />;
});

export interface TabsPillItem {
  value: string;
  label: ReactNode;
  content: ReactNode;
}

export interface TabsPillsProps {
  items: TabsPillItem[];
  defaultValue?: string;
  className?: string;
}

/** Atalho: renderiza a lista de pílulas + os painéis. */
export function TabsPills({ items, defaultValue, className }: TabsPillsProps) {
  return (
    <Tabs defaultValue={defaultValue ?? items[0]?.value} className={className}>
      <TabsList>
        {items.map((t) => (
          <TabsTrigger key={t.value} value={t.value}>
            {t.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((t) => (
        <TabsContent key={t.value} value={t.value}>
          {t.content}
        </TabsContent>
      ))}
    </Tabs>
  );
}
