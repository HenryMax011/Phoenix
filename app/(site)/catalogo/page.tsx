import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { CatalogFilter } from "@/components/CatalogFilter";

export const metadata: Metadata = {
  title: "Catálogo",
  description:
    "Catálogo filtrável de produtos de vedação industrial PhoenixBor.",
};

export default function CatalogoPage() {
  return (
    <div className="bg-white text-steel-950">
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
      <SectionHeading
        eyebrow="Catálogo"
        title="Busque por nome, material ou categoria"
        description="Filtro client-side sobre o catálogo local. Em breve, integrado ao banco via Supabase/Prisma."
      />
      <div className="mt-10">
        <CatalogFilter />
      </div>
    </div>
    </div>
  );
}
