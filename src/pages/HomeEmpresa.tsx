import { useMemo, useState } from "react";
import { Header } from "../components/Header";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Avatar } from "../components/Avatar";
import { Input } from "../components/Input";
import { NewsCard } from "../components/NewsCard";
import { AccordionList } from "../components/Accordion";
import { TabsPills } from "../components/Tabs";
import { SectionHeading } from "../components/SectionHeading";
import { PlatformCTA } from "../components/PlatformCTA";
import { AudienceSwitcher } from "../components/AudienceSwitcher";
import { SearchIcon, ArrowRightIcon, UsersIcon, BuildingIcon } from "../components/Icons";
import { cn } from "@/lib/cn";
import type { EmpresaContent } from "../content/types";
import { Brand, nav, TopicCard, SiteFooter, FormatoPillLabel } from "./shared";
import platformIllustration from "../assets/platform-illustration.png";

function PartnerCard({ name, category, vagasAbertas, href }: EmpresaContent["parceiros"][number]) {
  return (
    <Card padding="sm" className="flex flex-col gap-4">
      <div className="flex items-center gap-3">
        <Avatar fallback={name[0]} size="sm" />
        <span>
          <span className="block text-sm font-semibold text-charcoal-500">{name}</span>
          <span className="text-xs text-charcoal-100">{category}</span>
        </span>
      </div>
      <div className="mt-auto flex items-center justify-between border-t border-ash-200 pt-3 text-[13px] font-semibold">
        <span className="text-success-700">{vagasAbertas} {vagasAbertas === 1 ? "vaga aberta" : "vagas abertas"}</span>
        <a href={href} className="inline-flex items-center gap-1 text-magenta-700 hover:text-magenta-800">
          Ver perfil <ArrowRightIcon size={14} />
        </a>
      </div>
    </Card>
  );
}

/** Busca + filtro por categoria das empresas conveniadas (client-side). */
function Parceiros({ parceiros, categorias }: Pick<EmpresaContent, "parceiros" | "categorias">) {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas");
  const visiveis = useMemo(
    () =>
      parceiros.filter(
        (p) =>
          (categoria === "Todas" || p.category === categoria) &&
          p.name.toLowerCase().includes(busca.trim().toLowerCase()),
      ),
    [parceiros, busca, categoria],
  );
  return (
    <>
      <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center">
        <Input
          aria-label="Buscar empresa parceira"
          placeholder="Buscar empresa parceira..."
          leftIcon={<SearchIcon size={16} />}
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          className="md:max-w-xs"
        />
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
          {["Todas", ...categorias].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategoria(c)}
              aria-pressed={categoria === c}
              className={cn(
                "rounded-pill px-4 py-1.5 text-[13px] font-semibold transition-colors",
                categoria === c
                  ? "bg-magenta-700 text-white"
                  : "border border-ash-300 bg-white text-charcoal-300 hover:border-ash-400 hover:bg-ash-100",
              )}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visiveis.map((p) => <PartnerCard key={p.name} {...p} />)}
      </div>
      {visiveis.length === 0 && (
        <p className="mt-6 text-sm text-charcoal-100">Nenhuma empresa encontrada — tente outra busca ou categoria.</p>
      )}
    </>
  );
}

export interface HomeEmpresaProps {
  /** Conteúdo da jornada Empresa (ver `src/content/types.ts`; exemplo em `src/content/empresa.tsx`). */
  content: EmpresaContent;
}

/**
 * Home do público Empresa, espelhando o Figma "Home - Empresa":
 * hero claro · ofertas · guia do convênio · empresas conveniadas · stats ·
 * sobre nós · notícias · biblioteca de conteúdos · FAQ · PlatformCTA · Footer,
 * com o seletor flutuante Aluno/Empresa.
 */
export function HomeEmpresa({ content }: HomeEmpresaProps) {
  const { hero, ofertas, convenio, parceiros, categorias, stats, sobre, noticias, biblioteca, faq, contato } = content;
  return (
    <div className="bg-white">
      <Header brand={Brand} navItems={nav} ctaLabel="Acessar plataforma" />

      <main>
        {/* Hero Empresa (fundo claro) */}
        <section className="border-b border-ash-200 bg-magenta-100/40">
          <div className="mx-auto max-w-content px-6 py-16 md:px-[72px] md:py-20">
            <p className="text-[13px] font-semibold uppercase tracking-[0.16em] text-magenta-700">Para empresas e organizações</p>
            <h1 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-[1.12] text-charcoal-500 md:text-5xl">
              {hero.title}
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-charcoal-400">{hero.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg">{hero.primaryLabel}</Button>
              <Button size="lg" variant="secondary" className="border-magenta-300 text-magenta-700 hover:bg-magenta-100">
                {hero.secondaryLabel}
              </Button>
            </div>
          </div>
        </section>

        {/* O que oferecemos */}
        <section className="mx-auto max-w-content px-6 py-14 md:px-[72px]">
          <SectionHeading eyebrow="O que oferecemos" title="Tudo que sua empresa precisa em um só lugar" />
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {ofertas.map((o) => <TopicCard key={o.title} {...o} />)}
          </div>
        </section>

        {/* Guia do convênio */}
        <section className="bg-ash-100 py-16">
          <div className="mx-auto max-w-content px-6 md:px-[72px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Guia completo" title="Entenda como funciona o convênio" />
              <Button asChild><a href="#">Quero saber mais</a></Button>
            </div>
            <div className="mt-6">
              <AccordionList
                items={convenio.map((item) => ({
                  question: item.answer ? (
                    item.question
                  ) : (
                    <span className="flex flex-wrap items-baseline gap-2">
                      {item.question}
                      <span className="text-[13px] font-medium text-charcoal-100">· em produção</span>
                    </span>
                  ),
                  answer: item.answer ?? "Conteúdo em produção — em breve nesta seção.",
                }))}
              />
            </div>
          </div>
        </section>

        {/* Empresas conveniadas */}
        <section className="mx-auto max-w-content px-6 py-16 md:px-[72px]">
          <SectionHeading eyebrow="Parceiros CENPRE" title="Empresas conveniadas" />
          <Parceiros parceiros={parceiros} categorias={categorias} />
        </section>

        {/* Stats */}
        <section className="bg-charcoal-500 py-14">
          <div className="mx-auto grid max-w-content gap-10 px-6 text-center sm:grid-cols-2 md:px-[72px] lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl font-semibold text-white">{s.value}</p>
                <p className="mt-1 text-sm text-ash-600">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sobre nós */}
        <section className="mx-auto max-w-content px-6 py-16 md:px-[72px]">
          <SectionHeading eyebrow="Nossa história" title="Sobre nós" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {sobre.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="text-[15px] leading-relaxed text-charcoal-400">{p}</p>
            ))}
          </div>
          <a href={sobre.href} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-magenta-700 hover:text-magenta-800">
            {sobre.ctaLabel} <ArrowRightIcon size={15} />
          </a>
        </section>

        {/* Últimas notícias */}
        <section className="bg-ash-100 py-16">
          <div className="mx-auto max-w-content px-6 md:px-[72px]">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <SectionHeading eyebrow="Conteúdos" title="Últimas notícias" />
              <Button variant="secondary" asChild><a href="#">Ver todos</a></Button>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {noticias.map((n) => <NewsCard key={n.title} {...n} className="bg-transparent" />)}
            </div>
          </div>
        </section>

        {/* Biblioteca de conteúdos */}
        <section className="mx-auto max-w-content px-6 py-16 md:px-[72px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Aprenda com a gente" title="Biblioteca de Conteúdos" />
            <Button variant="secondary" asChild><a href="#">Ver todos</a></Button>
          </div>
          <div className="mt-8">
            <TabsPills
              items={biblioteca.formatos.map((formato) => {
                const itens = biblioteca.itens.filter((i) => i.formato === formato);
                return {
                  value: formato,
                  label: <FormatoPillLabel formato={formato} />,
                  content: itens.length > 0 ? (
                    <div className="grid gap-6 pt-6 md:grid-cols-3">
                      {itens.map((i) => <NewsCard key={i.title} {...i} />)}
                    </div>
                  ) : (
                    <p className="pt-6 text-sm text-charcoal-100">Conteúdos de {formato.toLowerCase()} em breve.</p>
                  ),
                };
              })}
            />
          </div>
        </section>

        {/* FAQ Empresas */}
        <section className="mx-auto max-w-content px-6 py-16 md:px-[72px]">
          <SectionHeading
            className="mb-6"
            title="Perguntas Frequentes de Empresas"
            subtitle="Tire suas dúvidas sobre cadastro, convênio e documentação."
          />
          <AccordionList items={faq} />
        </section>

        {/* CTA - Plataforma CENPRE */}
        <section className="mx-auto max-w-container px-6 py-10 md:px-[72px]">
          <PlatformCTA
            title="Mais do que uma plataforma completa, nós acompanhamos todas as etapas."
            primaryLabel="Acessar a plataforma" secondaryLabel="Fale conosco" trust="Processos 100% seguros"
            media={<img src={platformIllustration} alt="Plataforma CENPRE — painel de oportunidades" className="pointer-events-none absolute right-0 top-6 w-[112%] max-w-none" />}
          />
        </section>
      </main>

      <SiteFooter contato={contato} />

      <AudienceSwitcher
        value="empresa"
        options={[
          { value: "aluno", label: "Sou um aluno ou Egresso", icon: <UsersIcon size={16} />, href: "#" },
          { value: "empresa", label: "Sou uma empresa", icon: <BuildingIcon size={16} />, href: "#" },
        ]}
      />
    </div>
  );
}
