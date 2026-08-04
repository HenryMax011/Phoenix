"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-xl font-semibold text-steel-950">
        Não foi possível carregar esta página
      </h2>
      <p className="max-w-md text-sm text-steel-600">
        {error.message || "Ocorreu um erro inesperado. Tente novamente."}
      </p>
      <button
        type="button"
        onClick={reset}
        className="cursor-pointer bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-500"
      >
        Tentar de novo
      </button>
    </div>
  );
}
