import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * `cn` — junta classes condicionalmente (clsx) e resolve conflitos do
 * Tailwind (tailwind-merge). Use em todos os componentes para permitir
 * override de classes via prop `className`.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
