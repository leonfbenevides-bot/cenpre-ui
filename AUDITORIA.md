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

| # | Página/Componente | Desvio | Categoria | Severidade | Status |
|---|---|---|---|---|---|
| 1 | `PageHero` (todas as subpáginas) | Padding lateral aplicado fora do `max-w-content` — hero desalinhado do corpo em viewports > 1440px | alinhamento | **crítico** | ✅ corrigido — padding movido para dentro do container |
| 2 | Home Empresa — FAQ | Seção em `max-w-prose` centralizado; Figma alinha à margem do conteúdo | alinhamento/espaçamento | **crítico** | ✅ corrigido — `max-w-content px-6 md:px-[72px]` |
| 3 | Home Aluno — "O CENPRE em números" | Implementado como 4 FeatureCards com ícone; Figma tem faixa com eyebrow + título display + 2 botões + 4 números grandes em magenta | estrutura | **crítico** | ✅ corrigido — seção refeita conforme Figma; content model `numeros` |
| 4 | Home Aluno — seletor de perfil | `AudienceSwitcher` (Sou aluno/Sou empresa) existia só na Home Empresa; Figma mostra nas duas homes | elemento faltante | médio | ✅ corrigido — adicionado com "aluno" ativo |
| 5 | Home Empresa — "N vagas abertas" | Figma usa verde; implementação usava charcoal (não havia token verde) | cor/token | médio | ✅ corrigido — token `success` (100/600/700) no preset 🔎 confirmar hex exato no Figma live |
| 6 | Biblioteca (página e seção da Home Empresa) — pills | Figma tem ícone em cada pill de formato; implementação era só texto | detalhe visual | baixo | ✅ corrigido — `FormatoPillLabel` (ícones Lucide por formato) |
| 7 | Storybook — nome da story | Home principal aparecia como "Template - Unidade" (difícil de achar) | organização | baixo | ✅ renomeada para "Páginas/Home - Aluno (Unidade)" |
| 8 | NewsCards / capa de artigo | Figma usa fotos reais; implementação mostra placeholder cinza | assets | — | ⏳ **pendência de conteúdo** (não é bug): aguarda banco de imagens do CENPRE (decisão nº 5 do HANDOFF) |
| 9 | Token verde | Hex provisório divergia do oficial | cor/token | médio | ✅ corrigido — variável do Figma `brand/secondary/green` = **#3FCB7A** → `success-500`; texto usa `success-600` derivado (contraste AA em 13px) |
| 10 | Orientações de Estágio | Faltavam 2 seções do Figma: tabs "Obrigatório ou não obrigatório?" e FAQ agrupada "Estágio não obrigatório: tudo o que você precisa saber" (7 grupos, 28 perguntas) | seção faltante | **crítico** | ✅ implementadas (copy transcrito do node `3268:48454` e `3414:50891`) |
| 11 | Currículo | Faltavam 2 seções: faixa de dica ("aumenta em até 3x…") e FAQ "Perguntas sobre o currículo" | seção faltante | **crítico** | ✅ implementadas (nodes `3230:130258` e `3260:48416`) |
| 12 | Cadastro de Convênio | Faltavam 2 seções: "Documentos e dados necessários" (3 cards) e FAQ em duas colunas; havia seção extra de contatos que não existe no Figma | seção faltante/extra | **crítico** | ✅ implementadas + seção extra removida (nodes `3345:49849` e `3275:49529`) |
| 13 | Tipografia | Escala oficial do arquivo: Inter Text sm 14/20 · md 16/24 · lg 18/28 · Display md 36/44 (-2) — implementação compatível | tipografia | — | ✅ verificado, sem ajuste necessário |

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
