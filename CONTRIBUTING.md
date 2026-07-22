# Contribuindo com a CENPRE UI

Guia operacional para estender a biblioteca **sem quebrar o padrão**. O _como usar_ está
no [README.md](./README.md); o _contexto de produto e roadmap_ no [HANDOFF.md](./HANDOFF.md).
Aqui está o **como construir**.

## Princípios (não negociáveis)

1. **Tokens, nunca valores mágicos.** Cores, spacing, radius e sombras vêm do preset
   ([tailwind-preset.ts](./tailwind-preset.ts)). Use `bg-magenta-700`, `text-charcoal-500`,
   `p-token-24`, `rounded-card`. Nada de HEX cru nem valores arbitrários (`bg-[#...]`,
   `p-[13px]`). O ESLint avisa (`warning`) quando encontra um — se falta um token, **adicione
   ao preset**, não burle.
2. **`className` sempre aceito.** Todo componente mescla via `cn()` para permitir override.
3. **Variants tipadas com CVA.** Nada de `if (variant === ...)` espalhado — declare em `cva()`.
4. **Interativos via Radix.** Acordeão, tabs, diálogos etc. herdam teclado + ARIA do Radix;
   não reimplemente à mão.
5. **Copy de unidade nunca é hardcoded.** Texto que muda entre unidades vem de
   `UnidadeContent` / props (ver [HANDOFF §3](./HANDOFF.md)).

## Anatomia de um componente

Espelhe um existente — [`src/components/Tag.tsx`](./src/components/Tag.tsx) é o molde canônico:

```tsx
import type { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/cn";

export const fooVariants = cva("classes-base", {
  variants: { tone: { neutral: "…", brand: "…" } },
  defaultVariants: { tone: "neutral" },
});

export type FooTone = NonNullable<VariantProps<typeof fooVariants>["tone"]>;

export interface FooProps extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof fooVariants> {
  children: ReactNode;
}

/** JSDoc curto: o que é e onde aparece no site. */
export function Foo({ tone, className, children, ...props }: FooProps) {
  return (
    <div className={cn(fooVariants({ tone }), className)} {...props}>
      {children}
    </div>
  );
}
```

## Adicionar um componente — passo a passo

1. Crie `src/components/Foo.tsx` (um arquivo por componente, modelo copy-in).
2. Crie `src/components/Foo.stories.tsx` cobrindo as variants e estados (use os controles).
3. Exporte no barrel [`src/index.ts`](./src/index.ts) — componente + tipos públicos.
4. Rode `npm run lint && npm run typecheck` e confira a aba **Accessibility** da story.

## Adicionar uma página

As páginas do site vivem em `src/pages/` e são montadas **só com componentes da lib**.
A direção visual em uso é o redesign "Editorial Aspiracional" — **toda página nova
deve nascer como `*Redesign.tsx`**, não no padrão literal fiel ao Figma (ver
[HANDOFF.md](./HANDOFF.md) para o porquê).

1. Reaproveite os blocos comuns de [`src/pages/shared.tsx`](./src/pages/shared.tsx)
   (`PageShell`, `Breadcrumb`, `TopicCard`, `ContactLines`, `SiteFooter`,
   `FormatoEmptyState`) e os blocos editoriais de `src/components/`
   (`EditorialPageHero`, `EditorialHeading`, `EditorialCTA`, `ImageMosaic`).
2. Todo texto/dado da página entra tipado em `src/content/` (contrato em
   [`src/content/types.ts`](./src/content/types.ts)) — a página só recebe `content`/props.
3. Crie a story em `Páginas/★ Redesign/…` (siga o agrupamento existente: Aluno/Empresa/
   Conteúdos/Institucional).
4. Consulte [`src/pages/HomeRedesign.tsx`](./src/pages/HomeRedesign.tsx) como referência
   de composição antes de inventar uma seção nova.
5. Hero de subpágina **não leva foto** — use `EditorialPageHero` sem `media` (bloco
   tipográfico charcoal + textura). Foto nova só se o usuário fornecer um asset
   dedicado para aquela página (ver [IMAGENS.md](./IMAGENS.md)).
6. Fechamento da página: `EditorialCTA` (com `platformCta={false}` no `PageShell`)
   em vez do `PlatformCTA` padrão, para manter a casca visual consistente até o fim
   da página. Se sobrar um cutout avulso não usado em nenhuma outra seção da mesma
   página, passe em `image` — nunca repita a mesma imagem dentro da página.

### Página fiel ao Figma × Redesign

O padrão literal ao Figma (`PageHero`, `SectionHeading`, `PlatformCTA`) só existe
hoje como fonte de conteúdo de referência — os componentes `.tsx` ficam no repo,
mas **não têm mais story no Storybook** (removidas em 22/07/2026). Não crie página
nova nesse padrão; se for portar conteúdo de uma página fiel existente para o
redesign, o `content`/props geralmente já dá pra reaproveitar 1:1 — só a casca
visual muda.

## Definition of Done (por componente/página)

- [ ] **Tokens only** — sem HEX cru nem valores arbitrários (ESLint sem novos warnings).
- [ ] **Estados**: default · hover · active · focus-visible (anel global do `globals.css`) · disabled.
- [ ] **Responsivo mobile-first**: conferido em **390px** e **1440px** (`max-w-content` = 1296px no miolo).
- [ ] **Acessibilidade**: landmarks (`header/main/footer/nav`), um `h1` por página, `alt` real
      nas imagens, `label`/`aria-*` em formulários. `npm run test:a11y` sem violações sérias.
- [ ] **Story** criada com controles.
- [ ] **`npm run typecheck`** e **`npm run lint`** limpos (0 erros).

## Comandos

```bash
npm run dev             # showcase (documentação viva) — http://localhost:5173
npm run storybook       # Storybook (componentes reais + controles) — http://localhost:6006
npm run typecheck       # tipos
npm run lint            # ESLint (0 erros exigido; warnings de token são guias)
npm run format          # aplica Prettier (ordena classes Tailwind)
npm run test:a11y       # axe em todas as páginas (precisa do Storybook rodando) — local
```

## Fluxo de contribuição

O CI ([.github/workflows/ci.yml](./.github/workflows/ci.yml)) roda em cada push/PR:
`typecheck → lint → format:check → build-storybook`. Antes de commitar:

```bash
npm run format && npm run lint && npm run typecheck
```

`test:a11y` fica **fora do CI** (exige subir o Storybook + browsers do Playwright) — rode-o
localmente antes de entregar uma página nova.
