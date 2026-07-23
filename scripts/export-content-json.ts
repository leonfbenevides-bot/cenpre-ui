/**
 * Exporta os objetos de `src/content/*.tsx` como JSON puro — o "contrato" de
 * dados que uma API (ou app Angular) pode consumir sem depender de React.
 *
 * Único campo não-serializável no modelo de conteúdo é `icon` (um ReactNode,
 * hoje sempre um ícone Lucide de `src/components/Icons.tsx`). Este script
 * troca cada ícone pelo nome kebab-case correspondente do Lucide (ex.:
 * `<ClipboardListIcon />` → `"clipboard-list"`), que é o mesmo nome usado
 * pelo pacote `lucide-angular` — então o valor já sai pronto para qualquer
 * framework que use ícones Lucide.
 *
 * Uso: npm run export-json
 * Saída: content-json/<nome>.json (um arquivo por objeto exportado)
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { pathToFileURL } from "node:url";
import { isValidElement } from "react";
import * as Icons from "../src/components/Icons";
// Alguns arquivos de conteúdo importam ícones direto de `lucide-react` em
// vez de passar por `Icons.tsx` (ex.: campos.tsx) — mapeados à parte porque
// não aparecem no re-export.
import { Headphones, ListChecks, CheckCircle2, LayoutGrid, Headset } from "lucide-react";

import { campos } from "../src/content/campos";
import { empresa } from "../src/content/empresa";
import { orientacoes, curriculo } from "../src/content/paginas-aluno";
import { conveniadas, cadastroConvenio, parceiro } from "../src/content/paginas-empresa";
import { vagas, artigoExemplo, sobreNos, biblioteca } from "../src/content/paginas-conteudo";

// Nome kebab-case real no Lucide para cada ícone re-exportado em Icons.tsx.
// (Alguns apelidos não batem com o nome Lucide original — ex.: BuildingIcon
// é `Building2`, FaqIcon é `MessageCircleQuestion` — por isso o mapa é
// escrito à mão em vez de derivado do nome do apelido.)
const iconSlugs: Record<string, string> = {
  MapPinIcon: "map-pin",
  ChevronDownIcon: "chevron-down",
  ChevronLeftIcon: "chevron-left",
  ChevronRightIcon: "chevron-right",
  ArrowRightIcon: "arrow-right",
  ArrowUpRightIcon: "arrow-up-right",
  StarIcon: "star",
  PlusIcon: "plus",
  MinusIcon: "minus",
  CheckIcon: "check",
  SearchIcon: "search",
  BuildingIcon: "building-2",
  BriefcaseIcon: "briefcase",
  WalletIcon: "wallet",
  FileTextIcon: "file-text",
  GraduationCapIcon: "graduation-cap",
  UsersIcon: "users",
  ShieldCheckIcon: "shield-check",
  SparklesIcon: "sparkles",
  ClockIcon: "clock",
  HandshakeIcon: "handshake",
  ClipboardListIcon: "clipboard-list",
  FaqIcon: "message-circle-question",
  UploadIcon: "upload",
  AwardIcon: "award",
  LandmarkIcon: "landmark",
  SchoolIcon: "school",
  SendIcon: "send",
  HandHeartIcon: "hand-heart",
  PenLineIcon: "pen-line",
};

// Mapa por referência de componente (não por nome de variável) — mais
// confiável que adivinhar o nome, já que o objeto React em si é a chave.
const componentToSlug = new Map<unknown, string>();
for (const [alias, component] of Object.entries(Icons)) {
  const slug = iconSlugs[alias];
  if (!slug) {
    throw new Error(`Ícone novo sem slug mapeado em iconSlugs: ${alias}`);
  }
  componentToSlug.set(component, slug);
}
componentToSlug.set(Headphones, "headphones");
componentToSlug.set(ListChecks, "list-checks");
componentToSlug.set(CheckCircle2, "check-circle-2");
componentToSlug.set(LayoutGrid, "layout-grid");
componentToSlug.set(Headset, "headset");

function toJson(value: unknown, path: string): unknown {
  if (isValidElement(value)) {
    const slug = componentToSlug.get(value.type);
    if (!slug) {
      const t = value.type as { displayName?: string; name?: string; render?: { name?: string } };
      const hint = t?.displayName ?? t?.name ?? t?.render?.name ?? JSON.stringify(t);
      throw new Error(`Ícone não mapeado em ${path}: ${hint}`);
    }
    return slug;
  }
  if (Array.isArray(value)) return value.map((v, i) => toJson(v, `${path}[${i}]`));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([k, v]) => [k, toJson(v, `${path}.${k}`)]),
    );
  }
  return value;
}

const outDir = new URL(`${pathToFileURL(process.cwd()).href}/content-json/`);
mkdirSync(outDir, { recursive: true });

const exports: Record<string, unknown> = {
  campos,
  empresa,
  orientacoes,
  curriculo,
  conveniadas,
  cadastroConvenio,
  parceiro,
  vagas,
  artigoExemplo,
  sobreNos,
  biblioteca,
};

for (const [name, value] of Object.entries(exports)) {
  const json = JSON.stringify(toJson(value, name), null, 2);
  writeFileSync(new URL(`${name}.json`, outDir), json + "\n", "utf-8");
  console.log(`✓ content-json/${name}.json`);
}
