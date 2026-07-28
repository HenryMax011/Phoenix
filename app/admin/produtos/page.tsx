import { products } from "@/content/products";

export default function AdminProdutosPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
        Produtos
      </h1>
      <p className="mt-1 text-sm text-steel-600">
        Lista espelhada do conteúdo estático (sem edição).
      </p>
      <div className="mt-6 overflow-x-auto border border-steel-200 bg-white">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="border-b border-steel-200 bg-steel-50 text-xs uppercase tracking-wide text-steel-500">
            <tr>
              <th className="px-4 py-3 font-semibold">Nome</th>
              <th className="px-4 py-3 font-semibold">Categoria</th>
              <th className="px-4 py-3 font-semibold">Slug</th>
              <th className="px-4 py-3 font-semibold">Destaque</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.slug} className="border-b border-steel-100">
                <td className="px-4 py-3 font-medium">{p.name}</td>
                <td className="px-4 py-3 text-steel-600">{p.category}</td>
                <td className="px-4 py-3 text-steel-600">{p.slug}</td>
                <td className="px-4 py-3">{p.featured ? "Sim" : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
