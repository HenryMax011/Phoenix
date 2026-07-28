"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { HeroVideo } from "@/components/HeroVideo";
import { LeadForm } from "@/components/LeadForm";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { StarButton } from "@/components/ui/star-button";
import {
  EliteAboutCarousel,
  MissionVisionValues,
  StatsSection,
} from "@/components/HomeSections";
import { getFeaturedProducts } from "@/content/products";

export default function HomePage() {
  const featured = getFeaturedProducts();
  const router = useRouter();

  return (
    <>
      <section className="relative flex min-h-screen overflow-hidden bg-black text-white">
        <HeroVideo />
        <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center justify-center px-4 pb-28 pt-28 text-center sm:px-6">
          <motion.p
            className="text-[10px] font-medium uppercase tracking-[0.45em] text-white/55 sm:text-xs"
            initial={{ opacity: 0, y: 12, letterSpacing: "0.7em", filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, letterSpacing: "0.45em", filter: "blur(0px)" }}
            transition={{ duration: 0.28, delay: 0.02 }}
          >
            Vedação industrial
          </motion.p>
          <motion.h1
            className="mt-7 font-[family-name:var(--font-display)] text-5xl font-medium uppercase leading-[0.92] tracking-[0.14em] sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 36, scale: 0.9, filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.38, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          >
            PhoenixBor
          </motion.h1>
          <motion.span
            className="mt-5 block h-px w-16 bg-blue-500"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.28, delay: 0.18 }}
            style={{ originX: 0.5 }}
            aria-hidden
          />
          <motion.p
            className="mt-6 max-w-md font-[family-name:var(--font-display)] text-lg font-light tracking-wide text-white/70 sm:text-xl"
            initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.28, delay: 0.2 }}
          >
            Precisão em cada vedação.
          </motion.p>
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 12, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.28, delay: 0.28 }}
          >
            <StarButton
              lightColor="#CD1C18"
              backgroundColor="#0a0a0a"
              lightWidth={140}
              duration={2.4}
              borderWidth={1}
              className="h-12 cursor-pointer rounded-none px-14 text-[11px] font-semibold uppercase tracking-[0.32em]"
              onClick={() => router.push("/produtos")}
            >
              Explorar
            </StarButton>
          </motion.div>
        </div>
        <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-3">
          <span className="text-[9px] uppercase tracking-[0.4em] text-white/45">
            Scroll
          </span>
          <span className="scroll-line h-10 w-px origin-top bg-white/50" />
        </div>
      </section>

      <EliteAboutCarousel />

      <MissionVisionValues />

      <StatsSection />

      <section className="overflow-hidden bg-black text-white">
        <div className="grid min-h-[88vh] lg:grid-cols-2">
          <div className="relative min-h-[46vh] overflow-hidden bg-steel-950 lg:min-h-full">
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1400&q=80"
              alt="Catálogo PhoenixBor"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/20" />
            <div className="absolute bottom-8 left-8 right-8 sm:bottom-12 sm:left-12">
              <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-white/70">
                Catálogo
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-medium text-white sm:text-4xl md:text-5xl">
                Compre por categoria
              </h2>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href="/produtos"
                  className="inline-flex cursor-pointer border border-white/45 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-200 hover:border-blue-500 hover:bg-blue-600"
                >
                  Todos os produtos
                </Link>
                <StarButton
                  lightColor="#FAFAFA"
                  backgroundColor="#CD1C18"
                  lightWidth={120}
                  duration={2.6}
                  borderWidth={1}
                  className="h-11 cursor-pointer rounded-none px-7 text-[10px] font-semibold uppercase tracking-[0.22em]"
                  onClick={() => router.push("/contato")}
                >
                  Solicitar orçamento
                </StarButton>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center bg-white px-6 py-14 text-steel-950 sm:px-10 lg:px-12 lg:py-16">
            <div className="grid gap-8 sm:grid-cols-2">
              {featured.slice(0, 4).map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.05}>
                  <ProductCard product={p} ctaLabel="Compre agora" />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-blue-500">
              Contato
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight sm:text-5xl">
              Fale com a PhoenixBor
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-white/55">
              Envie a aplicação, dimensões ou amostra. Retornamos com orientação
              e proposta.
            </p>
            <ul className="mt-8 space-y-3 text-xs uppercase tracking-[0.16em] text-white/45">
              <li>Peças padrão e sob medida</li>
              <li>Atendimento nacional</li>
              <li>Canal direto via WhatsApp</li>
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-steel-950 via-black to-steel-950 p-6 sm:p-8">
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                aria-hidden
              />
              <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.28em] text-white/40">
                Solicitar orçamento
              </p>
              <LeadForm variant="dark" />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
