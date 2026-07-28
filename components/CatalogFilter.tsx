"use client";

import { useMemo, useState } from "react";
import { products, productCategories } from "@/content/products";
import { ProductCard } from "@/components/ProductCard";

export function CatalogFilter() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todos");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchCat = category === "Todos" || p.category === category;
      const matchQ =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.materials.some((m) => m.toLowerCase().includes(q));
      return matchCat && matchQ;
    });
  }, [query, category]);

  return (
    <div>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
        <div className="flex-1">
          <label htmlFor="catalog-q" className="mb-1.5 block text-sm font-medium text-steel-800">
            Buscar
          </label>
          <input
            id="catalog-q"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Nome, material ou aplicação..."
            className="w-full border border-steel-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-blue-600"
          />
        </div>
        <div className="sm:w-56">
          <label htmlFor="catalog-cat" className="mb-1.5 block text-sm font-medium text-steel-800">
            Categoria
          </label>
          <select
            id="catalog-cat"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full cursor-pointer border border-steel-300 bg-white px-3 py-2.5 text-sm outline-none transition-colors focus:border-blue-600"
          >
            <option>Todos</option>
            {productCategories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <p className="mt-4 text-sm text-steel-500">
        {filtered.length} produto{filtered.length === 1 ? "" : "s"} encontrado
        {filtered.length === 1 ? "" : "s"}
      </p>

      <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProductCard key={p.slug} product={p} ctaLabel="Compre agora" />
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="mt-8 text-center text-sm text-steel-500">
          Nenhum item encontrado. Tente outro termo ou{" "}
          <a href="/contato" className="font-semibold text-blue-700 underline">
            fale conosco
          </a>
          .
        </p>
      ) : null}
    </div>
  );
}
