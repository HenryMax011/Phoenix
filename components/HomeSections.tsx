"use client";

import {
  ChevronLeft,
  ChevronRight,
  Eye,
  Flag,
  Handshake,
  Plus,
  Rocket,
  Settings,
  Star,
} from "lucide-react";
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { aboutContent } from "@/content/about";
import { Reveal } from "@/components/Reveal";
import { StatGlassCard } from "@/components/ui/glass-card";
import { StarCircle } from "@/components/ui/star-button";

const slides = [
  {
    label: "Empresa",
    title: "Phoenix Bor desde 2002",
    text: aboutContent.intro[0],
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Fabricação",
    title: "Peças técnicas sob medida",
    text: aboutContent.intro[1],
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Compostos",
    title: "Materiais de alta performance",
    text: `${aboutContent.compoundsLabel} ${aboutContent.compounds}`,
    image:
      "https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Missão",
    title: aboutContent.pillars[0].title,
    text: aboutContent.pillars[0].text,
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
  },
  {
    label: "Visão",
    title: aboutContent.pillars[1].title,
    text: aboutContent.pillars[1].text,
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?auto=format&fit=crop&w=1400&q=80",
  },
];

const ease = [0.16, 1, 0.3, 1] as const;

/** Split elite — imagem full-bleed + painel branco (estilo luxury) */
export function EliteAboutCarousel() {
  const [index, setIndex] = useState(0);
  const slide = slides[index];
  const total = slides.length;

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 3800);
    return () => window.clearInterval(id);
  }, [total, index]);

  function prev() {
    setIndex((i) => (i - 1 + total) % total);
  }
  function next() {
    setIndex((i) => (i + 1) % total);
  }

  return (
    <section className="overflow-hidden bg-white">
      <div className="grid min-h-[88vh] lg:grid-cols-2">
        {/* Esquerda — imagem edge-to-edge */}
        <div className="relative min-h-[48vh] overflow-hidden bg-steel-950 lg:min-h-[88vh]">
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.image}
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.16 }}
              animate={{ opacity: 1, scale: 1.05 }}
              exit={{ opacity: 0, scale: 1.08 }}
              transition={{ duration: 0.35, ease }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="shine-sweep pointer-events-none absolute inset-0 opacity-30" />

          <motion.p
            className="absolute bottom-8 left-8 right-8 text-sm tracking-[0.06em] text-white/80 sm:bottom-10 sm:left-10 lg:hidden"
            key={`q-m-${index}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
          >
            O que você precisa para manter a linha no prazo certo?
          </motion.p>
        </div>

        {/* Direita — painel limpo */}
        <div className="relative flex flex-col justify-between bg-white px-8 py-12 text-steel-950 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <p className="hidden text-sm tracking-[0.06em] text-steel-500 lg:block">
            O que você precisa para manter a linha no prazo certo?
          </p>

          <div className="my-10 flex flex-1 flex-col justify-center lg:my-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.label}
                initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-blue-600">
                  {slide.label}
                </p>
                <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                  {slide.title}
                </h2>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-steel-600 sm:text-[15px]">
                  {slide.text}
                </p>
                <Link
                  href="/sobre"
                  className="mt-10 inline-flex w-full max-w-xs cursor-pointer bg-black py-4 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-white transition-all duration-200 hover:bg-blue-600 hover:tracking-[0.36em] sm:w-auto sm:px-14"
                >
                  Saiba mais
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-steel-200 pt-6">
            <div className="flex items-center gap-5">
              <button
                type="button"
                aria-label="Anterior"
                onClick={prev}
                className="cursor-pointer text-steel-400 transition-all duration-150 hover:scale-125 hover:text-steel-950"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <motion.p
                key={index}
                className="font-mono text-xs tracking-[0.2em] text-blue-600"
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.18 }}
              >
                {String(index + 1).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </motion.p>
              <button
                type="button"
                aria-label="Próximo"
                onClick={next}
                className="cursor-pointer text-steel-400 transition-all duration-150 hover:scale-125 hover:text-steel-950"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Ir para slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-px cursor-pointer transition-all duration-200 ${
                    i === index
                      ? "w-8 bg-blue-600"
                      : "w-4 bg-steel-300 hover:bg-steel-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Missão / Visão / Valores — fundo preto + linhas verticais atrás do nome */
export function MissionVisionValues() {
  const icons = [Rocket, Eye, Star];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Aba / marca central */}
      <div className="relative z-10 flex min-h-[42vh] flex-col items-center justify-center px-4 pb-10 pt-24 text-center sm:min-h-[48vh] sm:pt-28">
        {/* Linhas verticais vermelhas atrás do nome */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-[min(96vw,900px)] -translate-x-1/2 -translate-y-[52%] opacity-90 sm:h-80"
          aria-hidden
        >
          {Array.from({ length: 28 }).map((_, i) => {
            const center = 13.5;
            const dist = Math.abs(i - center) / center;
            const strength = 1 - dist;
            return (
              <span
                key={i}
                className="absolute top-0 block h-full bg-gradient-to-b from-transparent via-blue-600 to-transparent"
                style={{
                  left: `${(i / 27) * 100}%`,
                  width: strength > 0.7 ? 2.5 : strength > 0.4 ? 2 : 1.5,
                  opacity: 0.35 + strength * 0.65,
                  boxShadow:
                    strength > 0.55
                      ? `0 0 ${10 + strength * 18}px rgba(205,28,24,${0.35 + strength * 0.4})`
                      : undefined,
                }}
              />
            );
          })}
          <motion.span
            className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500 to-transparent shadow-[0_0_28px_rgba(205,28,24,0.85)]"
            animate={{ opacity: [0.55, 1, 0.55], scaleY: [0.75, 1, 0.75] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.p
          className="relative text-[10px] font-medium uppercase tracking-[0.45em] text-white/45 sm:text-xs"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          Institucional
        </motion.p>
        <motion.h2
          className="relative mt-5 font-[family-name:var(--font-display)] text-5xl font-medium uppercase tracking-[0.18em] text-white sm:text-6xl md:text-7xl"
          style={{
            textShadow:
              "0 0 18px rgba(205,28,24,0.55), 0 0 40px rgba(205,28,24,0.35)",
          }}
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease }}
        >
          PhoenixBor
        </motion.h2>
        <motion.p
          className="relative mt-5 text-[10px] font-medium uppercase tracking-[0.38em] text-white/50 sm:text-xs"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          Qualidade · Precisão · Confiabilidade
        </motion.p>
      </div>

      {/* Missão / Visão / Valores */}
      <div className="relative z-10 mx-auto grid max-w-6xl gap-14 overflow-visible px-4 pb-20 sm:grid-cols-3 sm:gap-10 sm:px-6 sm:pb-28">
        {aboutContent.pillars.map((item, i) => {
          const Icon = icons[i] ?? Star;
          return (
            <motion.div
              key={item.title}
              className="flex flex-col items-center overflow-visible text-center"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.35, delay: i * 0.08, ease }}
            >
              <StarCircle
                size={88}
                lightWidth={88}
                duration={2.8}
                lightColor="#CD1C18"
                backgroundColor="#0a0a0a"
                borderWidth={2}
                delay={i * 0.45}
              >
                <Icon className="h-8 w-8 text-white" strokeWidth={1.25} />
              </StarCircle>
              <h3 className="mt-7 text-sm font-bold uppercase tracking-[0.28em]">
                {item.title}
              </h3>
              <span className="mt-4 block h-px w-10 bg-white/70" aria-hidden />
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/80">
                {item.text}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  decimals = 0,
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { stiffness: 90, damping: 22 });
  const [display, setDisplay] = useState(prefix + (0).toFixed(decimals) + suffix);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, motionValue, value]);

  useEffect(() => {
    const unsub = spring.on("change", (v) => {
      setDisplay(prefix + v.toFixed(decimals) + suffix);
    });
    return () => unsub();
  }, [spring, prefix, suffix, decimals]);

  return <span ref={ref}>{display}</span>;
}

/** Números em destaque — caixa 2x2 como a referência */
export function StatsSection() {
  const stats = [
    {
      value: 4.9,
      decimals: 1,
      label: "Avaliação média de nossos clientes",
      Icon: Star,
    },
    {
      value: 24,
      label: "Anos de experiência no mercado",
      Icon: Handshake,
    },
    {
      value: 100,
      prefix: "+",
      label: "Projetos e aplicações de sucesso",
      Icon: Flag,
    },
    {
      value: 12,
      label: "Especialistas à sua disposição",
      Icon: Settings,
    },
  ];

  return (
    <section className="bg-black text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-500">
              PhoenixBor em números
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-medium tracking-tight sm:text-4xl lg:text-[2.6rem] lg:leading-tight">
              Referência em vedação industrial e parceria técnica desde 2002
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/55 sm:text-[15px]">
              Unimos{" "}
              <strong className="font-semibold text-white">
                fabricação própria
              </strong>
              , orientação técnica e atendimento ágil — na medida certa, no prazo
              certo. Atuamos com compostos premium e suporte próximo ao chão de
              fábrica.
            </p>
            <Link
              href="/sobre"
              className="btn-glow mt-8 inline-flex cursor-pointer bg-blue-600 px-8 py-3.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-white shadow-[0_10px_28px_rgba(205,28,24,0.35)] transition-all duration-200 hover:bg-blue-500 hover:tracking-[0.28em]"
            >
              Ver sobre nós
            </Link>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {stats.map((stat, i) => {
            const Icon = stat.Icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.06, ease }}
              >
                <StatGlassCard
                  icon={Icon}
                  label={stat.label}
                  value={
                    <AnimatedStat
                      value={stat.value}
                      prefix={stat.prefix}
                      decimals={stat.decimals ?? 0}
                    />
                  }
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const floatProducts = [
  {
    name: "Retentores",
    image: "/images/products/retentores.png",
    x: "6%",
    y: "8%",
    size: "48%",
    rotate: -7,
    z: 2,
  },
  {
    name: "O-Rings",
    image: "/images/products/o-rings.png",
    x: "46%",
    y: "22%",
    size: "42%",
    rotate: 8,
    z: 3,
  },
  {
    name: "Gaxetas",
    image: "/images/products/gaxetas.png",
    x: "18%",
    y: "48%",
    size: "46%",
    rotate: -4,
    z: 1,
  },
] as const;

const marketExtras = [
  "/images/products/juntas.png",
  "/images/products/gaxetas.png",
  "/images/products/o-rings.png",
  "/images/products/retentores.png",
  "/images/products/juntas.png",
  "/images/products/gaxetas.png",
];

export function MarketsSection() {
  const [active, setActive] = useState(0);
  const list = [
    {
      name: "Óleo e Gás",
      summary:
        "Vedações para alta pressão, temperatura e exposição a hidrocarbonetos.",
    },
    {
      name: "Química e Petroquímica",
      summary:
        "Soluções para fluidos agressivos, ácidos, bases e solventes industriais.",
    },
    {
      name: "Alimentos e Bebidas",
      summary: "Materiais para processos sanitários e contato com alimentos.",
    },
    {
      name: "Siderurgia e Mineração",
      summary: "Vedações robustas para abrasão, poeira e cargas pesadas.",
    },
    {
      name: "Papel e Celulose",
      summary: "Componentes para bombas, digesters e linhas de processo úmido.",
    },
    {
      name: "Automotivo e OEM",
      summary: "Peças sob especificação para montadoras e fabricantes.",
    },
  ];
  const current = list[active];

  const products = floatProducts.map((p, i) => ({
    ...p,
    image:
      i === 1
        ? marketExtras[active]
        : p.image,
    rotate: p.rotate + (active % 2 === 0 ? 0 : active % 3 === 0 ? 2 : -2),
  }));

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.1fr)] lg:items-center lg:gap-4">
        <div className="relative z-10">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.28em] text-white/40">
              Mercados de atuação
            </p>
          </Reveal>
          <div className="mt-6 flex flex-wrap items-end gap-4">
            <AnimatePresence mode="wait">
              <motion.h2
                key={current.name}
                className="font-[family-name:var(--font-display)] text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl"
                initial={{ opacity: 0, y: 20, filter: "blur(10px)", scale: 0.96 }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
                exit={{ opacity: 0, y: -12, filter: "blur(6px)" }}
                transition={{ duration: 0.22, ease }}
              >
                {current.name}
              </motion.h2>
            </AnimatePresence>
            <button
              type="button"
              aria-label="Próximo mercado"
              onClick={() => setActive((i) => (i + 1) % list.length)}
              className="mb-2 inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/30 text-white transition-all duration-150 hover:scale-110 hover:rotate-90 hover:border-blue-500 hover:bg-blue-600"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.p
              key={current.summary}
              className="mt-4 max-w-md text-sm leading-relaxed text-white/50"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.18 }}
            >
              {current.summary}
            </motion.p>
          </AnimatePresence>

          <ul className="mt-10 space-y-3">
            {list.map((item, i) => (
              <li key={item.name}>
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  className={`cursor-pointer text-left text-sm uppercase tracking-[0.18em] transition-all duration-150 ${
                    i === active
                      ? "translate-x-2 text-white"
                      : "text-white/30 hover:translate-x-1 hover:text-white/70"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/produtos"
              className="inline-flex cursor-pointer border border-white/40 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:tracking-[0.28em]"
            >
              Todos os produtos
            </Link>
            <Link
              href="/contato"
              className="btn-glow inline-flex cursor-pointer bg-blue-600 px-7 py-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-white transition-all duration-200 hover:bg-blue-500 hover:tracking-[0.28em]"
            >
              Solicitar orçamento
            </Link>
          </div>
        </div>

        {/* Produtos flutuando no meio */}
        <div className="relative mx-auto flex aspect-square w-full max-w-xl items-center justify-center lg:max-w-none">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-[55%] w-[55%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl" />
          <AnimatePresence mode="wait">
            <motion.div
              key={current.name}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.28, ease }}
            >
              {products.map((p, i) => (
                <motion.div
                  key={`${current.name}-${p.name}-${i}`}
                  className="absolute overflow-hidden bg-white shadow-[0_24px_70px_rgba(0,0,0,0.55)]"
                  style={{
                    left: p.x,
                    top: p.y,
                    width: p.size,
                    aspectRatio: "1 / 1",
                    zIndex: p.z,
                  }}
                  initial={{ opacity: 0, y: 32, rotate: p.rotate - 10, scale: 0.92 }}
                  animate={{
                    opacity: 1,
                    y: [0, -12, 0],
                    rotate: p.rotate,
                    scale: 1,
                  }}
                  transition={{
                    opacity: { duration: 0.3, delay: i * 0.05 },
                    scale: { duration: 0.3, delay: i * 0.05, ease },
                    rotate: { duration: 0.32, delay: i * 0.05, ease },
                    y: {
                      duration: 3 + i * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15,
                    },
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-contain p-2"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-white">
                    {p.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

/** @deprecated use EliteAboutCarousel */
export const YellowAboutSection = EliteAboutCarousel;
/** @deprecated */
export function YellowPeopleSection() {
  return null;
}
