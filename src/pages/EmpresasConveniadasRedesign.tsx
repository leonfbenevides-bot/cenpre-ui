import { useMemo, useState } from "react";
import { Mail, Phone, MessageCircle } from "lucide-react";
import { EditorialPageHero } from "../components/EditorialPageHero";
import { EditorialHeading } from "../components/EditorialHeading";
import { EditorialCTA } from "../components/EditorialCTA";
import { Button } from "../components/Button";
import { Avatar } from "../components/Avatar";
import { Input } from "../components/Input";
import { SearchIcon, ArrowRightIcon } from "../components/Icons";
import type { ConveniadasContent, EmpresaContent } from "../content/types";
import { PageShell, Breadcrumb, rotas } from "./shared";
import ctaImg from "../assets/blog-checklist-convenio.jpg";

export interface EmpresasConveniadasRedesignProps {
  content: ConveniadasContent;
  parceiros: EmpresaContent["parceiros"];
}

/**
 * PILOTO — versão "Editorial Aspiracional" de Empresas Conveniadas. Diferente
 * da versão fiel ao Figma (que mostra "lista em construção"), aqui a lista já
 * é real — reaproveita `EmpresaContent.parceiros`, a mesma fonte usada na
 * seção "Empresas conveniadas" da Home.
 */
export function EmpresasConveniadasRedesign({
  content,
  parceiros,
}: EmpresasConveniadasRedesignProps) {
  const { hero, indicacao } = content;
  const [busca, setBusca] = useState("");

  const filtradas = useMemo(() => {
    const q = busca.trim().toLowerCase();
    if (q === "") return parceiros;
    return parceiros.filter((p) => [p.name, p.category].join(" ").toLowerCase().includes(q));
  }, [parceiros, busca]);

  return (
    <PageShell platformCta={false}>
      <EditorialPageHero
        breadcrumb={<Breadcrumb trail={hero.breadcrumb} />}
        title={hero.title}
        subtitle={hero.subtitle}
      />

      <section className="mx-auto max-w-container px-6 py-24 md:px-gutter">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <EditorialHeading eyebrow="Rede CENPRE" title="Empresas parceiras" size="md" />
          <Input
            aria-label="Buscar empresa conveniada"
            placeholder="Buscar por nome ou área..."
            leftIcon={<SearchIcon size={16} />}
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            className="md:max-w-xs"
          />
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtradas.map((p) => (
            <div
              key={p.name}
              className="flex flex-col gap-4 rounded-2xl border border-ash-300 bg-white p-6 shadow-card transition-all hover:-translate-y-1 hover:border-magenta-200 hover:shadow-card-hover"
            >
              <div className="flex items-center gap-3">
                <Avatar fallback={p.name[0]} size="sm" />
                <span>
                  <span className="block text-sm font-semibold text-charcoal-500">{p.name}</span>
                  <span className="text-xs text-charcoal-200">{p.category}</span>
                </span>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-ash-200 pt-3 text-[13px] font-semibold">
                <span className="text-success-700">
                  {p.vagasAbertas} {p.vagasAbertas === 1 ? "vaga aberta" : "vagas abertas"}
                </span>
                <a
                  href={rotas.vagas}
                  className="inline-flex items-center gap-1 text-magenta-700 hover:text-magenta-800"
                >
                  Ver vagas <ArrowRightIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
        {filtradas.length === 0 && (
          <p className="mt-6 text-sm text-charcoal-200">
            Nenhuma empresa encontrada — tente outro termo.
          </p>
        )}
      </section>

      <section className="bg-charcoal-500 py-24 text-white">
        <div className="mx-auto max-w-container px-6 md:px-gutter">
          <EditorialHeading
            eyebrow="Sua empresa não está na lista?"
            title={indicacao.title}
            subtitle={indicacao.text}
            tone="dark"
            className="max-w-xl"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            <a
              href="mailto:convenio.estagio@ucam-campos.br"
              className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-chip bg-white/10 text-magenta-300">
                <Mail size={18} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">E-mail</span>
                <span className="text-[13px] text-white/60">convenio.estagio@ucam-campos.br</span>
              </span>
            </a>
            <a
              href="tel:+552227262419"
              className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-chip bg-white/10 text-magenta-300">
                <Phone size={18} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">Telefone</span>
                <span className="text-[13px] text-white/60">(22) 2726-2419</span>
              </span>
            </a>
            <a
              href="https://wa.me/5522996180786"
              className="flex flex-col gap-3 rounded-2xl border border-white/15 bg-white/5 p-6 transition-colors hover:border-white/30 hover:bg-white/10"
            >
              <span className="grid h-11 w-11 place-items-center rounded-chip bg-white/10 text-magenta-300">
                <MessageCircle size={18} />
              </span>
              <span>
                <span className="block text-sm font-semibold text-white">WhatsApp</span>
                <span className="text-[13px] text-white/60">(22) 99618-0786</span>
              </span>
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-container px-6 py-20 md:px-gutter">
        <EditorialCTA
          eyebrow="Seja parceiro"
          title="Sua empresa ainda não é conveniada? Vamos mudar isso."
          image={ctaImg}
          imageAlt="Profissional em ambiente de trabalho"
          actions={
            <>
              <Button size="lg">Cadastrar minha empresa</Button>
              <Button
                size="lg"
                variant="ghost"
                className="border border-white/30 text-white hover:bg-white/10 hover:text-white"
              >
                Por que ser parceiro?
              </Button>
            </>
          }
        />
      </section>
    </PageShell>
  );
}
