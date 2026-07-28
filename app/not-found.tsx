import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col items-center justify-center px-4 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
        404
      </p>
      <h1 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-semibold text-steel-950">
        Página não encontrada
      </h1>
      <p className="mt-3 text-sm text-steel-600">
        O endereço pode ter sido alterado ou removido.
      </p>
      <Link
        href="/"
        className="mt-8 cursor-pointer bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500"
      >
        Voltar à home
      </Link>
    </div>
  );
}
