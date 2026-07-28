import type { Metadata } from "next";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/content/products";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Catálogo PhoenixBor: O-Rings, gaxetas, retentores, juntas e vedações hidráulicas.",
};

export default function ProdutosPage() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h1 className="text-center text-xl font-bold uppercase tracking-[0.18em] text-steel-950 sm:text-2xl">
          Compre por categoria
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-center text-sm text-steel-600">
          Linha de vedação industrial PhoenixBor — peça padrão ou sob medida.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.slug} product={p} ctaLabel="Compre agora" />
          ))}
        </div>
      </div>
    </div>
  );
}
