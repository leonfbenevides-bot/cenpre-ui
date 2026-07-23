import { useMemo, useState } from "react";
import { EditorialPageHero } from "../components/EditorialPageHero";
import { EditorialCTA } from "../components/EditorialCTA";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { JobCard } from "../components/JobCard";
import { Pagination } from "../components/Pagination";
import { SearchIcon, MapPinIcon, SendIcon } from "../components/Icons";
import { cn } from "@/lib/cn";
import type { VagasContent } from "../content/types";
import { PageShell, Breadcrumb, HeroPill, rotas } from "./shared";

const POR_PAGINA = 6;

export interface PainelVagasRedesignProps {
  content: VagasContent;
}

/**
 * PILOTO — versão "Editorial Aspiracional" do Painel de Vagas. Mesma lógica
 * de busca/filtro/paginação client-side da versão fiel ao Figma
 * (`PainelVagas.tsx`), só a casca visual muda.
 */
export function PainelVagasRedesign({ content }: PainelVagasRedesignProps) {
  const { hero, fontes, vagas } = content;
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

  const totalPaginas = Math.max(1, Math.ceil(filtradas.length / POR_PAGINA));
  const paginaAtual = Math.min(pagina, totalPaginas);
  const visiveis = filtradas.slice((paginaAtual - 1) * POR_PAGINA, paginaAtual * POR_PAGINA);

  return (
    <PageShell platformCta={false}>
      <EditorialPageHero
        breadcrumb={<Breadcrumb trail={hero.breadcrumb} />}
        title={hero.title}
        subtitle={hero.subtitle}
        pills={
          <>
            <HeroPill icon={<SearchIcon size={15} />}>Busca por área</HeroPill>
            <HeroPill icon={<MapPinIcon size={15} />}>Filtragem por cidade</HeroPill>
            <HeroPill icon={<SendIcon size={15} />}>Indicação direta</HeroPill>
          </>
        }
      />

      <section className="mx-auto max-w-container px-6 py-16 md:px-gutter">
        <h2 className="sr-only">Vagas disponíveis</h2>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Input
            aria-label="Buscar vaga"
            placeholder="Buscar por cargo, área ou cidade..."
            leftIcon={<SearchIcon size={16} />}
            value={busca}
            onChange={(e) => {
              setBusca(e.target.value);
              setPagina(1);
            }}
            className="md:max-w-sm"
          />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por fonte">
            {["Todas", ...fontes].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => {
                  setFonte(f);
                  setPagina(1);
                }}
                aria-pressed={fonte === f}
                className={cn(
                  "rounded-pill px-4 py-1.5 text-[13px] font-semibold transition-colors",
                  fonte === f
                    ? "bg-magenta-700 text-white"
                    : "border border-ash-300 bg-white text-charcoal-300 hover:border-ash-400 hover:bg-ash-100",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-5 text-sm text-charcoal-200" aria-live="polite">
          {filtradas.length} {filtradas.length === 1 ? "vaga disponível" : "vagas disponíveis"}
        </p>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((v) => (
            <JobCard key={v.title} {...v} actionLabel="Tenho interesse" />
          ))}
        </div>
        {filtradas.length === 0 && (
          <p className="mt-6 text-sm text-charcoal-200">
            Nenhuma vaga encontrada — tente outra busca ou fonte.
          </p>
        )}

        {totalPaginas > 1 && (
          <div className="mt-10 flex justify-center">
            <Pagination page={paginaAtual} totalPages={totalPaginas} onPageChange={setPagina} />
          </div>
        )}
      </section>

      <section className="mx-auto max-w-container px-6 py-20 md:px-gutter">
        <EditorialCTA
          eyebrow="Plataforma CENPRE"
          title="Mais do que uma plataforma completa, nós acompanhamos todas as etapas."
          actions={
            <>
              <Button size="lg" asChild>
                <a href={rotas.plataforma}>Acessar a plataforma</a>
              </Button>
              <Button
                size="lg"
                variant="ghost"
                asChild
                className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                <a href="mailto:atendimento.cenpre@ucam-campos.br">Fale conosco</a>
              </Button>
            </>
          }
        />
      </section>
    </PageShell>
  );
}
