import { blogPosts } from "@/content/blog";

export default function AdminPostsPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
        Posts
      </h1>
      <p className="mt-1 text-sm text-steel-600">
        Conteúdo do blog (mock de CMS).
      </p>
      <div className="mt-6 overflow-x-auto border border-steel-200 bg-white">
        <table className="w-full min-w-[520px] text-left text-sm">
          <thead className="border-b border-steel-200 bg-steel-50 text-xs uppercase tracking-wide text-steel-500">
            <tr>
              <th className="px-4 py-3 font-semibold">Título</th>
              <th className="px-4 py-3 font-semibold">Categoria</th>
              <th className="px-4 py-3 font-semibold">Data</th>
            </tr>
          </thead>
          <tbody>
            {blogPosts.map((p) => (
              <tr key={p.slug} className="border-b border-steel-100">
                <td className="px-4 py-3 font-medium">{p.title}</td>
                <td className="px-4 py-3 text-steel-600">{p.category}</td>
                <td className="px-4 py-3 text-steel-600">
                  {new Date(p.date).toLocaleDateString("pt-BR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
