import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { CtaButton } from "@/components/ui";
import { LeadForm } from "@/components/LeadForm";
import { getProductBySlug, products } from "@/content/products";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Produto" };
  return {
    title: product.name,
    description: product.summary,
  };
}

export default async function ProdutoPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="bg-white text-steel-950">
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">
        <Link href="/produtos" className="hover:underline">
          Produtos
        </Link>{" "}
        / {product.category}
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-tight text-steel-950 sm:text-4xl">
        {product.name}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-steel-600">
        {product.description}
      </p>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="border border-steel-200 bg-white p-6">
            <h2 className="font-semibold text-steel-950">Aplicações</h2>
            <ul className="mt-3 space-y-2 text-sm text-steel-700">
              {product.applications.map((a) => (
                <li key={a}>· {a}</li>
              ))}
            </ul>
          </div>
          <div className="border border-steel-200 bg-white p-6">
            <h2 className="font-semibold text-steel-950">Materiais</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {product.materials.map((m) => (
                <span
                  key={m}
                  className="border border-steel-200 bg-steel-50 px-3 py-1 text-xs font-medium text-steel-800"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
          <CtaButton href="/catalogo" variant="ghost">
            Ver catálogo completo
          </CtaButton>
        </div>

        <div className="border border-steel-200 bg-steel-50 p-6">
          <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-steel-950">
            Solicitar orçamento — {product.name}
          </h2>
          <p className="mt-2 text-sm text-steel-600">
            Informe quantidade, dimensões ou condições de operação.
          </p>
          <div className="mt-6">
            <LeadForm defaultProduct={product.name} compact />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
