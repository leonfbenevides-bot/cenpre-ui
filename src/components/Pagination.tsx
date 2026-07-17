import { Button } from "./Button";
import { ArrowRightIcon } from "./Icons";
import { cn } from "@/lib/cn";

export interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  /** Quantidade de páginas numeradas visíveis ao redor da atual. @default 5 */
  siblingCount?: number;
  className?: string;
}

function range(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

/**
 * Paginação (Anterior / números / Próximo) com reticências.
 */
export function Pagination({ page, totalPages, onPageChange, siblingCount = 5, className }: PaginationProps) {
  const pages: (number | "…")[] = [];
  if (totalPages <= siblingCount + 2) {
    pages.push(...range(1, totalPages));
  } else {
    pages.push(1);
    const left = Math.max(2, page - 1);
    const right = Math.min(totalPages - 1, page + 1);
    if (left > 2) pages.push("…");
    pages.push(...range(left, right));
    if (right < totalPages - 1) pages.push("…");
    pages.push(totalPages);
  }

  return (
    <nav className={cn("flex items-center justify-between gap-4", className)} aria-label="Paginação">
      <Button variant="secondary" size="sm" disabled={page <= 1} onClick={() => onPageChange?.(page - 1)}>
        <span className="rotate-180"><ArrowRightIcon size={16} /></span>
        Anterior
      </Button>
      <ul className="flex items-center gap-1">
        {pages.map((p, i) =>
          p === "…" ? (
            <li key={`gap-${i}`} className="px-2 text-sm text-charcoal-200">
              …
            </li>
          ) : (
            <li key={p}>
              <button
                onClick={() => onPageChange?.(p)}
                aria-current={p === page ? "page" : undefined}
                className={cn(
                  "flex h-9 min-w-9 items-center justify-center rounded-lg px-3 text-sm font-medium transition-colors",
                  p === page ? "bg-magenta-700 text-white" : "text-charcoal-300 hover:bg-ash-100",
                )}
              >
                {p}
              </button>
            </li>
          ),
        )}
      </ul>
      <Button variant="secondary" size="sm" disabled={page >= totalPages} onClick={() => onPageChange?.(page + 1)}>
        Próximo
        <ArrowRightIcon size={16} />
      </Button>
    </nav>
  );
}
