import type React from "react";
import {
  ArrowRightIcon, SearchIcon, BriefcaseIcon, BuildingIcon, UsersIcon,
  ShieldCheckIcon, GraduationCapIcon, FileTextIcon, SparklesIcon, ClockIcon,
  HandshakeIcon, ClipboardListIcon, CheckIcon, MapPinIcon, WalletIcon,
} from "../components/Icons";

/**
 * Helpers de controls do Storybook.
 *
 * Props `ReactNode` viram controles JSON inúteis no painel. Estes argTypes
 * trocam isso por selects legíveis: o usuário escolhe o ícone pelo nome e o
 * `mapping` entrega o elemento React correspondente.
 */

const icones = {
  nenhum: undefined,
  seta: <ArrowRightIcon size={16} />,
  busca: <SearchIcon size={16} />,
  estagio: <BriefcaseIcon size={22} />,
  empresa: <BuildingIcon size={22} />,
  pessoas: <UsersIcon size={22} />,
  seguranca: <ShieldCheckIcon size={22} />,
  graduacao: <GraduationCapIcon size={22} />,
  documento: <FileTextIcon size={22} />,
  brilho: <SparklesIcon size={22} />,
  relogio: <ClockIcon size={22} />,
  parceria: <HandshakeIcon size={22} />,
  checklist: <ClipboardListIcon size={22} />,
  check: <CheckIcon size={22} />,
  local: <MapPinIcon size={22} />,
  bolsa: <WalletIcon size={22} />,
} as const;

/** argType de ícone: select por nome (ex.: `leftIcon: iconArg`). */
export const iconArg = {
  options: Object.keys(icones),
  mapping: icones,
  control: { type: "select" as const },
};

/** Igual ao iconArg, mas em tamanho 16px (ícones de botão/input). */
export const iconArgSm = {
  options: Object.keys(icones),
  mapping: Object.fromEntries(
    Object.entries(icones).map(([k, v]) => [
      k,
      v ? <span className="[&>svg]:h-4 [&>svg]:w-4">{v}</span> : undefined,
    ]),
  ),
  control: { type: "select" as const },
};

/** Esconde um controle do painel (props internas/ReactNode complexos). */
export const hidden = { table: { disable: true } } as const;

/**
 * Valor inicial de um arg de ícone: passe o NOME (ex.: `icon: iconName("estagio")`).
 * O `mapping` do argType converte o nome no elemento na hora de renderizar.
 */
export function iconName(name: keyof typeof icones): React.ReactNode {
  return name as unknown as React.ReactNode;
}
