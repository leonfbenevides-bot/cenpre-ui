# Auditoria de fidelidade — Figma UCAM SITE × cenpre-ui

**Data:** 16/07/2026 · **Método:** comparação página a página entre a implementação
(Storybook, viewports 1440/390) e as referências exportadas do Figma
(`UCAM/screenshot_*_set.png`, `*_fixed.png`, mobile refs). Evidências pós-correção
em `UCAM/auditoria/*.png` (desktop + mobile das 11 páginas).

> ⚠️ **Pendência de método:** a conferência contra o **Figma ao vivo** (valores
> exatos de spacing/hex via MCP) ainda depende de autenticar o conector Figma
> (`/mcp` → figma). Os itens marcados 🔎 devem ser revisados nessa segunda passada.

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

## Itens verificados sem desvio

- Tokens de cor magenta/ash/charcoal, fontes (Work Sans/Inter), radius e sombras.
- Estrutura das 9 subpáginas (hero, seções, ordem) contra as referências.
- Copy: títulos, subtítulos, passos do convênio, dicas de currículo, FAQ, contatos.
- Responsivo 390px: heros, grades empilhadas, switcher compactado, filtros de vagas.
- Breadcrumbs e navegação padrão em todas as subpáginas.

## Segunda passada (quando o Figma MCP estiver autenticado)

1. Hex exato do verde "vagas abertas" → ajustar token `success` se divergir.
2. Escala de spacing seção a seção (py-14/16 vs valores do Figma).
3. Tamanhos tipográficos dos display headings (32/40/48) nos heros.
4. Ícones exatos das pills da biblioteca e das escolas (Orientações).
