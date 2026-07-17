import { useMemo, useState } from "react";
import { PageHero } from "../components/PageHero";
import { Input } from "../components/Input";
import { JobCard } from "../components/JobCard";
import { Pagination } from "../components/Pagination";
import { SearchIcon } from "../components/Icons";
import { cn } from "@/lib/cn";
import type { VagasContent } from "../content/types";
import { PageShell, Breadcrumb } from "./shared";

const POR_PAGINA = 6;

export interface PainelVagasProps {
  content: VagasContent;
}

/**
 * Painel de vagas: hero · busca + filtro por fonte (CENPRE/NUBE/parceiros) ·
 * grade de JobCards com paginação. Filtros client-side — na integração real,
 * a busca passa a consultar a plataforma/API.
 */
export function PainelVagas({ content }: PainelVagasProps) {
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
    <PageShell>
      <PageHero breadcrumb={<Breadcrumb trail={hero.breadcrumb} />} title={hero.title} subtitle={hero.subtitle} />

      <section className="mx-auto max-w-content px-6 py-12 md:px-gutter">
        <h2 className="sr-only">Vagas disponíveis</h2>
        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <Input
            aria-label="Buscar vaga"
            placeholder="Buscar por cargo, área ou cidade..."
            leftIcon={<SearchIcon size={16} />}
            value={busca}
            onChange={(e) => { setBusca(e.target.value); setPagina(1); }}
            className="md:max-w-sm"
          />
          <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por fonte">
            {["Todas", ...fontes].map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => { setFonte(f); setPagina(1); }}
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

        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visiveis.map((v) => <JobCard key={v.title} {...v} actionLabel="Tenho interesse" />)}
        </div>
        {filtradas.length === 0 && (
          <p className="mt-6 text-sm text-charcoal-200">Nenhuma vaga encontrada — tente outra busca ou fonte.</p>
        )}

        {totalPaginas > 1 && (
          <div className="mt-10 flex justify-center">
            <Pagination page={paginaAtual} totalPages={totalPaginas} onPageChange={setPagina} />
          </div>
        )}
      </section>
    </PageShell>
  );
}
