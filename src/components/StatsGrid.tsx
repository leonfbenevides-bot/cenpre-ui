import { cn } from "@/lib/cn";

export interface StatItem {
  value: string;
  label: string;
}

export interface StatsGridProps {
  stats: StatItem[];
  /** `light` = cards brancos com moldura; `dark` = faixa escura sem moldura. */
  tone?: "light" | "dark";
  className?: string;
}

/**
 * Grade de números do CENPRE. `light` é a faixa "O CENPRE em números" das homes
 * (cards emoldurados, valor em magenta); `dark` é a faixa charcoal de destaque.
 */
export function StatsGrid({ stats, tone = "light", className }: StatsGridProps) {
  if (tone === "dark") {
    return (
      <div className={cn("grid gap-10 md:grid-cols-4", className)}>
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-editorial text-[clamp(1.9rem,3.5vw,2.75rem)] font-semibold leading-none text-white">
              {s.value}
            </p>
            <p className="mt-3 text-sm text-white/60">{s.label}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div
      className={cn(
        "grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ash-300 bg-ash-300 lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-white p-8 transition-colors hover:bg-magenta-100/40 md:p-10"
        >
          <p className="font-editorial text-[1.9rem] font-semibold leading-[1.08] tracking-[-0.01em] text-magenta-700 md:text-[2.5rem]">
            {s.value}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-charcoal-300">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
