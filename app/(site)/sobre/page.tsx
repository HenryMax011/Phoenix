import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Eye,
  Factory,
  Handshake,
  Rocket,
  Star,
  Users,
} from "lucide-react";
import { aboutContent } from "@/content/about";
import { WaveTimeline } from "@/components/WaveTimeline";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Fundada em 2002, a Phoenix Bor desenvolve peças técnicas em vedação, fixação e termoplásticos industriais.",
};

const pillarIcons = [Rocket, Eye, Star];
const statIcons = [Award, Factory, Handshake, Users];

const IMG_HERO =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1920&q=80";
const IMG_SIDE =
  "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1200&q=80";

export default function SobrePage() {
  return (
    <div className="bg-white">
      {/* Hero industrial */}
      <section className="relative min-h-[58vh] overflow-hidden text-white">
        <Image
          src={IMG_HERO}
          alt="Técnico em ambiente industrial"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/78 to-blue-900/45" />
        <div className="relative mx-auto flex min-h-[58vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6">
          <p className="text-sm text-white/80">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <span className="mx-2 text-white/40">›</span>
            <span className="font-semibold text-blue-300">Sobre nós</span>
          </p>
          <h1 className="mt-5 max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            {aboutContent.heroTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            A Phoenix Bor atua em{" "}
            <strong className="font-semibold text-white">
              vedação industrial
            </strong>
            , fixação e termoplásticos, com{" "}
            <strong className="font-semibold text-white">
              fabricação própria
            </strong>{" "}
            e{" "}
            <strong className="font-semibold text-white">
              suporte técnico
            </strong>
            .
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/80">
            Desde <strong className="text-white">2002</strong>, desenvolvemos
            peças técnicas{" "}
            <strong className="text-white">na medida certa, no prazo certo</strong>
            .
          </p>
        </div>
      </section>

      {/* Texto + imagem */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-20">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-steel-950 sm:text-4xl">
            Phoenix Bor desde 2002
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-steel-600">
            <p>
              Fundada em <strong className="text-steel-900">2002</strong>, a{" "}
              <strong className="text-steel-900">
                Phoenix Bor vedação e fixação industrial
              </strong>{" "}
              vem se destacando no mercado pelo potencial no desenvolvimento de{" "}
              <strong className="text-steel-900">peças técnicas</strong> na linha
              de vedação, fixação e termoplásticos industriais.
            </p>
            <p>
              Com <strong className="text-steel-900">fabricação própria</strong>{" "}
              de retentores, gaxetas, juntas, guarnições, arruelas, diafragmas,
              O-rings, perfis, lençóis e mantas, coxins, antivibratórios e{" "}
              <strong className="text-steel-900">
                peças especiais conforme amostra ou desenho
              </strong>
              .
            </p>
            <p>
              {aboutContent.compoundsLabel}{" "}
              <strong className="text-steel-900">{aboutContent.compounds}</strong>
            </p>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
          <Image
            src={IMG_SIDE}
            alt="Operação industrial com foco em qualidade"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Qualidade */}
      <section className="bg-steel-950 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:flex-row sm:items-center sm:gap-12 sm:px-6 sm:py-14">
          <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-4 border-blue-500 bg-steel-900">
            <Award className="h-12 w-12 text-blue-400" strokeWidth={1.5} />
          </div>
          <div>
            <span className="inline-flex rounded-full border border-blue-500 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-300">
              Qualidade PhoenixBor
            </span>
            <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
              Qualidade sob normas. Confiabilidade para o cliente.
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-steel-300 sm:text-base">
              {aboutContent.pillars[2].text}
            </p>
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <h2 className="text-3xl font-bold tracking-tight text-steel-950 sm:text-4xl">
          Nossa trajetória
        </h2>
        <p className="mt-3 max-w-2xl text-steel-600">
          Marcos que moldaram a Phoenix Bor — da fundação à expansão da linha
          técnica.
        </p>

        <WaveTimeline />
      </section>

      {/* Missão / Visão / Valores */}
      <section className="bg-steel-50">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:grid-cols-3 sm:px-6 sm:py-20">
          {aboutContent.pillars.map((item, index) => {
            const Icon = pillarIcons[index] ?? Star;
            return (
              <div
                key={item.title}
                className="border border-steel-200 bg-white p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-700 text-blue-700">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-lg font-bold uppercase tracking-wide text-blue-700">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-steel-600">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Stats + CTA */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-steel-950 sm:text-4xl">
              Phoenix Bor: referência em vedação e fixação industrial
            </h2>
            <p className="mt-5 text-base leading-relaxed text-steel-600">
              Combinamos{" "}
              <strong className="text-steel-900">experiência técnica</strong>,{" "}
              <strong className="text-steel-900">fabricação própria</strong> e
              atendimento próximo para reduzir paradas e acelerar a manutenção.
            </p>
            <p className="mt-3 text-base leading-relaxed text-steel-600">
              Atendemos os mais diversos setores com qualidade e
              responsabilidade — sempre alinhados às exigências do cliente.
            </p>
            <Link
              href="/contato"
              className="mt-8 inline-flex cursor-pointer bg-blue-700 px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(205,28,24,0.35)] transition-colors hover:bg-blue-600"
            >
              Ver contato
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {aboutContent.stats.map((stat, index) => {
              const Icon = statIcons[index] ?? Star;
              return (
                <div
                  key={stat.label}
                  className="rounded-xl border border-steel-200 bg-white p-5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-3xl font-bold text-steel-950">
                      {stat.value}
                    </p>
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-blue-600 text-blue-700">
                      <Icon className="h-4 w-4" />
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-steel-500">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
