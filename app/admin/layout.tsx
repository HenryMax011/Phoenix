import Link from "next/link";
import { LayoutDashboard, Users, Package, FileText } from "lucide-react";

const nav = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/leads", label: "Leads", icon: Users },
  { href: "/admin/produtos", label: "Produtos", icon: Package },
  { href: "/admin/posts", label: "Posts", icon: FileText },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-full bg-steel-100 text-steel-950">
      <div className="border-b border-blue-200 bg-blue-50 px-4 py-2 text-center text-xs font-medium text-blue-900">
        Preview do dashboard — não conectado ao banco / sem autenticação
      </div>
      <div className="mx-auto flex max-w-6xl gap-8 px-4 py-8 sm:px-6">
        <aside className="hidden w-52 shrink-0 md:block">
          <Link
            href="/admin"
            className="font-[family-name:var(--font-display)] text-lg font-bold text-steel-950"
          >
            Phoenix<span className="text-blue-600">Bor</span> Admin
          </Link>
          <nav className="mt-6 space-y-1">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex cursor-pointer items-center gap-2 px-3 py-2 text-sm text-steel-700 transition-colors hover:bg-white hover:text-steel-950"
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/"
            className="mt-8 inline-block text-xs font-semibold text-blue-700 hover:underline"
          >
            ← Voltar ao site
          </Link>
        </aside>
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
