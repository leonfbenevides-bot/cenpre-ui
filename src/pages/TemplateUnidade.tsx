import { useMemo, useState } from "react";
import { Header } from "../components/Header";
import { HeroBanner } from "../components/HeroBanner";
import { Carousel } from "../components/Carousel";
import { PlatformCTA } from "../components/PlatformCTA";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { JobCard } from "../components/JobCard";
import { Pagination } from "../components/Pagination";
import { NewsCard } from "../components/NewsCard";
import { AccordionList } from "../components/Accordion";
import { SectionHeading } from "../components/SectionHeading";
import { AudienceSwitcher } from "../components/AudienceSwitcher";
import { TabsPills } from "../components/Tabs";
import { JourneyDiagram } from "../components/JourneyDiagram";
import { UsersIcon, BuildingIcon, SearchIcon, ArrowRightIcon } from "../components/Icons";
import { Filter, Star } from "lucide-react";
import { cn } from "@/lib/cn";
import type { UnidadeContent } from "../content/types";
import {
  Brand, BrandOnDark, nav, rotas, TopicCard, SiteFooter, NumerosSection,
  KeywordTicker, PlataformaFeaturesSection, FaqTwoColumn, CarouselCounter, FormatoPillLabel,
} from "./shared";
import platformIllustration from "../assets/platform-illustration.png";

const VAGAS_POR_PAGINA = 6;
const DEPOIMENTOS_POR_PAGINA = 4;
const NOTICIAS_POR_PAGINA = 3;

function Testimonial({ name, course, titulo, quote, foto, rating = 5 }: UnidadeContent["depoimentos"][number]) {
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded-card border border-ash-300 bg-white p-7 shadow-card sm:w-[280px]">
      <div className="flex items-center gap-3.5">
        {foto ? (
          <img src={foto} alt="" className="h-12 w-12 shrink-0 rounded-pill object-cover" />
        ) : (
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-pill bg-magenta-200 text-sm font-bold text-magenta-700">
            {name.split(" ").map((w) => w[0]).slice(0, 2).join("")}
          </span>
        )}
        <span className="text-sm">
          <span className="block font-semibold text-charcoal-500">{name}</span>
          <span className="text-charcoal-200">{course}</span>
        </span>
      </div>
      <div className="flex flex-col gap-1.5">
        <p className="text-[15px] font-medium leading-snug text-charcoal-500">{titulo}</p>
        <p className="text-[14px] leading-relaxed text-charcoal-200">{quote}</p>
      </div>
      <div className="mt-auto flex items-center gap-1.5">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={15} className={i < rating ? "fill-amber-400 text-amber-400" : "text-ash-300"} aria-hidden />
        ))}
        <span className="text-sm font-medium text-charcoal-500">{rating}/5</span>
      </div>
    </div>
  );
}

/** Painel de vagas com busca, filtro por fonte e paginação numerada (Figma: também presente na home). */
function PainelVagasHome({ vagas, vagasFontes: fontes }: Pick<UnidadeContent, "vagas" | "vagasFontes">) {
  const [busca, setBusca] = useState("");
  const [fonte, setFonte] = useState("Todas");
  const [pagina, setPagina] = useState(1);

  const filtradas = useMemo(() => {
    const q = busca.trim().toLowerCase();
    return vagas.filter(
      (v) =>
        (fonte === "Todas" || v.source === fonte) &&
        (q === "" || [v.title, v.area, v.location].join(" ").toLowerCase().includes(q)),
    );
  }, [vagas, busca, fonte]);

  const totalPaginas = Math.max(1, Math.ceil(filtradas.length / VAGAS_POR_PAGINA));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const visiveis = filtradas.slice((paginaAtual - 1) * VAGAS_POR_PAGINA, paginaAtual * VAGAS_POR_PAGINA);

  return (
    <>
      <div className="flex flex-wrap items-center gap-2">
        <h2 className="flex-1 font-display text-[28px] font-semibold text-charcoal-400 md:text-[36px]">Painel de vagas</h2>
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-2 rounded-chip border border-ash-300 px-5 py-3 text-base font-semibold text-charcoal-400 shadow-button"
        >
          <Filter size={20} aria-hidden /> Filtros
        </button>
        <Input
          aria-label="Busque uma oportunidade"
          placeholder="Busque uma oportunidade"
          leftIcon={<SearchIcon size={18} />}
          value={busca}
          onChange={(e) => { setBusca(e.target.value); setPagina(1); }}
          className="w-full sm:w-[416px]"
        />
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        {["Todas", ...fontes].map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => { setFonte(f); setPagina(1); }}
            aria-pressed={fonte === f}
            className={cn(
              "rounded-pill px-7 py-3 text-base font-semibold transition-colors",
              fonte === f
                ? "bg-magenta-700 text-white"
                : "border border-ash-400 bg-white text-charcoal-400 hover:bg-ash-100",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visiveis.map((v) => <JobCard key={v.title} {...v} actionLabel="Tenho interesse" />)}
      </div>
      {filtradas.length === 0 && (
        <p className="mt-6 text-center text-sm text-charcoal-200">Nenhuma vaga encontrada — tente outra busca ou fonte.</p>
      )}

      {totalPaginas > 1 && (
        <div className="mt-10">
          <Pagination page={paginaAtual} totalPages={totalPaginas} onPageChange={setPagina} />
        </div>
      )}
    </>
  );
}

export interface TemplateUnidadeProps {
  /** Conteúdo da unidade (ver `src/content/types.ts`; exemplo em `src/content/campos.tsx`). */
  content: UnidadeContent;
}

/**
 * Home da unidade (Figma "Home-Aluno"), montada a partir da lib CENPRE UI.
 * O copy global (títulos de seção) vive aqui; tudo que varia por unidade vem
 * de `content` — uma nova unidade é um novo arquivo em `src/content/`.
 */
export function TemplateUnidade({ content }: TemplateUnidadeProps) {
  const {
    hero, numeros, topicos, jornada, guiaEstagio, vagasFontes, vagas, depoimentos, motivos,
    logosParceiros, plataformaFeatures, ticker, sobreNosResumo, noticias, bibliotecaResumo,
    faqIntro, faq, contato,
  } = content;

  const [depoPage, setDepoPage] = useState(1);
  const totalDepoPages = Math.max(1, Math.ceil(depoimentos.length / DEPOIMENTOS_POR_PAGINA));
  const depoVisiveis = depoimentos.slice((depoPage - 1) * DEPOIMENTOS_POR_PAGINA, depoPage * DEPOIMENTOS_POR_PAGINA);

  const [newsPage, setNewsPage] = useState(1);
  const totalNewsPages = Math.max(1, Math.ceil(noticias.length / NOTICIAS_POR_PAGINA));
  const newsVisiveis = noticias.slice((newsPage - 1) * NOTICIAS_POR_PAGINA, newsPage * NOTICIAS_POR_PAGINA);

  return (
    <div className="bg-white">
      <Header brand={Brand} navItems={nav} ctaLabel="Acessar plataforma" />

      <main>
        <section className="mx-auto max-w-container px-6 py-10 md:px-gutter">
          <Carousel
            ariaLabel="Destaques"
            slides={[
              <HeroBanner
                as="h1"
                image={hero.image}
                foreground={hero.foreground}
                foregroundAlt=""
                brand={BrandOnDark}
                title={hero.title}
                description={hero.description}
                actions={
                  <>
                    <Button>Tenho interesse!</Button>
                    <Button variant="ghost" className="border border-white/45 text-white hover:bg-white/10 hover:text-white">
                      Saber mais
                    </Button>
                  </>
                }
              />,
            ]}
          />
        </section>

        {/* O CENPRE em números */}
        <NumerosSection numeros={numeros} />

        {/* Faixa contínua (Figma bg-diagram): seletor de perfil, "Entenda como
            conectamos" e o diagrama de jornada Aluno × Empresa. */}
        <section className="bg-diagram">
          <div className="mx-auto flex max-w-content justify-center px-6 pt-10 md:px-gutter">
            <AudienceSwitcher
              floating={false}
              value="aluno"
              options={[
                { value: "aluno", label: "Sou um aluno ou Egresso", icon: <UsersIcon size={16} />, href: rotas.inicio },
                { value: "empresa", label: "Sou uma empresa", icon: <BuildingIcon size={16} />, href: rotas.homeEmpresa },
              ]}
            />
          </div>

          <div className="mx-auto max-w-content px-6 pb-16 pt-10 md:px-gutter">
            <SectionHeading
              align="center"
              className="mx-auto"
              eyebrow="Entenda o impacto"
              title="Entenda como conectamos talentos e oportunidades"
              subtitle="Uma jornada integrada entre alunos, egressos e empresas por meio de estágios, vagas, convênios e suporte."
            />
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {topicos.map((t) => <TopicCard key={t.title} {...t} />)}
            </div>
            <JourneyDiagram className="mt-10" aluno={jornada.aluno} empresa={jornada.empresa} />
          </div>
        </section>

        {/* Guia completo — Entenda como o estágio funciona */}
        <section className="bg-magenta-100">
          <div className="mx-auto max-w-content px-6 py-24 md:px-gutter">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-magenta-700">{guiaEstagio.eyebrow}</p>
                <h2 className="max-w-xl font-display text-[36px] font-medium leading-tight text-charcoal-400">{guiaEstagio.title}</h2>
              </div>
              <Button variant="secondary" className="border-magenta-700 text-magenta-700 hover:bg-white">
                {guiaEstagio.ctaLabel}
              </Button>
            </div>

            <div className="mt-8">
              <AccordionList
                items={guiaEstagio.itens.map((item) => ({
                  question: item.question,
                  answer: (
                    <>
                      <p>{item.answer}</p>
                      {item.legislacao && (
                        <div className="mt-5 flex flex-col gap-3 rounded-chip border border-ash-300 bg-white p-6 sm:flex-row sm:items-end sm:justify-between">
                          <div>
                            <p className="text-sm font-medium text-charcoal-400">{item.legislacao.label}</p>
                            <p className="mt-1 font-display text-lg font-semibold text-charcoal-500">{item.legislacao.titulo}</p>
                            <p className="mt-1 max-w-xl text-[15px] leading-relaxed text-charcoal-300">{item.legislacao.texto}</p>
                          </div>
                          <a href={rotas.inicio} className="inline-flex shrink-0 items-center gap-1 text-sm font-semibold text-magenta-700 hover:text-magenta-800">
                            {item.legislacao.linkLabel} <ArrowRightIcon size={15} />
                          </a>
                        </div>
                      )}
                    </>
                  ),
                }))}
              />
            </div>

            <div className="relative mt-16 overflow-hidden rounded-card">
              <img src={guiaEstagio.imagem} alt="Equipe do CENPRE orientando estudantes" className="h-[325px] w-full object-cover" />
            </div>
          </div>
        </section>

        {/* Painel de vagas */}
        <section className="bg-white py-28">
          <div className="mx-auto max-w-content px-6 md:px-gutter">
            <PainelVagasHome vagas={vagas} vagasFontes={vagasFontes} />
          </div>
        </section>

        {/* Depoimentos */}
        <section className="flex flex-col items-center gap-20 pt-[72px]">
          <div className="mx-auto flex w-full max-w-content items-center justify-between px-6 md:px-gutter">
            <h2 className="font-display text-[32px] font-semibold text-charcoal-500">Depoimentos dos alunos UCAM</h2>
            <CarouselCounter
              page={depoPage}
              totalPages={totalDepoPages}
              onPrev={() => setDepoPage((p) => Math.max(1, p - 1))}
              onNext={() => setDepoPage((p) => Math.min(totalDepoPages, p + 1))}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-8 px-6">
            {depoVisiveis.map((d) => <Testimonial key={d.name} {...d} />)}
          </div>

          {/* Logos de empresas parceiras */}
          <div className="flex w-full flex-col items-center gap-8">
            <p className="text-2xl font-medium text-charcoal-500">{logosParceiros.titulo}</p>
            <div className="w-full border-t border-ash-300">
              <div className="mx-auto flex max-w-content flex-wrap items-center justify-center gap-x-12 gap-y-6 px-6 py-10 md:px-gutter">
                {logosParceiros.logos.map((l) => (
                  <img
                    key={l.nome}
                    src={l.src}
                    alt={l.nome}
                    title={l.nome}
                    className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Por que escolher o CENPRE */}
        <section className="bg-magenta-800 px-6 py-20 md:px-gutter">
          <div className="mx-auto max-w-content">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-magenta-200">CENPRE CARREIRAS</p>
            <h2 className="mt-3 font-display text-[40px] font-semibold text-white">Por que escolher o CENPRE</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {motivos.map((m) => (
                <div key={m.title} className="flex flex-col gap-4 rounded-[12px] bg-white px-6 py-7">
                  <span className="text-magenta-700" aria-hidden>{m.icon}</span>
                  <p className="font-display text-xl font-medium leading-snug text-charcoal-400">{m.title}</p>
                  <p className="text-[15px] leading-snug text-charcoal-200">{m.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tudo o que você precisa em um só lugar */}
        <PlataformaFeaturesSection content={plataformaFeatures} />

        {/* Faixa de palavras-chave */}
        <KeywordTicker items={ticker} />

        {/* Sobre nós */}
        <section className="bg-white px-6 py-20 md:px-gutter">
          <div className="mx-auto max-w-content">
            <SectionHeading eyebrow={sobreNosResumo.eyebrow} title="Sobre nós" />
            <div className="mt-6 grid gap-x-10 gap-y-5 md:grid-cols-2">
              {sobreNosResumo.paragraphs.map((p) => (
                <p key={p.slice(0, 24)} className="text-[15px] leading-relaxed text-charcoal-400">{p}</p>
              ))}
            </div>
            <a href={sobreNosResumo.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800">
              {sobreNosResumo.ctaLabel} <ArrowRightIcon size={15} />
            </a>
          </div>
        </section>

        {/* Últimas notícias */}
        <section className="mx-auto max-w-content px-6 py-16 md:px-gutter">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Conteúdos" title="Últimas notícias" />
            <CarouselCounter
              page={newsPage}
              totalPages={totalNewsPages}
              onPrev={() => setNewsPage((p) => Math.max(1, p - 1))}
              onNext={() => setNewsPage((p) => Math.min(totalNewsPages, p + 1))}
            />
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {newsVisiveis.map((n) => <NewsCard key={n.title} {...n} />)}
          </div>
        </section>

        {/* Biblioteca de Conteúdos */}
        <section className="mx-auto max-w-content px-6 py-16 md:px-gutter">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow={bibliotecaResumo.eyebrow} title={bibliotecaResumo.title} />
            <a href={rotas.biblioteca} className="inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800">
              {bibliotecaResumo.verMaisLabel} <ArrowRightIcon size={15} />
            </a>
          </div>
          <div className="mt-8">
            <TabsPills
              items={bibliotecaResumo.formatos.map((formato) => {
                const itens = bibliotecaResumo.itens.filter((i) => i.formato === formato);
                return {
                  value: formato,
                  label: <FormatoPillLabel formato={formato} />,
                  content:
                    itens.length > 0 ? (
                      <div className="grid gap-6 pt-6 md:grid-cols-3">
                        {itens.map((i) => <NewsCard key={i.title} {...i} />)}
                      </div>
                    ) : (
                      <p className="pt-6 text-sm text-charcoal-200">Conteúdos de {formato.toLowerCase()} em breve.</p>
                    ),
                };
              })}
            />
          </div>
        </section>

        {/* FAQ */}
        <FaqTwoColumn intro={faqIntro} items={faq} />

        {/* CTA - Plataforma CENPRE */}
        <section className="mx-auto max-w-container px-6 py-10 md:px-gutter">
          <PlatformCTA
            title="Mais do que uma plataforma completa, nós acompanhamos todas as etapas."
            primaryLabel="Acessar a plataforma"
            secondaryLabel="Fale conosco"
            trust="Processos 100% seguros"
            media={
              <img
                src={platformIllustration}
                alt="Plataforma CENPRE — painel de oportunidades"
                className="pointer-events-none absolute right-0 top-6 w-[112%] max-w-none"
              />
            }
          />
        </section>
      </main>

      <SiteFooter contato={contato} />
    </div>
  );
}
