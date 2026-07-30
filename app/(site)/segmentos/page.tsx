import type { Metadata } from "next";
import Link from "next/link";
import { segments } from "@/content/segments";
import { MarketsSection, MissionVisionValues } from "@/components/HomeSections";
import { SegmentGlassCard } from "@/components/ui/glass-card";

export const metadata: Metadata = {
  title: "Segmentos",
  description:
    "Segmentos industriais atendidos pela PhoenixBor: óleo e gás, química, alimentos, mineração e mais.",
};

export default function SegmentosPage() {
  return (
    <div className="bg-black">
      <MarketsSection />
      <MissionVisionValues />

      <div className="bg-black text-white">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-center text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
            Desafios por setor
          </h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {segments.map((s) => (
              <SegmentGlassCard
                key={s.slug}
                title={s.name}
                summary={s.summary}
                challenges={s.challenges}
              />
            ))}
          </div>

          <div className="relative mt-16 overflow-hidden border border-white/15 bg-white/[0.04] px-8 py-12 backdrop-blur-md">
            <div
              className="pointer-events-none absolute -left-8 -top-10 h-40 w-40 rounded-full bg-white/20 blur-3xl"
              aria-hidden
            />
            <h2 className="relative font-[family-name:var(--font-display)] text-3xl font-medium">
              Não encontrou seu segmento?
            </h2>
            <p className="relative mt-3 max-w-xl text-sm text-white/85">
              Descreva a aplicação — avaliamos material e alternativas
              equivalentes.
            </p>
            <Link
              href="/contato"
              className="relative mt-8 inline-flex cursor-pointer bg-blue-600 px-8 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white transition-colors hover:bg-blue-500"
            >
              Solicitar análise técnica
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
