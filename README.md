# CENPRE UI

Biblioteca de componentes do **CENPRE Carreiras (UCAM)** — **React + TypeScript + Tailwind**, no padrão **shadcn/ui** (CVA + Radix UI + `cn`).
Feita para **handoff de desenvolvimento**: tokens de design extraídos do Figma, componentes tipados com props/estados e blocos de página prontos.

> **Vai desenvolver o site?** Comece pelo **[HANDOFF.md](./HANDOFF.md)** — contexto de produto, arquitetura multi-unidade (content model), roadmap de páginas, checklist de qualidade e decisões em aberto.

---

## Começando

```bash
cd cenpre-ui
npm install
npm run dev            # showcase (documentação viva) em http://localhost:5173
npm run storybook      # Storybook (componentes reais + controles) em http://localhost:6006
npm run build-storybook # gera storybook-static/ (site estático p/ compartilhar por link)
npm run typecheck      # valida os tipos
```

**Storybook publicado: https://cenpre-ui.vercel.app**

### Compartilhar via Storybook (recomendado)

`npm run build-storybook` produz `storybook-static/` — um site estático que renderiza os **componentes React reais** (não uma réplica). Faça deploy dessa pasta para compartilhar por link: **Vercel / Netlify / GitHub Pages** (`storybook-static/`) ou **Chromatic** (`npx chromatic`). É a forma canônica de handoff visual — sem risco de divergir do código.

Os componentes ficam em `src/components/` (copy-in, sem caixa-preta). Importe pelo barrel:

```tsx
import { Button, JobCard, AccordionList } from "cenpre-ui"; // ou "@/index" no monorepo
```

---

## Design tokens

Extraídos do arquivo Figma "UCAM SITE". Definidos em `tailwind.config.ts` (classes Tailwind) e em `src/styles/globals.css` (CSS vars para uso fora do Tailwind).

| Grupo                    | Tokens                                                                                                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Marca (magenta)**      | `100 #fff0f5` · `200 #ffdde8` · `300 #fcb9ce` · `400 #f494b2` · `500 #ea7095` · `600 #d64e76` · **`700 #b4365b` (primária)** · `800 #922243` · `900 #70132f` · `1000 #530e23` |
| **Ash (neutros claros)** | `100 #f9fafb` · `200 #f1f3f5` · `300 #e2e6e9` · `400 #d6dce0` · `600 #939eaa`                                                                                                 |
| **Charcoal (texto)**     | `100 #758493` · `200 #566574` · `300 #415260` · `400 #3c4b57` (corpo) · `500 #303e49` (títulos)                                                                               |
| **Spacing**              | escala `4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 56 · 64 · 80 · 96` (px) — `spacing.token-*`                                                                                |
| **Radius**               | `chip 8px` · `card 16px` · `pill 100px`                                                                                                                                       |
| **Fonte**                | **Work Sans** (títulos/display — `font-display`) · **Inter** (corpo/UI — `font-sans`, padrão) · **Fraunces** (display editorial — `font-editorial`, só nas páginas `*Redesign`) |
| **Ícones**               | [Lucide](https://lucide.dev/icons/) (`lucide-react`) — padrão shadcn                                                                                                          |

Uso em Tailwind: `bg-magenta-700`, `text-charcoal-500`, `border-ash-300`, `rounded-card`, `p-token-24`.

---

## Componentes

Estados interativos: **default · hover · active · focus-visible** (anel global acessível) **· disabled**. Todos aceitam `className` (mesclado via `tailwind-merge`).

### Primitivos

| Componente | Props principais                                                                                             | Notas                                                   |
| ---------- | ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------- |
| `Button`   | `variant` (primary/secondary/ghost/link), `size` (sm/md/lg), `fullWidth`, `leftIcon`, `rightIcon`, `asChild` | CVA; `asChild` renderiza `<a>` mantendo o estilo        |
| `Tag`      | `tone` (neutral/brand/accent), `size` (sm/md)                                                                | Fontes parceiras (CIEE/NUBE) → `tone="accent"`          |
| `Input`    | `label`, `hint`, `error`, `leftIcon` + props nativas                                                         | Acessível (`label`, `aria-invalid`, `aria-describedby`) |
| `Textarea` | `label`, `hint`, `error`, `rows`                                                                             | idem Input                                              |
| `Avatar`   | `src`, `fallback` (iniciais), `icon`, `size`                                                                 | logo de empresa no JobCard                              |
| `IconChip` | `size`, `tone`                                                                                               | quadrado com ícone (módulos/passos/docs)                |
| `Divider`  | `orientation`                                                                                                |                                                         |

### Composição

| Componente       | Props principais                                                                                         |
| ---------------- | -------------------------------------------------------------------------------------------------------- |
| `SectionHeading` | `eyebrow`, `title`, `subtitle`, `align`, `as`                                                            |
| `Card`           | `as`, `padding`, `interactive`                                                                           |
| `FeatureCard`    | `icon`, `title`, `description` — cobre **módulos** e **números**                                         |
| `StepCard`       | `number`, `title`, `description`, `icon`                                                                 |
| `DocCard`        | `label`, `icon`, `items[]`                                                                               |
| `JobCard`        | `title`, `company`, `area`, `source`, `modality`, `location`, `salary`, `logoSrc`, `actionLabel`, `href` |
| `LogoBand`       | `items[]` (`{name, src?, href?}`) — Centrais parceiras                                                   |
| `Pagination`     | `page`, `totalPages`, `onPageChange`, `siblingCount`                                                     |
| `Carousel`       | `slides[]`, `ariaLabel`, `arrows`, `dots` — acessível (setas/dots/teclado ← →)                           |

### Interativos (Radix)

| Componente  | API                                                                                                                                       |
| ----------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `Accordion` | composável (`Accordion`/`AccordionItem`/`AccordionTrigger`/`AccordionContent`) **ou** atalho `AccordionList items={[{question, answer}]}` |
| `Tabs`      | composável (`Tabs`/`TabsList`/`TabsTrigger`/`TabsContent`) **ou** atalho `TabsPills items={[{value, label, content}]}`                    |

### Blocos de página

| Componente    | Props principais                                                                          |
| ------------- | ----------------------------------------------------------------------------------------- |
| `PageHero`    | `eyebrow`, `title`, `subtitle`, `actions`, `pills`, `breadcrumb`, `align` (fundo magenta) |
| `ContactForm` | `title`, `description`, `contactLines`, `onSubmit` — "FALE COM A GENTE" responsivo        |
| `PlatformCTA` | `title`, `description`, `primaryHref/onPrimary`, `secondaryLabel`, `media`                |
| `Header`      | `brand`, `navItems[]`, `ctaLabel/ctaHref`, `aside` — menu hambúrguer no mobile            |
| `Footer`      | `brand`, `columns[]`, `contact`, `legal`                                                  |

### Blocos do redesign editorial ("Editorial Aspiracional")

Usados nas páginas `*Redesign.tsx` (stories `Páginas/★ Redesign/…`) — ver
[HANDOFF.md](./HANDOFF.md) para a direção visual e o mapa página fiel × redesign.

| Componente          | Props principais                                                                                    | Onde fica                |
| -------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------- |
| `EditorialPageHero`  | mesma API do `PageHero` (`eyebrow`, `title`, `subtitle`, `actions`, `pills`, `breadcrumb`, `media`)     | `src/components/`         |
| `EditorialHeading`   | `eyebrow`, `title`, `subtitle`, `align`, `size` (md/lg), `tone` (light/dark)                            | `src/components/`         |
| `EditorialCTA`       | `eyebrow`, `title`, `actions`, `image`/`imageAlt` (cutout opcional à direita)                           | `src/components/`         |
| `ImageMosaic`        | `images[]` (3-4, mesma pessoa/sessão), `ringTone` — colagem sobreposta com blocos de acento magenta      | `src/components/`         |
| `Marquee`            | `children`, `durationSeconds` — faixa que rola sozinha (duplica o conteúdo por baixo do capô)            | `src/pages/shared.tsx`    |
| `KeywordTicker`      | `items[]` — usa `Marquee` por baixo, fundo branco, separador em bolinha magenta                          | `src/pages/shared.tsx`    |
| `CompactNewsCard`    | `image`, `date`, `title`, `href` — card de notícia compacto (rail lateral)                               | `src/pages/shared.tsx`    |
| `FormatoEmptyState`  | `formato` — empty state ilustrado de uma aba de formato sem conteúdo ainda                              | `src/pages/shared.tsx`    |

> `EditorialCTA` com `image`: o `<img>` usa `absolute inset-y-0` (top+bottom) com
> largura fixa — **precisa de `h-full` explícito**, senão o navegador calcula a
> altura pela proporção intrínseca da imagem em vez de esticar pro container e o
> cutout sai cortado pelo `overflow-hidden` (bug de CSS real, já caiu nessa uma
> vez).

---

## Breakpoints

Segue o padrão Tailwind (mobile-first). Referências do design: **mobile 390px** e **desktop 1440px** (conteúdo `max-w-content` = 1296px). Principais quebras usadas: `sm 640` · `md 768` · `lg 1024`.

---

## Estrutura

```
cenpre-ui/
├─ src/
│  ├─ components/     # um arquivo por componente (copy-in)
│  ├─ lib/cn.ts       # clsx + tailwind-merge
│  ├─ styles/globals.css
│  ├─ index.ts        # barrel de exportação
│  ├─ App.tsx         # showcase / documentação viva
│  └─ main.tsx
├─ tailwind.config.ts # tokens
└─ package.json
```

## Usar em um projeto existente

Modelo **copy-in** (shadcn): o código-fonte é o entregável. Para consumir os componentes no seu app:

1. **Copie** `src/components/`, `src/lib/cn.ts` e `src/styles/globals.css` para o seu projeto (ou instale este pacote).
2. **Dependências:** `npm i clsx tailwind-merge class-variance-authority lucide-react @radix-ui/react-accordion @radix-ui/react-tabs @radix-ui/react-slot`.
3. **Tokens:** aplique o preset no seu `tailwind.config.ts`:

```ts
import cenprePreset from "cenpre-ui/tailwind-preset"; // ou o caminho relativo copiado

export default {
  presets: [cenprePreset],
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/cenpre-ui/src/**/*.{ts,tsx}", // se instalado como pacote
  ],
};
```

4. **Estilos base:** importe `globals.css` uma vez na raiz do app (traz Work Sans, as CSS vars e o anel de foco acessível).

## Convenções (padrão shadcn/ui)

- Variants tipadas com **CVA** (`class-variance-authority`).
- Acessibilidade dos interativos via **Radix UI** (teclado + ARIA).
- `cn()` para merge de classes; `className` sempre aceito para override.
- Componentes são **fonte no repositório** — o time adapta livremente.
