# Auditoria de fidelidade — Figma UCAM SITE × cenpre-ui

**Data:** 16/07/2026 · **Método:** comparação página a página entre a implementação
(Storybook, viewports 1440/390) e as referências exportadas do Figma
(`UCAM/screenshot_*_set.png`, `*_fixed.png`, mobile refs). Evidências pós-correção
em `UCAM/auditoria/*.png` (desktop + mobile das 11 páginas).

> ✅ **2ª passada concluída (17/07/2026)** contra o **Figma ao vivo** via MCP:
> variáveis do arquivo extraídas (`get_variable_defs`) e estrutura de frames
> conferida (`get_metadata` + screenshots dos nodes). Resultados na tabela abaixo
> (itens 9–13).

## Achados e status

| #   | Página/Componente                                   | Desvio                                                                                                                                                              | Categoria               | Severidade  | Status                                                                                                                                          |
| --- | --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `PageHero` (todas as subpáginas)                    | Padding lateral aplicado fora do `max-w-content` — hero desalinhado do corpo em viewports > 1440px                                                                  | alinhamento             | **crítico** | ✅ corrigido — padding movido para dentro do container                                                                                          |
| 2   | Home Empresa — FAQ                                  | Seção em `max-w-prose` centralizado; Figma alinha à margem do conteúdo                                                                                              | alinhamento/espaçamento | **crítico** | ✅ corrigido — `max-w-content px-6 md:px-[72px]`                                                                                                |
| 3   | Home Aluno — "O CENPRE em números"                  | Implementado como 4 FeatureCards com ícone; Figma tem faixa com eyebrow + título display + 2 botões + 4 números grandes em magenta                                  | estrutura               | **crítico** | ✅ corrigido — seção refeita conforme Figma; content model `numeros`                                                                            |
| 4   | Home Aluno — seletor de perfil                      | `AudienceSwitcher` (Sou aluno/Sou empresa) existia só na Home Empresa; Figma mostra nas duas homes                                                                  | elemento faltante       | médio       | ✅ corrigido — adicionado com "aluno" ativo                                                                                                     |
| 5   | Home Empresa — "N vagas abertas"                    | Figma usa verde; implementação usava charcoal (não havia token verde)                                                                                               | cor/token               | médio       | ✅ corrigido — token `success` (100/600/700) no preset 🔎 confirmar hex exato no Figma live                                                     |
| 6   | Biblioteca (página e seção da Home Empresa) — pills | Figma tem ícone em cada pill de formato; implementação era só texto                                                                                                 | detalhe visual          | baixo       | ✅ corrigido — `FormatoPillLabel` (ícones Lucide por formato)                                                                                   |
| 7   | Storybook — nome da story                           | Home principal aparecia como "Template - Unidade" (difícil de achar)                                                                                                | organização             | baixo       | ✅ renomeada para "Páginas/Home - Aluno (Unidade)"                                                                                              |
| 8   | NewsCards / capa de artigo                          | Figma usa fotos reais; implementação mostra placeholder cinza                                                                                                       | assets                  | —           | ⏳ **pendência de conteúdo** (não é bug): aguarda banco de imagens do CENPRE (decisão nº 5 do HANDOFF)                                          |
| 9   | Token verde                                         | Hex provisório divergia do oficial                                                                                                                                  | cor/token               | médio       | ✅ corrigido — variável do Figma `brand/secondary/green` = **#3FCB7A** → `success-500`; texto usa `success-600` derivado (contraste AA em 13px) |
| 10  | Orientações de Estágio                              | Faltavam 2 seções do Figma: tabs "Obrigatório ou não obrigatório?" e FAQ agrupada "Estágio não obrigatório: tudo o que você precisa saber" (7 grupos, 28 perguntas) | seção faltante          | **crítico** | ✅ implementadas (copy transcrito do node `3268:48454` e `3414:50891`)                                                                          |
| 11  | Currículo                                           | Faltavam 2 seções: faixa de dica ("aumenta em até 3x…") e FAQ "Perguntas sobre o currículo"                                                                         | seção faltante          | **crítico** | ✅ implementadas (nodes `3230:130258` e `3260:48416`)                                                                                           |
| 12  | Cadastro de Convênio                                | Faltavam 2 seções: "Documentos e dados necessários" (3 cards) e FAQ em duas colunas; havia seção extra de contatos que não existe no Figma                          | seção faltante/extra    | **crítico** | ✅ implementadas + seção extra removida (nodes `3345:49849` e `3275:49529`)                                                                     |
| 13  | Tipografia                                          | Escala oficial do arquivo: Inter Text sm 14/20 · md 16/24 · lg 18/28 · Display md 36/44 (-2) — implementação compatível                                             | tipografia              | —           | ✅ verificado, sem ajuste necessário                                                                                                            |

## 3ª passada (17/07/2026) — foco: heros das homes (Figma ao vivo via MCP)

Revisão dos nós `3593:47454` (hero component), `3393:55795` (Home-Aluno),
`2689:97513`/`3070:31401` (Home-Empresa). **Correção da leitura anterior:** o hero real
(nó `3070:31401`) **é** um `rounded-card` com foto full-bleed + scrim à esquerda — o mesmo
tratamento do `HeroBanner`. O "charcoal chapado + figura recortada" visto no nó `3593:47454`
era exploração de design, **não** o hero final. Logo, o tratamento visual do hero **está fiel**.

| #   | Página/Componente          | Desvio                                                                                                                                                                                                                            | Categoria        | Severidade  | Status                                                                                                                                                                  |
| --- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 14  | Home Empresa — Hero        | Impl usa hero **claro** (`bg-magenta-100/40`, só eyebrow + h1 + 2 botões, sem foto/carousel). Figma usa o **mesmo hero escuro fotográfico** do aluno (foto + scrim, "Baixar manual" magenta + "Acessar" outline, setas + 4 dots). | estrutura        | **crítico** | ✅ corrigido — hero refeito com `HeroBanner`+`Carousel` (foto + scrim, CTA magenta). Copy curada mantida; foto é placeholder (`hero-office.jpg`) até o banco de imagens |
| 15  | Home Aluno — Hero CTA      | Figma: botão primário **magenta preenchido** ("Tenho interesse!"). Impl usava `bg-white text-magenta-900` (branco).                                                                                                               | cor/componente   | médio       | ✅ corrigido — trocado por `<Button>` (variant primary magenta)                                                                                                         |
| 16  | Home Aluno — Hero carousel | `Carousel` recebe **1 slide** → setas e dots não renderizam (regra `count > 1`). Figma tem **4 slides** com controles visíveis.                                                                                                   | estrutura/estado | médio       | 🔲 pendente de conteúdo — popular `hero.slides` (4) ou permitir controles com 1 slide                                                                                   |
| 17  | Hero — dots                | Figma: dots no **canto inferior esquerdo, claros, dentro** do hero (1º mais largo). Impl: centralizados, **abaixo** do card, magenta.                                                                                             | detalhe visual   | baixo       | 🔲 pendente — posicionar dots absolutos (bottom-left, tom claro) quando dentro de hero escuro                                                                           |
| 18  | Hero — setas               | Figma: **quadradas** (rounded) coladas às bordas. Impl: **pílulas** com inset `left-3/right-3`.                                                                                                                                   | detalhe visual   | baixo       | 🔲 pendente — ajuste de shape/posição (menor)                                                                                                                           |

**Verificado FIEL nesta passada:** seção "O CENPRE em números" (eyebrow, título display, botão
magenta-soft "Veja as oportunidades" + secundário, 4 números magenta) e o tratamento do hero
(rounded-card + foto + scrim).

### Proposta para o item 14 (Home Empresa hero)

O `HomeEmpresa.tsx` (linhas ~132–152) deve reusar o mesmo bloco do `TemplateUnidade`:
`Carousel` → `HeroBanner` (`as="h1"`, `image`, `brand={BrandOnDark}`, `title`, `description`,
`actions` = `<Button>Baixar manual</Button>` + `<Button variant="ghost">Acessar</Button>`).
O `empresa.hero` precisa de um `image` (a foto do Figma) e do título "Baixe o manual de
primeiros passos e entenda mais". **É uma mudança de estrutura visível — aguarda seu OK**
(pode ter sido uma escolha proposital de diferenciar o público empresa com hero claro).

## 4ª passada (17/07/2026) — subpáginas (PageHero) via Figma ao vivo

Início da varredura das subpáginas. Nó auditado: `2760:24223` (Sub - Currículo).

| #   | Página/Componente           | Desvio                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Categoria         | Severidade | Status                                                                                                                                                |
| --- | --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 19  | Subpáginas — PageHero pills | Figma tem **Feature Pills** com ícone no hero de 5 subpáginas; impl não passava `pills` ao `PageHero`. Conjuntos extraídos do Figma (`Feature Pills`): Currículo (Upload rápido/Criação do zero/PDF, HTML ou Doc), Orientações (Lei 11.788/2008/Por escola e curso/Documentos por etapa), Cadastro (6 passos simples/Assinatura digital/Até 5 dias úteis), Vagas (Busca por área/Filtragem por cidade/Indicação direta), Parceiro (Sem custo de adesão/Suporte dedicado). | elemento faltante | médio      | ✅ corrigido — `HeroPill` reutilizável em `shared.tsx` + ícones novos (`Upload/Landmark/School/Send/HandHeart/PenLine`); pills passadas nas 5 páginas |
| 20  | Subpáginas — foto no hero   | O Figma mostra **foto à direita** no `PageHero` de subpáginas (confirmado em Currículo). **Nenhuma** subpágina passa `media` — o `PageHero` suporta, mas fica só texto.                                                                                                                                                                                                                                                                                                   | assets            | —          | ⏳ **pendência de conteúdo** — aguarda banco de imagens (mesma origem do item #8); componente já pronto (`media`)                                     |

**Verificado FIEL:** `PageHero` (fundo `magenta-800`, breadcrumb, título display, subtítulo e agora
as pills) bate com o Figma. Estrutura das páginas do aluno (Currículo, Orientações) confere com os
nós do Figma. Falta o pente-fino visual de Conveniadas, Artigo, Biblioteca e Sobre — recomendável
fazer junto com o banco de imagens (para resolver `media` + fidelidade num passe só).

## Seletor de perfil Aluno/Empresa (17/07/2026) — reverte parte do item 4

| #   | Página/Componente         | Desvio                                                                                                                                                                                                                                                                                                               | Categoria    | Severidade | Status                                                                                                                                                                           |
| --- | ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 21  | Homes — seletor de perfil | O item #4 tinha adicionado o `AudienceSwitcher` como **pílula flutuante no rodapé** (`fixed bottom`). O Figma mostra um **controle segmentado inline no meio da página** (logo após "O CENPRE em números", antes dos tópicos), nas duas homes, com o público ativo em **magenta-soft** — não flutuante nem removido. | estrutura/UX | médio      | ✅ corrigido — `AudienceSwitcher` reposicionado inline (`floating={false}`, centralizado) nas duas homes; ativo em magenta-soft (estilo do Figma); rota `homeEmpresa` adicionada |

## Itens verificados sem desvio

- Tokens de cor magenta/ash/charcoal, fontes (Work Sans/Inter), radius e sombras.
- Estrutura das 9 subpáginas (hero, seções, ordem) contra as referências.
- Copy: títulos, subtítulos, passos do convênio, dicas de currículo, FAQ, contatos.
- Responsivo 390px: heros, grades empilhadas, switcher compactado, filtros de vagas.
- Breadcrumbs e navegação padrão em todas as subpáginas.

## Variáveis oficiais extraídas do Figma (referência)

- **Cores:** magenta 100–800 e ash/charcoal batem 1:1 com o preset ✓ ·
  `brand/secondary/green` #3FCB7A · tags de artigo: Pink 700 #C11574 / 50 #FDF2FA ·
  Blue light 700 #026AA2 / 50 #F0F9FF (candidatas a tokens `tag-*` se o dev precisar).
- **Tipografia:** Inter — Text sm 14/20 · md 16/24 · lg 18/28 · Display md 36/44 (-2%).
- **Sombra:** Shadow/xs `0 1 2 rgba(16,24,40,.05)` ≈ `shadow-button` ✓.
