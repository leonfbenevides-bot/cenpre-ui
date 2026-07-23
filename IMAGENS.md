# Guia de imagens — CENPRE Carreiras

Como produzir e entregar as fotos do site com **qualidade e consistência**. Serve para
imagens geradas por IA (Magnify, Firefly, Midjourney…) ou banco (Freepik, Adobe Stock).

## Fluxo (como entregar pra mim, na prática)

1. Gere/baixe seguindo os padrões abaixo.
2. Salve os **arquivos originais** (alta resolução) em **`Downloads/`** (é de lá que eu
   pego — na prática o fluxo usado até agora não passou por `UCAM/fotos/`; qualquer
   pasta que eu tenha acesso funciona, mas `Downloads/` já é o hábito).
3. Me diga o nome do arquivo (ou mande a mensagem com o arquivo já salvo — eu acho pelo
   nome) e **onde entra** (hero aluno, hero empresa, CTA, colagem…) — se não disser, eu
   pergunto antes de usar, principalmente se for substituir uma foto já em uso.
4. Eu **otimizo** (redimensiono pra ~1800px de largura, comprimo JPEG qualidade ~80) e
   **ligo no site** (content model + página). Originais ficam fora do repo; só as
   versões otimizadas entram em `cenpre-ui/src/assets/` (tipicamente 150–400KB).

> Eu **não gero** as fotos (não tenho gerador de IA aqui) e **não removo fundo por IA**
> localmente. Removo fundo se vier um PNG/WebP já transparente, ou uso o fundo cinza liso
> como está. O resto do pipeline (otimização + integração) é comigo.

## ⚠️ Regra dos conjuntos casados (aprendida na prática, 22/07/2026)

Quando você manda **vários arquivos numa mesma mensagem** (nomes tipo
`magnific_<slug>_<hash>.png`), eu trato como um **conjunto casado**: mesma
pessoa/sessão, fotos em ângulos/momentos diferentes. Isso muda como eu uso:

- Conjuntos casados são **só para colagem** (`ImageMosaic`/composição de 3-4 fotos
  sobrepostas numa única seção) — **nunca** espalhados como fotos avulsas em
  heros/CTAs/seções diferentes. Já errei nisso uma vez (usei fotos do mesmo conjunto
  em 3 slides de hero diferentes) e tive que desfazer.
- Banners de hero e CTA precisam de fotos **avulsas e mutuamente distintas** — de
  fora de qualquer conjunto casado. Se só sobrar conjunto casado disponível, eu aviso
  e pergunto antes de usar uma foto dele fora de contexto de colagem.
- Um par "cena de fundo" + "recorte/cutout" da **mesma pessoa** (ex.:
  `hero-aluno-bg.jpg` + `hero-aluno-model.webp`) conta como **uma imagem só** — uso um
  dos dois formatos em algum lugar da página, nunca os dois em seções diferentes (senão
  é a mesma pessoa aparecendo duas vezes).
- **Estoque atual está apertado**: as fotos avulsas boas já foram todas usadas nos
  heros da Home. Os cutouts que sobraram (`hero-student-1/2.webp`, `hero-aluno-model.webp`,
  `hero-empresa-model.webp`) **não devem mais ser usados em CTA** — o usuário rejeitou o
  visual de recorte ali (ver nota abaixo). Os CTAs das 9 subpáginas e da Home ficam sem
  foto por enquanto; se quiser CTA com foto, mande fotos **com fundo completo** (não
  recorte) dedicadas a esse uso.
- **23/07/2026 — 6 fotos com fundo completo recebidas e usadas**: nos cards de Blog da
  Biblioteca de Conteúdos (página completa + resumo nas duas homes) e, reaproveitando a
  foto de "captar talentos" (equipe colaborando em escritório), na foto de encerramento
  do "Guia do Estágio" — substituiu `guia-estagio-equipe.jpg` (quadro-branco com texto
  ilegível), que foi removida do repo. Esse reaproveitamento é uma exceção pontual à
  regra de "nunca repetir a mesma foto em duas seções": as duas seções nunca aparecem
  juntas na mesma visualização (Guia do Estágio só existe na aba Aluno da Home; a foto
  de "captar talentos" só aparece na Biblioteca quando a aba é Empresa).
- **CTA de Empresas Conveniadas — placeholder genérico (23/07/2026):** o usuário mandou
  uma foto candidata (`magnific_crie-novas-imagens-de-um-_62U4ZsdiJO`) mas ela tinha uma
  tela de fundo com texto legível "TechCorp Inovação" e crachá "Estagiário - TechCorp"
  (nome de empresa fictício visível) — rejeitada por marca/texto falso embutido, mesmo
  problema do quadro-branco. O usuário optou por não usar essa e pediu uma foto "boa e
  genérica" como placeholder temporário; usei a mesma foto de retrato em data center já
  usada num card da Biblioteca (`blog-checklist-convenio.jpg`, `imageFit="cover"`).
  Trocar quando chegar foto dedicada sem texto/marca embutidos.
- **CTAs de fechamento da Home — imagem adicionada (23/07/2026):** os dois CTAs finais
  da Home (aluno e empresa) passaram a usar `EditorialCTA` com `image`/`imageFit="cover"`
  em vez do bloco só-texto. Fotos reaproveitadas das que já existiam no repo
  (`blog-checklist-convenio.jpg` no CTA aluno, `blog-checklist-documentos.jpg` no CTA
  empresa) — seguro porque aluno/empresa são abas mutuamente exclusivas da mesma página
  (nunca renderizam juntas), mesmo raciocínio já usado no Guia do Estágio.

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
coerente já funciona. Lembrete: cena de fundo e recorte da mesma pessoa contam como
**uma imagem só** pra fins de "não repetir" (ver regra dos conjuntos casados acima).

**CTA de fechamento sem foto, por ora (23/07/2026):** `EditorialCTA` aceita um `image`
opcional (cutout à direita), mas o usuário pediu pra **não usar recorte** nos CTAs — nem
os limpos (fundo transparente) nem os com cena de mesa ao fundo. Testamos reaproveitar
os cutouts que sobraram e não ficou bom. Até chegarem fotos **com fundo completo**
dedicadas a CTA (não recorte), os CTAs ficam só com texto + glow magenta (o padrão
default do componente, sem passar `image`).

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
