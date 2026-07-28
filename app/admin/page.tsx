export default function AdminDashboardPage() {
  const stats = [
    { label: "Leads (mock)", value: "24" },
    { label: "Novos esta semana", value: "7" },
    { label: "Produtos", value: "6" },
    { label: "Posts", value: "4" },
  ];

  return (
    <div>
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
        Dashboard
      </h1>
      <p className="mt-1 text-sm text-steel-600">
        Métricas estáticas para preview da UI administrativa.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="border border-steel-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-steel-500">
              {s.label}
            </p>
            <p className="mt-2 text-3xl font-semibold text-steel-950">
              {s.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
