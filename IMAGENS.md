# Guia de imagens — CENPRE Carreiras

Como produzir e entregar as fotos do site com **qualidade e consistência**. Serve para
imagens geradas por IA (Magnify, Firefly, Midjourney…) ou banco (Freepik, Adobe Stock).

## Fluxo (como entregar pra mim)

1. Gere/baixe seguindo os padrões abaixo.
2. Salve os **arquivos originais** (alta resolução) em **`UCAM/fotos/`**.
3. Me avise o nome do arquivo e **onde entra** (hero aluno, hero empresa, card de notícia…).
4. Eu **otimizo** (redimensiono, comprimo, converto p/ WebP/JPEG) e **ligo no site**
   (content model + página). Originais ficam fora do repo; só as versões otimizadas entram
   em `cenpre-ui/src/assets/`.

> Eu **não gero** as fotos (não tenho gerador de IA aqui) e **não removo fundo por IA**
> localmente. Removo fundo se vier um PNG transparente pronto, ou uso o fundo cinza liso
> como está. O resto do pipeline (otimização + integração) é comigo.

## Tipos de imagem e specs

| Uso                            | Enquadramento                                     | Fundo                                                                 | Proporção                     | Resolução mín. |
| ------------------------------ | ------------------------------------------------- | --------------------------------------------------------------------- | ----------------------------- | -------------- |
| **Hero — fundo (cena)**        | ambiente (lab, campus, escritório, biblioteca)    | real, com profundidade                                                | 16:9                          | 2400px largura |
| **Hero — modelo (recorte)**    | **corpo inteiro**, pessoa à **direita** do quadro | **cinza liso seamless** (p/ recorte fácil) OU **PNG já transparente** | 16:9 (pessoa ocupa ~40% dir.) | 2000px largura |
| **Card de notícia / conteúdo** | cena ou retrato                                   | livre                                                                 | 16:10                         | 1200px largura |
| **Avatar / depoimento**        | rosto, ombros                                     | neutro                                                                | 1:1                           | 400px          |

**Sobre o hero (imagem dupla):** o banner usa **duas camadas** — uma **cena de fundo** +
um **recorte do modelo** sobreposto, pra dar profundidade. O ideal é o par ser da **mesma
pessoa/cena** (como no Figma). Se não der, uma cena de fundo neutra + um modelo recortado
coerente já funciona.

## Receita de geração (prompt base)

Ajuste o sujeito; mantenha o resto para consistência entre as fotos:

> Fotografia realista, luz natural suave, estudante universitário brasileiro
> (18–25 anos), **diverso** (gênero, etnia, tom de pele variados entre as fotos),
> sorriso natural e confiante, roupa casual-arrumada, contexto universitário
> (laboratório / biblioteca / campus / escritório). Alta nitidez, cores naturais,
> sem texto, sem logos, sem marca d'água.

- **Para MODELO de hero (recorte):** acrescente — _"corpo inteiro, pessoa em pé,
  enquadrada à direita, fundo cinza claro liso (seamless, ~#e5e7eb), iluminação de
  estúdio uniforme"_. Assim o recorte sai limpo. Se a ferramenta exportar **PNG com fundo
  transparente**, melhor ainda.
- **Para FUNDO de hero (cena):** acrescente — _"ambiente real com profundidade, área à
  esquerda mais 'limpa' para o texto do banner"_.

## Consistência (o que mantém o site coeso)

- **Mesma temperatura de cor / grade** dentro de um mesmo conjunto (ex.: todos os heros).
- **Diversidade** entre as fotos (não repetir o mesmo perfil de pessoa).
- **Foco no sujeito**, fundo com profundidade mas sem poluição.
- **Nada de texto/logo** embutido na imagem (o texto é do site).
- Entregue na **maior resolução** possível — eu reduzo; aumentar depois perde qualidade.

## Licença

- **IA (Magnify/Firefly/etc.):** ok para uso comercial — confirme os termos do seu plano.
- **Banco:** use licença adequada (Freepik/Adobe Stock pagos; Unsplash/Pexels grátis com
  atribuição quando exigida).
