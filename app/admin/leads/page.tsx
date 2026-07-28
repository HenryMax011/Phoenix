const mockLeads = [
  {
    name: "Ana Souza",
    company: "Química Norte",
    email: "ana@exemplo.com",
    product: "O-Rings",
    status: "new",
  },
  {
    name: "Carlos Lima",
    company: "Metalúrgica Sul",
    email: "carlos@exemplo.com",
    product: "Gaxetas",
    status: "contacted",
  },
  {
    name: "Beatriz Reis",
    company: "OEM Parts",
    email: "bia@exemplo.com",
    product: "Juntas Planas",
    status: "new",
  },
];

export default function AdminLeadsPage() {
  return (
    <div>
      <h1 className="font-[family-name:var(--font-display)] text-2xl font-semibold">
        Leads
      </h1>
      <p className="mt-1 text-sm text-steel-600">
        Tabela mock — CRUD real virá com Prisma + auth.
      </p>
      <div className="mt-6 overflow-x-auto border border-steel-200 bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-steel-200 bg-steel-50 text-xs uppercase tracking-wide text-steel-500">
            <tr>
              <th className="px-4 py-3 font-semibold">Nome</th>
              <th className="px-4 py-3 font-semibold">Empresa</th>
              <th className="px-4 py-3 font-semibold">E-mail</th>
              <th className="px-4 py-3 font-semibold">Produto</th>
              <th className="px-4 py-3 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {mockLeads.map((lead) => (
              <tr key={lead.email} className="border-b border-steel-100">
                <td className="px-4 py-3 font-medium text-steel-950">
                  {lead.name}
                </td>
                <td className="px-4 py-3 text-steel-600">{lead.company}</td>
                <td className="px-4 py-3 text-steel-600">{lead.email}</td>
                <td className="px-4 py-3 text-steel-600">{lead.product}</td>
                <td className="px-4 py-3">
                  <span className="border border-steel-200 bg-steel-50 px-2 py-0.5 text-xs font-medium">
                    {lead.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
