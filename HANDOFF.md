# HANDOFF — Portal CENPRE Carreiras (UCAM)

Documento de passagem para o time de desenvolvimento. O **como usar a lib** está no
[README.md](./README.md); aqui está o **contexto de produto, arquitetura recomendada,
roadmap e decisões** que você precisa antes de escrever a primeira linha do site.

---

## 1. O produto em uma frase

Portal de carreiras e empregabilidade do CENPRE (Centro de Práticas Empresariais da
UCAM), que **expande de Campos dos Goytacazes para todas as unidades e polos**, com
conteúdo próprio (orientações, convênios, notícias, FAQ) e ponte para a plataforma de
vagas externa.

| Referência                                | Link                                                                             |
| ----------------------------------------- | -------------------------------------------------------------------------------- |
| Figma (fonte da verdade visual)           | https://www.figma.com/design/rJQ9FsS9Y5sg8RjkCkDHhA/UCAM-SITE?node-id=2666-89499 |
| Storybook publicado (componentes ao vivo) | https://cenpre-ui.vercel.app                                                     |
| Repositório                               | https://github.com/leonfbenevides-bot/cenpre-ui                                  |
| Plataforma de vagas (Symplicity)          | https://ucam-csm.symplicity.com/                                                 |
| Contato CENPRE (geral)                    | atendimento.cenpre@ucam-campos.br                                                |
| Contato convênios                         | convenio.estagio@ucam-campos.br · (22) 2726-2419 · WhatsApp (22) 99618-0786      |

**Dois públicos, duas jornadas:** Alunos/Egressos (estágio, currículo, vagas,
convênios, conteúdo) e Empresas (parceria, convênio, divulgação de vagas). O layout
usa um seletor de perfil Aluno/Empresa no topo (slot `aside` do `Header`).

> ## ⚠️ Direção visual final: "Editorial Aspiracional" (definida em 22/07/2026)
>
> O Figma (link acima) é a **fonte de conteúdo/copy**, não mais o alvo visual final.
> A partir de 22/07/2026 a direção visual aprovada é o piloto **"Editorial
> Aspiracional"**: tipografia display **Fraunces** (`font-editorial`, ver §Design
> tokens do [README](./README.md)), fotografia cinematográfica full-bleed,
> composições/colagens de fotos, faixas animadas (`Marquee`) e paleta mais
> contrastada (charcoal-500 + magenta + glow). As páginas "fiéis ao Figma" listadas
> na tabela do §4 (`TemplateUnidade`, `HomeEmpresa`, `OrientacoesEstagio` etc.)
> **continuam existindo e são a fonte de conteúdo completo** — não delete —, mas
> **para desenvolvimento novo, use as páginas `*Redesign.tsx`** (stories em
> `Páginas/★ Redesign/…` e `Páginas/★ Home — Redesign (piloto)`), que têm o mesmo
> `content`/props das páginas fiéis, só a casca visual muda. Componentes-base do
> redesign: `EditorialPageHero`, `EditorialHeading`, `EditorialCTA`, `ImageMosaic`,
> `Marquee`, `CompactNewsCard` (todos em `src/components/`, exceto os dois últimos
> que ficam em `src/pages/shared.tsx`).
>
> Regras de imagem aprendidas na prática (documentadas em detalhe no
> [IMAGENS.md](./IMAGENS.md)): nunca repetir a mesma foto em duas seções da mesma
> página; conjuntos de fotos da mesma pessoa/sessão são **só** para colagens
> (`ImageMosaic`), nunca espalhados como banners individuais; heros de subpágina
> **não** têm foto (bloco tipográfico via `EditorialPageHero`) porque o estoque de
> fotos avulsas boas já foi consumido pelos heros da Home. `EditorialCTA` suporta
> `image` (cutout), mas **não está em uso** — o usuário rejeitou o visual de recorte
> nos CTAs (23/07/2026); todos ficam só com texto + glow até chegar foto com fundo
> completo dedicada a esse uso.

## 2. O que já está pronto (e o que é entregável)

- **`src/components/`** — ~25 componentes tipados no padrão shadcn/ui (CVA + Radix),
  todos com estados (hover/active/focus-visible/disabled) e stories. Modelo
  **copy-in**: o código é o entregável, adapte à vontade.
- **Tokens** — extraídos do Figma em [tailwind.config.ts](./tailwind.config.ts) e
  [tailwind-preset.ts](./tailwind-preset.ts) (cores magenta/ash/charcoal, spacing,
  radius, fontes Work Sans + Inter). **Nunca use HEX cru no site: se falta um token,
  adicione ao preset.**
- **`src/pages/HomeRedesign.tsx`** — home completa (Aluno + Empresa) no visual
  final "Editorial Aspiracional", montada só com componentes da lib. É a **prova
  de composição** a seguir para páginas novas. `src/pages/TemplateUnidade.tsx`
  é a versão fiel ao Figma equivalente — útil para conferir se algum
  conteúdo/seção ficou de fora do redesign, não como referência visual.
- **`src/content/`** — modelo de conteúdo multi-unidade (ver §3).
- **Storybook** — `npm run storybook` (dev) / `npm run build-storybook` (estático).
  Inclui addon de acessibilidade (aba "Accessibility" em cada story).

## 3. Arquitetura recomendada: multi-unidade = conteúdo, não código

A decisão estrutural mais importante do projeto: **o que muda entre unidades é dado,
não JSX**.

- O contrato está em [src/content/types.ts](./src/content/types.ts)
  (`UnidadeContent`): hero, KPIs, tópicos, vagas em destaque, depoimentos, motivos,
  notícias, FAQ e contatos.
- [src/content/campos.tsx](./src/content/campos.tsx) é o exemplo canônico
  (unidade Campos). Nova unidade = novo arquivo de conteúdo + rota
  (`/unidades/campos`, `/unidades/niteroi`, …) renderizando
  `<TemplateUnidade content={...} />`.
- Copy global (títulos de seção, eyebrows, labels de CTA) vive no template — se o
  texto é igual em todas as unidades, ele **não** entra no `UnidadeContent`.
- Quando o site ganhar CMS (ver §6), `UnidadeContent` vira o schema da coleção
  "Unidade"; os arquivos `.tsx` de conteúdo são a versão estática provisória.

## 4. Roadmap de páginas (o que o Figma tem além da home)

Prototipado no Figma e validado em HTML durante o design (pasta `UCAM/` tem os
screenshots de referência). Componentes da lib já cobrem a maior parte.

**Use as páginas da coluna "Redesign"** — são o que está no ar em
https://cenpre-ui.vercel.app (stories `Páginas/★ Redesign/…` e
`Páginas/★ Home — Redesign (piloto)`). As da coluna "Fiel ao Figma" continuam no
repo como fonte de conteúdo completo (é de lá que a coluna Redesign puxa
`content`/props — mesmo componente `content/*`, casca visual diferente), mas
**não têm mais story no Storybook** (removidas em 22/07/2026 para não confundir
handoff visual — se precisar ver uma, importe o componente direto ou recrie a
story temporariamente):

| Página                                         | Redesign (usar)               | Fiel ao Figma (sem story)       | Conteúdo                                                             |
| ---------------------------------------------- | ----------------------------- | ------------------------------- | -------------------------------------------------------------------- |
| Home Aluno + Empresa (tab por estado)          | `HomeRedesign`                | `TemplateUnidade`/`HomeEmpresa` | `content/campos.tsx` + `content/empresa.tsx`                         |
| Orientações de Estágio                         | `OrientacoesEstagioRedesign`  | `OrientacoesEstagio`            | `content/paginas-aluno.tsx`                                          |
| Currículo                                      | `CurriculoRedesign`           | `Curriculo`                     | `content/paginas-aluno.tsx`                                          |
| Empresas conveniadas                           | `EmpresasConveniadasRedesign` | `EmpresasConveniadas`           | `content/paginas-empresa.tsx` + `parceiros` de `content/empresa.tsx` |
| Cadastro de Convênio                           | `CadastroConvenioRedesign`    | `CadastroConvenio`              | `content/paginas-empresa.tsx`                                        |
| Por que ser parceiro                           | `PorQueSerParceiroRedesign`   | `PorQueSerParceiro`             | `content/paginas-empresa.tsx`                                        |
| Vagas e Oportunidades (busca/filtro/paginação) | `PainelVagasRedesign`         | `PainelVagas`                   | `content/paginas-conteudo.tsx`                                       |
| Artigo / notícia                               | `ArtigoRedesign`              | `Artigo`                        | `content/paginas-conteudo.tsx`                                       |
| Biblioteca de Conteúdos                        | `BibliotecaConteudosRedesign` | `BibliotecaConteudos`           | `content/paginas-conteudo.tsx`                                       |
| Sobre nós                                      | `SobreNosRedesign`            | `SobreNos`                      | `content/paginas-conteudo.tsx`                                       |

O que é comum às páginas vive em `src/pages/shared.tsx`: `PageShell` (Header +
PlatformCTA + Footer — passe `platformCta={false}` e adicione seu próprio
`EditorialCTA` antes do footer para manter o visual editorial no fechamento),
`Breadcrumb`, `TopicCard`, `ContactLines`, `SiteFooter`, `FormatoEmptyState`
(empty state ilustrado das abas de formato sem conteúdo). Use-o ao compor
páginas novas. O trabalho restante do dev é **plugar rotas + dados reais** (ver
decisões em aberto), não construir telas.

## 5. Checklist de qualidade (definição de pronto por página)

- [ ] Só tokens do preset (cores, spacing, radius) — nenhum valor mágico.
- [ ] Responsivo mobile-first: verificado em **390px** e **1440px** (referências do
      Figma); `max-w-content` (1296px) para o miolo.
- [ ] Estados: hover/active/focus-visible em tudo que é clicável; foco visível via
      anel global do `globals.css`.
- [ ] Acessibilidade: `npm run test:a11y` (axe em todas as páginas, desktop e
      mobile — precisa do Storybook rodando) sem violações sérias; landmarks
      (`header/main/footer/nav`), um `h1` por página, `alt` real nas imagens.
      Texto pequeno: use `charcoal-200+` sobre claro e `ash-400+` sobre escuro.
- [ ] Conteúdo vem de `UnidadeContent`/props — nada de texto de unidade hardcoded
      em componente.
- [ ] Story criada (páginas em `Páginas/…`, blocos em suas categorias).
- [ ] `npm run typecheck` limpo.

## 6. Decisões em aberto (responder antes de codar o site)

| #   | Decisão                                                                   | Dono           | Recomendação                                                                                                                                                                                                                                                                     |
| --- | ------------------------------------------------------------------------- | -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Stack do site final                                                       | Dev + Leonardo | **Next.js (App Router) + Tailwind**, SSG por unidade; a lib entra copy-in com o preset                                                                                                                                                                                           |
| 2   | Fonte das vagas: integração Symplicity (API/feed) ou curadoria manual?    | UCAM/CENPRE    | Começar com curadoria manual (campo `vagas` do content) + link "ver todas" para o Symplicity; integrar depois se houver API                                                                                                                                                      |
| 3   | CMS para notícias/FAQ/unidades ou conteúdo em código?                     | Dev + UCAM     | Fase 1 em código (arquivos `content/`); fase 2 CMS headless usando `UnidadeContent` como schema                                                                                                                                                                                  |
| 4   | Hospedagem e domínio (subdomínio ucam?)                                   | UCAM TI        | Vercel/Netlify para começar; definir domínio cedo por causa de SEO                                                                                                                                                                                                               |
| 5   | Banco de imagens institucional para novas unidades/seções e CTAs          | CENPRE         | Home, as 9 subpáginas, os 6 cards de Blog da Biblioteca de Conteúdos e a foto de encerramento do "Guia do Estágio" já têm fotos reais (ver [IMAGENS.md](./IMAGENS.md)); falta só foto **com fundo completo** (não recorte) dedicada ao CTA de fechamento de Empresas Conveniadas |
| 6   | Formulários (fale conosco, cadastro de convênio): para onde vão os dados? | UCAM/CENPRE    | E-mail via serviço (Resend/Formspree) na fase 1; `ContactForm` já expõe `onSubmit`                                                                                                                                                                                               |

## 7. Storybook publicado (handoff visual canônico)

**Ao vivo: https://cenpre-ui.vercel.app** (projeto `cenpre-ui` na Vercel).

Para atualizar depois de mudar componentes:

```bash
npm run build-storybook
cd storybook-static && npx vercel link --yes --project cenpre-ui && npx vercel deploy --prod --yes
```

(O `link` é necessário de novo porque o build limpa a pasta `storybook-static/`.)

## 8. Repositório

Git inicializado localmente (branch `main`). Para publicar:

```bash
git remote add origin git@github.com:<org>/cenpre-ui.git
git push -u origin main
```

Convenções de contribuição: seguir o padrão dos componentes existentes (CVA para
variants, Radix para interativos, `className` sempre aceito, JSDoc em props não
óbvias). Detalhes no [README.md](./README.md#convenções-padrão-shadcnui).
