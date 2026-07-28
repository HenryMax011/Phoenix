"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Product } from "@/content/products";

type ProductCardProps = {
  product: Product;
  ctaLabel?: string;
};

export function ProductCard({
  product,
  ctaLabel = "Solicitar agora",
}: ProductCardProps) {
  return (
    <motion.article
      className="group flex flex-col bg-white"
      whileHover={{ y: -8 }}
      transition={{ duration: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/produtos/${product.slug}`}
        className="relative block aspect-square cursor-pointer overflow-hidden bg-steel-100"
      >
        {product.featured ? (
          <span className="absolute left-3 top-3 z-10 bg-steel-200 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-steel-900">
            Destaque
          </span>
        ) : null}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-200 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-blue-700/0 transition-colors duration-150 group-hover:bg-blue-700/25" />
        <div className="shine-sweep pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-150 group-hover:opacity-100" />
      </Link>

      <div className="flex flex-1 flex-col pt-4">
        <Link href={`/produtos/${product.slug}`} className="cursor-pointer">
          <h3 className="text-center text-sm font-bold uppercase tracking-[0.12em] text-steel-950 transition-colors group-hover:text-blue-700">
            {product.name}
          </h3>
          <p className="mt-1 text-center text-[11px] uppercase tracking-wide text-steel-500">
            {product.category}
          </p>
        </Link>

        <div className="mt-3 flex flex-wrap justify-center gap-1.5">
          {product.materials.slice(0, 4).map((m) => (
            <span
              key={m}
              className="border border-steel-300 px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-steel-700 transition-colors group-hover:border-blue-500 group-hover:text-blue-700"
            >
              {m}
            </span>
          ))}
        </div>

        <Link
          href={`/produtos/${product.slug}`}
          className="btn-glow mt-5 block w-full cursor-pointer bg-black py-3.5 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-white transition-all duration-200 hover:bg-blue-600 hover:tracking-[0.36em]"
        >
          {ctaLabel}
        </Link>
      </div>
    </motion.article>
  );
}
